import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { AdminPage } from '../admin/admin';
import { ProfissionalPage } from '../profissional/profissional';
import { UsuarioPage } from '../usuario/usuario';
import { UHomePage } from '../u-home/u-home';
import { LoginProvider } from '../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-splash-screen',
  templateUrl: 'splash-screen.html',
})
export class SplashScreenPage {

  id_cadastro: any;
  permissao: any;
  pagina: any;
  tempoSplashScreen = 10000;

  constructor(public navCtrl: NavController,public storage: Storage,private loginProvider: LoginProvider){  }


  ionViewDidLoad(){

    this.loginProvider.getStoragePermissao().then(permissao => {

      console.log(permissao)

      if(permissao == '' || permissao == null){
        console.log("nao tem dados no storage")
        setTimeout(() => {  this.navCtrl.push(HomePage)  }, this.tempoSplashScreen);
      }

      else{
        console.log("tem uns dados no storage")
        console.log(permissao)

        this.loginProvider.getStorageId().then(id => {

          console.log('permissao interna ao ID',permissao)
          console.log('id dentro do get id',id)

            if( permissao == 3){
              console.log("esta na area administrativa")
              setTimeout(() => {  this.navCtrl.push(AdminPage,{'id_cadastro':id,'permissao':permissao})  }, this.tempoSplashScreen);
            }
            else if ( permissao == 2 ){
              console.log("esta na area profissional")
              setTimeout(() => {  this.navCtrl.push(ProfissionalPage,{'id_cadastro':id,'permissao':permissao})  }, this.tempoSplashScreen);
            }
            else if ( permissao == 1){
              console.log("esta na area de usuario pago")
              setTimeout(() => {  this.navCtrl.push(UHomePage,{'id_cadastro':id,'permissao':permissao})  }, this.tempoSplashScreen);
            }
            else if ( permissao == 0){
              console.log("esta na are de usuario free")
              setTimeout(() => {  this.navCtrl.push(UsuarioPage,{'id_cadastro':id,'permissao':permissao})  }, this.tempoSplashScreen);
          }
        }

    );
  }
  
}

);

}

  login(){
    this.navCtrl.push(HomePage);
  }

}

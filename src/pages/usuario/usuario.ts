import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MetodoPage } from '../metodo/metodo';
import { DicasUsuarioFreePage } from '../dicas-usuario-free/dicas-usuario-free';
import { LocalizarProfissionalPage } from '../localizar-profissional/localizar-profissional';
import { SeInicioPage } from '../se-inicio/se-inicio';
import { UPerfilPage } from '../u-perfil/u-perfil';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

 username:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage ) {   }

  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
    console.log("id usuario", this.id_cadastro);
    console.log("permissao", this.permissao);

  }

  metodo(){
    this.navCtrl.push(MetodoPage);
  }

  localizar(){
    this.navCtrl.push(LocalizarProfissionalPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    });
  }

  sedentarismo(){
    this.navCtrl.push(SeInicioPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    });
  }

  dicas(){
    this.navCtrl.push(DicasUsuarioFreePage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    });
  }

  perfil(){
    this.navCtrl.push(UPerfilPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    });
  }

  sair(){
    this.navCtrl.push(HomePage);
    this.storage.remove("id_cadastro")
    this.storage.remove("permissao")

  }
}

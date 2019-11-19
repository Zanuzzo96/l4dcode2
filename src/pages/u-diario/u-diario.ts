import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UHomePage } from '../u-home/u-home';
import { DiarioDiaPage } from '../diario-dia/diario-dia';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-u-diario',
  templateUrl: 'u-diario.html',
})
export class UDiarioPage {

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http: Http,
    public navParams: NavParams,
  ) {  }

  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  ionViewDidLoad() {
    console.log('ionViewDidLoad UDiarioPage');
    console.log("id usuario", this.id_cadastro);
    console.log("permissao", this.permissao);


      let api = 'https://lipolysis.grupoanx.com.br/usuario/diario.php?id=' + this.id_cadastro ;
      this.http.get(api).toPromise()
      .then((res)=>{
        let retorno = res.json();

        if(retorno == "sucesso"){
          this.alertCtrl.create({
            title: 'Ops ..',
            subTitle : "Você já inseriu o seu diario de hoje, só poderá inserir novamente amanhã.",
            buttons : [{
              text: "OK",
              handler: () => {
               this.navCtrl.push(UHomePage,{
                 'id_cadastro':this.id_cadastro,
                 'permissao':this.permissao
               })
              }
            }]
          }).present();
        }

      })
      .catch((res)=>{console.log(res)})


  }

  iniciar(){
    this.navCtrl.push(DiarioDiaPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }

  voltar(){
    this.navCtrl.push(UHomePage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }

}

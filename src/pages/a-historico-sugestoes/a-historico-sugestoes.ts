import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AdminPage } from '../admin/admin';

@IonicPage()
@Component({
  selector: 'page-a-historico-sugestoes',
  templateUrl: 'a-historico-sugestoes.html',
})
export class AHistoricoSugestoesPage {

  sugestoes;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {

    let loading = loadingCtrl.create({
      content : "Carregando sugestões e informações",
    });

    loading.present();

    let api = 'https://lipolysis.grupoanx.com.br/admin/sugestoes.php?todos=1';

    http.get(api).toPromise().then((resp)=>{
      console.log(resp.json());
      this.sugestoes = resp.json();
      loading.dismiss();

    }).catch((resp)=>{
      console.log(resp)
      loading.dismiss();

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AHistoricoSugestoesPage');
  }

  apagar(id){

    let loading = this.loadingCtrl.create({
      content : "Apagando sugestão ou informação",
    });

    loading.present();

    console.log(id);
    let api1 = 'https://lipolysis.grupoanx.com.br/admin/deletesugestao.php?ident=' + id;

    this.http.get(api1).toPromise().then((resp1)=>{

      let retorno = resp1.json();

      if(retorno == "sucesso"){
        loading.dismiss();
        this.alertCtrl.create({
          subTitle : "Sugestão ou informação apagada com sucesso",
          buttons : [{
            text: "OK",
            handler: () => {
               this.navCtrl.push(AdminPage)
             }
          }]
        }).present();
        loading.dismiss();
      }else{
        loading.dismiss();
        this.alertCtrl.create({
          subTitle : "Não conseguimos apagar a sugestão ou informação, tente novamente",
          buttons : [{
            text: "OK",
          }]
        }).present();
        loading.dismiss();
      }



    }).catch((resp1)=>{
      console.log(resp1)
      loading.dismiss();

      this.alertCtrl.create({
        title: 'Ops .. Algo deu errado',
        subTitle : "Não foi possivel conectar com o banco de dados, tente novamente.",
        buttons : [{
          text: "OK",
        }]
      }).present();

    });
  }

}

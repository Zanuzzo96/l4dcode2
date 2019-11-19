import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@IonicPage()
@Component({
  selector: 'page-p-sugestoes',
  templateUrl: 'p-sugestoes.html',
})
export class PSugestoesPage {

  sugestoes;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {

    let loading = this.loadingCtrl.create({
      content : "Carregando sugestões e informações",
    });

    loading.present();

    let api = 'https://lipolysis.grupoanx.com.br/profissional/sugestoes.php';

    http.get(api).toPromise().then((resp)=>{
      console.log(resp.json());
      this.sugestoes = resp.json();
      loading.dismiss();
    }).catch((resp)=>{
      loading.dismiss();
      console.log(resp)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PSugestoesPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

import { AAdicionardicaPage } from '../a-adicionardica/a-adicionardica';
import { AdminPage } from '../admin/admin';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@IonicPage()
@Component({
  selector: 'page-a-dicas',
  templateUrl: 'a-dicas.html',
})
export class ADicasPage {

  dicas: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ADicasPage');

    let loading = this.loadingCtrl.create({
      content : "Carregando últimas dicas postadas",
    });

    loading.present();

    let api = 'https://lipolysis.grupoanx.com.br/admin/consultaeInsereDicas.php?dica=1';
    this.http.get(api).toPromise().then((resp)=>{
      console.log(resp);
      this.dicas = resp.json();
      loading.dismiss();
    }).catch((resp)=>{
      console.log(resp)
      loading.dismiss();
    });
  }

  adicionar(){
    this.navCtrl.push(AAdicionardicaPage)
  }

  excluir(dica){
    console.log(dica);

    let api = 'https://lipolysis.grupoanx.com.br/admin/excluirDica.php?dica=' + dica;

    this.http.get(api).toPromise().then((resp)=>{
      console.log(resp);
      this.navCtrl.push(ADicasPage)


    }).catch((resp)=>{
      console.log(resp)
    });

  }

  voltar(){
    this.navCtrl.push(AdminPage)
  }

}

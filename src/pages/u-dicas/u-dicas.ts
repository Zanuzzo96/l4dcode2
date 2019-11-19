import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DicaProvider } from '../../providers/dica/dica';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@IonicPage()
@Component({
  selector: 'page-u-dicas',
  templateUrl: 'u-dicas.html',
})
export class UDicasPage {

  dicas : any;

  constructor(private dicaProvider : DicaProvider,public loadingCtrl: LoadingController) {  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad UDicasPage');

    let loading = this.loadingCtrl.create({
      content : "Carregando dicas",
    });

    loading.present();

    this.dicaProvider.dicasPremium().then((response) => {

        this.dicas = response.json();
        console.log(response);
        loading.dismiss();

    }).catch((response)=>{

      console.log('erro na requisicao');
      loading.dismiss();

    })
  }

}

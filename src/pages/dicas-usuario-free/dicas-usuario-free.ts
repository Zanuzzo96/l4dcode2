import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DicaProvider } from '../../providers/dica/dica';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@IonicPage()
@Component({
  selector: 'page-dicas-usuario-free',
  templateUrl: 'dicas-usuario-free.html',
})
export class DicasUsuarioFreePage {

public dicas: any;

  constructor(private dicaProvider : DicaProvider,public loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DicasUsuarioFreePage');

    let loading = this.loadingCtrl.create({
      content : "Carregando dicas",
    });

    loading.present();

    this.dicaProvider.dicasFree().then((response) => {

        this.dicas = response.json();
        console.log(response);
        loading.dismiss();

    }).catch((response)=>{

      console.log('erro na requisicao');
      loading.dismiss();

    })
  }

}

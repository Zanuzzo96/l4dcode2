import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';



@IonicPage()
@Component({
  selector: 'page-p-imagens-sessao',
  templateUrl: 'p-imagens-sessao.html',
})
export class PImagensSessaoPage {

  id_cliente = this.navParams.get('cliente');
  id_tratamento = this.navParams.get('tratamento');
  imagenssessao;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public loadingCtrl: LoadingController) {

                console.log(this.id_cliente);
                console.log(this.id_tratamento);


                let loading = this.loadingCtrl.create({
                  content : "Carregando imagens",
                });

                loading.present();

                let api = 'https://lipolysis.grupoanx.com.br/profissional/imagem.php?id_tratamento=' + this.id_tratamento;

                  this.http.get(api).toPromise().then((resp)=>{
                    loading.dismiss();
                    console.log(resp);

                    this.imagenssessao=resp.json();
                  }).catch((resp)=>{
                    loading.dismiss();

                    console.log(resp);
                  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PImagensSessaoPage');
  }

}

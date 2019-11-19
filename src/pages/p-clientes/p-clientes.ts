import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PSessoesPage } from '../p-sessoes/p-sessoes';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@IonicPage()
@Component({
  selector: 'page-p-clientes',
  templateUrl: 'p-clientes.html',
})
export class PClientesPage {

  dadosClientes:any;
  clientes:any;
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public loadingCtrl: LoadingController) {

                let loading = this.loadingCtrl.create({
                  content : "Carregando os clientes",
                });

                loading.present();

                  let api = 'https://lipolysis.grupoanx.com.br/profissional/clientes.php?profissional=' + this.id_cadastro;

                    this.http.get(api).toPromise().then((resp)=>{

                      this.clientes = resp.json();
                      console.log(this.clientes);
                      loading.dismiss();

                    }).catch((resp)=>{

                      console.log(resp);
                      loading.dismiss();

                    });

  }//fim do constructor

  ionViewDidLoad() {
    console.log('ionViewDiddLoad PClientesPage');
    console.log('id cadastro', this.id_cadastro);
    console.log('permissao ', this.permissao);

  }

  sessoes(id,sexo){
    this.navCtrl.push(PSessoesPage,{
      "id":id,
      "sexo":sexo,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    });
  }

}

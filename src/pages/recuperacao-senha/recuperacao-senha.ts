import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConfirmacaoRecuperacaoSenhaPage } from '../confirmacao-recuperacao-senha/confirmacao-recuperacao-senha';

import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { LoginProvider } from '../../providers/login/login';


@IonicPage()
@Component({
  selector: 'page-recuperacao-senha',
  templateUrl: 'recuperacao-senha.html',
})
export class RecuperacaoSenhaPage {

  public cpf : number;
  public nasc : any;

  constructor(public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private loginProvider: LoginProvider) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperacaoSenhaPage');
  }

recuperar() {

    let loading = this.loadingCtrl.create({
      content : "Buscando cadastro para recuperar sua senha",
    });

    console.log(this.cpf);
    console.log(this.nasc);

      loading.present();

        this.loginProvider.recuperarSenha( this.cpf , this.nasc ).then((response) => {

          let retorno = response.json();
          console.log(retorno);
              if( retorno != "erro"){

                loading.dismiss();

                this.navCtrl.push(ConfirmacaoRecuperacaoSenhaPage);

              }if(retorno == "erro"){

                loading.dismiss();

                this.alertCtrl.create({
                  title: 'Ops .. Algo deu errado',
                  subTitle : "Não encontramos o cadastro.",
                  buttons : [{
                    text: "OK",
                  }]
                }).present();

              }

        }).catch((response) => {
          loading.dismiss();
          this.alertCtrl.create({
            title: 'Ops .. Algo deu errado',
            subTitle : "Ocorreu um erro com a comunicação com a API.",
            buttons : [{
              text: "OK",
            }]
          }).present();
        });

  }

}

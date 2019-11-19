import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroProfissionalPage } from '../registro-profissional/registro-profissional';
import { AlertRcNaoCadastradoPage } from '../alert-rc-nao-cadastrado/alert-rc-nao-cadastrado';

import { RcProvider } from  '../../providers/rc/rc';

import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-validacao-registro-nivel-prof-cadastro',
  templateUrl: 'validacao-registro-nivel-prof-cadastro.html',
})
export class ValidacaoRegistroNivelProfCadastroPage {

  public registro : number ;
  public contador : number = 0;

  constructor(public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private rcProvider: RcProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidacaoRegistroNivelProfCadastroPage');
  }

  validar() {

    let loading = this.loadingCtrl.create({
      content : "Validando seu Registro",
    });

    loading.present();

    this.rcProvider.verificarRegistro(this.registro)
        .then((response) => {
          let retorno = response.json();
          let rcRetornado = retorno[0].rc;

            if((retorno != "erro") && (rcRetornado = this.registro)){
              loading.dismiss();
              this.navCtrl.push(RegistroProfissionalPage, {
                rc: this.registro
              });
            }else{
              loading.dismiss();
            this.alertCtrl.create({
                subTitle : "Registro não encontrado",
                buttons : [{
                  text: "OK",
                }]
              }).present();

              this.contador++;

                  if( this.contador == 2 ){
                    this.contador = 0;
                    this.navCtrl.push(AlertRcNaoCadastradoPage)
                  }
            }

        }).catch((response) => {
          console.log(response)
        })

  }

}

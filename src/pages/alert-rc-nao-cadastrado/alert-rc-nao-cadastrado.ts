import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HomePage } from '../home/home';

import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-alert-rc-nao-cadastrado',
  templateUrl: 'alert-rc-nao-cadastrado.html',
})
export class AlertRcNaoCadastradoPage {

  prospecto = {
    "nome" : "",
    "contato" : ""
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertRcNaoCadastradoPage');
  }

  enviarContato() {
    console.log(this.prospecto);
    let api = 'https://lipolysis.grupoanx.com.br/profissional/perfil/prospecto.php';

    let headers: Headers = new Headers();
      headers.append('Content-type','application/json');

      return this.http.post(
        api,
        this.prospecto,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {
            let retorno = res.json();

            if( retorno == "sucesso"){
              this.alertCtrl.create({
                title: 'Sucesso',
                subTitle : "Entraremos em contato o mais breve possivel",
                buttons : [{
                  text: "OK",
                  handler: () => {
                    this.navCtrl.push(HomePage)
                  }
                }]
              }).present();
            }else{
              console.log("aqui tem um erro")

            }

          },
          err => {
            console.log(err.json());
          }
        );
  }

  voltar() {
    this.navCtrl.push(HomePage)
  }

}

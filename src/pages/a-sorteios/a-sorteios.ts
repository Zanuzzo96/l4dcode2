import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@IonicPage()
@Component({
  selector: 'page-a-sorteios',
  templateUrl: 'a-sorteios.html',
})
export class ASorteiosPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ASorteiosPage');
  }

  profissional(){

    let api = 'https://lipolysis.grupoanx.com.br/admin/sorteioProfissional.php?sorteio=true';
    this.http.get(api).toPromise().then((response) => {

      console.log(response);

    }).catch((response)=>{
      console.log(response);

    });

   this.alertCtrl.create({
      subTitle : "Enviamos o Profissional contemplado para o seu email",
      buttons : [{
        text: "OK",
      }]
    }).present();
  }

  usuario(){

    let api = 'https://lipolysis.grupoanx.com.br/admin/sorteioCliente.php?sorteio=true';
    this.http.get(api).toPromise().then((response) => {

      console.log(response);

    }).catch((response)=>{
      console.log(response);

    });

    this.alertCtrl.create({
      subTitle : "Enviamos o Usuário contemplado para o seu email",
      buttons : [{
        text: "OK",
      }]
    }).present();
  }

}

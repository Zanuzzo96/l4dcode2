import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@IonicPage()
@Component({
  selector: 'page-a-relatorios',
  templateUrl: 'a-relatorios.html',
})
export class ARelatoriosPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ARelatoriosPage');
  }

  relatorioCompleto(){
      let api = 'https://lipolysis.grupoanx.com.br/admin/relatorios.php?relatorio=completo';
      this.http.get(api).toPromise().then((response) => {

        console.log(response);

      }).catch((response)=>{
        console.log(response);

      });

      this.alertCtrl.create({
        subTitle : "Enviamos o relatório completo para o seu email",
        buttons : [{
          text: "OK",
        }]
      }).present();
  }

  relatorioCliente(){
      let api = 'https://lipolysis.grupoanx.com.br/admin/relatorios.php?relatorio=cliente';
      this.http.get(api).toPromise().then((response) => {

        console.log(response);

      }).catch((response)=>{
        console.log(response);

      });

      this.alertCtrl.create({
        subTitle : "Enviamos o relatório dos usuários para o seu email",
        buttons : [{
          text: "OK",
        }]
      }).present();
  }

  relatorioProfissional(){
      let api = 'https://lipolysis.grupoanx.com.br/admin/relatorios.php?relatorio=profissional';
      this.http.get(api).toPromise().then((response) => {

        console.log(response);

      }).catch((response)=>{
        console.log(response);
      });

      this.alertCtrl.create({
        subTitle : "Enviamos o relatório dos profissionais para o seu email",
        buttons : [{
          text: "OK",
        }]
      }).present();
  }

}

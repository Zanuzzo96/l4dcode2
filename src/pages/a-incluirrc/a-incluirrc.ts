import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { AProfissionaisPage } from '../a-profissionais/a-profissionais';

@IonicPage()
@Component({
  selector: 'page-a-incluirrc',
  templateUrl: 'a-incluirrc.html',
})
export class AIncluirrcPage {

  rc = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AIncluirrcPage');
  }

  registrar() {
    let loading = this.loadingCtrl.create({
      content : "Cadastrando RC",
    });

    loading.present();

    let numerorc = {
      "rc": this.rc
    }

    let headers: Headers = new Headers();
    headers.append('Content-type','application/json');

      this.http.post(
        'https://lipolysis.grupoanx.com.br/admin/adicionarRc.php',
        numerorc,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {

            let retorno = res.json();
            console.log(retorno);

            if(retorno == "sucesso"){
              this.alertCtrl.create({
                subTitle : "RC inserido com sucesso",
                buttons : [{
                  text: "OK",
                  handler: () => {
                     this.navCtrl.push(AProfissionaisPage)
                   }
                }]
              }).present();
              loading.dismiss();
            }else if(retorno == "duplo"){
              this.alertCtrl.create({
                subTitle : "RC já esta cadastrado no banco",
                buttons : [{
                  text: "OK",
                  handler: () => {
                     this.navCtrl.push(AProfissionaisPage)
                   }
                }]
              }).present();
              loading.dismiss();
            }else{
              this.alertCtrl.create({
                subTitle : "Não conseguimos inserir o RC, tente novamente",
                buttons : [{
                  text: "OK",
                }]
              }).present();
              loading.dismiss();

            }

          },
          err => {

            console.log(err.json());
            loading.dismiss();

          }
        );
  }
}

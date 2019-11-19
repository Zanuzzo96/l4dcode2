import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-p-diario',
  templateUrl: 'p-diario.html',
})
export class PDiarioPage {

  diario;

  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PDiarioPage');

      let api = 'https://lipolysis.grupoanx.com.br/profissional/diario/diario.php?profissional=' + this.id_cadastro;

        this.http.get(api).toPromise().then((resp)=>{

          let resposta = resp.json();

          if(resposta != "erro"){
            this.diario = resp.json();
          }else{
            this.diario;
          }

        }).catch((resp)=>{
          console.log(resp);
        });
  }

  email(id){
    console.log(id);

    let loading = this.loadingCtrl.create({
      content : "Enviando diario por email",
    });

    loading.present();


        let api = 'https://lipolysis.grupoanx.com.br/profissional/diario/diarioporemail.php?diario=' + id;

        this.http.get(api).toPromise().then((resp)=>{

          console.log(resp.json());
          let retorno = resp.json();
          if(retorno == "sucesso"){
              this.alertCtrl.create({
                subTitle : "Diario enviado por email com sucesso",
                buttons : [{
                  text: "OK"
                }]
              }).present();
              loading.dismiss();
            }else if(retorno == "erro"){
              this.alertCtrl.create({
                subTitle : "Não conseguimos enviar o diario por email, tente novamente",
                buttons : [{
                  text: "OK"
                }]
              }).present();
              loading.dismiss();
            }

        }).catch((resp)=>{
            console.log(resp);
            loading.dismiss();

            this.alertCtrl.create({
              subTitle : "Erro no banco de dados, tente novamente",
              buttons : [{
                text: "OK",
              }]
            }).present();
        })

  }

  apagar(id){
    console.log(id)

    let loading = this.loadingCtrl.create({
      content : "Apagando diario",
    });

    loading.present();

        let api = 'https://lipolysis.grupoanx.com.br/profissional/diario/diariodelete.php?&diario=' + id;

        this.http.get(api).toPromise().then((resp)=>{
          let retorno = resp.json();
          console.log(retorno);

            if(retorno == "sucesso"){
              this.alertCtrl.create({
                subTitle : "Diario apagado com sucesso",
                buttons : [{
                  text: "OK"
                }]
              }).present();
              loading.dismiss();
            }else if(retorno == "erro"){
              this.alertCtrl.create({
                subTitle : "Não conseguimos apagar o diario",
                buttons : [{
                  text: "OK"
                }]
              }).present();
              loading.dismiss();
            }
        }).catch((resp)=>{
          console.log(resp);
          this.alertCtrl.create({
            subTitle : "Não conseguimos conectar ao banco, tente novamente",
            buttons : [{
              text: "OK",
            }]
          }).present();
        });

  }

}

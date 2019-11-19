import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ProfissionalPage } from '../profissional/profissional';

@IonicPage()
@Component({
  selector: 'page-p-contatos',
  templateUrl: 'p-contatos.html',
})
export class PContatosPage {

  contato;
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PContatosPage');
    console.log("id usuario", this.id_cadastro);
    console.log("permissao", this.permissao);

      let api = 'https://lipolysis.grupoanx.com.br/profissional/contato/contato.php?profissional=' + this.id_cadastro;

        this.http.get(api).toPromise().then((resp)=>{
          this.contato = resp.json();
          console.log(this.contato)

        }).catch((resp)=>{
          console.log(resp);
        });
  }

  apagar(id){

    let loading = this.loadingCtrl.create({
      content : "Apagando contato",
    });

    loading.present();

      let api = 'https://lipolysis.grupoanx.com.br/profissional/contato/contatodelete.php?id=' + id;

      this.http.get(api).toPromise().then((resp)=>{
        let retorno = resp.json();
        if(retorno == "sucesso"){
            this.alertCtrl.create({
              subTitle : "Contato apagado com sucesso",
              buttons : [{
                text: "OK",
                handler: () => {
                  this.navCtrl.push(PContatosPage,{
                    'id_cadastro':this.id_cadastro,
                    'permissao':this.permissao
                  })
                }
              }]
            }).present();
            loading.dismiss();
          }else{
            this.alertCtrl.create({
              subTitle : "Não conseguimos apagar o contato, tente novamente",
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

      });
  }

  voltar(){
    this.navCtrl.push(ProfissionalPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }

}

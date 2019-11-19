import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AIncluirrcPage } from '../a-incluirrc/a-incluirrc';
import { AdminPage } from '../admin/admin';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@IonicPage()
@Component({
  selector: 'page-a-profissionais',
  templateUrl: 'a-profissionais.html',
})
export class AProfissionaisPage {

  //dados da parte das abas o selecionado
  rc = "ativos";
  cadastros;
  rcs;
  bloqs;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AProfissionaisPage');

    let loading = this.loadingCtrl.create({
      content : "Carregando profissionais",
    });

    loading.present();

// paga os rcs ativos
    let api1 = 'https://lipolysis.grupoanx.com.br/admin/lista.php?lista=1';
    this.http.get(api1).toPromise().then((resp)=>{
      let retornoApi1 = resp.json();
      console.log(retornoApi1);

      if(retornoApi1 == "erro"){
        this.cadastros = "";
      }else{
        this.cadastros = retornoApi1;
      }
    }).catch((resp)=>{
      console.log(resp)
    });

//paga todos os rcs cadastrados
    let api2 = 'https://lipolysis.grupoanx.com.br/admin/lista.php?lista=2';
    this.http.get(api2).toPromise().then((resp)=>{
      let retornoApi2 = resp.json();
      console.log(retornoApi2);

      if(retornoApi2 == "erro"){
        this.rcs = "";
      }else{
        this.rcs = retornoApi2;
      }

    }).catch((resp)=>{
      console.log(resp)
    });

// pega os bloquiados
    let api3 = 'https://lipolysis.grupoanx.com.br/admin/lista.php?lista=3';
    this.http.get(api3).toPromise().then((resp)=>{
      let retornoApi3 = resp.json();
      console.log(retornoApi3);

      if(retornoApi3 == "erro"){
        this.bloqs = "";
      }else{
        this.bloqs = retornoApi3;
      }

    }).catch((resp)=>{
      console.log(resp)
    });

    loading.dismiss();


  }

  adicionarrc(){
    this.navCtrl.push(AIncluirrcPage)
  }

  voltar(){
    this.navCtrl.push(AdminPage)
  }

  bloquear(rc){
    console.log(rc);

    this.alertCtrl.create({
      subTitle : "Tem certeza que deseja bloquear esse RC?",
      buttons : [{
        text: "OK",
        handler: () => {
          let loading = this.loadingCtrl.create({
            content : "Bloqueando profissional",
          });

          loading.present();

          console.log(rc)

          let api = 'https://lipolysis.grupoanx.com.br/admin/profissional.php?bloqueio=' + rc;
          this.http.get(api).toPromise().then((resp)=>{
            console.log(resp.json());
            loading.dismiss();

            this.alertCtrl.create({
              subTitle : "Cliente bloqueado com sucesso",
              buttons : [{
                text: "OK",
                handler: () => {
                   this.navCtrl.push(AProfissionaisPage)
                 }
              }]
            }).present();

          }).catch((resp)=>{
            console.log(resp)
            loading.dismiss();
          });
         }
      },{
        text: "Cancelar",
        role: 'cancel',
      }]
    }).present();
  }

  apagar(rc){
    console.log(rc);

    this.alertCtrl.create({
      subTitle : "Tem certeza que deseja apagar esse RC?",
      buttons : [{
        text: "OK",
        handler: () => {
          let loading = this.loadingCtrl.create({
            content : "Apagando todos os registro com esse RC",
          });

          loading.present();

          let api = 'https://lipolysis.grupoanx.com.br/admin/profissional.php?apagar=' + rc;
          this.http.get(api).toPromise().then((resp)=>{
            loading.dismiss();

            this.alertCtrl.create({
              subTitle : "RC apagado com sucesso",
              buttons : [{
                text: "OK",
                handler: () => {
                   this.navCtrl.push(AProfissionaisPage)
                 }
              }]
            }).present();

          }).catch((resp)=>{
            console.log(resp)
            loading.dismiss();
          });
         }
      },{
        text: "Cancelar",
        role: 'cancel',
      }]
    }).present();
  }

  desbloquear(rc){
    console.log(rc);

    this.alertCtrl.create({
      subTitle : "Tem certeza que deseja desbloquear esse RC?",
      buttons : [{
        text: "OK",
        handler: () => {
          let loading = this.loadingCtrl.create({
            content : "Bloqueando profissional",
          });

          loading.present();

          let api = 'https://lipolysis.grupoanx.com.br/admin/profissional.php?desbloqueio=' + rc;
          this.http.get(api).toPromise().then((resp)=>{
            console.log(resp.json());
            loading.dismiss();

            this.alertCtrl.create({
              subTitle : "RC desbloqueado com sucesso",
              buttons : [{
                text: "OK",
                handler: () => {
                   this.navCtrl.push(AProfissionaisPage)
                 }
              }]
            }).present();


          }).catch((resp)=>{
            console.log(resp)
            loading.dismiss();
          });
         }
      },{
        text: "Cancelar",
        role: 'cancel',
      }]
    }).present();
  }

}

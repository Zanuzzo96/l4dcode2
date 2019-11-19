import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ADicasPage } from '../a-dicas/a-dicas';

@IonicPage()
@Component({
  selector: 'page-a-adicionardica',
  templateUrl: 'a-adicionardica.html',
})
export class AAdicionardicaPage {

  img1:any;
  titulo:any;
  mensagem:any;
  emtratamento:any;
  semtratamento:any;
  profissional:any;
  nivel: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AAdicionardicaPage');
  }

  fileChange(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;
      let file: File = fileList[0];
      console.log(file);
  }

  uploadImg(){
    let loading = this.loadingCtrl.create({
      content : "Inserindo dica",
    });

    loading.present();

    if(this.emtratamento == true && this.semtratamento == true && this.profissional == true){
      this.nivel = 5;
    }else if(this.emtratamento == true && this.semtratamento == true){
      this.nivel = 4;
    }else if(this.profissional == true){
      this.nivel = 3;
    }else if(this.emtratamento == true){
      this.nivel = 2;
    }else if(this.semtratamento == true){
      this.nivel = 1;
    }

    console.log(this.nivel);

    let conteudoDica = {
      "imagem":this.img1,
      "mensagem":this.mensagem,
      "permissao":this.nivel,
      "titulo":this.titulo
    }

    let headers: Headers = new Headers();
    headers.append('Content-type','application/json');

      this.http.post(
        'https://lipolysis.grupoanx.com.br/admin/consultaeInsereDicas.php',
        conteudoDica,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {

            let retorno = res.json();

            if(retorno == "sucesso"){
              this.alertCtrl.create({
                subTitle : "Dica inserida com sucesso",
                buttons : [{
                  text: "OK",
                  handler: () => {
                     this.navCtrl.push(ADicasPage)
                   }
                }]
              }).present();
              loading.dismiss();
            }else{
              this.alertCtrl.create({
                subTitle : "Não conseguimos inserir a dica, tente novamente",
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

            this.alertCtrl.create({
              title: 'Ops .. Algo deu errado',
              subTitle : "Não foi possivel conectar com o banco de dados, tente novamente.",
              buttons : [{
                text: "OK",
              }]
            }).present();

          }
        );
  }
}

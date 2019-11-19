import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AdminPage } from '../admin/admin';
import { AHistoricoSugestoesPage } from '../a-historico-sugestoes/a-historico-sugestoes';

@IonicPage()
@Component({
  selector: 'page-a-sugestoes',
  templateUrl: 'a-sugestoes.html',
})
export class ASugestoesPage {

  img1:any;
  titulo:any;
  mensagem:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ASugestoesPage');
  }

  historicodesugestoes(){
    this.navCtrl.push(AHistoricoSugestoesPage)
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
      content : "Inserindo sugestão ou informação",
    });

    loading.present();

    let sugestao = {
      "imagem":this.img1,
      "mensagem":this.mensagem,
      "titulo":this.titulo
    }
    console.log(sugestao);

    let headers: Headers = new Headers();
    headers.append('Content-type','application/json');

      this.http.post(
        'https://lipolysis.grupoanx.com.br/admin/sugestoes.php',
        sugestao,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {

            let retorno = res.json();

            console.log(res.json())

            if(retorno == "sucesso"){
              this.alertCtrl.create({
                subTitle : "Sugestão ou informação inserida com sucesso",
                buttons : [{
                  text: "OK",
                  handler: () => {
                     this.navCtrl.push(AdminPage)
                   }
                }]
              }).present();
              loading.dismiss();
            }else{
              this.alertCtrl.create({
                subTitle : "Não conseguimos inserir a sugestão ou informação, tente novamente",
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

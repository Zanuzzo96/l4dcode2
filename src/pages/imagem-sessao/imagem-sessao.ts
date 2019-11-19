import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { PImagensSessaoPage } from '../p-imagens-sessao/p-imagens-sessao';
import { PSessoesPage } from '../p-sessoes/p-sessoes';

@IonicPage()
@Component({
  selector: 'page-imagem-sessao',
  templateUrl: 'imagem-sessao.html',
})
export class ImagemSessaoPage {

  img1:any;
  imagem:any;
  cliente = this.navParams.get('id_user');
  id_tratamento = this.navParams.get('id_tratamento');
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
   ) {

     console.log(this.cliente)
     console.log(this.id_tratamento)

      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagemSessaoPage');
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

  historico(){
    this.navCtrl.push(PImagensSessaoPage,{
      "cliente":this.cliente,
      "tratamento": this.id_tratamento
    })
  }

  uploadImg(){
    console.log(this.img1);
    console.log(this.cliente)
    console.log(this.id_tratamento)

    let imagem = {
      "imagem":this.img1,
      "id_user":this.cliente,
      "id_tratamento":this.id_tratamento
    }

    let loading = this.loadingCtrl.create({
      content : "Inserindo imagem",
    });

    loading.present();

    let headers: Headers = new Headers();
    headers.append('Content-type','application/json');

      this.http.post(
        'https://lipolysis.grupoanx.com.br/profissional/formularios/adicionarImagem.php',
        imagem,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {

            let retorno = res.json();

            if( retorno == "sucesso"){
              loading.dismiss();
              this.alertCtrl.create({
                subTitle : "Imagem inserida com sucesso",
                buttons : [{
                  text: "OK",
                  handler: () => {
                     this.navCtrl.push(PSessoesPage,{
                       "id":this.cliente,
                       "tratamento":this.id_tratamento,
                       "sexo":this.sexo,
                       "data":this.data,
                       "hora":this.hora,
                       'id_cadastro': this.navParams.get('id_cadastro'),
                       'permissao': this.navParams.get('permissao')
                     })
                   }
                }]
              }).present();
            }else if ( retorno == "erro"){
              loading.dismiss();

              this.alertCtrl.create({
                title: 'Ops .. Algo deu errado',
                subTitle : "Tivemos um problema para inserir imagem.",
                buttons : [{
                  text: "OK",
                }]
              }).present();
            }
          },
          err => {

            console.log(err.json());
            loading.dismiss();

            this.alertCtrl.create({
              title: 'Ops .. Algo deu errado',
              subTitle : "Não conseguimos conectar com banco de dados.",
              buttons : [{
                text: "OK",
              }]
            }).present();

          }
        );
    }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { UsuarioPage } from '../usuario/usuario';


@IonicPage()
@Component({
  selector: 'page-mensagem',
  templateUrl: 'mensagem.html',
})
export class MensagemPage {

  constructor(public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
  }

  usuario: any;

  idProfissional = this.navParams.get('idProfissional');
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');
  mensagem: any;
  contato: any;
  gostaria: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensagemPage');
    console.log(this.idProfissional)
    console.log(this.id_cadastro)
    console.log(this.permissao)
  }

  enviarMensagem(){

      let email = {
        "user":this.id_cadastro,
        "prof":this.idProfissional,
        "mensagem":this.mensagem,
        "contato":this.contato,
        "gostaria":this.gostaria
      }

      console.log(email);

        let loading = this.loadingCtrl.create({
          content : "procedendo seu Registro",
        });

        loading.present();

        let headers: Headers = new Headers();
        headers.append('Content-type','application/json');

      this.http.post(
        'https://lipolysis.grupoanx.com.br/usuario/mensagem.php',
        email,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {
            console.log(res.json());
            let retorno = res.json();

            loading.dismiss();

            if( retorno == "sucesso"){
              this.alertCtrl.create({
                title: 'Sucesso',
                subTitle : "Mensagem enviada com sucesso, o mais breve possivel entraremos em contato",
                buttons : [{
                  text: "OK",
                  handler: () => {
                    this.navCtrl.push(UsuarioPage,{
                      'id_cadastro':this.id_cadastro,
                      'permissao':this.permissao
                    })
                  }
                }]
              }).present();
            }else if ( retorno == "erro"){
              loading.dismiss();

              this.alertCtrl.create({
                title: 'Ops .. Algo deu errado',
                subTitle : "Não conseguimos enviar sua mensagem, tente novamente.",
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
                  subTitle : "Não foi possivel conectar com o banco de dados, tente novamente.",
                  buttons : [{
                    text: "OK",
                  }]
                }).present();

          }
        );
  }

}

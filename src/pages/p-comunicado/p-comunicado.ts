import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ProfissionalPage } from '../profissional/profissional';


@IonicPage()
@Component({
  selector: 'page-p-comunicado',
  templateUrl: 'p-comunicado.html',
})
export class PComunicadoPage {

  comunicado;
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');
  comunicadosInseridos;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http,) {

    let loading = this.loadingCtrl.create({ content : "Carregando comunicados", })
    loading.present();

    let api1 = 'https://lipolysis.grupoanx.com.br/profissional/inserirSelecionarComunicado.php?id_profissional=' + this.id_cadastro;
      this.http.get(api1).toPromise().then((resp)=>{
        loading.dismiss();
        console.log(resp);
        this.comunicadosInseridos = resp.json()
      }).catch((resp)=>{
        loading.dismiss();
        console.log(resp);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PComunicadoPage');
  }

  inserirComunicado(){

    let dadosComunicado = {
      'id_profissional': this.navParams.get('id_cadastro'),
      'comunicado': this.comunicado
    }

    let loading = this.loadingCtrl.create({content : "Registrando comunicado para seus clientes",});
        loading.present();

        console.log(dadosComunicado);

            let api = 'https://lipolysis.grupoanx.com.br/profissional/inserirSelecionarComunicado.php';
            let headers: Headers = new Headers();
              headers.append('Content-type','application/json');

            this.http.post(api,dadosComunicado,new RequestOptions({ headers: headers })).subscribe(
                  res => {
                    console.log(res.json());

                    let retorno = res.json();

                    if( retorno == "sucesso"){
                      console.log(res.json());
                      loading.dismiss();
                      this.alertCtrl.create({
                        subTitle : "Registrado comunicado para seus clientes com sucesso",
                        buttons : [{
                          text: "OK",
                          handler: () => {
                             this.navCtrl.push(ProfissionalPage,{
                               'id_cadastro':this.id_cadastro,
                               'permissao':this.permissao,
                             })
                           }
                        }]
                      }).present();
                    }else if ( retorno == "erro"){
                      loading.dismiss();

                      this.alertCtrl.create({
                        title: 'Ops .. Algo deu errado',
                        subTitle : "Tivemos um problema para registrar seu comunicado, tente novamente.",
                          buttons : [{
                           text: "OK",
                          }]
                     }).present();
                    }

                  },
                  err => {

                    console.log(err.json());
                    loading.dismiss();

                  }

              );
          }

          excluirComunicado(id){
            console.log(id)

            let loading = this.loadingCtrl.create({content : "Excluindo comunicado",});
                loading.present();


            let api = 'https://lipolysis.grupoanx.com.br/profissional/deletarComunicado.php?id_comunicado=' + id;
              this.http.get(api).toPromise().then((resp)=>{

                let retorno = resp.json();

                if( retorno == "sucesso"){

                  loading.dismiss();
                  this.alertCtrl.create({
                    subTitle : "Comunicado excluido com sucesso",
                    buttons : [{
                      text: "OK",
                      handler: () => {
                         this.navCtrl.push(ProfissionalPage,{
                           'id_cadastro':this.id_cadastro,
                           'permissao':this.permissao,
                         })
                       }
                    }]
                  }).present();
                }else if ( retorno == "erro"){
                  loading.dismiss();

                  this.alertCtrl.create({
                    title: 'Ops .. Algo deu errado',
                    subTitle : "Tivemos um problema para excluir seu comunicado, tente novamente.",
                      buttons : [{
                       text: "OK",
                      }]
                 }).present();
                }
              }).catch((resp)=>{
                loading.dismiss();
                console.log(resp);
              });
          }

}

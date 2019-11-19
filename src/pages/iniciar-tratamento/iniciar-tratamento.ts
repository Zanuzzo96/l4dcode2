import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AgendaPage } from '../agenda/agenda';


@IonicPage()
@Component({
  selector: 'page-iniciar-tratamento',
  templateUrl: 'iniciar-tratamento.html',
})
export class IniciarTratamentoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http,
  ) {  }

  cliente = this.navParams.get('id_user');
  meta: any;
  sessoes: any;
  tratamento: any;
  peso:any;


  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciarTratamentoPage');
    console.log(this.cliente);
  }

  iniciar(){

          let loading = this.loadingCtrl.create({content : "Iniciando tratamento",});
          loading.present();

            let tratamento = {
              "id_cadastro": this.cliente,
              "id_profissional": this.navParams.get('id_cadastro'),
              "tratamento": this.tratamento,
              "meta": this.meta,
              "sessoes": this.sessoes,
              "peso": this.peso
            }

            console.log(tratamento);

          let api = 'https://lipolysis.grupoanx.com.br/profissional/formularios/iniciarTratamento.php';
          let headers: Headers = new Headers();
            headers.append('Content-type','application/json');

            return this.http.post(
              api,
              tratamento,
              new RequestOptions({ headers: headers })
            ).subscribe(
                res => {
                  loading.dismiss();
                  console.log(res.json());
                  let dadosTratamento = res.json();

                  let numeroTratamento = dadosTratamento[0].id_tratamento;

                    if(numeroTratamento){
                      this.alertCtrl.create({
                        title: "Sucesso",
                        subTitle : "Tratamento iniciado com sucesso, agende a primeira sessão para concluir",
                        buttons : [{
                          text: "OK",
                          handler: () => {
                             this.navCtrl.push(AgendaPage,{
                               "id":this.cliente,
                               "tratamento":numeroTratamento,
                               'id_cadastro': this.navParams.get('id_cadastro'),
                               'permissao': this.navParams.get('permissao')
                             })
                           }
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
}

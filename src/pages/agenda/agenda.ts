import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ProfissionalPage } from '../profissional/profissional';


@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  dia:any;

  cliente = this.navParams.get('id');
  id_tratamento = this.navParams.get('tratamento');
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
    console.log('ionViewDidLoad AgendaPage');
  }

  verAgenda(data){
    console.log(data)

    let loading = this.loadingCtrl.create({
      content : "Carregando agenda",
    });
    loading.present();

      let api = 'https://lipolysis.grupoanx.com.br/profissional/formularios/agendarSessao.php?profissional=' + this.id_cadastro + '&data=' + data;
      console.log(api);

        this.http.get(api).toPromise().then((resp)=>{
          this.dia = resp.json();
          loading.dismiss();
        }).catch((resp)=>{
          console.log(resp);
          loading.dismiss();
        });

  }

  agendar(data,hora){

      let agendamento = {
        "data":data,
        "hora":hora,
        "cliente":this.cliente,
        "tratamento":this.id_tratamento,
        "profissional":this.id_cadastro
      }

      let loading = this.loadingCtrl.create({content : "Fazendo agendamento"});
      loading.present();

      let headers: Headers = new Headers();
      headers.append('Content-type','application/json');

      this.http.post(
        'https://lipolysis.grupoanx.com.br/profissional/formularios/agendarSessao.php',
        agendamento,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {
            console.log(res.json());
            let retorno = res.json();
            loading.dismiss();

            if( retorno == "sucesso"){
              this.alertCtrl.create({
                title: 'Sucesso',
                subTitle : "Sessão agendada com sucesso",
                buttons : [{
                  text: "OK",
                  handler: () => {
                    this.navCtrl.push(ProfissionalPage,{
                      'id_cadastro': this.navParams.get('id_cadastro'),
                      'permissao': this.navParams.get('permissao')
                    })
                  }
                }]
              }).present();
            }else if ( retorno == "erro"){
              this.alertCtrl.create({
                title: 'Ops .. Algo deu errado',
                subTitle : "Você já está na ultima sessão do seu tratamento.",
                buttons : [{
                  text: "OK",
                  handler: () => {
                    this.navCtrl.push(ProfissionalPage,{
                      'id_cadastro': this.navParams.get('id_cadastro'),
                      'permissao': this.navParams.get('permissao')
                    })
                  }
                }]
              }).present();
            }else if ( retorno == "erro1"){
              this.alertCtrl.create({
                title: 'Ops .. Algo deu errado',
                subTitle : "Erro ao inserir sessão na sua agenda, tente novamente.",
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

}

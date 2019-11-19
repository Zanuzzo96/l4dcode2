import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { UsuarioPage } from '../usuario/usuario';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { PSessoesPage } from '../p-sessoes/p-sessoes';


@IonicPage()
@Component({
  selector: 'page-se-resultado',
  templateUrl: 'se-resultado.html',
})
export class SeResultadoPage {

  usuario: any;
  resultadoFinal : number = parseFloat(this.navParams.get('pontuacao'));
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');
  tratamento = this.navParams.get('tratamento');

  id_cliente = this.navParams.get('id_cliente')

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeResultadoPage');
    console.log("cliente em tratamento",this.navParams.get('id_cliente'));
    console.log("cliente free/ profissional",this.id_cadastro);
    console.log(this.resultadoFinal);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);
  }

  concluir(){

      if( this.permissao == 2 ){

          let loading = this.loadingCtrl.create({
            content : "Registrando a avaliação e enviando para o seu email",
          });

          loading.present();

            let sedentarismo = {
              "pontuacao":this.resultadoFinal,
              "id_usuario":this.navParams.get('id_cliente')
            }

            console.log(sedentarismo);

          let api = 'https://lipolysis.grupoanx.com.br/profissional/formularios/sedentarismo.php';
          let headers: Headers = new Headers();
            headers.append('Content-type','application/json');

            return this.http.post(api,sedentarismo,new RequestOptions({ headers: headers })).subscribe(
                res => {
                  console.log(res.json());

                  let retorno = res.json();

                  if( retorno == "sucesso"){
                    loading.dismiss();
                    this.alertCtrl.create({
                      subTitle : "Avaliação já registrada no banco e enviada para o seu email, caso não encontre na caixa de entrada verifique no caixa de spam",
                      buttons : [{
                        text: "OK",
                        handler: () => {
                           this.navCtrl.push(PSessoesPage,{
                             'id_cadastro':this.id_cadastro,
                             'id':this.id_cliente,
                             'permissao':this.permissao,
                             "tratamento": this.tratamento,
                             "sexo":this.sexo,
                             "data":this.data,
                             "hora":this.hora,
                           })
                         }
                      }]
                    }).present();
                  }else if ( retorno == "erro"){
                    loading.dismiss();

                    this.alertCtrl.create({
                      title: 'Ops .. Algo deu errado',
                      subTitle : "Tivemos um problema para salvar seu teste.",
                      buttons : [{
                        text: "OK",
                      }]
                    }).present();
                  }else if ( retorno != "erro" && retorno != "sucesso"){
                    loading.dismiss();
                  }

                },
                err => {

                  console.log(err.json());
                  loading.dismiss();


                  this.alertCtrl.create({
                    title: 'Ops .. Algo deu errado',
                    subTitle : "Ocorreu um erro ao salvar o resultado do teste no banco de dados.",
                    buttons : [{
                      text: "OK",
                    }]
                  }).present();

                }

            );
    }else{
      this.navCtrl.push(UsuarioPage,{
        'id_cadastro':this.id_cadastro,
        'permissao':this.permissao
      })
    }
}
}

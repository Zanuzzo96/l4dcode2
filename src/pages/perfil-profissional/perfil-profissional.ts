import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagemPage } from '../mensagem/mensagem';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { UsuarioPage } from '../usuario/usuario';

@IonicPage()
@Component({
  selector: 'page-perfil-profissional',
  templateUrl: 'perfil-profissional.html',
})
export class PerfilProfissionalPage {

  constructor(public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
  }

  usuario: any;

  idProfissional = this.navParams.get('idProfissional');
  estabelecimento = this.navParams.get('estabelecimento');
  telefone = this.navParams.get('telefone');
  endereco = this.navParams.get('endereco');
  cidade = this.navParams.get('cidade');
  estado = this.navParams.get('estado');
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilProfissionalPage');
    console.log(this.idProfissional);
    console.log(this.estabelecimento);
    console.log(this.telefone)
    console.log(this.endereco)
    console.log(this.cidade)
    console.log(this.estado)
    console.log(this.id_cadastro)
    console.log(this.permissao)
  }

  mensagem(){
    this.navCtrl.push(MensagemPage,{
      "idProfissional":this.idProfissional,
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    });
  }

  adicionar(){

      let atualizacao = {
        "id_cadastro":this.id_cadastro,
        "idProfissional":this.idProfissional,
      }

      let loading = this.loadingCtrl.create({content : "Registrando o profissional escolhido"});
      loading.present();

      let headers: Headers = new Headers();
      headers.append('Content-type','application/json');

      this.http.post(
        'https://lipolysis.grupoanx.com.br/usuario/perfil/registrarProfissionalEscolhido.php',
        atualizacao,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {
            console.log(res.json());
            let retorno = res.json();

            loading.dismiss();

            if( retorno == "sucesso"){
            this.alertCtrl.create({
                title: 'Profissional selecionado com sucesso',
                subTitle : "Em breve o profissional entrará em contato com você",
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
                subTitle : "Tente novamente.",
                buttons : [{
                  text: "OK",
                }]
              }).present();
            }

          },
          err => {

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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-registro-profissional',
  templateUrl: 'registro-profissional.html',
})
export class RegistroProfissionalPage {

  cadastro = {
    "estabelecimento" : "",
    "nome" : "",
    "cpf" : "",
    "nasc" : "",
    "sexo" : "",
    "telefone" : "",
    "email" : "",
    "cep" : "",
    "endereco" : "",
    "cidade": "",
    "estado": "",
    "formacao" : "",
    "login" : "",
    "senha" : "",
    "rc": ""
  }

  numeroEndereco;
  bairroEndereco;
  ruaEndereco;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController) {

        this.cadastro.rc = navParams.get('rc');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroProfissionalPage');
  }

  preencher(){
    let cep = this.cadastro.cep;
    let cepTratado =  cep.replace(/\.|\-/g, '') ;

    console.log(cepTratado);

    this.cadastro.cep = cepTratado;

    let viacep = 'https://viacep.com.br/ws/'+ cepTratado +'/json/';
    this.http.get(viacep).toPromise().then((response) => {
      console.log(response.json())
      let endereco = response.json();

      let rua = endereco.logradouro;
      let caracterEspecial = rua.indexOf("-",-2);

      if (rua.indexOf("-") > 0) {
        this.ruaEndereco = rua.substring(0, caracterEspecial);
        console.log(this.ruaEndereco)
      }else{
        this.ruaEndereco = rua;
      }

      this.bairroEndereco = endereco.bairro;

      let enderecoCerto = this.ruaEndereco + '- ' +this.bairroEndereco;

      console.log(enderecoCerto)
      this.cadastro.endereco = enderecoCerto
      this.cadastro.cidade = endereco.localidade;
      this.cadastro.estado = endereco.uf;

    }).catch((response)=>{console.log(response)});
  }

  criarConta(){

    this.cadastro.endereco = this.ruaEndereco + '- '+this.numeroEndereco+ ' - ' +this.bairroEndereco ;
    let cpf = this.cadastro.cpf;
    let cpfTratado =  cpf.replace(/\.|\-/g, '') ;

    this.cadastro.cpf = cpfTratado;

    console.log(this.cadastro);
    let headers: Headers = new Headers();
    headers.append('Content-type','application/json');

      this.http.post(
        'https://lipolysis.grupoanx.com.br/profissional/perfil/cadastrar.php',
        this.cadastro,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {
          let retorno = res.json();
            console.log(retorno);

            if(retorno == 'sucesso'){
              this.alertCtrl.create({
                title: 'Sucesso',
                subTitle : "Cadastro profissional gerado com sucesso",
                buttons : [{
                  text: "OK",
                  handler: () => {
                    this.navCtrl.push(HomePage)
                  }
                }]
              }).present();
            }else if(retorno == 'erro'){
              this.alertCtrl.create({
                title: 'Ops .. Algo deu errado',
                subTitle : "Você não preencheu todo formulário.",
                buttons : [{
                  text: "OK",
                }]
              }).present();
            }else if(retorno == 'erro0'){
              this.alertCtrl.create({
                title: 'Ops .. Algo deu errado',
                subTitle : "CPF ou Login já cadastrados.",
                buttons : [{
                  text: "OK",
                }]
              }).present();
            }
          },
          err => {
            console.log(err.json());

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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ProfissionalPage } from '../profissional/profissional';

@IonicPage()
@Component({
  selector: 'page-p-perfil',
  templateUrl: 'p-perfil.html',
})
export class PPerfilPage {

  cadastro: any ='perfil';
  atualizacao: any;

  perfilProf = {
    "nome":"",
    "cpf":"",
    "nasc":"",
    "sexo":"",
    "telefone":"",
    "email":"",
    "estabelecimento":"",
    "formacao":"",
    "rua":"",
    "cidade":"",
    "estado":"",
    "cep":""
  }

  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  constructor(  public navCtrl: NavController,
                public navParams: NavParams,
                public http: Http,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController) {

                  let loading = this.loadingCtrl.create({
                    content : "Carregando dados do perfil",
                  });

                  loading.present();


                    let api = 'https://lipolysis.grupoanx.com.br/profissional/perfil/atualizar.php?prof='+ this.id_cadastro;
                    this.http.get(api).toPromise().then((resp)=>{
                      loading.dismiss();
                      console.log(resp.json())

                      let dadosperfil = resp.json();

                      this.perfilProf.nome = dadosperfil[0].nome;
                      this.perfilProf.cpf = dadosperfil[0].cpf;
                      this.perfilProf.nasc = dadosperfil[0].nasc;
                      this.perfilProf.telefone = dadosperfil[0].telefone;

                      let sexo = dadosperfil[0].sexo;

                      if(sexo == "m"){
                       this.perfilProf.sexo = "masculino"
                      }else{
                        this.perfilProf.sexo = "feminino"
                      }

                      this.perfilProf.email = dadosperfil[0].email;
                      this.perfilProf.estabelecimento = dadosperfil[0].estabelecimento;
                      this.perfilProf.formacao = dadosperfil[0].formacao;
                      this.perfilProf.rua = dadosperfil[0].endereco;
                      this.perfilProf.cidade = dadosperfil[0].cidade;
                      this.perfilProf.estado = dadosperfil[0].uf;
                      this.perfilProf.cep = dadosperfil[0].cep;

                    }).catch( (err) =>{
                      console.log(err.json())
                      loading.dismiss();
                    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PPerfilPage');
  }

  //pegar o novo endereco pelo cep
    atualizarCep(){

      let loading = this.loadingCtrl.create({
        content : "Atualizando novo endereço",
      });

      loading.present();

      console.log("preencher clicado");
      let viacep = 'https://viacep.com.br/ws/'+ this.perfilProf.cep +'/json/';
      this.http.get(viacep).toPromise().then((response) => {
        console.log(response.json())
        let endereco = response.json();

        loading.dismiss();

          this.perfilProf.rua = endereco.logradouro + ' - ' + endereco.bairro;
          this.perfilProf.cidade = endereco.localidade;
          this.perfilProf.estado = endereco.uf;

      }).catch((response)=>{
        console.log(response)
        loading.dismiss();
      });

    }

      atualizar(){

        let loading = this.loadingCtrl.create({
          content : "Atualizando perfil",
        });

        loading.present();

          this.atualizacao = {
            "usuario": this.id_cadastro,
            "nome":this.perfilProf.nome,
            "cpf":this.perfilProf.cpf,
            "nasc":this.perfilProf.nasc,
            "telefone":this.perfilProf.telefone,
            "email":this.perfilProf.email,
            "estabelecimento":this.perfilProf.estabelecimento,
            "formacao":this.perfilProf.formacao,
            "rua":this.perfilProf.rua,
            "cidade":this.perfilProf.cidade,
            "estado":this.perfilProf.estado,
            "cep":this.perfilProf.cep,
          }

          console.log('isso aqui é os dados', this.atualizacao)

          let api = 'https://lipolysis.grupoanx.com.br/profissional/perfil/atualizar.php';
          let headers: Headers = new Headers();
            headers.append('Content-type','application/json');

            return this.http.post(
              api,
              this.atualizacao,
              new RequestOptions({ headers: headers })
            ).subscribe(
                res => {
                  loading.dismiss();
                  let retorno = res.json();
                  console.log(retorno);
                  if( retorno == "sucesso"){
                    this.alertCtrl.create({
                      title: 'Sucesso',
                      subTitle : "Perfil atualizado com sucesso",
                      buttons : [{
                        text: "OK",
                        handler: () => {
                          this.navCtrl.push(ProfissionalPage,{
                            'id_cadastro':this.id_cadastro,
                            'permissao':this.permissao
                          })
                        }
                      }]
                    }).present();
                  }else if ( retorno == "erro"){
                    this.alertCtrl.create({
                      title: 'Ops .. Algo deu errado',
                      subTitle : "Não conseguimos atualizar seu perfil, tente novamente.",
                      buttons : [{
                        text: "OK",
                      }]
                    }).present();}

                },
                err => {
                  loading.dismiss();
                  console.log(err.json());
                  this.alertCtrl.create({
                    title: 'Ops .. Algo deu errado',
                    subTitle : "Não conseguimos acessar o banco de dados.",
                    buttons : [{
                      text: "OK",
                    }]
                  }).present();
                }
              );
            }
}

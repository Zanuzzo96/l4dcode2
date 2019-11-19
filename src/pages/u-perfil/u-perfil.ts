import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { UsuarioPage } from '../usuario/usuario';
import { UHomePage } from '../u-home/u-home';


@IonicPage()
@Component({
  selector: 'page-u-perfil',
  templateUrl: 'u-perfil.html',
})
export class UPerfilPage {
  cadastro: any ='perfil';
  usuario: any;
  atualizacao: any;

  perfilUsuario = {
    "nome":"","cpf":"","nasc":"","sexo":"","telefone":"",
    "email":"","rua":"","cidade":"","estado":"","cep":""
  }

  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController
            ) {
              console.log("id usuario", this.id_cadastro);
              console.log("permissao", this.permissao);

                let loading = this.loadingCtrl.create({content : "Carregando dados do perfil"});
                loading.present();

                  let api = 'https://lipolysis.grupoanx.com.br/usuario/perfil/perfil.php?user='+ this.id_cadastro;
                  this.http.get(api).toPromise().then((resp)=>{

                    loading.dismiss();

                    let perfilRetorno = resp.json();
                    console.log(perfilRetorno);

                    this.perfilUsuario.nome = perfilRetorno[0].nome;
                    this.perfilUsuario.cpf = perfilRetorno[0].cpf;
                    this.perfilUsuario.nasc = perfilRetorno[0].nasc;
                    let sexo = perfilRetorno[0].sexo;

                    if(sexo == "m"){
                      this.perfilUsuario.sexo = "masculino"
                    }else{
                      this.perfilUsuario.sexo = "feminino"
                    }

                    this.perfilUsuario.telefone = perfilRetorno[0].telefone;
                    this.perfilUsuario.email = perfilRetorno[0].email;

                    this.perfilUsuario.cep = perfilRetorno[0].cep;
                    this.perfilUsuario.rua = perfilRetorno[0].endereco;
                    this.perfilUsuario.cidade = perfilRetorno[0].cidade;
                    this.perfilUsuario.estado = perfilRetorno[0].uf;

                  }).catch((erro)=>{
                    console.log(erro.json())
                    loading.dismiss();
                  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UPerfilPage');
  }

  atualizarCep(){

    let loading = this.loadingCtrl.create({content : "Atualizando novo endereço"});
    loading.present();

    console.log("preencher clicado");
    let viacep = 'https://viacep.com.br/ws/'+ this.perfilUsuario.cep +'/json/';
    this.http.get(viacep).toPromise().then((response) => {
      console.log(response.json())
      let endereco = response.json();

      loading.dismiss();

        this.perfilUsuario.rua = endereco.logradouro + ' - ' + endereco.bairro;
        this.perfilUsuario.cidade = endereco.localidade;
        this.perfilUsuario.estado = endereco.uf;

    }).catch((response)=>{
      console.log(response)
      loading.dismiss();
    });

  }


  atualizar(){
    console.log(this.perfilUsuario)

    let loading = this.loadingCtrl.create({content : "Atualizando perfil"});
    loading.present();

      this.atualizacao = {
        "usuario": this.id_cadastro,
        "nome":this.perfilUsuario.nome,
        "cpf":this.perfilUsuario.cpf,
        "nasc":this.perfilUsuario.nasc,
        "telefone":this.perfilUsuario.telefone,
        "email":this.perfilUsuario.email,
        "rua":this.perfilUsuario.rua,
        "cidade":this.perfilUsuario.cidade,
        "estado":this.perfilUsuario.estado,
        "cep":this.perfilUsuario.cep,
      }

      console.log('isso aqui é os dados', this.atualizacao)

      let api = 'https://lipolysis.grupoanx.com.br/usuario/perfil/atualizar.php';
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


                if(this.permissao == 0){
                  if( retorno == "sucesso"){
                    this.alertCtrl.create({
                      title: 'Sucesso',
                      subTitle : "Perfil atualizado com sucesso",
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
                      this.alertCtrl.create({
                        title: 'Ops .. Algo deu errado',
                        subTitle : "Não conseguimos atualizar seu perfil, tente novamente.",
                        buttons : [{
                          text: "OK",
                        }]
                      }).present()
                    }
                  }else{
                    if( retorno == "sucesso"){
                      this.alertCtrl.create({
                        title: 'Sucesso',
                        subTitle : "Perfil atualizado com sucesso",
                        buttons : [{
                          text: "OK",
                          handler: () => {
                            this.navCtrl.push(UHomePage,{
                              'id_cadastro':this.id_cadastro,
                              'permissao':this.permissao
                            })
                          }
                        }]
                      }).present();
                    }   else if ( retorno == "erro"){
                        this.alertCtrl.create({
                          title: 'Ops .. Algo deu errado',
                          subTitle : "Não conseguimos atualizar seu perfil, tente novamente.",
                          buttons : [{
                            text: "OK",
                          }]
                        }).present();}
                  }

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

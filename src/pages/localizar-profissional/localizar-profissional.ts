import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalizacaoProvider } from '../../providers/localizacao/localizacao';
import { PerfilProfissionalPage } from '../perfil-profissional/perfil-profissional';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-localizar-profissional',
  templateUrl: 'localizar-profissional.html',
})
export class LocalizarProfissionalPage {

  idProfissional: any;
  valor:any;

  endereco: any
  local:any

  retornoProfissional: number;
  dadosRetorno: any;

  retornoBusca = 0;
  busca: any;
  dadosBusca:any;

  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private localizacao: LocalizacaoProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,) {

              let loading = loadingCtrl.create({
                content : "Localizando profissionais habilitados",
              });

              loading.present();

                localizacao.userlocation(this.id_cadastro).then((response) => {

                    let retorno = response.json();
                    this.endereco = retorno[0].endereco;
                    this.local = retorno[0].cidade;

                    console.log("local",this.local);
                    console.log("id",this.id_cadastro);

                    localizacao.profissionallocation(this.local,this.id_cadastro).then((response) => {

                        let retorno = response.json();
                        console.log(retorno);

                        if(retorno == ""){
                          console.log('nao tem nenhum cadastro');
                          this.retornoProfissional = 1;
                          loading.dismiss();
                        }else{
                          this.retornoProfissional = 2;
                          console.log(response);
                          this.dadosRetorno = response.json();
                          loading.dismiss();
                        }

                    }).catch((response) => {
                      console.log('deu um erro');
                      loading.dismiss();
                    });
                });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalizarProfissionalPage');
  }

  perfil(idProfissional,estabelecimento,telefone,endereco,cidade,estado){

    this.navCtrl.push(PerfilProfissionalPage,{
      "idProfissional":idProfissional,
      "estabelecimento":estabelecimento,
      "telefone":telefone,
      "endereco":endereco,
      "cidade":cidade,
      "estado":estado,
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    });
  }

  buscar(){
    let validar = this.busca;
    console.log(validar);

    if(!validar){
        console.log("dados nulos");
        this.alertCtrl.create({
          subTitle : "Você não inserir dados para busca",
          buttons : [{
            text: "OK"
          }]
        }).present();
        this.retornoBusca = 0;

    }else{
        this.localizacao.buscaProfissional(this.busca).then((response) => {


          let valorderetorno = response.json()
          let validacaoRetorno = valorderetorno[0]
            console.log(valorderetorno[0])

              if(!validacaoRetorno){
                  this.alertCtrl.create({
                    subTitle : "Não conseguimos encontrar nenhum profissional para sua busca",
                    buttons : [{
                      text: "OK"
                    }]
                  }).present();
                console.log("retorno nulos");
                this.retornoBusca = 0;
              }else{
                  this.dadosBusca = response.json();
                  this.retornoBusca = 1;
                  console.log("ta dentro do if")
              }
        }).catch((response) => {
          console.log(response.json())
        })
    }


  }

}

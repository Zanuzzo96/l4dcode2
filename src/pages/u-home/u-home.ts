import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UDiarioPage } from '../u-diario/u-diario';
import { UDicasPage } from '../u-dicas/u-dicas';
import { UPerfilPage } from '../u-perfil/u-perfil';
import { HomePage } from '../home/home';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UEvolucaoPage } from '../u-evolucao/u-evolucao';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-u-home',
  templateUrl: 'u-home.html',
})
export class UHomePage {

  agendamento;
  agenda;
  agendaData;
  agendaHora;
  nomeUsuario;
  nome;
  comunicados;
  tratamentos;
  tratamento;
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public storage: Storage) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UHomePage');
    console.log("id usuario", this.id_cadastro);
    console.log("permissao", this.permissao);

      let api = 'https://lipolysis.grupoanx.com.br/usuario/perfil/perfil.php?user=' + this.id_cadastro;
      this.http.get(api).toPromise().then((resp)=>{
          this.nomeUsuario = resp.json();
          this.nome = this.nomeUsuario[0].nome;
          //console.log(this.nome)
        }).catch((resp)=>{
          console.log(resp);
        });

        let api1 = 'https://lipolysis.grupoanx.com.br/usuario/selecionarComunicado.php?id_cadastro=' + this.id_cadastro;
          this.http.get(api1).toPromise().then((resp)=>{
            //loading.dismiss();
            console.log("comunicados", resp);

            this.comunicados = resp.json()
          }).catch((resp)=>{
            //loading.dismiss();
            console.log(resp);
          });

          let api2 = 'https://lipolysis.grupoanx.com.br/usuario/tratamentos.php?id_cadastro=' + this.id_cadastro;
            this.http.get(api2).toPromise().then((resp)=>{
              let validador = resp.json();

              if(validador == 'erro'){
                console.log("retorno do tratamento esta vazio")
                this.tratamentos = false;
              }else{
                console.log("retorno do tratamento",resp.json());

                this.tratamento = resp.json();
                this.tratamentos = true;

                console.log("retorno da agenda",this.tratamento);
              }
            }).catch((resp)=>{
              //loading.dismiss();
              console.log(resp);
            });

            let api3 = 'https://lipolysis.grupoanx.com.br/usuario/agenda.php?id_cadastro=' + this.id_cadastro;
              this.http.get(api3).toPromise().then((resp)=>{
                  let validador = resp.json();

                  if(validador == 'erro'){
                    this.agendamento = false;
                  }else{
                    console.log("retorno da agenda",resp.json());
                    this.agendamento = true;
                    this.agenda = resp.json()[0];

                    console.log("retorno da agenda",this.agenda);
                  }

                  console.log("retorno da agenda",resp.json());
              }).catch((resp)=>{
                //loading.dismiss();
                console.log(resp);
              });
  }


  sair(){
    this.navCtrl.push(HomePage)
    this.storage.remove("id_cadastro")
    this.storage.remove("permissao")
  }

  diario(){
    this.navCtrl.push(UDiarioPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }
  perfil(){
    this.navCtrl.push(UPerfilPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }
  dicas(){
    this.navCtrl.push(UDicasPage)
  }

  evolucao(tratamento){
    console.log(tratamento)
    this.navCtrl.push(UEvolucaoPage,{
      'id_cadastro':this.id_cadastro,
      'id_tratamento': tratamento
    })
  }

}

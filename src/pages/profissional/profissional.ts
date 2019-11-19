import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PAgendaPage } from '../p-agenda/p-agenda';
import { PClientesPage } from '../p-clientes/p-clientes';
import { PDiarioPage } from '../p-diario/p-diario';
import { PSessoesPage } from '../p-sessoes/p-sessoes';
import { PSugestoesPage } from '../p-sugestoes/p-sugestoes';
import { PPerfilPage } from '../p-perfil/p-perfil';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PContatosPage } from '../p-contatos/p-contatos';
import { PComunicadoPage } from '../p-comunicado/p-comunicado';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-profissional',
  templateUrl: 'profissional.html',
})
export class ProfissionalPage {

  dia:any;
  nomeProfissional:any;

  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  constructor(public navCtrl: NavController,public navParams: NavParams, public http: Http,public storage: Storage) {

    let api = 'https://lipolysis.grupoanx.com.br/profissional/home/nomeProfissional.php?profissional=' + this.id_cadastro;

      this.http.get(api).toPromise().then((resp)=>{
        let nome = resp.json();
        this.nomeProfissional = nome[0].nome;
      }).catch((resp)=>{
        console.log(resp);
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfissionalPage');
    console.log("id usuario", this.id_cadastro);
    console.log("permissao", this.permissao);

      let api = 'https://lipolysis.grupoanx.com.br/profissional/buscarProximaSessao.php?profissional=' + this.id_cadastro;

      this.http.get(api).toPromise().then((resp)=>{
          this.dia = resp.json();
          console.log(resp.json());

        }).catch((resp)=>{
          console.log(resp);
        });

  }

  sair(){
    this.navCtrl.push(HomePage)
    this.storage.remove("id_cadastro")
    this.storage.remove("permissao")
  }

  perfil(){
    this.navCtrl.push(PPerfilPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }

  diario(){
    this.navCtrl.push(PDiarioPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }

  contato(){
    this.navCtrl.push(PContatosPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }

  comunicado(){
    this.navCtrl.push(PComunicadoPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }

  clientes(){
    this.navCtrl.push(PClientesPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }

  sugestoes(){
    this.navCtrl.push(PSugestoesPage)
  }

  agenda(){
    this.navCtrl.push(PAgendaPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }

  sessoes(){
    this.navCtrl.push(PSessoesPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }

}

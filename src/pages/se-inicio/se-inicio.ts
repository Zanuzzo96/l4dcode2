import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeEnergiaPage } from '../se-energia/se-energia';
import { UsuarioPage } from '../usuario/usuario';
import { UHomePage } from '../u-home/u-home';
import { PSessoesPage } from '../p-sessoes/p-sessoes';

@IonicPage()
@Component({
  selector: 'page-se-inicio',
  templateUrl: 'se-inicio.html',
})
export class SeInicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  cliente = this.navParams.get('id_user');
  tratamento = this.navParams.get('tratamento');
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeInicioPage');
    console.log("cliente em tratamento",this.cliente);
    console.log("cliente free/ profissional",this.id_cadastro);
    console.log("permissao",this.permissao);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);
  }

  iniciar(){
    this.navCtrl.push(SeEnergiaPage,{
      'id_cliente':this.cliente,
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao,
      'tratamento':this.tratamento,
      'sexo':this.sexo,
      'data':this.data,
      'hora':this.hora,
    })
  }

  voltar(){

    if( this.permissao == 1){
        this.navCtrl.push(UHomePage,{
          'id_cadastro': this.navParams.get('id_cadastro'),
          'permissao': this.navParams.get('permissao')
        })
    }else if(this.permissao == 0){
      this.navCtrl.push(UsuarioPage,{
        'id_cadastro': this.navParams.get('id_cadastro'),
        'permissao': this.navParams.get('permissao')
      })
    }else if(this.permissao == 2){
      this.navCtrl.push(PSessoesPage,{
        'sexo': this.sexo,
        'id': this.cliente,
        'tratamento': this.tratamento,
        'data':this.data,
        'hora':this.hora,
        'id_cadastro': this.navParams.get('id_cadastro'),
        'permissao': this.navParams.get('permissao')
      })
    }

  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcHldgPage } from '../ac-hldg/ac-hldg';
import { PSessoesPage } from '../p-sessoes/p-sessoes';


@IonicPage()
@Component({
  selector: 'page-ac-inicio',
  templateUrl: 'ac-inicio.html',
})
export class AcInicioPage {

  sexo = this.navParams.get('sexo');
  cliente = this.navParams.get('user');
  tratamento = this.navParams.get('tratamento');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.sexo)
    console.log(this.cliente)
    console.log(this.data)
    console.log(this.hora)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcInicioPage', this.cliente);
    console.log(this.data)
    console.log(this.hora)
    console.log('id cadastro', this.navParams.get('id_cadastro'));
    console.log('permissao ', this.navParams.get('permissao'));
  }

  continuar(){
    this.navCtrl.push(AcHldgPage,{
      'sexo': this.sexo,
      'cliente': this.cliente,
      'tratamento': this.tratamento,
      'data':this.data,
      'hora':this.hora,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    })
  }

  voltar(){
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg2Page } from '../saude-pg2/saude-pg2';

@IonicPage()
@Component({
  selector: 'page-saude-pg1',
  templateUrl: 'saude-pg1.html',
})
export class SaudePg1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cliente = this.navParams.get('user');
  sexo = this.navParams.get('sexo');
  tratamento = this.navParams.get('tratamento');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  ionViewDidLoad() {
    console.log(' SaudePg1Page');
    console.log('id cliente', this.cliente);
    console.log('sexo ', this.sexo);
    console.log('id cadastro', this.navParams.get('id_cadastro'));
    console.log('permissao ', this.navParams.get('permissao'));
  }

  profissao: any;
  muitotemposentado: any;

  continuar(){
    this.navCtrl.push(SaudePg2Page,{
      'cliente': this.cliente,
      'sexo': this.sexo,
      'profissao': this.profissao,
      'muitotemposentado': this.muitotemposentado,
      'tratamento': this.tratamento,
      'data':this.data,
      'hora':this.hora,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    })
  }

}

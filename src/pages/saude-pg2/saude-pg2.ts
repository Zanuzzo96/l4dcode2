import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg3Page } from '../saude-pg3/saude-pg3';



@IonicPage()
@Component({
  selector: 'page-saude-pg2',
  templateUrl: 'saude-pg2.html',
})
export class SaudePg2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  cliente = this.navParams.get('cliente');
  sexo = this.navParams.get('sexo');
  profissao = this.navParams.get('profissao');
  muitotemposentado = this.navParams.get('muitotemposentado');
  tratamento = this.navParams.get('tratamento');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg2Page');
    console.log('id cliente', this.cliente);
    console.log('sexo ', this.sexo);
    console.log('id cadastro', this.navParams.get('id_cadastro'));
    console.log('permissao ', this.navParams.get('permissao'));
  }

  qualidadesono: any;

  continuar(){
    this.navCtrl.push(SaudePg3Page,{
      'cliente': this.cliente,
      'sexo': this.sexo,
      'profissao': this.profissao,
      'muitotemposentado': this.muitotemposentado,
      'qualidadesono': this.qualidadesono,
      'tratamento': this.tratamento,
      'data':this.data,
      'hora':this.hora,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    })
  }
}

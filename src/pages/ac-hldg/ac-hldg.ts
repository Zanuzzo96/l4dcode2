import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcEdemaPage } from '../ac-edema/ac-edema';

@IonicPage()
@Component({
  selector: 'page-ac-hldg',
  templateUrl: 'ac-hldg.html',
})
export class AcHldgPage {

  sexo = this.navParams.get('sexo');
  cliente = this.navParams.get('cliente');
  tratamento = this.navParams.get('tratamento');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  public hldg={
    "tipo":"",
    "grau":"",
    "local":"",
    "coloracao":"",
    "temp":"",
    "palpacao":"",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcHldgPage',this.cliente);
    console.log(this.data)
    console.log(this.hora)
    console.log('id cadastro', this.navParams.get('id_cadastro'));
    console.log('permissao ', this.navParams.get('permissao'));
  }

  continuar(){
    console.log(this.hldg);
    this.navCtrl.push(AcEdemaPage,{
      sexo: this.sexo,
      cliente: this.cliente,
      hldgTipo: this.hldg.tipo,
      hldgGrau: this.hldg.grau,
      hldgLocal: this.hldg.local,
      hldgColoracao: this.hldg.coloracao,
      hldgTemp: this.hldg.temp,
      hldgPalpacao: this.hldg.palpacao,
      tratamento: this.tratamento,
      data:this.data,
      hora:this.hora,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    })
  }

}

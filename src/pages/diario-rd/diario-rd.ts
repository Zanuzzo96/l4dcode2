import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiarioAlimentacaoPage } from '../diario-alimentacao/diario-alimentacao';


@IonicPage()
@Component({
  selector: 'page-diario-rd',
  templateUrl: 'diario-rd.html',
})
export class DiarioRdPage {

  rd : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiarioRdPage');
  }

  proximo(){
    this.navCtrl.push(DiarioAlimentacaoPage,{
      'dia': this.navParams.get('dia'),
      'sono': this.navParams.get('sono'),
      'agua': this.navParams.get('agua'),
      'rd': this.rd,
      'id_cadastro':this.navParams.get('id_cadastro'),
      'permissao':this.navParams.get('permissao')
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiarioNutricaoPage } from '../diario-nutricao/diario-nutricao';


@IonicPage()
@Component({
  selector: 'page-diario-alimentacao',
  templateUrl: 'diario-alimentacao.html',
})
export class DiarioAlimentacaoPage {

  alimentacao : any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiarioAlimentacaoPage');
  }

  proximo(){
    this.navCtrl.push(DiarioNutricaoPage,{
      'dia': this.navParams.get('dia'),
      'sono': this.navParams.get('sono'),
      'agua': this.navParams.get('agua'),
      'rd': this.navParams.get('rd'),
      'alimentacao': this.alimentacao,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    })
  }

}

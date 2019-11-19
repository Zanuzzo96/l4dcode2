import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiarioFisicoPage } from '../diario-fisico/diario-fisico';


@IonicPage()
@Component({
  selector: 'page-diario-nutricao',
  templateUrl: 'diario-nutricao.html',
})
export class DiarioNutricaoPage {

  nutricao : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiarioNutricaoPage');
  }

  proximo(){
    this.navCtrl.push(DiarioFisicoPage,{
      'dia': this.navParams.get('dia'),
      'sono': this.navParams.get('sono'),
      'agua': this.navParams.get('agua'),
      'rd': this.navParams.get('rd'),
      'alimentacao': this.navParams.get('alimentacao'),
      'nutricao': this.nutricao,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    })
  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiarioSonoPage } from '../diario-sono/diario-sono';


@IonicPage()
@Component({
  selector: 'page-diario-dia',
  templateUrl: 'diario-dia.html',
})
export class DiarioDiaPage {

  dia = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiarioDiaPage');
  }

  proximo(){
    this.navCtrl.push( DiarioSonoPage, {
      'dia': this.dia,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    })
  }

}

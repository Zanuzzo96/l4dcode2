import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiarioAguaPage } from '../diario-agua/diario-agua';


@IonicPage()
@Component({
  selector: 'page-diario-sono',
  templateUrl: 'diario-sono.html',
})
export class DiarioSonoPage {

  sono : string


  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiarioSonoPage');
  }

  proximo(){
    this.navCtrl.push(DiarioAguaPage, {
      'dia':  this.navParams.get('dia'),
      'sono': this.sono,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiarioRdPage } from '../diario-rd/diario-rd';

@IonicPage()
@Component({
  selector: 'page-diario-agua',
  templateUrl: 'diario-agua.html',
})
export class DiarioAguaPage {

  agua : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiarioAguaPage');
  }

  proximo(){
    this.navCtrl.push(DiarioRdPage,{
      'dia': this.navParams.get('dia'),
      'sono': this.navParams.get('sono'),
      'agua': this.agua,
      'id_cadastro':this.navParams.get('id_cadastro'),
      'permissao':this.navParams.get('permissao')
    })
  }

}

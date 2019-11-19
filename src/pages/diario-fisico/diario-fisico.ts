import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiarioCigarroPage } from '../diario-cigarro/diario-cigarro';

@IonicPage()
@Component({
  selector: 'page-diario-fisico',
  templateUrl: 'diario-fisico.html',
})
export class DiarioFisicoPage {

  fisico: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiarioFisicoPage');
  }

  proximo(){
    this.navCtrl.push(DiarioCigarroPage,{
      'dia': this.navParams.get('dia'),
      'sono': this.navParams.get('sono'),
      'agua': this.navParams.get('agua'),
      'rd': this.navParams.get('rd'),
      'alimentacao': this.navParams.get('alimentacao'),
      'nutricao': this.navParams.get('nutricao'),
      'fisico': this.fisico,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
  })
  }

}

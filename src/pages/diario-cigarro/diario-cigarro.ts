import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiarioConcluidoPage } from '../diario-concluido/diario-concluido';


@IonicPage()
@Component({
  selector: 'page-diario-cigarro',
  templateUrl: 'diario-cigarro.html',
})
export class DiarioCigarroPage {

  fumante: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiarioCigarroPage');
  }

  proximo(){
    this.navCtrl.push(DiarioConcluidoPage,{
      'dia': this.navParams.get('dia'),
      'sono': this.navParams.get('sono'),
      'agua': this.navParams.get('agua'),
      'rd': this.navParams.get('rd'),
      'alimentacao': this.navParams.get('alimentacao'),
      'nutricao': this.navParams.get('nutricao'),
      'fisico': this.navParams.get('fisico'),
      'fumante': this.fumante,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
  })
  }

}

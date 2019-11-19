import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ConfirmacaoRecuperacaoSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmacao-recuperacao-senha',
  templateUrl: 'confirmacao-recuperacao-senha.html',
})
export class ConfirmacaoRecuperacaoSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmacaoRecuperacaoSenhaPage');
  }

  retornaHome() {
    this.navCtrl.push(HomePage);
  }

}

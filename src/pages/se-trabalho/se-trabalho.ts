import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeAtividadesdomesticasPage } from '../se-atividadesdomesticas/se-atividadesdomesticas';

/**
 * Generated class for the SeTrabalhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-se-trabalho',
  templateUrl: 'se-trabalho.html',
})
export class SeTrabalhoPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  trabalho: any;
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');
  tratamento = this.navParams.get('tratamento');

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeTrabalhoPage');
    console.log(this.pontuacao);
    console.log("cliente em tratamento",this.navParams.get('id_cliente'));
    console.log("cliente free/ profissional",this.id_cadastro);
    console.log("permissao",this.permissao);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);
  }

  continuar(){
    let soma = parseFloat(this.trabalho);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeAtividadesdomesticasPage,{
      'pontuacao': this.pontuacao,
      'id_cadastro': this.id_cadastro,
      'id_cliente':this.navParams.get('id_cliente'),
      'permissao':this.permissao,
      'tratamento': this.tratamento,
      'sexo':this.sexo,
      'data':this.data,
      'hora':this.hora,
    });
  }

}

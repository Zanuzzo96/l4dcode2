import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeEsportePage } from '../se-esporte/se-esporte';


@IonicPage()
@Component({
  selector: 'page-se-energia',
  templateUrl: 'se-energia.html',
})
export class SeEnergiaPage {

  energia : any;

  tratamento = this.navParams.get('tratamento');
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeEnergiaPage');
    console.log("cliente em tratamento",this.navParams.get('id_cliente'));
    console.log("cliente free/ profissional",this.id_cadastro);
    console.log("permissao",this.permissao);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);
  }

  continuar(){
    this.navCtrl.push(SeEsportePage,{
      'pontuacao': this.energia,
      'id_cliente':this.navParams.get('id_cliente'),
      'id_cadastro': this.id_cadastro,
      'permissao':this.permissao,
      'tratamento': this.tratamento,
      'sexo':this.sexo,
      'data':this.data,
      'hora':this.hora,
    })
  }

}

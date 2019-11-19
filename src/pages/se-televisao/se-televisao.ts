import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeResultadoPage } from '../se-resultado/se-resultado';

@IonicPage()
@Component({
  selector: 'page-se-televisao',
  templateUrl: 'se-televisao.html',
})
export class SeTelevisaoPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  televisao: any;
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');
  tratamento = this.navParams.get('tratamento');

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeTelevisaoPage');
    console.log(this.pontuacao);
    console.log("cliente em tratamento",this.navParams.get('id_cliente'));
    console.log("cliente free/ profissional",this.id_cadastro);
    console.log("permissao",this.permissao);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);
  }

  continuar(){
    let soma = parseFloat(this.televisao);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeResultadoPage,{
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

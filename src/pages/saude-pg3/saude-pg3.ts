import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg4Page } from '../saude-pg4/saude-pg4';


@IonicPage()
@Component({
  selector: 'page-saude-pg3',
  templateUrl: 'saude-pg3.html',
})
export class SaudePg3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cliente = this.navParams.get('cliente');
  sexo = this.navParams.get('sexo');
  profissao = this.navParams.get('profissao');
  muitotemposentado = this.navParams.get('muitotemposentado');
  qualidadesono = this.navParams.get('qualidadesono');
  tratamento = this.navParams.get('tratamento');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg3Page');
  }

  antecendentesCirurgicos:any;
  antecendentesCirurgicosQuais:any;
  tratamentoAnterior:any;
  tratamentoAnteriorQuais:any;
  antecedenterAlergicos:any;
  antecedenterAlergicosQuais:any;

  continuar(){
    this.navCtrl.push(SaudePg4Page,{
      'cliente': this.cliente,
      'sexo': this.sexo,
      'profissao': this.profissao,
      'muitotemposentado': this.muitotemposentado,
      'qualidadesono': this.qualidadesono,
      'antecendentesCirurgicos': this.antecendentesCirurgicos,
      'antecendentesCirurgicosQuais': this.antecendentesCirurgicosQuais,
      'tratamentoAnterior': this.tratamentoAnterior,
      'tratamentoAnteriorQuais': this.tratamentoAnteriorQuais,
      'antecedenterAlergicos': this.antecedenterAlergicos,
      'antecedenterAlergicosQuais': this.antecedenterAlergicosQuais,
      'tratamento':this.tratamento,
      'data':this.data,
      'hora':this.hora,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    })
  }

}

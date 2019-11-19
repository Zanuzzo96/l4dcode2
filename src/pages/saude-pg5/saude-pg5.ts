import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg6Page } from '../saude-pg6/saude-pg6';


@IonicPage()
@Component({
  selector: 'page-saude-pg5',
  templateUrl: 'saude-pg5.html',
})
export class SaudePg5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cliente = this.navParams.get('cliente');
  sexo = this.navParams.get('sexo');
  profissao = this.navParams.get('profissao');
  muitotemposentado = this.navParams.get('muitotemposentado');
  qualidadesono = this.navParams.get('qualidadesono');
  antecendentesCirurgicos = this.navParams.get('antecendentesCirurgicos');
  antecendentesCirurgicosQuais = this.navParams.get('antecendentesCirurgicosQuais');
  tratamentoAnterior = this.navParams.get('tratamentoAnterior');
  tratamentoAnteriorQuais = this.navParams.get('tratamentoAnteriorQuais');
  antecedenterAlergicos = this.navParams.get('antecedenterAlergicos');
  antecedenterAlergicosQuais = this.navParams.get('antecedenterAlergicosQuais');
  funcionamentoIntestinal = this.navParams.get('funcionamentoIntestinal');
  funcionamentoIntestinalObs = this.navParams.get('funcionamentoIntestinalObs');
  atividadeFisica = this.navParams.get('atividadeFisica');
  atividadeFisicaQuais = this.navParams.get('atividadeFisicaQuais');
  fumante = this.navParams.get('fumante');
  alimentacao = this.navParams.get('alimentacao');
  alimentacaoTipo = this.navParams.get('alimentacaoTipo');
  tratamento = this.navParams.get('tratamento');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg5Page');
  }

  ingereLiquidos;
  ingereLiquidosObs;
  liquidosQuantos;

  continuar(){
    this.navCtrl.push(SaudePg6Page,{
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
      'funcionamentoIntestinal': this.funcionamentoIntestinal,
      'funcionamentoIntestinalObs': this.funcionamentoIntestinalObs,
      'atividadeFisica': this.atividadeFisica,
      'atividadeFisicaQuais': this.atividadeFisicaQuais,
      'fumante': this.fumante,
      'alimentacao': this.alimentacao,
      'alimentacaoTipo': this.alimentacaoTipo,
      'tratamento': this.tratamento,
      'data':this.data,
      'hora':this.hora,
      'ingereLiquidos': this.ingereLiquidos,
      'ingereLiquidosObs': this.ingereLiquidosObs,
      'liquidosQuantos': this.liquidosQuantos,

      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    });
  }

}

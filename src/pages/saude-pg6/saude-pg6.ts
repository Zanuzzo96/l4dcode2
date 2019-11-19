import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg7Page } from '../saude-pg7/saude-pg7';


@IonicPage()
@Component({
  selector: 'page-saude-pg6',
  templateUrl: 'saude-pg6.html',
})
export class SaudePg6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

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
  ingereLiquidos = this.navParams.get('ingereLiquidos');
  ingereLiquidosObs = this.navParams.get('ingereLiquidosObs');
  liquidosQuantos = this.navParams.get('liquidosQuantos');
  tratamento = this.navParams.get('tratamento');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg6Page');
  }

  gestante;
  filhos;
  filhosQuantos;

  continuar(){
    this.navCtrl.push(SaudePg7Page,{
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
      'ingereLiquidos': this.ingereLiquidos,
      'ingereLiquidosObs': this.ingereLiquidosObs,
      'liquidosQuantos': this.liquidosQuantos,
      'tratamento': this.tratamento,
      'data':this.data,
      'hora':this.hora,
      'gestante': this.gestante,
      'filhos': this.filhos,
      'filhosQuantos': this.filhosQuantos,

      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    })
  }

}

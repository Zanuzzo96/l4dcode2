import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg13Page} from '../saude-pg13/saude-pg13';

@IonicPage()
@Component({
  selector: 'page-saude-pg12',
  templateUrl: 'saude-pg12.html',
})
export class SaudePg12Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

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
  gestante = this.navParams.get('gestante');
  filhos = this.navParams.get('filhos');
  filhosQuantos = this.navParams.get('filhosQuantos');
  problemaOrtopedico = this.navParams.get('problemaOrtopedico');
  problemaOrtopedicoQual = this.navParams.get('problemaOrtopedicoQual');
  tratamentoMedico = this.navParams.get('tratamentoMedico');
  tratamentoMedicoQual = this.navParams.get('tratamentoMedicoQual');
  acidoPelo = this.navParams.get('acidoPelo');
  acidoPeloQuais = this.navParams.get('acidoPeloQuais');
  ortomelecular = this.navParams.get('ortomelecular');
  ortomelecularQual = this.navParams.get('ortomelecularQual');
  cuidadosdiarios = this.navParams.get('cuidadosdiarios');
  cuidadosdiariosQual = this.navParams.get('cuidadosdiariosQual');
  marcapasso = this.navParams.get('marcapasso');
  marcapassoQual = this.navParams.get('marcapassoQual');
  metais = this.navParams.get('metais');
  metaislocal = this.navParams.get('metaislocal');
  cancer = this.navParams.get('cancer');
  cancerQual = this.navParams.get('cancerQual');
  menstrual = this.navParams.get('menstrual');
  menstrualInicio = this.navParams.get('menstrualInicio');
  menstrualFim = this.navParams.get('menstrualFim');
  anticoncepcional = this.navParams.get('anticoncepcional');
  anticoncepcionalQual = this.navParams.get('anticoncepcionalQual');
  varizes = this.navParams.get('varizes');
  varizesGrau = this.navParams.get('varizesGrau');
  lesoes = this.navParams.get('lesoes');
  lesoesQuais = this.navParams.get('lesoesQuais');
  hipertensao = this.navParams.get('hipertensao');
  hipotensao = this.navParams.get('hipotensao');
  epilepsia = this.navParams.get('epilepsia');
  diabetes = this.navParams.get('diabetes');
  autoimune = this.navParams.get('autoimune');
  autoimuneQual = this.navParams.get('autoimuneQual');

  tratamento = this.navParams.get('tratamento');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg12Page');
  }

  orientacao;
  nome;
  telefone;
  medico;
  telefoneMedico;
  convenio;
  cart;
  hospital;

  continuar(){
    this.navCtrl.push(SaudePg13Page,{
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
      'gestante': this.gestante,
      'filhos': this.filhos,
      'filhosQuantos': this.filhosQuantos,
      'problemaOrtopedico': this.problemaOrtopedico,
      'problemaOrtopedicoQual': this.problemaOrtopedicoQual,
      'tratamentoMedico': this.tratamentoMedico,
      'tratamentoMedicoQual': this.tratamentoMedicoQual,
      'acidoPelo': this.acidoPelo,
      'acidoPeloQuais': this.acidoPeloQuais,
      'ortomelecular': this.ortomelecular,
      'ortomelecularQual': this.ortomelecularQual,
      'cuidadosdiarios': this.cuidadosdiarios,
      'cuidadosdiariosQual': this.cuidadosdiariosQual,
      'marcapasso': this.marcapasso,
      'marcapassoQual': this.marcapassoQual,
      'metais': this.metais,
      'metaislocal': this.metaislocal,
      'cancer': this.cancer,
      'cancerQual': this.cancerQual,
      'menstrual': this.menstrual,
      'menstrualInicio': this.menstrualInicio,
      'menstrualFim': this.menstrualFim,
      'anticoncepcional': this.anticoncepcional,
      'anticoncepcionalQual': this.anticoncepcionalQual,
      'varizes': this.varizes,
      'varizesGrau': this.varizesGrau,
      'lesoes': this.lesoes,
      'lesoesQuais': this.lesoesQuais,
      'hipertensao': this.hipertensao,
      'hipotensao': this.hipotensao,
      'epilepsia': this.epilepsia,
      'diabetes': this.diabetes,
      'autoimune': this.autoimune,
      'autoimuneQual': this.autoimuneQual,

      'observacao': this.orientacao,
      'nome': this.nome,
      'telefone': this.telefone,
      'medico': this.medico,
      'telefoneMedico': this.telefoneMedico,
      'convenio': this.convenio,
      'cart': this.cart,
      'hospital': this.hospital,

      'tratamento': this.tratamento,
      'data':this.data,
      'hora':this.hora,

      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')

    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { PSessoesPage } from '../p-sessoes/p-sessoes';

@IonicPage()
@Component({
  selector: 'page-saude-pg13',
  templateUrl: 'saude-pg13.html',
})
export class SaudePg13Page {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) { }

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
  observacao = this.navParams.get('observacao');
  avisar = this.navParams.get('avisar');
  nome = this.navParams.get('nome');
  telefone = this.navParams.get('telefone');
  medico = this.navParams.get('medico');
  telefoneMedico = this.navParams.get('telefoneMedico');
  convenio = this.navParams.get('convenio');
  cart = this.navParams.get('cart');
  hospital = this.navParams.get('hospital');
  tratamento = this.navParams.get('tratamento');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg13Page');
  }

  continuar(){

    let saude = {
      "cliente": this.cliente,
      "profissao": this.profissao,
      "temposentado": this.muitotemposentado,
      "qualidadesono": this.qualidadesono,
      "antecendentescirurgicos": this.antecendentesCirurgicos,
      "antecendentescirurgicosquais": this.antecendentesCirurgicosQuais,
      "tratamentoanterior": this.tratamentoAnterior,
      "tratamentoanteriorquais": this.tratamentoAnteriorQuais,
      "antecedenteralergicos":this.antecedenterAlergicos,
      "antecedenteralergicosquais":this.antecedenterAlergicosQuais,
      "funcionamentointestinal":this.funcionamentoIntestinal,
      "funcionamentointestinalobs":this.funcionamentoIntestinalObs,
      "atividadefisica":this.atividadeFisica,
      "atividadefisicaquais":this.atividadeFisicaQuais,
      "fumante":this.fumante,
      "alimentacao":this.alimentacao,
      "alimentacaotipo":this.alimentacaoTipo,
      "ingereliquidos":this.ingereLiquidos,
      "ingereliquidosobs":this.ingereLiquidosObs,
      "liquidosquantos":this.liquidosQuantos,
      "gestante":this.gestante,
      "filhos":this.filhos,
      "filhosquantos":this.filhosQuantos,
      "problemaortopedico":this.problemaOrtopedico,
      "problemaortopedicoqual":this.problemaOrtopedicoQual,
      "tratamentomedico":this.tratamentoMedico,
      "tratamentomedicoqual":this.tratamentoMedicoQual,
      "acidopelo":this.acidoPelo,
      "acidoPeloquais":this.acidoPeloQuais,
      "ortomelecular":this.ortomelecular,
      "ortomelecularqual":this.ortomelecularQual,
      "cuidadosdiarios":this.cuidadosdiarios,
      "cuidadosdiariosqual":this.cuidadosdiariosQual,
      "marcapasso":this.marcapasso,
      "marcapassoqual":this.marcapassoQual,
      "metais":this.metais,
      "metaislocal":this.metaislocal,
      "cancer":this.cancer,
      "cancerqual":this.cancerQual,
      "menstrual":this.menstrual,
      "menstrualinicio":this.menstrualInicio,
      "menstrualfim":this.menstrualFim,
      "anticoncepcional":this.anticoncepcional,
      "anticoncepcionalqual":this.anticoncepcionalQual,
      "varizes":this.varizes,
      "varizesgrau":this.varizesGrau,
      "lesoes":this.lesoes,
      "lesoesquais":this.lesoesQuais,
      "hipertensao":this.hipertensao,
      "hipotensao":this.hipotensao,
      "epilepsia":this.epilepsia,
      "diabetes":this.diabetes,
      "autoimune":this.autoimune,
      "autoimunequal":this.autoimuneQual,
      "observacao":this.observacao,
      "avisar":this.avisar,
      "nome":this.nome,
      "telefone":this.telefone,
      "medico":this.medico,
      "telefonemedico":this.telefoneMedico,
      "convenio":this.convenio,
      "cart":this.cart,
      "hospital":this.hospital,
    }

    console.log(saude);

    let loading = this.loadingCtrl.create({
      content : "Registrando a avaliação e enviando para o seu email",
    });

    loading.present();

  let api = 'https://lipolysis.grupoanx.com.br/profissional/formularios/saude.php';

  let headers: Headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post(
      api,
      saude,
      new RequestOptions({ headers: headers })
    ).subscribe(
        res => {
          console.log(res.json());

          let retorno = res.json();

          if( retorno == "sucesso"){
            loading.dismiss();
            this.alertCtrl.create({
              subTitle : "Avaliação já registrada no banco e enviada para o seu email, caso não encontre na caixa de entrada verifique no caixa de spam",
              buttons : [{
                text: "OK",
                handler: () => {
                   this.navCtrl.push(PSessoesPage,{
                     "id": this.cliente,
                     "tratamento":this.tratamento,
                     "sexo":this.sexo,
                     "data":this.data,
                     "hora":this.hora,
                     'id_cadastro': this.navParams.get('id_cadastro'),
                     'permissao': this.navParams.get('permissao')
                   })
                 }
              }]
            }).present();
          }else if ( retorno == "erro"){
            loading.dismiss();

            this.alertCtrl.create({
              title: 'Ops .. Algo deu errado',
              subTitle : "Tivemos um problema para salvar seu teste.",
              buttons : [{
                text: "OK",
              }]
            }).present();
          }else if ( retorno != "erro" && retorno != "sucesso"){
            loading.dismiss();
            this.alertCtrl.create({
              title: 'Ops .. Algo deu errado',
              subTitle : "Tivemos um problema para salvar seu teste.",
              buttons : [{
                text: "OK",
              }]
            }).present();
          }
        },
        err => {
          console.log(err.json());
          loading.dismiss();

          this.alertCtrl.create({
            title: 'Ops .. Algo deu errado',
            subTitle : "Ocorreu um erro ao salvar o resultado do teste no banco de dados.",
            buttons : [{
              text: "OK",
            }]
          }).present();
        }
      );

}

}

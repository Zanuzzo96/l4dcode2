import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcImcPage } from '../ac-imc/ac-imc';

/**
 * Generated class for the AcLipodistrofiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ac-lipodistrofia',
  templateUrl: 'ac-lipodistrofia.html',
})
export class AcLipodistrofiaPage {

  sexo = this.navParams.get('sexo');
  cliente = this.navParams.get('cliente');
  hldgTipo = this.navParams.get('hldgTipo');
  hldgGrau = this.navParams.get('hldgGrau');
  hldgLocal = this.navParams.get('hldgLocal');
  hldgColoracao = this.navParams.get('hldgColoracao');
  hldgTemp = this.navParams.get('hldgTemp');
  hldgPalpacao = this.navParams.get('hldgPalpacao');
  edemaPressao = this.navParams.get('edemaPressao');
  edemaMmii = this.navParams.get('edemaMmii');
  edemaObs = this.navParams.get('edemaObs');
  tratamento = this.navParams.get('tratamento');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  public lipodistrofia = {
    "gordura":"",
    "distribuicao":"",
    "localizacao":"",
    "biotipo":""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcLipodistrofiaPage', this.cliente);
    console.log(this.data)
    console.log(this.hora)
    console.log('id cadastro', this.navParams.get('id_cadastro'));
    console.log('permissao ', this.navParams.get('permissao'));

  }

  continuar(){
    this.navCtrl.push(AcImcPage,{
      sexo: this.sexo,
      cliente: this.cliente,
      hldgTipo: this.hldgTipo,
      hldgGrau: this.hldgGrau,
      hldgLocal: this.hldgLocal,
      hldgColoracao: this.hldgColoracao,
      hldgTemp: this.hldgTemp,
      hldgPalpacao: this.hldgPalpacao,
      edemaPressao: this.edemaPressao,
      edemaMmii: this.edemaMmii,
      edemaObs: this.edemaObs,
      lipoGordura: this.lipodistrofia.gordura,
      lipoDistribuicao: this.lipodistrofia.distribuicao,
      lipoLocalizacao: this.lipodistrofia.localizacao,
      lipoBiotipo: this.lipodistrofia.biotipo,
      tratamento: this.tratamento,
      data:this.data,
      hora:this.hora,
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    })


  }

}

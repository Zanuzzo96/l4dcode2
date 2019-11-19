import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UHomePage } from '../u-home/u-home';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@IonicPage()
@Component({
  selector: 'page-diario-concluido',
  templateUrl: 'diario-concluido.html',
})
export class DiarioConcluidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {

      let diario = {
        "dia":this.navParams.get('dia'),
        "sono":this.navParams.get('sono'),
        "agua":this.navParams.get('agua'),
        "rd":this.navParams.get('rd'),
        "alimentacao":this.navParams.get('alimentacao'),
        "nutricao":this.navParams.get('nutricao'),
        "fisico":this.navParams.get('fisico'),
        "fumante":this.navParams.get('fumante'),
        'id_cadastro': this.navParams.get('id_cadastro'),
      }

      console.log(diario);

      let api = 'https://lipolysis.grupoanx.com.br/usuario/diario.php';

      let headers: Headers = new Headers();
        headers.append('Content-type','application/json');

        this.http.post( api, diario, new RequestOptions({ headers: headers })
        ).subscribe(
            res => {
              console.log(res.json())
            },
            err => {
              console.log(err.json())
            }
          );

  }

  ionViewDidLoad() { console.log('ionViewDidLoad DiarioConcluidoPage'); }

  proximo(){
    this.navCtrl.push(UHomePage,{
      'id_cadastro': this.navParams.get('id_cadastro'),
      'permissao': this.navParams.get('permissao')
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PSessoesPage } from '../p-sessoes/p-sessoes';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@IonicPage()
@Component({
  selector: 'page-p-agenda',
  templateUrl: 'p-agenda.html',
})
export class PAgendaPage {

  dadosClientes:any;
  retornoAgenda:any;
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public http: Http) {

                let loading = this.loadingCtrl.create({content : "Carregando sua agenda"});
                loading.present();


                  let api = 'https://lipolysis.grupoanx.com.br/profissional/agenda.php?profissional=' + this.id_cadastro;

                    this.http.get(api).toPromise().then((resp)=>{
                      this.retornoAgenda = resp.json();
                      console.log(resp.json())
                      loading.dismiss();
                    }).catch((resp)=>{
                      console.log(resp);
                      loading.dismiss();
                    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PAgendaPage');
  }

  sessoes(id,sexo,tratamento,data,hora){
    this.navCtrl.push(PSessoesPage,{
      "id":id,
      "sexo":sexo,
      "tratamento":tratamento,
      "data":data,
      "hora":hora,
      'id_cadastro': this.id_cadastro,
      'permissao': this.permissao
    })
  }

}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SaudePg1Page } from '../saude-pg1/saude-pg1';
import { SeInicioPage } from '../se-inicio/se-inicio';
import { AcInicioPage } from '../ac-inicio/ac-inicio';
import { ProfissionalPage } from '../profissional/profissional';
import { AgendaPage } from '../agenda/agenda';
import { ImagemSessaoPage } from '../imagem-sessao/imagem-sessao';
import { IniciarTratamentoPage } from '../iniciar-tratamento/iniciar-tratamento';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ChartsProvider } from '../../providers/charts/charts';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-p-sessoes',
  templateUrl: 'p-sessoes.html',
})
export class PSessoesPage {

  @ViewChild('lineCanvas') lineCanvas;

  cliente = this.navParams.get('id');
  id_tratamento = this.navParams.get('tratamento');
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');
  configuracao:any;
  orientacao: any;
  peso: any;
  metaApi;
  pesoApi;
  sessoesApi;
  contsessoesApi;

  grafico:any;

  chart = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private charts: ChartsProvider,
  ) {

    if(this.id_tratamento){
      this.configuracao = 0;

      //busca das meta - sessoes - e peso atual
          let loading = this.loadingCtrl.create({ content : "Carregando dados da sessão", })
          loading.present();

          let api1 = 'https://lipolysis.grupoanx.com.br/profissional/meta.php?cliente=' + this.cliente +'&tratamento=' + this.id_tratamento;
            this.http.get(api1).toPromise().then((resp)=>{
              loading.dismiss();
              this.metaApi = resp.json()[0].meta;
              this.pesoApi = resp.json()[0].peso;
              this.sessoesApi = resp.json()[0].sessoes;
              this.contsessoesApi = resp.json()[0].contsessoes;
            }).catch((resp)=>{
              loading.dismiss();
              console.log(resp);
            });



    }else{
      this.configuracao = 1;
    }





  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PSessoesPage');
    console.log("cliente",this.cliente)
    console.log("tratamento", this.id_tratamento)
    console.log("sexo", this.sexo)
    console.log("data", this.data)
    console.log("hora", this.hora)
    console.log('id cadastro', this.id_cadastro);
    console.log('permissao ', this.permissao);

    this.charts.buscarDados(this.cliente,this.id_tratamento).then(res => {
      let resposta = res.json();
      let peso = resposta.map(resposta => resposta.peso)
      let datas = resposta.map(resposta => resposta.data)

      console.log(res.json())



      this.chart = new Chart(this.lineCanvas.nativeElement,{
        type: 'line',
        data:{
          labels:datas,
          datasets: [
            {
              data: peso,
              borderColor: '#f89e33',
              fill: false,
              spanGaps: false,
            }
          ]
        },
        options: {
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes:[{
              display: true
            }]
          }
        }
      })

    }).catch((res) => {
     console.log(res)
    });

  }

        sair(){
          this.navCtrl.push(ProfissionalPage,{
            'id_cadastro': this.navParams.get('id_cadastro'),
            'permissao': this.navParams.get('permissao')
          })
        }

        corporal(){
          this.navCtrl.push(AcInicioPage,{
            "user":this.cliente,
            "sexo":this.sexo,
            "tratamento":this.id_tratamento,
            "data":this.data,
            "hora":this.hora,
            'id_cadastro': this.navParams.get('id_cadastro'),
            'permissao': this.navParams.get('permissao')
          })
        }

        saude(){
          this.navCtrl.push(SaudePg1Page,{
            "user":this.cliente,
            "sexo":this.sexo,
            "tratamento":this.id_tratamento,
            "data":this.data,
            "hora":this.hora,
            'id_cadastro': this.navParams.get('id_cadastro'),
            'permissao': this.navParams.get('permissao')
          })
        }

        sedentarismo(){
          this.navCtrl.push(SeInicioPage,{
            "id_user":this.cliente,
            "tratamento":this.id_tratamento,
            "sexo":this.sexo,
            "data":this.data,
            "hora":this.hora,
            'id_cadastro': this.navParams.get('id_cadastro'),
            'permissao': this.navParams.get('permissao')
          })
        }

        imagem(){
          this.navCtrl.push(ImagemSessaoPage,{
            "id_user":this.cliente,
            "id_tratamento":this.id_tratamento,
            "sexo":this.sexo,
            "data":this.data,
            "hora":this.hora,
            'id_cadastro': this.navParams.get('id_cadastro'),
            'permissao': this.navParams.get('permissao')
          })
        }
/*
        agendar(){
          this.navCtrl.push(AgendaPage,{
            "id":this.cliente,
            "tratamento":this.id_tratamento,
            'id_cadastro': this.navParams.get('id_cadastro'),
            'permissao': this.navParams.get('permissao')
          })
        }
*/
        tratamento(){
          this.navCtrl.push(IniciarTratamentoPage,{
            "id_user":this.cliente,
            'id_cadastro': this.navParams.get('id_cadastro'),
            'permissao': this.navParams.get('permissao')
          })
        }

        concluir(){

          console.log(this.orientacao);
          console.log(this.peso)

          if(this.orientacao == undefined || this.orientacao == "" || this.peso == undefined || this.peso == ""){
            this.alertCtrl.create({
              subTitle : "Faltou preencher algo",
              message : "Você deixou de preencher o campo peso, informando o peso atual do(a) cliente ou deixou de preencher o campo orientações, informando o que foi orientado ao cliente nessa sessão",
              buttons : [{
                text: "OK"
              }]
            }).present();

          }else{

            let conclusao = {
              "data": this.data,
              "hora":this.hora,
              "orientacao": this.orientacao,
              "peso": this.peso,
              "cliente": this.cliente,
              "tratamento": this.id_tratamento
            }

            let loading = this.loadingCtrl.create({content : "Concluindo sessão"});

            loading.present();

            let api = 'https://lipolysis.grupoanx.com.br/profissional/concluirSessao.php';
            let headers: Headers = new Headers();
              headers.append('Content-type','application/json');

              return this.http.post(
                api,
                conclusao,
                new RequestOptions({ headers: headers })
              ).subscribe(
                  res => {
                    console.log(res.json());
                    let retorno = res.json();

                      if(retorno == "sucesso"){
                        loading.dismiss()

                        this.alertCtrl.create({
                          subTitle : "Sessão concluida com sucesso",
                          buttons : [{
                            text: "OK",
                            handler: () => {
                              this.navCtrl.push(AgendaPage,{
                                "id":this.cliente,
                                "tratamento":this.id_tratamento,
                                'id_cadastro': this.navParams.get('id_cadastro'),
                                'permissao': this.navParams.get('permissao')
                              })
                            }
                          }]
                        }).present();
                      }else{
                        loading.dismiss()

                        this.alertCtrl.create({
                          subTitle : "Não conseguimos concluir a sessão, tente novamente",
                          buttons : [{
                            text: "OK",
                          }]
                        }).present();
                      }
                  },
                  err => {
                    loading.dismiss()

                    console.log(err.json());
                  }
              );

          }
      }

}

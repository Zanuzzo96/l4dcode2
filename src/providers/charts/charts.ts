import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChartsProvider {

  constructor(public http: Http) {}

  buscarDados(cliente,tratamento){
      let api = 'https://lipolysis.grupoanx.com.br/profissional/grafico.php?cliente=' + cliente + '&tratamento=' + tratamento;
    return this.http.get(api).toPromise();
  }



}

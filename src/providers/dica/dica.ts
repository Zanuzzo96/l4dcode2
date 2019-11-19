import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DicaProvider {

  constructor(public http: Http) { }

  dicasFree(){
    let api = 'https://lipolysis.grupoanx.com.br/usuario/dica.php?dica=1';
    return this.http.get(api).toPromise();
  }

  dicasPremium(){
    let api = 'https://lipolysis.grupoanx.com.br/usuario/dica.php?dica=2';
    return this.http.get(api).toPromise();
  }

}

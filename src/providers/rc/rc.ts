import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RcProvider {

  constructor(public http: Http) {
    console.log('Hello RcProvider Provider');
  }

  verificarRegistro(registro : number) {
    console.log(registro);
    let api = 'https://lipolysis.grupoanx.com.br/profissional/perfil/ValidarRc.php?registro='+registro;

    return this.http.get(api).toPromise();
  }

}

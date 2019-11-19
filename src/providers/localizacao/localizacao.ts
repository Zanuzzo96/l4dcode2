
import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocalizacaoProvider {

  constructor(public http: Http) {}

  userlocation(id) {
    console.log(id);
    let api = 'https://lipolysis.grupoanx.com.br/usuario/localizarProfissional.php?user='+id;
    return this.http.get(api).toPromise();
  }

  profissionallocation(cidade,id){
    let api = 'https://lipolysis.grupoanx.com.br/usuario/localizarProfissional.php?cidade=' + cidade + '&cliente=' + id;
    return this.http.get(api).toPromise();
  }

  buscaProfissional(busca){
    let api = 'https://lipolysis.grupoanx.com.br/usuario/localizarProfissional.php?busca='+ busca;
    return this.http.get(api).toPromise();
  }

}

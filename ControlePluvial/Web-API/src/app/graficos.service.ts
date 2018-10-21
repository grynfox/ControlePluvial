import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GraficosService {

  constructor(private _http: HttpClient) {}

  graficoMensal() {
    return this._http.get('http://localhost:64000/API/Reports/getMes')
      .map(result => result);

   }
  }

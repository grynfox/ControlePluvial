import { HttpHelper } from './../utils/HttpHelper';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { NgModel } from '@angular/forms';
          // tslint:disable:prefer-const
@Injectable()
export class CadastroService extends HttpHelper {
  private _cadastraArduino = 'Arduino/CadastraArduino';
  private _buscaArduino = 'Arduino/GetArduino';
  private _contagem = 'Reports/GetContaPulso';
  private _contagemGeral = 'Reports/GetReports';
  private _delArd = 'Arduino/ApagaArd';
  private _altArd = 'Arduino/AlteraArd';
  private _reportMes = 'Reports/getMes';
  private _reportMesDisp = 'Reports/getMesDisp';
  private _reportPulsosDisp = 'Reports/GetPulsoIdLora';
  constructor( http: Http) {
    super(http);
  }


  cadastraArduino(NomeArdParam: string) {
    let result = this.postaction(this._cadastraArduino, { NomeArd: NomeArdParam}).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let arduino = <any>result;
          return arduino;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }

  alteraArd( IdLoraParam: Number, NomeArdParam: string) {
    let result = this.putaction(this._altArd + `?IdLora=${IdLoraParam}`, { NomeArd: NomeArdParam, }).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let busca = <any>result;
          return busca;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }
  buscaArduino(IdLoraParam: Number, NomeArdParam: string ) {
    let result = this.getaction(this._buscaArduino, { NomeArd: NomeArdParam, IdLora: IdLoraParam}).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let busca = <any>result;
          return busca;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }
  contagem(IdLoraParam: number, valorLido: number) {
    let result = this.getaction(this._contagem, {IdLora: IdLoraParam}).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let busca = <any>result;
          return busca;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }
  contagemGeral(IdLoraParam: number, codFluxParam: number, dataPulsoParam: Date) {
    let result = this.getaction(this._contagemGeral, {IdLora: IdLoraParam }).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let busca = <any>result;
          return busca;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }

  apagaArd(IdLoraParam: number ) {
    let result = this.deleteaction(this._delArd, { IdLora: IdLoraParam }).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let busca = <any>result;
          return busca;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }
  reportMensal(dataPulsoInicio: Date, dataPulsoFinal: Date) {
    let result = this.getaction(this._reportMes,
      { dataPulsoInicio: dataPulsoInicio, dataPulsoFinal: dataPulsoFinal}).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let busca = <any>result;
          return busca;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }
  reportMensalDisp(idLoraParam: number, dataPulsoInicioParam: Date, dataPulsoFinalParam: Date) {
    let result = this.getaction(this._reportMesDisp,
      { IdLora: idLoraParam, dataPulsoInicio: dataPulsoInicioParam, dataPulsoFinal: dataPulsoFinalParam}).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let busca = <any>result;
          return busca;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }
  reportPulsosDisp(codFluxParam: number, dataPulsoParam: Date, idLoraParam: number, nomeArdParam: string) {
    let result = this.getaction(this._reportPulsosDisp,
      { codFlux: codFluxParam, dataPulso: dataPulsoParam, IdLora: idLoraParam, NomeArd: nomeArdParam}).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let busca = <any>result;
          return busca;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }
}

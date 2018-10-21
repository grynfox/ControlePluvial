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
  private _buscaProdutos = 'Produto/GetProdutos';
  private _contagem = 'Reports/GetContaPulso';
  private _delArd = 'Arduino/apagaArd';
  private _altArd = 'Arduino/AlteraArd';
  private _altProd = 'Produto/AlteraProd';
  private _delProd = 'Produto/ApagaProd';
  private _reportProdCat = 'Reports/GetProdCat';
  private _reportMes = 'Reports/getMes';

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
  alteraProd( idProdParam: Number, nomeProdParam: string) {
    let result = this.putaction(this._altProd + `?IdProd=${idProdParam}`, { NomeProd: nomeProdParam, }).map(
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
  buscaProduto(idProdParam: number, nomeProdParam: string, IdLoraParam: number) {
    let result = this.getaction(this._buscaProdutos,
      { IdProd: idProdParam, NomeProd: nomeProdParam, IdLora: IdLoraParam}).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let busca = <any>result;
          return busca;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }
  contagem(IdLoraParam: number) {
    let result = this.getaction(this._contagem).map(
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

  apagaProd(idProdParam: number ) {
    let result = this.deleteaction(this._delProd, { IdProd: idProdParam }).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let busca = <any>result;
          return busca;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }
  reportProdCat(idProdParam: number, nomeProdParam: string, IdLoraParam: number, NomeArdParam: string) {
    let result = this.getaction(this._reportProdCat,
      { IdProd: idProdParam, NomeProd: nomeProdParam, IdLora: IdLoraParam, NomeArd: NomeArdParam}).map(
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

}

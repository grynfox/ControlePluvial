// tslint:disable:quotemark
import { CadastroService } from "./../services/cadastro.service";
import { Component, OnInit } from "@angular/core";
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import "rxjs/add/operator/map";
import { Http } from "@angular/http";
 import { Observable } from "rxjs/Observable";
import { NgModel } from "@angular/forms";
@Component({
  selector: "app-web-api",
  templateUrl: "./web-api.component.html",
  styleUrls: ["./web-api.component.css"]
})
export class WebApiComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  aba: string = "home";
  NomeArd: string;
  NomeProd: string;
  IdLora: number;
  IdProd: number;
  arduinos: any[];
  produtos: any[];
  show: boolean;
  relatorios: any[];

  constructor(private service: CadastroService) {
    this.buscarArduino();
    this.buscarProdutos();

  }

  cadastrarArduino() {
    this.service
      .cadastraArduino(this.NomeArd)
      .subscribe(retorno => alert(retorno));
  }
  cadastrarProduto() {
    this.service
      .cadastraProduto(this.NomeProd, this.IdLora)
      .subscribe(retorno => alert(retorno));
  }

  alterarArd() {
    this.service
      .alteraArd(this.IdLora, this.NomeArd)
      .subscribe(retorno => alert(retorno));
      this.buscarArduino();
  }
  alterarProd() {
    this.service
      .alteraProd(this.IdProd, this.NomeProd)
      .subscribe(retorno => alert(retorno));
      this.buscarProdutos();
  }
  buscarArduino() {
    this.service
      .buscaArduino(this.IdLora, this.NomeArd)
      .subscribe(retorno => (this.arduinos = retorno));
  }
  buscarProdutos() {
    this.service
      .buscaProduto(this.IdProd, this.NomeProd, this.IdLora)
      .subscribe(retorno => (this.produtos = retorno));
  }
  apagarArd() {
    this.service
      .apagaArd(this.IdLora)
      .subscribe(retorno => (this.arduinos = retorno));
      this.buscarArduino();
  }
  apagarProd() {
    this.service.apagaProd(this.IdProd).subscribe(retorno => {
      this.produtos = retorno;
      this.buscarProdutos();
    });
  }
  reportsProdCat() {
    this.service.reportProdCat(this.IdProd, this.NomeProd, this.IdLora, this.NomeArd)
      .subscribe(retorno => (this.relatorios = retorno));
  }
  ngOnInit() {}
}

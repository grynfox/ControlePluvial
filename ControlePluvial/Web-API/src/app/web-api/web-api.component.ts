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
  NomeCat: string;
  NomeProd: string;
  IdCat: number;
  IdProd: number;
  categorias: any[];
  produtos: any[];
  show: boolean;
  relatorios: any[];

  constructor(private service: CadastroService) {
    this.buscarCategoria();
    this.buscarProdutos();

  }

  cadastrarCategoria() {
    this.service
      .cadastraCategoria(this.NomeCat)
      .subscribe(retorno => alert(retorno));
  }
  cadastrarProduto() {
    this.service
      .cadastraProduto(this.NomeProd, this.IdCat)
      .subscribe(retorno => alert(retorno));
  }

  alterarCat() {
    this.service
      .alteraCat(this.IdCat, this.NomeCat)
      .subscribe(retorno => alert(retorno));
      this.buscarCategoria();
  }
  alterarProd() {
    this.service
      .alteraProd(this.IdProd, this.NomeProd)
      .subscribe(retorno => alert(retorno));
      this.buscarProdutos();
  }
  buscarCategoria() {
    this.service
      .buscaCategoria(this.IdCat, this.NomeCat)
      .subscribe(retorno => (this.categorias = retorno));
  }
  buscarProdutos() {
    this.service
      .buscaProduto(this.IdProd, this.NomeProd, this.IdCat)
      .subscribe(retorno => (this.produtos = retorno));
  }
  apagarCat() {
    this.service
      .apagaCat(this.IdCat)
      .subscribe(retorno => (this.categorias = retorno));
      this.buscarCategoria();
  }
  apagarProd() {
    this.service.apagaProd(this.IdProd).subscribe(retorno => {
      this.produtos = retorno;
      this.buscarProdutos();
    });
  }
  reportsProdCat() {
    this.service.reportProdCat(this.IdProd, this.NomeProd, this.IdCat, this.NomeCat)
      .subscribe(retorno => (this.relatorios = retorno));
  }
  ngOnInit() {}
}

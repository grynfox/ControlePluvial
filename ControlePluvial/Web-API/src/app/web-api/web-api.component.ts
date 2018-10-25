// tslint:disable:quotemark
import { CadastroService } from "./../services/cadastro.service";
import { Component, OnInit } from "@angular/core";
import { Chart } from 'chart.js';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import "rxjs/add/operator/map";
import { GraficosService } from './../graficos.service';
import { DateFormatter } from "ngx-bootstrap";


@Component({
  selector: "app-web-api",
  templateUrl: "./web-api.component.html",
  styleUrls: ["./web-api.component.css"]
})

export class WebApiComponent implements OnInit {

  chart = [];
  // tslint:disable-next-line:no-inferrable-types
  aba: string = "home";
  NomeArd: string;
  NomeProd: string;
  IdLora: number;
  IdProd: number;
  arduinos: any[];
  produtos: any[];
  contagemDados: any[];
  contagem: number;
  codFlux: number;
  dataPulso: Date;
  show: boolean;
  relatorios: any[];
  dataPulsoInicio: Date;
  dataPulsoFinal: Date;
  DadosCarregados = false;
  lineChartData =  {
    chartType: 'LineChart',
    dataTable: [
      ['Data', 'Consumo'],
      ['2004',  '1000'],
      ['2005',  '1170'],
      ['2006',  '660'],
      ['2007',  '1030']
    ],
    options: {'title': 'Consumo de agua'},
  };
  barChartData =  {
    chartType: 'BarChart',
    dataTable: [
      ['Data', 'Consumo'],
      ['2004',  '1000'],
      ['2005',  '1170'],
      ['2006',  '660'],
      ['2007',  '1030']
    ],
    options: {'title': 'Consumo de agua'},
  };
  constructor(private service: CadastroService) {
     this.buscarArduino();
     this.contagemPulso();
     this.reportsMensalLineChart();
     this.reportsMensalBarChart();
     this.contagemGeral();

  }
  private newMethod() {
    this.reportsMensalLineChart();
  }

  contagemPulso() {
    this.service
      .contagem(this.IdLora, this.contagem)
      .subscribe(retorno => (this.contagem = retorno));
  }
  contagemGeral() {
    this.service
      .contagemGeral(this.IdLora, this.codFlux, this.dataPulso)
      .subscribe(retorno => (this.contagemDados = retorno));
  }
  cadastrarArduino() {
    this.service
      .cadastraArduino(this.NomeArd)
      .subscribe(retorno => alert(retorno));
  }


  alterarArd() {
    this.service
      .alteraArd(this.IdLora, this.NomeArd)
      .subscribe(retorno => alert(retorno));
      this.buscarArduino();
  }

  buscarArduino() {
    this.service
      .buscaArduino(this.IdLora, this.NomeArd)
      .subscribe(retorno => (this.arduinos = retorno));
  }
  apagarArd() {
    this.service
      .apagaArd(this.IdLora)
      .subscribe(retorno => (this.arduinos = retorno));
      this.buscarArduino();
  }

  reportsMensalLineChart() {
    this.DadosCarregados = false;
    this.service.reportMensal(this.dataPulsoInicio, this.dataPulsoFinal)
      .subscribe(retorno => {
        this.lineChartData.dataTable = [['Data', 'Consumo'], ...this.processaResposta(retorno)];
        this.DadosCarregados = true;
        console.log(this.lineChartData);
      });

  }
  reportsMensalBarChart() {
    this.DadosCarregados = false;
    this.service.reportMensal(this.dataPulsoInicio, this.dataPulsoFinal)
      .subscribe(retorno => {
        this.barChartData.dataTable = [['Data', 'Consumo'], ...this.processaResposta(retorno)];
        this.DadosCarregados = true;
        console.log(this.barChartData);
      });

  }
  AtualizaGrafico(){
    this.reportsMensalLineChart();
    this.reportsMensalBarChart();
  }
  processaResposta(retorno: Array<{Name: string, Value: number}>){
    const retProcessado = new Array<any>();

    retorno.forEach(row => {
      retProcessado.push([row.Name,row.Value]);
    });

    return retProcessado;
  }



  error(ev){
    console.log(ev);
  }


  ngOnInit() {




  }
}

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
  contagemDados: any[];
  contagem: number;
  codFlux: number;
  dataPulso: Date;
  show: boolean;
  relatorios: any[];
  dataPulsoInicio: Date;
  dataPulsoFinal: Date;
  DadosCarregados = false;
  DadosCarregadosData = false;
  DadosCarregadosDisp = false;
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
  pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['Data', 'Consumo'],
      ['Work',     '11'],
      ['Eat',      '2'],
      ['Commute',  '2'],
      ['Watch TV', '2'],
      ['Sleep',    '7']
    ],
    options: {'title': 'Consumo'},
  };
  constructor(private service: CadastroService) {
     this.buscarArduino();
     this.contagemPulso();
     this.reportsMensalLineChart();
     this.reportsMensalBarChart();
     this.reportsMensalPieChart();
     this.reportsMensalLineChartData();
     this.contagemGeral();

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
  reportsPulsosDisp() {
    this.service.reportPulsosDisp(this.codFlux, this.dataPulso, this.IdLora, this.NomeArd)
      .subscribe(retorno => (this.relatorios = retorno));
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
  reportsMensalLineChartData() {
    this.DadosCarregadosData = false;
    this.service.reportMensal(this.dataPulsoInicio, this.dataPulsoFinal)
      .subscribe(retorno => {
        this.lineChartData.dataTable = [['Data', 'Consumo'], ...this.processaResposta(retorno)];
        this.DadosCarregadosData = true;
        console.log(this.lineChartData);
      });

  }
  reportsMensalPieChart() {
    this.DadosCarregados = false;
    this.service.reportMensal(this.dataPulsoInicio, this.dataPulsoFinal)
      .subscribe(retorno => {
        this.pieChartData.dataTable = [['Data', 'Consumo'], ...this.processaResposta(retorno)];
        this.DadosCarregados = true;
        console.log(this.pieChartData);
      });

  }
  reportsMensalPieChartDisp() {
    this.DadosCarregadosDisp = false;
    this.service.reportMensalDisp(this.IdLora, this.dataPulsoInicio, this.dataPulsoFinal)
      .subscribe(retorno => {
        this.pieChartData.dataTable = [['Data', 'Consumo'], ...this.processaResposta(retorno)];
        this.DadosCarregadosDisp = true;
        console.log(this.pieChartData);
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
    this.reportsMensalPieChart();
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

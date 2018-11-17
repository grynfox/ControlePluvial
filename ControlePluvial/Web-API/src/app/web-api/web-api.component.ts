// tslint:disable:quotemark
import { CadastroService } from "./../services/cadastro.service";
import { Component, OnInit } from "@angular/core";
import { Chart } from 'chart.js';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import "rxjs/add/operator/map";


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
  datas: any[];
  contagemDados: any[];
  contagem: number;
  codFlux: number;
  dataPulso: Date;
  show: boolean;
  relatorios: any[];
  dataPulsoInicio: Date;
  dataPulsoFinal: Date;
  mesEAnoValue: Date;
  mesEAnoV: Date;
  DadosCarregados = false;
  DadosCarregadosData = false;
  DadosCarregadosDisp = false;
  DadosCarregadosMonth = false;
  DadosCarregadosHoraTotal = false;
  DadosCarregadosHoraDisp = false;
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
  monthChartData =  {
    chartType: 'BarChart',
    dataTable: [
      ['Mês', 'Consumo'],
      ['2004',  '1000'],
      ['2005',  '1170'],
      ['2006',  '660'],
      ['2007',  '1030']
    ],
    options: {'title': 'Consumo Total Mensal'},
  };
  monthLineChartData =  {
    chartType: 'LineChart',
    dataTable: [
      ['Mês', 'Consumo'],
      ['2004',  '1000'],
      ['2005',  '1170'],
      ['2006',  '660'],
      ['2007',  '1030']
    ],
    options: {'title': 'Consumo Total Mensal'},
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
     this.reportsMensalChartMonth();
     this.reportsLineChartMonth();
     //this.buscarData();

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
  buscarData() {
    this.service
      .buscaDatas(this.dataPulso)
      .subscribe(retorno => (this.datas = retorno));
      console.log(this.datas);
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
  reportsMensalChartMonth() {
    this.DadosCarregadosMonth = false;
    this.service.reportMonth()
      .subscribe(retorno => {
        this.monthChartData.dataTable = [['Mês', 'Consumo'], ...this.processaResposta(retorno)];
        this.DadosCarregadosMonth = true;
        console.log(this.monthChartData);
      });

  }
  reportsLineChartMonth() {
    this.DadosCarregadosMonth = false;
    this.service.reportMonth()
      .subscribe(retorno => {
        this.monthLineChartData.dataTable = [['Mês', 'Consumo'], ...this.processaResposta(retorno)];
        this.DadosCarregadosMonth = true;
        console.log(this.monthLineChartData);
      });

  }
  reportsLineChartHoraTotal() {
    this.DadosCarregadosHoraTotal = false;
    this.service.reportHoraTotal(this.mesEAnoValue)
      .subscribe(retorno => {
        this.lineChartData.dataTable = [['Hora', 'Consumo'], ...this.processaResposta(retorno)];
        this.DadosCarregadosHoraTotal = true;
        console.log(this.lineChartData);
      });

  }
  reportsLineChartHoraDisp() {
    this.DadosCarregadosHoraDisp = false;
    this.service.reportHoraDisp(this.IdLora, this.mesEAnoV)
      .subscribe(retorno => {
        this.lineChartData.dataTable = [['Hora', 'Consumo'], ...this.processaResposta(retorno)];
        this.DadosCarregadosHoraDisp = true;
        console.log(this.lineChartData);
      });

  }
  reportsMensalLineChartData() {
    this.DadosCarregadosData = false;
    this.service.reportMensalData(this.dataPulsoInicio, this.dataPulsoFinal)
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
AtualizaLista(){
  this.buscarArduino();
  this.contagemGeral();
}

  AtualizaGrafico() {
    this.reportsMensalLineChart();
    this.reportsMensalBarChart();
    this.reportsMensalChartMonth();
    this.reportsLineChartMonth();
  }
  processaResposta(retorno: Array<{Name: string, Value: number}>) {
    const retProcessado = new Array<any>();

    retorno.forEach(row => {
      retProcessado.push([row.Name, row.Value]);
    });

    return retProcessado;
  }



  error(ev) {
    console.log(ev);
  }


  ngOnInit() {




  }
}

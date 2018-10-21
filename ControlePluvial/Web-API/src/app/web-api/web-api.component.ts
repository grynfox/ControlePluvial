// tslint:disable:quotemark
import { CadastroService } from "./../services/cadastro.service";
import { Component, OnInit } from "@angular/core";
import { Chart } from 'chart.js';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import "rxjs/add/operator/map";
import { GraficosService } from './../graficos.service';
import { Observable } from "rxjs";


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
  contagem: number;
  show: boolean;
  relatorios: any[];
  dataPulsoInicio: Date;
  dataPulsoFinal: Date;
  DadosCarregados = false;

  chartData =  {
    chartType: 'LineChart',
    dataTable: [
      ['Data', 'Consumo'],
      ['2004',  1000],
      ['2005',  1170],
      ['2006',  660],
      ['2007',  1030]
    ],
    options: {'title': 'Consumo de agua'},
  };

  constructor(private service: CadastroService) {
     this.buscarArduino();
     this.contagemPulso();
     this.reportsMensal();

  }
  private newMethod() {
    this.reportsMensal();
  }

  contagemPulso() {
    this.service
      .contagem(this.contagem)
      .subscribe(retorno => (this.contagem = retorno));
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

  reportsMensal() {
    this.DadosCarregados = false;
    //Observable.of(this.fake)
    this.service.reportMensal(this.dataPulsoInicio, this.dataPulsoFinal)
      .subscribe(retorno => {
        this.chartData.dataTable = [['Data', 'Consumo'], ...this.processaResposta(retorno)];
        this.DadosCarregados = true;
        console.log(this.chartData);
      });

  }

  AtualizaGrafico(){
    this.reportsMensal();
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


  fake = [
      [
          "1/10/2018",
          25
      ],
      [
          "10/10/2018",
          3
      ],
      [
          "12/10/2018",
          13
      ],
      [
          "2/10/2018",
          16
      ],
      [
          "5/10/2018",
          19
      ],
      [
          "7/10/2018",
          13
      ],
      [
          "8/10/2018",
          13
      ],
      [
          "9/10/2018",
          9
      ]
  ];
  ngOnInit() {




  }
}

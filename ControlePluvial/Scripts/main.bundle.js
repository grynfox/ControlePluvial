webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-web-api></app-web-api>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.isCollapsed = true;
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cadastro_service__ = __webpack_require__("./src/app/services/cadastro.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web_api_web_api_component__ = __webpack_require__("./src/app/web-api/web-api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/bundles/ngx-bootstrap.es2015.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_google_charts__ = __webpack_require__("./node_modules/ng2-google-charts/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__web_api_web_api_component__["a" /* WebApiComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["b" /* CollapseModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
            // NgbModule.forRoot(),,
            __WEBPACK_IMPORTED_MODULE_9_ng2_google_charts__["a" /* Ng2GoogleChartsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientXsrfModule */].withOptions({
                cookieName: 'XSRF-TOKEN',
                headerName: 'X-XSRF-TOKEN'
            }),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_cadastro_service__["a" /* CadastroService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/services/cadastro.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_HttpHelper__ = __webpack_require__("./src/app/utils/HttpHelper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm2015/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// tslint:disable:prefer-const
let CadastroService = class CadastroService extends __WEBPACK_IMPORTED_MODULE_0__utils_HttpHelper__["a" /* HttpHelper */] {
    constructor(http) {
        super(http);
        this._cadastraArduino = 'Arduino/CadastraArduino';
        this._buscaArduino = 'Arduino/GetArduino';
        this._buscaData = 'Reports/GetHora';
        this._contagem = 'Reports/GetContaPulso';
        this._contagemGeral = 'Reports/GetReports';
        this._delArd = 'Arduino/ApagaArd';
        this._altArd = 'Arduino/AlteraArd';
        this._reportMes = 'Reports/getMes';
        this._reportMonth = 'Reports/getMesMonth';
        this._reportMesData = 'Reports/getMesData';
        this._reportMesDisp = 'Reports/getMesDisp';
        this._reportPulsosDisp = 'Reports/GetPulsoIdLora';
        this._reportHoraTotal = 'Reports/GetHoraDiaTotal';
        this._reportHoraDisp = 'Reports/GetHoraDiaDisp';
    }
    cadastraArduino(NomeArdParam) {
        let result = this.postaction(this._cadastraArduino, { NomeArd: NomeArdParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let arduino = result;
            return arduino;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    alteraArd(IdLoraParam, NomeArdParam) {
        let result = this.putaction(this._altArd + `?IdLora=${IdLoraParam}`, { NomeArd: NomeArdParam, }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    buscaArduino(IdLoraParam, NomeArdParam) {
        let result = this.getaction(this._buscaArduino, { NomeArd: NomeArdParam, IdLora: IdLoraParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    buscaDatas(dataPulsoParam) {
        let result = this.getaction(this._buscaData, { datePulso: dataPulsoParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    contagem(IdLoraParam, valorLido) {
        let result = this.getaction(this._contagem, { IdLora: IdLoraParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    contagemGeral(IdLoraParam, codFluxParam, dataPulsoParam) {
        let result = this.getaction(this._contagemGeral, { IdLora: IdLoraParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    apagaArd(IdLoraParam) {
        let result = this.deleteaction(this._delArd, { IdLora: IdLoraParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    reportMensal(dataPulsoInicio, dataPulsoFinal) {
        let result = this.getaction(this._reportMes, { dataPulsoInicio: dataPulsoInicio, dataPulsoFinal: dataPulsoFinal }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    reportMonth() {
        let result = this.getaction(this._reportMonth).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    reportHoraTotal(mesEAnoValueParam) {
        let result = this.getaction(this._reportHoraTotal, { mesEAnoValue: mesEAnoValueParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    reportHoraDisp(IdLoraParam, mesEAnoVParam) {
        let result = this.getaction(this._reportHoraDisp, { IdLora: IdLoraParam, mesEAnoV: mesEAnoVParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    reportMensalData(dataPulsoInicioParam, dataPulsoFinalParam) {
        let result = this.getaction(this._reportMesData, { dataPulsoInicio: dataPulsoInicioParam, dataPulsoFinal: dataPulsoFinalParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    reportMensalDisp(idLoraParam, dataPulsoInicioParam, dataPulsoFinalParam) {
        let result = this.getaction(this._reportMesDisp, { IdLora: idLoraParam, dataPulsoInicio: dataPulsoInicioParam, dataPulsoFinal: dataPulsoFinalParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    reportPulsosDisp(codFluxParam, dataPulsoParam, idLoraParam, nomeArdParam) {
        let result = this.getaction(this._reportPulsosDisp, { codFlux: codFluxParam, dataPulso: dataPulsoParam, IdLora: idLoraParam, NomeArd: nomeArdParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
};
CadastroService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], CadastroService);



/***/ }),

/***/ "./src/app/utils/HttpHelper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm2015/Rx.js");



class HttpHelper {
    constructor(_http) {
        this._http = _http;
        this._base = 'API/';
    }
    get haserror() {
        return this.errormsg != null;
    }
    obj_to_query(obj) {
        var parts = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }
        }
        return parts ? "?" + parts.join('&') : "";
    }
    getaction(path, body = null) {
        return this._http.get(this._base + path + this.obj_to_query(body))
            .map(res => {
            return res.json();
        })
            .catch(this._handleError);
    }
    deleteaction(path, body = null) {
        return this._http.delete(this._base + path + this.obj_to_query(body))
            .map(res => {
            return res.json();
        })
            .catch(this._handleError);
    }
    postaction(path, param = null) {
        this.errormsg = null;
        let body = JSON.stringify(param);
        let headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        let options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._base + path, body, options)
            .map(this._handleSuccess)
            .catch(this._handleError);
    }
    putaction(path, param = null) {
        this.errormsg = null;
        let body = JSON.stringify(param);
        let headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        let options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put(this._base + path, body, options)
            .map(this._handleSuccess)
            .catch(this._handleError);
    }
    _handleError(error) {
        if (error.status == 401) {
            localStorage.removeItem('currentUser');
            location.reload();
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error || 'Server error');
    }
    _handleSuccess(success) {
        var jsonresult = null;
        try {
            jsonresult = success.json();
        }
        catch (ex) {
            return success;
        }
        return jsonresult;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HttpHelper;



/***/ }),

/***/ "./src/app/web-api/web-api.component.css":
/***/ (function(module, exports) {

module.exports = ".menu-fixed{\r\n  top: 20px\r\n}\r\nhtml {\r\n  height: 100%;\r\n}\r\nbody {\r\n  min-height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n.content {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n.img-responsive{\r\n\tmax-width: 100%;\r\n}\r\n.fundo-header {\r\n\tbackground-image: url('https://i.imgur.com/DNsW8IB.jpg');\r\n\tbackground-size: cover;\r\n  background-position: top center;\r\n\twidth: 50%;\r\n\theight: 50%;\r\n}\r\n.banner-transparente {\r\n\tcolor: #FFF;\r\n\tbackground-color: rgba(0, 0, 0, .5);\r\n\tpadding: 20px;\r\n\twidth: 80%;\r\n\tborder-radius: 5px;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\t-webkit-transition: .3s;\r\n\ttransition: .3s;\r\n}\r\n@media(min-width: 992px) {\r\n\t.banner-transparente {\r\n\t\twidth: 50%;\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "./src/app/web-api/web-api.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"pt-br\">\r\n<body class=\"fixed-nav sticky-footer bg-dark\" id=\"page-top\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" id=\"mainNav\">\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand text-white bg-dark\" (click)=\"aba= 'home'\">Controle Pluvial</a>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n          <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" (click)=\"aba= 'graficos'\" target=\"_blank\">\r\n                  <i class=\"fa fa-tasks\"></i> Graficos</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n                <div class=\"dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"fa fa-sort\"></i> Pulsos</a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                            <a class=\"dropdown-item\" (click)=\"aba= 'reportPulsos'\" >Geral</a>\r\n                            <a class=\"dropdown-item\" (click)=\"aba= 'reportPulsosDisp'\">Por Dispositivo</a>\r\n                </div>\r\n                </div>\r\n\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" (click)=\"aba= 'dispositivos'\"  target=\"_blank\">\r\n                <i class=\"fa fa-microchip\"></i> Dispositivos</a>\r\n        </li>\r\n          </ul>\r\n        </div>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"aba= 'sobreNos'\">\r\n                Sobre Nós</button>\r\n            <a class=\"nav-link\" (click)=\"aba= 'config'\" target=\"_blank\">\r\n                    <i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\r\n        </form>\r\n\r\n      </div>\r\n    </nav>\r\n</body>\r\n<div class=\"content\">\r\n<form [ngSwitch]=\"aba\" style=\"background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255);\" >\r\n  <!--home !-->\r\n  <section *ngSwitchCase=\"'home'\">\r\n    <div class=\"container\">\r\n        <br>\r\n        <h3>Consumo Diário do Mês Atual</h3>\r\n        <br>\r\n        <google-chart [data]=\"lineChartData\" *ngIf=\"DadosCarregados\"  (chartError)='error($event)'></google-chart>\r\n        <br><br>\r\n      <h3>Sobre Controle Pluvial e Reaproveitamento Hídrico</h3>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <img class=\"img-responsive\" src=\"https://i.imgur.com/1PWrFcb.jpg\" href=\"\" alt=\"\">\r\n                <h5>Importancia do Reaproveitamento de Agua</h5>\r\n                <p class=\"lead\">\r\n                  A água tem tido protagonismo nas discussões ambientais em todo o mundo.\r\n                  O recurso, que até alguns anos era negligenciado por ser abundante na Terra,\r\n                  hoje é foco de inúmeras discussões já que seu uso descontrolado e os altos\r\n                  índices de poluição podem comprometer sua disponibilidade.</p>\r\n                <a class=\"btn btn-primary btn-lg\" href=\"https://www.pensamentoverde.com.br/meio-ambiente/o-reaproveitamento-da-agua-e-sustentabilidade/\" role=\"button\">Ver Mais</a>\r\n              </div>\r\n          <div class=\"col\">\r\n            <div class=\"accordion\" id=\"accordionExample\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingOne\">\r\n                  <h5 class=\"mb-0\">\r\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                      aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                        Dicas de uso do Sistema\r\n                    </button>\r\n                  </h5>\r\n                </div>\r\n\r\n                <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n                  <div class=\"card-body\">\r\n                    Verificar os gráficos diariamente pode ser fundamental para identificar possíveis gastos desnecessários,\r\n                     ou vazamentos.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingTwo\">\r\n                  <h5 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n                      aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                      Verificações Diarias\r\n                    </button>\r\n                  </h5>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n                  <div class=\"card-body\">\r\n                    Lembre-se de verificar constantemente a carga das baterias que alimentam os Arduinos,\r\n                    em caso de queda de energia elas os mantem ligados.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingThree\">\r\n                  <h5 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\"\r\n                      aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                      Atenção\r\n                    </button>\r\n                  </h5>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"collapse show\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body\">\r\n                      Certifique-se de que os ESP32 estão liberados pelo CRC.\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section *ngSwitchCase=\"'home'\">\r\n        <div class=\"container\">\r\n        <br><br>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"card\">\r\n              <img class=\"card-img-top\" src=\"https://i.imgur.com/ydECzI4.jpg\" alt=\"ESP32\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">ESP32 Lora</h5>\r\n                <p class=\"card-text\">Para este projeto utilizamos o ESP32 da Heltec Automation. Para ver como se deve configura-lo clique no botao abaixo</p>\r\n                <a href=\"https://jquery.com/\" target=\"blank\" class=\"btn btn-primary\">Clique Aqui</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"card\">\r\n              <img class=\"card-img-top\" src=\"https://i.imgur.com/BEbbRHW.png\" alt=\"GirHub\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">GitHub</h5>\r\n                <p class=\"card-text\">Este projeto esta no GitHub a maior plataforma de compartilhamento de código do mundo. Para acessar o projeto basta clicar no botão abaixo.</p>\r\n                <a href=\"https://github.com/grynfox/ControlePluvial\" target=\"blank\" class=\"btn btn-primary\">Clique Aqui</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"card\">\r\n              <img class=\"card-img-top\" src=\"https://i.imgur.com/Bl67KSJ.jpg\" alt=\"Hidrometro\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Hidrometro</h5>\r\n                <p class=\"card-text\">Saiba como os Hidrometros com leitura de pulso funcionam.</p>\r\n                <a href=\"https://www.w3schools.com/html/default.asp\" target=\"blank\" class=\"btn btn-primary\">Clique Aqui</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"card\">\r\n              <img class=\"card-img-top\" src=\"https://i.imgur.com/uHu8Qzb.png\" alt=\"Arduino\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">IoT Arduino</h5>\r\n                <p class=\"card-text\">Utilize Arduinos em seus projetos. A técnologia que anda de mãos dadas com a Internet of Things</p>\r\n                <a href=\"https://circuitdigest.com/internet-of-things-iot-projects\" target=\"blank\" class=\"btn btn-primary\">Clique Aqui</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </section>\r\n\r\n    <section *ngSwitchCase=\"'graficos'\">\r\n        <p></p>\r\n        <div class=\"container\">\r\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" (click)=\"AtualizaGrafico();\">Consumo Diário do Mês Atual</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\" (click)=\"AtualizaGrafico();\">Percentual Médio Diário ou Período </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\" (click)=\"AtualizaGrafico();\">Consumo Total por Mês</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\" id=\"hour-tab\" data-toggle=\"tab\" href=\"#hour\" role=\"tab\" aria-controls=\"hour\" aria-selected=\"false\" (click)=\"AtualizaGrafico();\">Consumo Total por Hora</a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"tab-content\" id=\"myTabContent\">\r\n          <div class=\"tab-pane show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\" >\r\n            <div class=\"container\">\r\n            <google-chart [data]=\"lineChartData\" *ngIf=\"DadosCarregados\"  (chartError)='error($event)'></google-chart>\r\n            <br>\r\n            <p></p>\r\n            <google-chart [data]=\"barChartData\" *ngIf=\"DadosCarregados\"  (chartError)='error($event)'></google-chart>\r\n          </div>\r\n          </div>\r\n          <div class=\"tab-pane\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\" >\r\n            <br>\r\n             <form class=\"form-inline\">\r\n                  <input class=\"form-control\"  [(ngModel)]= \"dataPulsoInicio\" id=\"dataPulsoInicio\" name=\"dataPulsoInicio\" type=\"date\" (ngModelChange)=\"dataPulsoInicio = $event\" required>\r\n                  <input class=\"form-control\"  [(ngModel)]= \"dataPulsoFinal\" id=\"dataPulsoFinal\" name=\"dataPulsoFinal\" type=\"date\" (ngModelChange)=\"dataPulsoFinal = $event\" required>\r\n\r\n                  <a class=\"btn btn-primary\" (click)=\"reportsMensalLineChartData(dataPulsoInicio, dataPulsoFinal);\">Gerar Relatorio</a>\r\n              </form>\r\n                <google-chart [data]=\"lineChartData\" *ngIf=\"DadosCarregadosData\"  (chartError)='error($event)'></google-chart>\r\n                <br>\r\n                <form class=\"form-inline\">\r\n              <select [(ngModel)]=\"IdLora\" class=\"form-control\"  name=\"categorias\">\r\n                  <option *ngFor=\"let busca of arduinos\" [value]=\"busca.IdLora\">{{busca.IdLora}} | {{busca.NomeArd}}</option>\r\n              </select>\r\n              <a class=\"btn btn-primary\" (click)=\"reportsMensalPieChartDisp(IdLora); \">Gerar Relatorio</a>\r\n              </form>\r\n              <br>\r\n              <google-chart [data]=\"pieChartData\" *ngIf=\"DadosCarregadosDisp\"  (chartError)='error($event)'></google-chart>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\" >\r\n                <google-chart [data]=\"monthChartData\" *ngIf=\"DadosCarregadosMonth\"  (chartError)='error($event)'></google-chart>\r\n                  <br>\r\n                <google-chart [data]=\"monthLineChartData\" *ngIf=\"DadosCarregadosMonth\"  (chartError)='error($event)'></google-chart>\r\n          </div>\r\n          <div class=\"tab-pane\" id=\"hour\" role=\"tabpanel\" aria-labelledby=\"hour-tab\" >\r\n            <br>\r\n            <form class=\"form-inline\">\r\n              <input class=\"form-control\"  [(ngModel)]= \"mesEAnoValue\" id=\"mesEAnoValue\" name=\"mesEAnoValue\" type=\"date\" (ngModelChange)=\"mesEAnoValue = $event\" required>\r\n              <a class=\"btn btn-primary\" (click)=\"reportsLineChartHoraTotal(mesEAnoValue);\">Gerar Relatorio</a>\r\n           </form>\r\n           <google-chart [data]=\"lineChartData\" *ngIf=\"DadosCarregadosHoraTotal\"  (chartError)='error($event)'></google-chart>\r\n                <br>\r\n                <p></p>\r\n                <form class=\"form-inline\">\r\n                <select [(ngModel)]=\"IdLora\" class=\"form-control\"  name=\"categorias\">\r\n                    <option *ngFor=\"let busca of arduinos\" [value]=\"busca.IdLora\">{{busca.IdLora}} | {{busca.NomeArd}}</option>\r\n                </select>\r\n                <input class=\"form-control\"  [(ngModel)]= \"mesEAnoV\" id=\"mesEAnoV\" name=\"mesEAnoV\" type=\"date\" (ngModelChange)=\"mesEAnoV = $event\" required>\r\n                <a class=\"btn btn-primary\" (click)=\"reportsLineChartHoraDisp(IdLora, mesEAnoV); \" (ngModelChange)=\"IdLora = $event\">Gerar </a>\r\n                </form>\r\n                <google-chart [data]=\"lineChartData\" *ngIf=\"DadosCarregadosHoraDisp\"  (chartError)='error($event)'></google-chart>\r\n        </div>\r\n          </div>\r\n      </div>\r\n        </section>\r\n\r\n<section *ngSwitchCase=\"'config'\">\r\n  <div class=\"container\">\r\n      <br>\r\n  <a class=\"btn btn-primary\" (click)=\"AtualizaGrafico(); AtualizaLista();\">Atualizar </a>\r\n  </div>\r\n\r\n</section>\r\n\r\n<!--Relatorios!-->\r\n<section *ngSwitchCase=\"'dispositivos'\">\r\n<div class=\"container\" >\r\n    <div class=\"card text-center\">\r\n        <div class=\"card-header\">\r\n              <a class=\"nav-link active\">Dispositivos   <a class=\"btn btn-primary\" (click)=\"AtualizaLista();\">Atualizar </a></a>\r\n\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th scope=\"col\">Codigo Dipositivo</th>\r\n                          <th scope=\"col\">Dispositivo</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let busca of arduinos\">\r\n                          <td> {{busca.IdLora}} </td>\r\n                          <td>{{busca.NomeArd}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                      </table>\r\n                      </div>\r\n              </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<section *ngSwitchCase=\"'dispositivos'\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col\">\r\n              <div class=\"card card-register mx-auto mt-5\">\r\n                <div class=\"card-header text-center\">Cadastro de Dispositivos</div>\r\n                <div class=\"card-body\">\r\n                  <form>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-row\">\r\n                        <div class=\"col-md-12\">\r\n                          <label for=\"NomeArd\">Dispositivo</label>\r\n                          <input class=\"form-control\" id=\"NomeArd\" name=\"NomeArd\" type=\"text\" placeholder=\"Digite o nome do dispositivo\"[(ngModel)]=\"NomeArd\" required>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <a class=\"btn btn-primary btn-block\" (click)=\"cadastrarArduino(NomeArd);\">Cadastrar</a>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        <div class=\"col\">\r\n            <div class=\"card card-register mx-auto mt-5\">\r\n              <div class=\"card-header text-center\">Alterar Descrição do Dispositivo</div>\r\n              <div class=\"card-body\">\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-row\">\r\n                          <div class=\"col-md-12\">\r\n                            <label for=\"NomeArd\">Dispositivo</label>\r\n                            <input class=\"form-control\"  [(ngModel)]= \"NomeArd\" id=\"NomeArd\" name=\"NomeArd\" type=\"text\" placeholder=\"Digite o novo nome do Dispositivo\" required>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"form-row\">\r\n                      <div class=\"col-md-12\">\r\n                        <label for=\"arduino\">Dispositivos</label>\r\n                          <div class=\"form-group\">\r\n                            <select [(ngModel)]=\"IdLora\" class=\"custom-select\"  name=\"arduino\">\r\n                                <option *ngFor=\"let busca of arduinos\" [value]=\"busca.IdLora\">{{busca.IdLora}} | {{busca.NomeArd}}</option>\r\n                            </select>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <a class=\"btn btn-primary btn-block\" (click)=\"alterarArd(IdLora); AtualizaLista();\">Alterar Descrição</a>\r\n                </form>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col\">\r\n                <div class=\"card card-register mx-auto mt-5\">\r\n                  <div class=\"card-header text-center\">Deletar Dispositivo</div>\r\n                  <div class=\"card-body\">\r\n                    <form>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"form-row\">\r\n                          <div class=\"col-md-12\">\r\n                            <label for=\"arduino\">Dispositivo</label>\r\n                              <div class=\"form-group\">\r\n                                <select [(ngModel)]=\"IdLora\" class=\"custom-select\"  name=\"arduino\">\r\n                                    <option *ngFor=\"let busca of arduinos\" [value]=\"busca.IdLora\">{{busca.IdLora}} | {{busca.NomeArd}}</option>\r\n                                </select>\r\n                              </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <a class=\"btn btn-primary btn-block\" (click)=\"apagarArd(IdLora); AtualizaLista();\">Deletar Dispositivo</a>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section *ngSwitchCase=\"'reportPulsosDisp'\">\r\n    <div class=\"container\">\r\n    <div class=\"card card-register mx-auto mt-5\">\r\n      <div class=\"card-header text-center\">Relatorio de Consumo Por Dispositivo</div>\r\n      <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n              <div class=\"col-md-12\">\r\n                <label for=\"arduinos\">Selecione o Dispositivo</label>\r\n                  <div class=\"form-group\">\r\n                    <select [(ngModel)]=\"IdLora\" class=\"select\"  name=\"arduinos\">\r\n                        <option *ngFor=\"let busca of arduinos\" [value]=\"busca.IdLora\">{{busca.IdLora}} | {{busca.NomeArd}}</option>\r\n                    </select>\r\n                    <a class=\"btn btn-primary\" (click)=\"reportsPulsosDisp(IdLora);\">Gerar Relatorio</a>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n        <form>\r\n          <div class=\"table-responsive\">\r\n              <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Cod Dispositivo</th>\r\n                    <th>Cod Pulso</th>\r\n                    <th>Data</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let busca of relatorios\">\r\n                    <td>{{busca.IdLora}} </td>\r\n                    <td>{{busca.codFlux}}</td>\r\n                    <td>{{busca.dataPulso}}</td>\r\n                  </tr>\r\n                </tbody>\r\n                </table>\r\n                </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </section>\r\n  <section *ngSwitchCase=\"'reportPulsos'\">\r\n  <div class=\"container\">\r\n    <div class=\"card text-center\">\r\n        <div class=\"card-header\">\r\n              <a class=\"nav-link active\">Pulsos  <a class=\"btn btn-primary\" (click)=\"AtualizaLista();\">Atualizar </a></a>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th scope=\"col\">Cod Dispositivo</th>\r\n                          <th scope=\"col\">Cod Contagem</th>\r\n                          <th scope=\"col\">Data</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let busca of contagemDados\">\r\n                          <td> {{busca.IdLora}} </td>\r\n                          <td> {{busca.codFlux}} </td>\r\n                          <td> {{busca.dataPulso}} </td>\r\n                        </tr>\r\n                      </tbody>\r\n                      </table>\r\n                      </div>\r\n              </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n  <section *ngSwitchCase=\"'sobreNos'\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n      <div class=\"col-12\">\r\n      <div class=\"card card-inverse\" style=\"background-color: rgb(255, 254, 254); border-color: rgb(255, 255, 255);\">\r\n      <div class=\"row\">\r\n      <div class=\"col\">\r\n        <br>\r\n      <h4 class=\"card-title\">Sistema de Controle Pluvial e Reuso Hidrico</h4>\r\n      <p class=\"card-text\"><strong>Idealizado: </strong> Claudio Faria, Igor Saraiva </p>\r\n      <p class=\"card-text\">Com os avanços tecnologicos existentes na area de controle, economia\r\n        e automação de processos a Puc Minas <i>campus</i> Poços de Caldas viu a necessidade de melhorar\r\n        seu controle pluvial, fazendo assim um sistema totalmente automatizado de controle. </p>\r\n      <p><strong>Tecnologias </strong>\r\n      <span class=\"badge bg-primary\">ASP.NET</span>\r\n      <span class=\"badge bg-info\">Angular</span>\r\n      <span class=\"badge bg-warning\">Bootstrap</span>\r\n      <span class=\"badge bg-success\">Entity Framework</span>\r\n      </p>\r\n      <div class=\"row\">\r\n        <div class=\"col text-center\">\r\n            <img class=\"btn-md\" src=\"https://i.imgur.com/1tA06lO.jpg\" alt=\"\" height=\"140\" width=\"140\" style=\"border-radius:40%;\">\r\n      </div>\r\n      <div class=\"col text-center\">\r\n          <img class=\"btn-md\" src=\"https://i.imgur.com/IeegpAv.jpg\" alt=\"\" height=\"140\" width=\"140\" style=\"border-radius:40%;\">\r\n\r\n      </div>\r\n    </div>\r\n        <div class=\"row\">\r\n            <div class=\"col text-center\">\r\n          <a href=\"https://www.linkedin.com/in/claudio-faria-60a76b143/\" target=\"blank\" class=\"btn btn-primary\"><span class=\"fa fa-linkedin\"></span> Claudio Faria</a>\r\n          </div>\r\n          <div class=\"col text-center\">\r\n              <a href=\"https://www.linkedin.com/in/igoralexandre/\" target=\"blank\" class=\"btn btn-primary\"><span class=\"fa fa-linkedin\"></span> Igor Saraiva</a>\r\n          </div>\r\n         </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n  </section>\r\n    </form>\r\n  </div>\r\n\r\n  </html>\r\n"

/***/ }),

/***/ "./src/app/web-api/web-api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebApiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cadastro_service__ = __webpack_require__("./src/app/services/cadastro.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable:quotemark


// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

let WebApiComponent = class WebApiComponent {
    constructor(service) {
        this.service = service;
        this.chart = [];
        // tslint:disable-next-line:no-inferrable-types
        this.aba = "home";
        this.DadosCarregados = false;
        this.DadosCarregadosData = false;
        this.DadosCarregadosDisp = false;
        this.DadosCarregadosMonth = false;
        this.DadosCarregadosHoraTotal = false;
        this.DadosCarregadosHoraDisp = false;
        this.lineChartData = {
            chartType: 'LineChart',
            dataTable: [
                ['Data', 'Consumo'],
                ['2004', '1000'],
                ['2005', '1170'],
                ['2006', '660'],
                ['2007', '1030']
            ],
            options: { 'title': 'Consumo de agua' },
        };
        this.barChartData = {
            chartType: 'BarChart',
            dataTable: [
                ['Data', 'Consumo'],
                ['2004', '1000'],
                ['2005', '1170'],
                ['2006', '660'],
                ['2007', '1030']
            ],
            options: { 'title': 'Consumo de agua' },
        };
        this.monthChartData = {
            chartType: 'BarChart',
            dataTable: [
                ['Mês', 'Consumo'],
                ['2004', '1000'],
                ['2005', '1170'],
                ['2006', '660'],
                ['2007', '1030']
            ],
            options: { 'title': 'Consumo Total Mensal' },
        };
        this.monthLineChartData = {
            chartType: 'LineChart',
            dataTable: [
                ['Mês', 'Consumo'],
                ['2004', '1000'],
                ['2005', '1170'],
                ['2006', '660'],
                ['2007', '1030']
            ],
            options: { 'title': 'Consumo Total Mensal' },
        };
        this.pieChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Data', 'Consumo'],
                ['Work', '11'],
                ['Eat', '2'],
                ['Commute', '2'],
                ['Watch TV', '2'],
                ['Sleep', '7']
            ],
            options: { 'title': 'Consumo' },
        };
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
    AtualizaLista() {
        this.buscarArduino();
        this.contagemGeral();
    }
    AtualizaGrafico() {
        this.reportsMensalLineChart();
        this.reportsMensalBarChart();
        this.reportsMensalChartMonth();
        this.reportsLineChartMonth();
    }
    processaResposta(retorno) {
        const retProcessado = new Array();
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
};
WebApiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
        selector: "app-web-api",
        template: __webpack_require__("./src/app/web-api/web-api.component.html"),
        styles: [__webpack_require__("./src/app/web-api/web-api.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_cadastro_service__["a" /* CadastroService */]])
], WebApiComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
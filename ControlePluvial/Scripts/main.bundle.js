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

module.exports = "<app-web-api></app-web-api>\r\n"

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
        this._buscaProdutos = 'Produto/GetProdutos';
        this._contagem = 'Reports/GetContaPulso';
        this._delArd = 'Arduino/apagaArd';
        this._altArd = 'Arduino/AlteraArd';
        this._altProd = 'Produto/AlteraProd';
        this._delProd = 'Produto/ApagaProd';
        this._reportProdCat = 'Reports/GetProdCat';
        this._reportMes = 'Reports/getMes';
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
    alteraProd(idProdParam, nomeProdParam) {
        let result = this.putaction(this._altProd + `?IdProd=${idProdParam}`, { NomeProd: nomeProdParam, }).map(
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
    buscaProduto(idProdParam, nomeProdParam, IdLoraParam) {
        let result = this.getaction(this._buscaProdutos, { IdProd: idProdParam, NomeProd: nomeProdParam, IdLora: IdLoraParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    contagem(IdLoraParam) {
        let result = this.getaction(this._contagem).map(
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
    apagaProd(idProdParam) {
        let result = this.deleteaction(this._delProd, { IdProd: idProdParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
            result => {
            let busca = result;
            return busca;
        }).catch(err => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    }
    reportProdCat(idProdParam, nomeProdParam, IdLoraParam, NomeArdParam) {
        let result = this.getaction(this._reportProdCat, { IdProd: idProdParam, NomeProd: nomeProdParam, IdLora: IdLoraParam, NomeArd: NomeArdParam }).map(
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
        this._base = "API/";
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

module.exports = ".menu-fixed{\r\n  top: 20px\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/web-api/web-api.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"fixed-nav sticky-footer bg-dark\" id=\"page-top\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" id=\"mainNav\">\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n      <a class=\"navbar-brand text-white bg-dark\" (click)=\"aba= 'home'\">Controle Pluvial</a>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n          <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\"  (click)=\"aba= 'reportProd'\">Fluxo Diario</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" (click)=\"aba= 'reportFluxoMensal'\">Fluxo Mensal</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" (click)=\"aba= 'reportCat'\">Dispositivos</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" (click)=\"aba= 'reportPulsos'\">Pulsos</a>\r\n          </li>\r\n          </ul>\r\n        </div>\r\n    </nav>\r\n\r\n\r\n</body>\r\n\r\n<form [ngSwitch]=\"aba\" >\r\n\r\n        <!--arduino !-->\r\n        <div class=\"container\" *ngSwitchCase=\"'cadastroCat'\">\r\n            <div class=\"card card-register mx-auto mt-5\">\r\n              <div class=\"card-header text-center\">Cadastra Categoria</div>\r\n              <div class=\"card-body\">\r\n                <form>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"form-row\">\r\n                      <div class=\"col-md-12\">\r\n                        <label for=\"NomeArd\">Categoria</label>\r\n                        <input class=\"form-control\" id=\"NomeArd\" name=\"NomeArd\" type=\"text\" placeholder=\"Digite o nome da categoria\"[(ngModel)]=\"NomeArd\" required>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <a class=\"btn btn-primary btn-block\" (click)=\"cadastrarArduino(NomeArd);\">Cadastrar Categoria</a>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"container\" *ngSwitchCase=\"'delCat'\">\r\n              <div class=\"card card-register mx-auto mt-5\">\r\n                <div class=\"card-header text-center\">Deleta Categoria</div>\r\n                <div class=\"card-body\">\r\n                  <form>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-row\">\r\n                        <div class=\"col-md-12\">\r\n                          <label for=\"arduino\">Categoria</label>\r\n                            <div class=\"form-group\">\r\n                              <select [(ngModel)]=\"IdLora\" class=\"custom-select\"  name=\"arduino\">\r\n                                  <option *ngFor=\"let busca of arduinos\" [value]=\"busca.IdLora\">{{busca.IdLora}} | {{busca.NomeArd}}</option>\r\n                              </select>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <a class=\"btn btn-primary btn-block\" (click)=\"apagarArd(IdLora);\">Deletar Categoria</a>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"container\" *ngSwitchCase=\"'altCat'\">\r\n                <div class=\"card card-register mx-auto mt-5\">\r\n                  <div class=\"card-header text-center\">Alterar Categoria</div>\r\n                  <div class=\"card-body\">\r\n                    <form>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-row\">\r\n                              <div class=\"col-md-12\">\r\n                                <label for=\"NomeArd\">Categoria</label>\r\n                                <input class=\"form-control\"  [(ngModel)]= \"NomeArd\" id=\"NomeArd\" name=\"NomeArd\" type=\"text\" placeholder=\"Digite o nome da categoria\" required>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"form-row\">\r\n                          <div class=\"col-md-12\">\r\n                            <label for=\"arduino\">Antiga Categoria</label>\r\n                              <div class=\"form-group\">\r\n                                <select [(ngModel)]=\"IdLora\" class=\"custom-select\"  name=\"arduino\">\r\n                                    <option *ngFor=\"let busca of arduinos\" [value]=\"busca.IdLora\">{{busca.IdLora}} | {{busca.NomeArd}}</option>\r\n                                </select>\r\n                              </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <a class=\"btn btn-primary btn-block\" (click)=\"alterarArd(IdLora);\">Alterar Categoria</a>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n<!--Relatorios!-->\r\n<div class=\"container\" *ngSwitchCase=\"'reportCat'\">\r\n    <div class=\"card text-center\">\r\n        <div class=\"card-header\">\r\n          <ul class=\"nav nav-tabs card-header-tabs\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\">Dispositivos</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th scope=\"col\">Codigo Dipositivo</th>\r\n                          <th scope=\"col\">Dispositivo</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let busca of arduinos\">\r\n                          <td> {{busca.IdLora}} </td>\r\n                          <td>{{busca.NomeArd}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                      </table>\r\n                      </div>\r\n              </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"container\" *ngSwitchCase=\"'reportPulsos'\">\r\n    <div class=\"card text-center\">\r\n        <div class=\"card-header\">\r\n          <ul class=\"nav nav-tabs card-header-tabs\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\">Pulsos</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th scope=\"col\">Litros Recebidos</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let busca of contagem\">\r\n                          <td> {{busca}} </td>\r\n                        </tr>\r\n                      </tbody>\r\n                      </table>\r\n                      </div>\r\n              </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n    <div class=\"container\" *ngSwitchCase=\"'reportFluxoMensal'\">\r\n\r\n      <div class=\"card card-register mx-auto mt-5\">\r\n        <div class=\"card-header text-center\">Relatorio Fluxo Mensal</div>\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n             <button (click)=\"AtualizaGrafico()\"> Atualizar </button>\r\n              <google-chart [data]=\"chartData\" *ngIf=\"DadosCarregados\"  (chartError)='error($event)'></google-chart>\r\n            </div>\r\n            <div class=\"table-responsive\">\r\n              <button (click)=\"AtualizaGrafico()\"> Atualizar </button>\r\n               <google-chart [data]=\"chartData\" *ngIf=\"DadosCarregados\"  (chartError)='error($event)'></google-chart>\r\n             </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-12 menu-fixed\" *ngSwitchCase=\"'home'\">\r\n      <div class=\"card text-center\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-bar-chart\"></i> Sistema de Controle Pluvial Puc Minas - Poços de Caldas</div>\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Igor Alexandre Saraiva Silva e Claudio Faria</h5>\r\n            <p class=\"card-text\"> Com os avanços tecnologicos existentes na area de controle, economia\r\n            e automação de processos a Puc Minas de Poços de Caldas viu a necessidade de melhorar\r\n            seu controle pluvial, fazendo assim um sistema totalmente automatizado de controle. </p>\r\n        </div>\r\n        <div class=\"card-footer small text-muted\">\r\n          <a href=\"https://www.linkedin.com/in/igoralexandre/\" class=\"btn-outline-info\">Linkedin - Igor Saraiva</a>\r\n          <a href=\"https://www.linkedin.com/in/igoralexandre/\" class=\"btn-outline-info\">Linkedin - Claudio Faria</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </form>\r\n\r\n"

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
        this.chartData = {
            chartType: 'LineChart',
            dataTable: [
                ['Data', 'Consumo'],
                ['2004', 1000],
                ['2005', 1170],
                ['2006', 660],
                ['2007', 1030]
            ],
            options: { 'title': 'Consumo de agua' },
        };
        this.fake = [
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
        this.buscarArduino();
        this.contagemPulso();
        this.reportsMensal();
    }
    newMethod() {
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
    AtualizaGrafico() {
        this.reportsMensal();
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
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isCollapsed = true;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cadastro_service__ = __webpack_require__("./src/app/services/cadastro.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web_api_web_api_component__ = __webpack_require__("./src/app/web-api/web-api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__web_api_web_api_component__["a" /* WebApiComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["b" /* CollapseModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                // NgbModule.forRoot(),
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
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/cadastro.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_HttpHelper__ = __webpack_require__("./src/app/utils/HttpHelper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CadastroService = /** @class */ (function (_super) {
    __extends(CadastroService, _super);
    function CadastroService(http) {
        var _this = _super.call(this, http) || this;
        _this._cadastraCategoria = 'Categoria/CadastraCategoria';
        _this._cadastraProduto = 'Produto/CadastraProduto';
        _this._buscaCategoria = 'Categoria/GetCategoria';
        _this._buscaProdutos = 'Produto/GetProdutos';
        _this._delCat = 'Categoria/apagaCat';
        _this._altCat = 'Categoria/AlteraCat';
        _this._altProd = 'Produto/AlteraProd';
        _this._delProd = 'Produto/ApagaProd';
        _this._reportProdCat = 'Reports/GetProdCat';
        return _this;
    }
    CadastroService.prototype.cadastraCategoria = function (nomeCatParam) {
        var result = this.postaction(this._cadastraCategoria, { NomeCat: nomeCatParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var categoria = result;
            return categoria;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.cadastraProduto = function (nomeProdParam, idCatParam) {
        var result = this.postaction(this._cadastraProduto, { NomeProd: nomeProdParam, IdCat: idCatParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.alteraCat = function (idCatParam, nomeCatParam) {
        var result = this.putaction(this._altCat + ("?idCat=" + idCatParam), { NomeCat: nomeCatParam, }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.alteraProd = function (idProdParam, nomeProdParam) {
        var result = this.putaction(this._altProd + ("?IdProd=" + idProdParam), { NomeProd: nomeProdParam, }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.buscaCategoria = function (idCatParam, nomeCatParam) {
        var result = this.getaction(this._buscaCategoria, { NomeCat: nomeCatParam, IdCat: idCatParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.buscaProduto = function (idProdParam, nomeProdParam, idCatParam) {
        var result = this.getaction(this._buscaProdutos, { IdProd: idProdParam, NomeProd: nomeProdParam, IdCat: idCatParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.apagaCat = function (idCatParam) {
        var result = this.deleteaction(this._delCat, { IdCat: idCatParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.apagaProd = function (idProdParam) {
        var result = this.deleteaction(this._delProd, { IdProd: idProdParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.reportProdCat = function (idProdParam, nomeProdParam, idCatParam, nomeCatParam) {
        var result = this.getaction(this._reportProdCat, { IdProd: idProdParam, NomeProd: nomeProdParam, IdCat: idCatParam, NomeCat: nomeCatParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], CadastroService);
    return CadastroService;
}(__WEBPACK_IMPORTED_MODULE_0__utils_HttpHelper__["a" /* HttpHelper */]));



/***/ }),

/***/ "./src/app/utils/HttpHelper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");



var HttpHelper = /** @class */ (function () {
    function HttpHelper(_http) {
        this._http = _http;
        this._base = "API/";
    }
    Object.defineProperty(HttpHelper.prototype, "haserror", {
        get: function () {
            return this.errormsg != null;
        },
        enumerable: true,
        configurable: true
    });
    HttpHelper.prototype.obj_to_query = function (obj) {
        var parts = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }
        }
        return parts ? "?" + parts.join('&') : "";
    };
    HttpHelper.prototype.getaction = function (path, body) {
        if (body === void 0) { body = null; }
        return this._http.get(this._base + path + this.obj_to_query(body))
            .map(function (res) {
            return res.json();
        })
            .catch(this._handleError);
    };
    HttpHelper.prototype.deleteaction = function (path, body) {
        if (body === void 0) { body = null; }
        return this._http.delete(this._base + path + this.obj_to_query(body))
            .map(function (res) {
            return res.json();
        })
            .catch(this._handleError);
    };
    HttpHelper.prototype.postaction = function (path, param) {
        if (param === void 0) { param = null; }
        this.errormsg = null;
        var body = JSON.stringify(param);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._base + path, body, options)
            .map(this._handleSuccess)
            .catch(this._handleError);
    };
    HttpHelper.prototype.putaction = function (path, param) {
        if (param === void 0) { param = null; }
        this.errormsg = null;
        var body = JSON.stringify(param);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put(this._base + path, body, options)
            .map(this._handleSuccess)
            .catch(this._handleError);
    };
    HttpHelper.prototype._handleError = function (error) {
        if (error.status == 401) {
            localStorage.removeItem('currentUser');
            location.reload();
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error || 'Server error');
    };
    HttpHelper.prototype._handleSuccess = function (success) {
        var jsonresult = null;
        try {
            jsonresult = success.json();
        }
        catch (ex) {
            return success;
        }
        return jsonresult;
    };
    return HttpHelper;
}());



/***/ }),

/***/ "./src/app/web-api/web-api.component.css":
/***/ (function(module, exports) {

module.exports = ".menu-fixed{\r\n  top: 20px\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/web-api/web-api.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<body class=\"fixed-nav sticky-footer bg-dark\" id=\"page-top\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" id=\"mainNav\">\r\n      <a class=\"navbar-brand text-white bg-dark\" (click)=\"aba= 'home'\">Controle Pluvial</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\r\n      data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggngler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\r\n\r\n          <div class=\"dropdown\">\r\n              <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  Referencias\r\n              </button>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                <a class=\"dropdown-item\" href=\"https://github.com/grynfox/EasyCRUD/wiki\" >Git Hub</a>\r\n                <a class=\"dropdown-item\" (click)=\"aba= 'altProd'\" >Referencias Utilizadas</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"dropdown\">\r\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    Relatorios\r\n                </button>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                  <a class=\"dropdown-item\"  (click)=\"aba= 'reportProd'\">Fluxo Diario</a>\r\n                  <a class=\"dropdown-item\" (click)=\"aba= 'reportFluxoMensal'\">Fluxo Mensal</a>\r\n                  <a class=\"dropdown-item\" (click)=\"aba= 'reportCat'\">Fluxo Anual</a>\r\n                </div>\r\n              </div>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n\r\n</body>\r\n\r\n<form [ngSwitch]=\"aba\" >\r\n      <!--Produtos-->\r\n    <div class=\"container\" *ngSwitchCase=\"'cadastroProd'\">\r\n        <div class=\"card card-register mx-auto mt-5\">\r\n          <div class=\"card-header text-center\">Cadastra Produto</div>\r\n          <div class=\"card-body\">\r\n            <form>\r\n              <div class=\"form-group\">\r\n                <div class=\"form-row\">\r\n                  <div class=\"col-md-12\">\r\n                    <label for=\"NomeProd\">Produto</label>\r\n                    <input class=\"form-control\" id=\"NomeProd\" name=\"NomeProd\" type=\"text\" placeholder=\"Digite o nome do produto\"[(ngModel)]=\"NomeProd\" required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <label for=\"categorias\">Selecione a categoria</label>\r\n              <div class=\"form-group col align-self-center\">\r\n                  <select [(ngModel)]=\"IdCat\" class=\"custom-select\"  name=\"categorias\">\r\n                      <option *ngFor=\"let busca of categorias\" [value]=\"busca.IdCat\">{{busca.IdCat}} | {{busca.NomeCat}}</option>\r\n                  </select>\r\n              </div>\r\n              <a class=\"btn btn-primary btn-block\" (click)=\"cadastrarProduto(NomeProd, IdCat);\">Cadastrar Produto</a>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        <div class=\"container\" *ngSwitchCase=\"'delProd'\">\r\n          <div class=\"card card-register mx-auto mt-5\">\r\n            <div class=\"card-header text-center\">Deleta Produto</div>\r\n            <div class=\"card-body\">\r\n              <form>\r\n                <div class=\"form-group\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-md-12\">\r\n                      <label for=\"produtos\">Produto</label>\r\n                        <div class=\"form-group\">\r\n                          <select [(ngModel)]=\"IdProd\" class=\"custom-select\"  name=\"produtos\">\r\n                            <option *ngFor=\"let buscaProd of produtos\" [value]=\"buscaProd.IdProd\">{{buscaProd.IdProd}} | {{buscaProd.NomeProd}}</option>\r\n                        </select>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a class=\"btn btn-primary btn-block\" (click)=\"apagarProd(IdProd);\">Deletar Produto</a>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"container\" *ngSwitchCase=\"'altProd'\">\r\n            <div class=\"card card-register mx-auto mt-5\">\r\n              <div class=\"card-header text-center\">Alterar Produto</div>\r\n              <div class=\"card-body\">\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-row\">\r\n                          <div class=\"col-md-12\">\r\n                            <label for=\"produtos\">Produto</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"NomeProd\" id=\"produtos\" name=\"produtos\" type=\"text\" placeholder=\"Digite o novo nome do produto.\" required>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"form-row\">\r\n                      <div class=\"col-md-12\">\r\n                        <label for=\"produtos\">Selecione o Produto</label>\r\n                          <div class=\"form-group\">\r\n                            <select class=\"custom-select\"  [(ngModel)]=\"IdProd\" name=\"produtos\">\r\n                                <option *ngFor=\"let busca of produtos\" [value]=\"busca.IdProd\">{{busca.NomeProd}}</option>\r\n                            </select>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <a class=\"btn btn-primary btn-block\" (click)=\"alterarProd(IdProd);\">Alterar Produto</a>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <!--Categorias !-->\r\n        <div class=\"container\" *ngSwitchCase=\"'cadastroCat'\">\r\n            <div class=\"card card-register mx-auto mt-5\">\r\n              <div class=\"card-header text-center\">Cadastra Categoria</div>\r\n              <div class=\"card-body\">\r\n                <form>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"form-row\">\r\n                      <div class=\"col-md-12\">\r\n                        <label for=\"NomeCat\">Categoria</label>\r\n                        <input class=\"form-control\" id=\"NomeCat\" name=\"NomeCat\" type=\"text\" placeholder=\"Digite o nome da categoria\"[(ngModel)]=\"NomeCat\" required>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <a class=\"btn btn-primary btn-block\" (click)=\"cadastrarCategoria(NomeCat);\">Cadastrar Categoria</a>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"container\" *ngSwitchCase=\"'delCat'\">\r\n              <div class=\"card card-register mx-auto mt-5\">\r\n                <div class=\"card-header text-center\">Deleta Categoria</div>\r\n                <div class=\"card-body\">\r\n                  <form>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-row\">\r\n                        <div class=\"col-md-12\">\r\n                          <label for=\"categorias\">Categoria</label>\r\n                            <div class=\"form-group\">\r\n                              <select [(ngModel)]=\"IdCat\" class=\"custom-select\"  name=\"categorias\">\r\n                                  <option *ngFor=\"let busca of categorias\" [value]=\"busca.IdCat\">{{busca.IdCat}} | {{busca.NomeCat}}</option>\r\n                              </select>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <a class=\"btn btn-primary btn-block\" (click)=\"apagarCat(IdCat);\">Deletar Categoria</a>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"container\" *ngSwitchCase=\"'altCat'\">\r\n                <div class=\"card card-register mx-auto mt-5\">\r\n                  <div class=\"card-header text-center\">Alterar Categoria</div>\r\n                  <div class=\"card-body\">\r\n                    <form>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-row\">\r\n                              <div class=\"col-md-12\">\r\n                                <label for=\"NomeCat\">Categoria</label>\r\n                                <input class=\"form-control\"  [(ngModel)]= \"NomeCat\" id=\"NomeCat\" name=\"NomeCat\" type=\"text\" placeholder=\"Digite o nome da categoria\" required>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"form-row\">\r\n                          <div class=\"col-md-12\">\r\n                            <label for=\"categorias\">Antiga Categoria</label>\r\n                              <div class=\"form-group\">\r\n                                <select [(ngModel)]=\"IdCat\" class=\"custom-select\"  name=\"categorias\">\r\n                                    <option *ngFor=\"let busca of categorias\" [value]=\"busca.IdCat\">{{busca.IdCat}} | {{busca.NomeCat}}</option>\r\n                                </select>\r\n                              </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <a class=\"btn btn-primary btn-block\" (click)=\"alterarCat(IdCat);\">Alterar Categoria</a>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n<!--Relatorios!-->\r\n<div class=\"container\" *ngSwitchCase=\"'reportCat'\">\r\n    <div class=\"card card-register mx-auto mt-5\">\r\n      <div class=\"card-header text-center\">Relatorio de Categorias Cadastradas</div>\r\n      <div class=\"card-body\">\r\n        <form>\r\n          <div class=\"table-responsive\">\r\n              <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Codigo Categoria</th>\r\n                    <th>Categoria</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let busca of categorias\">\r\n                    <td> {{busca.IdCat}} </td>\r\n                    <td>{{busca.NomeCat}}</td>\r\n                  </tr>\r\n                </tbody>\r\n                </table>\r\n                </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\" *ngSwitchCase=\"'reportProd'\">\r\n      <div class=\"card card-register mx-auto mt-5\">\r\n        <div class=\"card-header text-center\">Relatorio de Produtos Cadastrados</div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Codigo Produto</th>\r\n                      <th>Produto</th>\r\n                      <th>Categoria</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let busca of produtos\">\r\n                      <td>{{busca.IdProd}} </td>\r\n                      <td>{{busca.NomeProd}}</td>\r\n                      <td>{{busca.IdCat}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                  </table>\r\n                  </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"container\" *ngSwitchCase=\"'reportFluxoMensal'\">\r\n      <div class=\"card card-register mx-auto mt-5\">\r\n        <div class=\"card-header text-center\">Relatorio Fluxo Mensal</div>\r\n        <div class=\"card-body\">\r\n            <div class=\"form-row\">\r\n                <div class=\"col-md-12\">\r\n                  <label for=\"categorias\">Selecione o mes e o ano</label>\r\n                    <div class=\"form-group\">\r\n                      <select [(ngModel)]=\"IdCat\" class=\"custom-select\"  name=\"categorias\">\r\n                          <option *ngFor=\"let busca of categorias\" [value]=\"busca.IdCat\">{{busca.IdCat}} | {{busca.NomeCat}}</option>\r\n                      </select>\r\n                      <select [(ngModel)]=\"IdCat\" class=\"custom-select\"  name=\"categorias\">\r\n                          <option *ngFor=\"let busca of categorias\" [value]=\"busca.IdCat\">{{busca.IdCat}} | {{busca.NomeCat}}</option>\r\n                      </select>\r\n\r\n                    </div>\r\n                </div>\r\n              </div>\r\n              <a class=\"btn btn-primary btn-block\" (click)=\"reportsProdCat(IdCat);\">Gerar Relatorio</a>\r\n          <form>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th></th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let busca of relatorios\">\r\n                      <td>{{busca.IdProd}} </td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <div class=\"progress\">\r\n  <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n</div>\r\n<div class=\"progress\">\r\n  <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n</div>\r\n<div class=\"progress\">\r\n  <div class=\"progress-bar progress-bar-striped bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n</div>\r\n<div class=\"progress\">\r\n  <div class=\"progress-bar progress-bar-striped bg-warning\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n</div>\r\n<div class=\"progress\">\r\n  <div class=\"progress-bar progress-bar-striped bg-danger\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n</div>\r\n                  </table>\r\n                  </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-12 menu-fixed\" *ngSwitchCase=\"'home'\">\r\n      <div class=\"card text-center\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-bar-chart\"></i> Sistema de Controle Pluvial Puc Minas - Poços de Caldas</div>\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Igor Alexandre Saraiva Silva e Claudio Faria</h5>\r\n            <p class=\"card-text\"> Com os avanços tecnologicos existentes na area de controle, economia\r\n            e automação de processos a Puc Minas de Poços de Caldas viu a necessidade de melhorar\r\n            seu controle pluvial, fazendo assim um sistema totalmente automatizado de controle. </p>\r\n        </div>\r\n        <div class=\"card-footer small text-muted\">\r\n          <a href=\"https://www.linkedin.com/in/igoralexandre/\" class=\"btn-outline-info\">Linkedin - Igor Saraiva</a>\r\n          <a href=\"https://www.linkedin.com/in/igoralexandre/\" class=\"btn-outline-info\">Linkedin - Claudio Faria</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </form>\r\n"

/***/ }),

/***/ "./src/app/web-api/web-api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebApiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cadastro_service__ = __webpack_require__("./src/app/services/cadastro.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
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

var WebApiComponent = /** @class */ (function () {
    function WebApiComponent(service) {
        this.service = service;
        // tslint:disable-next-line:no-inferrable-types
        this.aba = "home";
        this.buscarCategoria();
        this.buscarProdutos();
    }
    WebApiComponent.prototype.cadastrarCategoria = function () {
        this.service
            .cadastraCategoria(this.NomeCat)
            .subscribe(function (retorno) { return alert(retorno); });
    };
    WebApiComponent.prototype.cadastrarProduto = function () {
        this.service
            .cadastraProduto(this.NomeProd, this.IdCat)
            .subscribe(function (retorno) { return alert(retorno); });
    };
    WebApiComponent.prototype.alterarCat = function () {
        this.service
            .alteraCat(this.IdCat, this.NomeCat)
            .subscribe(function (retorno) { return alert(retorno); });
        this.buscarCategoria();
    };
    WebApiComponent.prototype.alterarProd = function () {
        this.service
            .alteraProd(this.IdProd, this.NomeProd)
            .subscribe(function (retorno) { return alert(retorno); });
        this.buscarProdutos();
    };
    WebApiComponent.prototype.buscarCategoria = function () {
        var _this = this;
        this.service
            .buscaCategoria(this.IdCat, this.NomeCat)
            .subscribe(function (retorno) { return (_this.categorias = retorno); });
    };
    WebApiComponent.prototype.buscarProdutos = function () {
        var _this = this;
        this.service
            .buscaProduto(this.IdProd, this.NomeProd, this.IdCat)
            .subscribe(function (retorno) { return (_this.produtos = retorno); });
    };
    WebApiComponent.prototype.apagarCat = function () {
        var _this = this;
        this.service
            .apagaCat(this.IdCat)
            .subscribe(function (retorno) { return (_this.categorias = retorno); });
        this.buscarCategoria();
    };
    WebApiComponent.prototype.apagarProd = function () {
        var _this = this;
        this.service.apagaProd(this.IdProd).subscribe(function (retorno) {
            _this.produtos = retorno;
            _this.buscarProdutos();
        });
    };
    WebApiComponent.prototype.reportsProdCat = function () {
        var _this = this;
        this.service.reportProdCat(this.IdProd, this.NomeProd, this.IdCat, this.NomeCat)
            .subscribe(function (retorno) { return (_this.relatorios = retorno); });
    };
    WebApiComponent.prototype.ngOnInit = function () { };
    WebApiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "app-web-api",
            template: __webpack_require__("./src/app/web-api/web-api.component.html"),
            styles: [__webpack_require__("./src/app/web-api/web-api.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_cadastro_service__["a" /* CadastroService */]])
    ], WebApiComponent);
    return WebApiComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
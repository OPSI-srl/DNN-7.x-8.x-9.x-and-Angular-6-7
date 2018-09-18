(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/Models/filterGrid.ts":
/*!**********************************!*\
  !*** ./src/Models/filterGrid.ts ***!
  \**********************************/
/*! exports provided: filterGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterGrid", function() { return filterGrid; });
var filterGrid = /** @class */ (function () {
    function filterGrid() {
        this.pickerStartFrom = new Date(new Date().getFullYear(), new Date().getMonth() - 1);
        this.pickerStartTo = new Date();
        this.systemCodeSelected = { key: -1, value: 222 };
        this.statusIdSelected = { key: -1, value: 222 };
    }
    return filterGrid;
}());



/***/ }),

/***/ "./src/Service/staging.service.ts":
/*!****************************************!*\
  !*** ./src/Service/staging.service.ts ***!
  \****************************************/
/*! exports provided: StagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StagingService", function() { return StagingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StagingService = /** @class */ (function () {
    function StagingService(http) {
        this.http = http;
        this._urlBase = "/DesktopModules/Rainbow_Staging/API/TransactionLog/";
    }
    //DNN DNN
    // constructor(private http: HttpClient, private ctx: DnnContextService) { 
    //   this._urlBase = this.ctx.properties.ModuleDirectory + 'API/item/';
    // }
    StagingService.prototype.getSystemCodeList = function () {
        var systemCode;
        // let webAPIRouting: string = "System/list" 
        // let getUrl = this._urlBase 
        // return this.http.get<any>(getUrl)
        systemCode = [{
                id: '0',
                value: "Navision (SLO)"
            },
            {
                id: '1',
                value: "Customer Email"
            },
            {
                id: '2',
                value: "SOL Documents"
            },
            {
                id: '3',
                value: "E-commerce Hybris"
            }];
        systemCode.unshift({ id: '-1', value: 'All system code' });
        //return this.http.get<Item[]>(this._urlBase + 'test');
        return systemCode;
    };
    StagingService.prototype.getErrorCodeList = function () {
        var _statusError;
        _statusError = [{
                id: '0',
                value: '12321'
            },
            {
                id: '1',
                value: '456456'
            },
            {
                id: '2',
                value: '768978'
            }];
        _statusError.unshift({ id: '-1', value: 'All status ID' });
        return _statusError;
    };
    StagingService.prototype.getTrasactionList = function (dateStart, dateEnd, statusId, systemCode) {
        //http://rainbow.xx/DesktopModules/Rainbow_Staging/API/TransactionLog/list?dateEnd=2018-08-18T13:20:56.231Z&dateStart=2018-04-30T22:00:00.000Z
        if (dateStart == undefined)
            dateStart = '2018-04-30';
        if (dateEnd == undefined)
            dateEnd = '2018-08-18';
        if (statusId == undefined)
            statusId = '';
        if (systemCode == undefined)
            systemCode = '';
        var webAPIName = "list";
        var getUrl = this._urlBase + webAPIName + "?dateEnd=" + dateEnd + "&dateStart=" + dateStart + "&systemCode=" + systemCode + "&statusID=" + statusId;
        console.log('​---------------------------------');
        console.log('​StagingService -> getUrl', getUrl);
        console.log('​---------------------------------');
        return this.http.get(getUrl);
    };
    StagingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StagingService);
    return StagingService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.container {\r\n  max-width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <span>\n            <a mat-flat-button [matMenuTriggerFor]=\"menu\">Menu</a>\n            <mat-menu #menu=\"matMenu\">\n              <a mat-menu-item routerLink=\"\">Transaction</a>\n              <a mat-menu-item routerLink=\"/output\">Output</a>\n              <a mat-menu-item routerLink=\"/input\">Input</a>\n            </mat-menu>\n          </span>      \n        <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_dnncontext_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/dnncontext.service */ "./src/service/dnncontext.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    // myDnnContextService: DnnContextService;
    function AppComponent(contextService, snackBar) {
        this.contextService = contextService;
        this.snackBar = snackBar;
        this.title = 'AngolarNG6-Material Design';
        this.moduleID = this.contextService.properties.ModuleId;
        console.log('​------------------------------------------------------------');
        console.log('​AppComponent -> constructor -> this.moduleID', this.moduleID);
        console.log('​------------------------------------------------------------');
        if (this.moduleID == null) {
            this.openSnackBar("Starting up", "WARNING NOT CONNECTION WITH DNN");
        }
        else {
            this.openSnackBar("CONTEXT DNN", "moduleID:" + this.moduleID);
        }
    }
    // tslint:disable-next-line:use-life-cycle-interface
    AppComponent.prototype.ngOnInit = function () {
    };
    // tslint:disable-next-line:use-life-cycle-interface
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 4000,
            horizontalPosition: 'right'
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root-md',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_service_dnncontext_service__WEBPACK_IMPORTED_MODULE_1__["DnnContextService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_DnnInterceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http/DnnInterceptor */ "./src/http/DnnInterceptor.ts");
/* harmony import */ var _service_dnncontext_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/dnncontext.service */ "./src/service/dnncontext.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _transaction_nav_transaction_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transaction-nav/transaction-nav.component */ "./src/app/transaction-nav/transaction-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_staging_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Service/staging.service */ "./src/Service/staging.service.ts");
/* harmony import */ var _transaction_table_transaction_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transaction-table/transaction-table.component */ "./src/app/transaction-table/transaction-table.component.ts");
/* harmony import */ var _transaction_table_pipeTruncate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transaction-table/pipeTruncate */ "./src/app/transaction-table/pipeTruncate.ts");
/* harmony import */ var _transaction_table_pipeInfoImage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./transaction-table/pipeInfoImage */ "./src/app/transaction-table/pipeInfoImage.ts");
/* harmony import */ var _input_nav_input_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./input-nav/input-nav.component */ "./src/app/input-nav/input-nav.component.ts");
/* harmony import */ var _input_table_input_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./input-table/input-table.component */ "./src/app/input-table/input-table.component.ts");
/* harmony import */ var _output_table_output_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./output-table/output-table.component */ "./src/app/output-table/output-table.component.ts");
/* harmony import */ var _output_nav_output_nav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./output-nav/output-nav.component */ "./src/app/output-nav/output-nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//ADD for webapi DNN




//other














var routes = [
    { path: '', component: _transaction_nav_transaction_nav_component__WEBPACK_IMPORTED_MODULE_11__["GridFilterComponent"] },
    { path: 'input', component: _input_nav_input_nav_component__WEBPACK_IMPORTED_MODULE_18__["InputNavComponent"] },
    { path: 'output', component: _output_nav_output_nav_component__WEBPACK_IMPORTED_MODULE_21__["OutputNavComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _transaction_nav_transaction_nav_component__WEBPACK_IMPORTED_MODULE_11__["GridFilterComponent"],
                _transaction_table_transaction_table_component__WEBPACK_IMPORTED_MODULE_15__["TableTransactionComponent"],
                _transaction_table_pipeTruncate__WEBPACK_IMPORTED_MODULE_16__["TruncatePipe"],
                _transaction_table_pipeInfoImage__WEBPACK_IMPORTED_MODULE_17__["infoImagePipe"],
                _input_nav_input_nav_component__WEBPACK_IMPORTED_MODULE_18__["InputNavComponent"],
                _input_table_input_table_component__WEBPACK_IMPORTED_MODULE_19__["InputTableComponent"],
                _output_table_output_table_component__WEBPACK_IMPORTED_MODULE_20__["OutputTableComponent"],
                _output_nav_output_nav_component__WEBPACK_IMPORTED_MODULE_21__["OutputNavComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"].forRoot(),
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"]
            ],
            providers: [
                _service_dnncontext_service__WEBPACK_IMPORTED_MODULE_7__["DnnContextService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _http_DnnInterceptor__WEBPACK_IMPORTED_MODULE_6__["DnnInterceptor"],
                    multi: true
                },
                _Service_staging_service__WEBPACK_IMPORTED_MODULE_14__["StagingService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/input-nav/input-nav.component.css":
/*!***************************************************!*\
  !*** ./src/app/input-nav/input-nav.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/input-nav/input-nav.component.html":
/*!****************************************************!*\
  !*** ./src/app/input-nav/input-nav.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Input</span>\n    </mat-toolbar-row>\n  </mat-toolbar>"

/***/ }),

/***/ "./src/app/input-nav/input-nav.component.ts":
/*!**************************************************!*\
  !*** ./src/app/input-nav/input-nav.component.ts ***!
  \**************************************************/
/*! exports provided: InputNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNavComponent", function() { return InputNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputNavComponent = /** @class */ (function () {
    function InputNavComponent() {
    }
    InputNavComponent.prototype.ngOnInit = function () {
        console.log('​------------------------------------');
        console.log('​InputNavComponent -> ngOnInit -> ', 'aaaaaaaaaaaaaaaaaaa');
        console.log('​------------------------------------');
    };
    InputNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-nav',
            template: __webpack_require__(/*! ./input-nav.component.html */ "./src/app/input-nav/input-nav.component.html"),
            styles: [__webpack_require__(/*! ./input-nav.component.css */ "./src/app/input-nav/input-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputNavComponent);
    return InputNavComponent;
}());



/***/ }),

/***/ "./src/app/input-table/input-table.component.css":
/*!*******************************************************!*\
  !*** ./src/app/input-table/input-table.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/input-table/input-table.component.html":
/*!********************************************************!*\
  !*** ./src/app/input-table/input-table.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  input-table works!\n</p>"

/***/ }),

/***/ "./src/app/input-table/input-table.component.ts":
/*!******************************************************!*\
  !*** ./src/app/input-table/input-table.component.ts ***!
  \******************************************************/
/*! exports provided: InputTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTableComponent", function() { return InputTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputTableComponent = /** @class */ (function () {
    function InputTableComponent() {
    }
    InputTableComponent.prototype.ngOnInit = function () {
    };
    InputTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-table',
            template: __webpack_require__(/*! ./input-table.component.html */ "./src/app/input-table/input-table.component.html"),
            styles: [__webpack_require__(/*! ./input-table.component.css */ "./src/app/input-table/input-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputTableComponent);
    return InputTableComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/output-nav/output-nav.component.css":
/*!*****************************************************!*\
  !*** ./src/app/output-nav/output-nav.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/output-nav/output-nav.component.html":
/*!******************************************************!*\
  !*** ./src/app/output-nav/output-nav.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Output</span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  "

/***/ }),

/***/ "./src/app/output-nav/output-nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/output-nav/output-nav.component.ts ***!
  \****************************************************/
/*! exports provided: OutputNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputNavComponent", function() { return OutputNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutputNavComponent = /** @class */ (function () {
    function OutputNavComponent() {
    }
    OutputNavComponent.prototype.ngOnInit = function () {
        console.log('​------------------------------------');
        console.log('​InputNavComponent -> ngOnInit -> ', 'output-nav');
        console.log('​------------------------------------');
    };
    OutputNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-output-nav',
            template: __webpack_require__(/*! ./output-nav.component.html */ "./src/app/output-nav/output-nav.component.html"),
            styles: [__webpack_require__(/*! ./output-nav.component.css */ "./src/app/output-nav/output-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OutputNavComponent);
    return OutputNavComponent;
}());



/***/ }),

/***/ "./src/app/output-table/output-table.component.css":
/*!*********************************************************!*\
  !*** ./src/app/output-table/output-table.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/output-table/output-table.component.html":
/*!**********************************************************!*\
  !*** ./src/app/output-table/output-table.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  output-table works!\n</p>\n"

/***/ }),

/***/ "./src/app/output-table/output-table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/output-table/output-table.component.ts ***!
  \********************************************************/
/*! exports provided: OutputTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputTableComponent", function() { return OutputTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutputTableComponent = /** @class */ (function () {
    function OutputTableComponent() {
    }
    OutputTableComponent.prototype.ngOnInit = function () {
    };
    OutputTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-output-table',
            template: __webpack_require__(/*! ./output-table.component.html */ "./src/app/output-table/output-table.component.html"),
            styles: [__webpack_require__(/*! ./output-table.component.css */ "./src/app/output-table/output-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OutputTableComponent);
    return OutputTableComponent;
}());



/***/ }),

/***/ "./src/app/transaction-nav/transaction-nav.component.css":
/*!***************************************************************!*\
  !*** ./src/app/transaction-nav/transaction-nav.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 300px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.mat-sidenav-fixed{\n  position: absolute;\n  background-color: #dfdfdf;\n}\n\n@media(min-width: 10px){\n  /* .sidenav{\n    display: none;\n  } */\n}\n\n.mat-list{\n  text-align: center;\n}\n\n.mat-nav-list{\n  text-align: center;\n}\n\n.mat-sidenav-content{\n  min-height: 600px;\n  padding: 0 0 20px 0;\n}\n\n.mat-form-field{\n  width: 100%;\n}\n\n"

/***/ }),

/***/ "./src/app/transaction-nav/transaction-nav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/transaction-nav/transaction-nav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"side\" [opened]=\"false\">\n    <!-- [mode]=\"side\" (isHandset$ | async) ? 'over' : 'side'-->\n    <!-- [opened]=!(isHandset$ | async) -->\n    <mat-toolbar color=\"primary\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            Filters\n          </div>\n          <div class=\"col-md-2\">\n            <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n              <!-- *ngIf=\"isHandset$ | async\" -->\n              <mat-icon aria-label=\"Side nav toggle icon\">close</mat-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n    </mat-toolbar>\n    <mat-nav-list>\n      <div class=\"container\">\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"pickerFrom\" [(ngModel)]=\"_filterGrid.pickerStartFrom\" placeholder=\"Choose Date From\" required\n              readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"pickerFrom\"></mat-datepicker-toggle>\n            <mat-datepicker #pickerFrom [startAt]=\"pickerStartFrom\"></mat-datepicker>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <!-- matDatepicker -->\n            <input matInput [matDatepicker]=\"pickerTo\" [(ngModel)]=\"_filterGrid.pickerStartTo\" placeholder=\"Choose Date To\" required\n              readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"pickerTo\"></mat-datepicker-toggle>\n            <mat-datepicker #pickerTo [startAt]=\"pickerTo\" [startAt]=\"pickerStartTo\"></mat-datepicker>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <mat-select placeholder=\"System code\" (selectionChange)=\"onSelectionSystemCode($event)\" [(ngModel)]=\"_filterGrid.systemCodeSelected.key\"\n              name=\"systemCode\">\n              <mat-option *ngFor=\"let item of systemCode\" [value]=\"item.id\">\n                {{item.value}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <mat-select placeholder=\"Status ID\" (selectionChange)=\"onSelectionStatusId($event)\" [(ngModel)]=\"_filterGrid.statusIdSelected.key\"\n              name=\"statusId\">\n              <mat-option *ngFor=\"let item of statusError\" [value]=\"item.id\">\n                {{item.value}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <!-- <button mat-raised-button (click)=\"resetFilter()\">reset </button> -->\n            <a mat-raised-button (click)=\"onResetFilter()\">RESET</a>\n          </div>\n          <div class=\"col-md-6\">\n            <a mat-raised-button (click)=\"onSearch()\" (click)=\"drawer.toggle()\">SEARCH</a>\n          </div>\n\n        </div>\n      </div>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <div class=\"row\" style=\"width:100%\">\n        <div class=\"col-6\">\n          <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n            <!-- *ngIf=\"isHandset$ | async\" -->\n            <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n          </button>\n          <span> Filter</span>\n        </div>\n        <div class=\"col-6\" style=\"text-align: right\">\n            <span>STAGING System v.1.0 </span>\n        </div>\n      </div>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <!-- <ng-content></ng-content> -->\n    <app-table-transaction [child-message]=\"_filterGrid\" [parentSubject]=\"parentSubject\"></app-table-transaction>\n    <!-- <app-grid-example></app-grid-example> -->\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/transaction-nav/transaction-nav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/transaction-nav/transaction-nav.component.ts ***!
  \**************************************************************/
/*! exports provided: GridFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFilterComponent", function() { return GridFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _Service_staging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Service/staging.service */ "./src/Service/staging.service.ts");
/* harmony import */ var _Models_filterGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/filterGrid */ "./src/Models/filterGrid.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GridFilterComponent = /** @class */ (function () {
    function GridFilterComponent(breakpointObserver, stagingService) {
        this.breakpointObserver = breakpointObserver;
        this.stagingService = stagingService;
        this._filterGrid = new _Models_filterGrid__WEBPACK_IMPORTED_MODULE_5__["filterGrid"]();
        this.parentSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    GridFilterComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.systemCode = this.stagingService.getSystemCodeList();
        this.statusError = this.stagingService.getErrorCodeList();
        console.log('​------------------------------------------------------------------------------------------------------');
        console.log('​GridFilterComponent -> this._filterGrid.statusIdSelected.key ', this._filterGrid.statusIdSelected.key);
        console.log('​------------------------------------------------------------------------------------------------------');
        this.resetFilters();
    };
    GridFilterComponent.prototype.resetFilters = function () {
        this._filterGrid.pickerStartFrom = new Date(new Date().getFullYear(), new Date().getMonth() - 1);
        this._filterGrid.pickerStartTo = new Date();
        this._filterGrid.statusIdSelected.key = '-1';
        this._filterGrid.statusIdSelected.value = 'all';
        this._filterGrid.systemCodeSelected.value = 'all';
        this._filterGrid.systemCodeSelected.key = '-1';
    };
    GridFilterComponent.prototype.onSearch = function () {
        console.log('​--------------------------------------------');
        console.log('​GridFilterComponent -> publiconSearch -> ', 'click');
        console.log('​--------------------------------------------');
        this.parentSubject.next('some value');
    };
    GridFilterComponent.prototype.onResetFilter = function () {
        this.resetFilters();
    };
    GridFilterComponent.prototype.onSelectionSystemCode = function (event) {
        console.log('​-----------------------------------------------------------');
        console.log('​GridFilterComponent -> publiconSelectionSystemCode -> a', event);
        console.log('​-----------------------------------------------------------');
        this._filterGrid.systemCodeSelected.key = event.value;
        this._filterGrid.systemCodeSelected.value = event.source.triggerValue;
    };
    GridFilterComponent.prototype.onSelectionStatusId = function (event) {
        this._filterGrid.statusIdSelected.key = event.value;
        this._filterGrid.statusIdSelected.value = event.source.triggerValue;
    };
    GridFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-filter',
            template: __webpack_require__(/*! ./transaction-nav.component.html */ "./src/app/transaction-nav/transaction-nav.component.html"),
            styles: [__webpack_require__(/*! ./transaction-nav.component.css */ "./src/app/transaction-nav/transaction-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _Service_staging_service__WEBPACK_IMPORTED_MODULE_4__["StagingService"]])
    ], GridFilterComponent);
    return GridFilterComponent;
}());



/***/ }),

/***/ "./src/app/transaction-table/pipeInfoImage.ts":
/*!****************************************************!*\
  !*** ./src/app/transaction-table/pipeInfoImage.ts ***!
  \****************************************************/
/*! exports provided: infoImagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoImagePipe", function() { return infoImagePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var infoImagePipe = /** @class */ (function () {
    function infoImagePipe() {
    }
    infoImagePipe.prototype.transform = function (value) {
        return '<div class="circleRed">&nbsp</div>';
    };
    infoImagePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'infoImage'
        })
    ], infoImagePipe);
    return infoImagePipe;
}());



/***/ }),

/***/ "./src/app/transaction-table/pipeTruncate.ts":
/*!***************************************************!*\
  !*** ./src/app/transaction-table/pipeTruncate.ts ***!
  \***************************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/app/transaction-table/transaction-table.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/transaction-table/transaction-table.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    max-width: 100%;\r\n  }\r\n  \r\ntable {\r\n    width: 100%;\r\n}\r\n  \r\n.mat-elevation-z8{\r\n    width: 100%;\r\n}\r\n  \r\ntd.mat-cell{\r\n    padding: 4px;\r\n}\r\n  \r\ntd.mat-cell.cdk-column-statusid.mat-column-statusid.ng-star-inserted{\r\n    text-align: center;\r\n}\r\n  \r\ntd.mat-cell.cdk-column-messagetypeid.mat-column-messagetypeid.ng-star-inserted{\r\n    text-align: center;\r\n}\r\n  \r\ntd.mat-cell.cdk-column-systemcode.mat-column-systemcode.ng-star-inserted{\r\n    text-align: center;\r\n}\r\n  \r\n/* \r\ntd.mat-cell.cdk-column-messagetypeid {\r\n    background-color: aquamarine;\r\n} */\r\n  \r\nmat-form-field.mat-form-field.ng-tns-c8-11.mat-primary.mat-form-field-type-mat-input.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-hide-placeholder{\r\n    width: 100%;\r\n}\r\n  \r\n.example-container {\r\n\r\n  }\r\n  \r\n.example-loading-shade {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 56px;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.15);\r\n    z-index: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\ntr.mat-row.ng-star-inserted:hover {\r\n    background: #e2e2e2;\r\n  }\r\n  \r\n.circleRed {\r\n    margin: 0 auto;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: rgb(221, 22, 22);\r\n    border: 1px solid rgb(66, 65, 65);\r\n    border-radius: 50%;\r\n}\r\n  \r\n.circleOrange {\r\n    margin: 0 auto;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: rgb(255, 123, 71);\r\n    border: 1px solid rgb(66, 65, 65);\r\n    border-radius: 50%;\r\n}\r\n  \r\n.circleGreen {\r\n    margin: 0 auto;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: rgb(3, 105, 16);\r\n    border: 1px solid rgb(66, 65, 65);\r\n    border-radius: 50%;\r\n}\r\n  \r\n.container.trasactionFilter{\r\n    padding-top: 20px;\r\n}\r\n  \r\n.mat-form-field.filterSearch{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/transaction-table/transaction-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/transaction-table/transaction-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container trasactionFilter\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <mat-form-field>\n        <input matInput placeholder=\"Date From\" [value]=\"_parentFilterGrid.pickerStartFrom | date:'dd-MM-yyyy'\" readonly>\n      </mat-form-field>\n    </div>\n    <div class=\"col\">\n      <mat-form-field>\n        <input matInput placeholder=\"Date To\" [value]=\"_parentFilterGrid.pickerStartTo | date:'dd-MM-yyyy'\" readonly>\n      </mat-form-field>\n    </div>\n    <div class=\"col\">\n      <mat-form-field>\n        <input matInput placeholder=\"Status ID\" [value]=\"_parentFilterGrid.statusIdSelected.value\" readonly>\n      </mat-form-field>\n    </div>\n    <div class=\"col\">\n      <mat-form-field>\n        <input matInput placeholder=\"System Code\" [value]=\"_parentFilterGrid.systemCodeSelected.value\" readonly>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <mat-form-field class=\"filterSearch\">\n        <input maxlength=\"50\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter by (system code, Transactionguid, Message)\">\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"mat-elevation-z8\">\n          <mat-paginator #paginator [length]=\"dataSource.data.length\" [pageIndex]=\"0\" [pageSize]=\"15\" [pageSizeOptions]=\"[15, 25, 50, 100, 250]\">\n            </mat-paginator>\n        <div class=\"example-container mat-elevation-z8\">\n\n\n          <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n            <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n          </div>\n\n          <table mat-table #table [trackBy]=\"trackByIndex\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n            <!-- Id Column -->\n            <ng-container matColumnDef=\"id\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n              <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"statusid\" class=\"cellCenter\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n              <td mat-cell *matCellDef=\"let row\" >\n                <div [class]=\"colourCircle[row.statusid]\"></div>\n              </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"systemcode\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>System Code</th>\n              <td mat-cell *matCellDef=\"let row\">{{row.systemcode}}</td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"messagetypeid\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Message TypeId</th>\n              <td mat-cell *matCellDef=\"let row\">{{row.messagetypeid}}</td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"transactionguid\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Transactionguid</th>\n              <td mat-cell *matCellDef=\"let row\">{{row.transactionguid}}</td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"message\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Message</th>\n              <td mat-cell *matCellDef=\"let row\">{{row.message | truncate:[200, '...']}}</td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"insertdate\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Insert Date</th>\n              <td mat-cell *matCellDef=\"let row\">{{row.insertdate | date:\"MM/dd/yyyy hh:mm\"}}</td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"lastupdatedate\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Lastupdate Date</th>\n              <td mat-cell *matCellDef=\"let row\">{{row.lastupdatedate | date:\"MM/dd/yyyy hh:mm\"}}</td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n\n          <mat-paginator #paginator [length]=\"dataSource.data.length\" [pageIndex]=\"0\" [pageSize]=\"15\" [pageSizeOptions]=\"[15, 25, 50, 100, 250]\">\n          </mat-paginator>\n        </div>\n\n      </div>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/transaction-table/transaction-table.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/transaction-table/transaction-table.component.ts ***!
  \******************************************************************/
/*! exports provided: TableTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableTransactionComponent", function() { return TableTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_staging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/staging.service */ "./src/Service/staging.service.ts");
/* harmony import */ var _Models_filterGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/filterGrid */ "./src/Models/filterGrid.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TableTransactionComponent = /** @class */ (function () {
    function TableTransactionComponent(_stagingService, snackBar) {
        this._stagingService = _stagingService;
        this.snackBar = snackBar;
        this._filterGrid = new _Models_filterGrid__WEBPACK_IMPORTED_MODULE_3__["filterGrid"]();
        this.colourCircle = { '-1': 'circleRed', '1': 'circleOrange', '2': 'circleGreen' };
        this.isLoadingResults = false;
        this.displayedColumns = [
            'statusid',
            'id',
            'systemcode',
            'messagetypeid',
            'transactionguid',
            'message',
            'insertdate',
            'lastupdatedate',
        ];
    }
    TableTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentSubject.subscribe(function (event) {
            // called when the notifyChildren method is
            // called in the parent component
            _this.getTrasactionList();
        });
        this.getTrasactionList();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.transacionList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TableTransactionComponent.prototype.convertDate = function (inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-');
    };
    TableTransactionComponent.prototype.getTrasactionList = function () {
        var _this = this;
        this.isLoadingResults = true;
        var dateFrom = this.convertDate(this._parentFilterGrid.pickerStartFrom);
        console.log('​----------------------------------------------------------------------------');
        console.log('​TableTransactionComponent -> privategetTrasactionList -> dateFrom', dateFrom);
        console.log('​----------------------------------------------------------------------------');
        var dateTo = this.convertDate(this._parentFilterGrid.pickerStartTo);
        console.log('​------------------------------------------------------------------------');
        console.log('​TableTransactionComponent -> privategetTrasactionList -> dateTo', dateTo);
        console.log('​------------------------------------------------------------------------');
        var xxxx = this._parentFilterGrid.statusIdSelected.key != -1 ? this._parentFilterGrid.statusIdSelected.key : '';
        var yyyy = this._parentFilterGrid.systemCodeSelected.key != -1 ? this._parentFilterGrid.systemCodeSelected.key : '';
        this._stagingService.getTrasactionList(dateFrom, dateTo, xxxx, yyyy).subscribe(function (data) {
            var obj = JSON.parse(data, function (key, value) {
                //PARSE HERE SPECIAL DATA
                if (key == "message") {
                    // return new Date(value);
                }
                else {
                    //return value;
                }
                return value;
            });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](obj);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.isLoadingResults = false;
        }, function (err) {
            if (err.error instanceof Error) {
                _this.openSnackBar('Message error', 'ERROR data received form server: ' + err.status);
            }
            else {
                _this.openSnackBar('Message error', 'ERROR receiving data form server: ' + err.status);
            }
            _this.isLoadingResults = false;
        });
    };
    TableTransactionComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.filterPredicate = function (data, filter) {
            return (data.message.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) != -1
                ||
                    data.transactionguid.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) != -1
                ||
                    data.systemcode.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) != -1);
        };
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TableTransactionComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 4000,
        });
    };
    /**
  * Sort the data (client-side). If you're using server-side sorting,
  * this would be replaced by requesting the appropriate data from the server.
  */
    TableTransactionComponent.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'systemCode': return compare(a.systemcode, b.systemcode, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    TableTransactionComponent.prototype.ngOnDestroy = function () {
        // needed if child gets re-created (eg on some model changes)
        // note that subsequent subscriptions on the same subject will fail
        // so the parent has to re-create parentSubject on changes
        this.parentSubject.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TableTransactionComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TableTransactionComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('child-message'),
        __metadata("design:type", _Models_filterGrid__WEBPACK_IMPORTED_MODULE_3__["filterGrid"])
    ], TableTransactionComponent.prototype, "_parentFilterGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"])
    ], TableTransactionComponent.prototype, "parentSubject", void 0);
    TableTransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-transaction',
            template: __webpack_require__(/*! ./transaction-table.component.html */ "./src/app/transaction-table/transaction-table.component.html"),
            styles: [__webpack_require__(/*! ./transaction-table.component.css */ "./src/app/transaction-table/transaction-table.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_staging_service__WEBPACK_IMPORTED_MODULE_2__["StagingService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], TableTransactionComponent);
    return TableTransactionComponent;
}());

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
// let transaction: ITransaction = {
//   id: null,
//   systemcode: null,
//   messagetypeid: null,
//   transactionguid: null,
//   message: null,
//   statusid: null,
//   insertdate: null,
//   lastupdatedate: null,
// }
// this.transacionList.push(transaction);
// // console.log('​--------------------------------------------------');
// // console.log('​TableTransactionComponent -> ngOnInit -> key', key);
// // console.log('​--------------------------------------------------');
// return value;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/http/DnnInterceptor.ts":
/*!************************************!*\
  !*** ./src/http/DnnInterceptor.ts ***!
  \************************************/
/*! exports provided: DnnInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DnnInterceptor", function() { return DnnInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_dnncontext_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/dnncontext.service */ "./src/service/dnncontext.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DnnInterceptor = /** @class */ (function () {
    function DnnInterceptor(ctx) {
        this.ctx = ctx;
        this.context = this.ctx.getServiceFramework();
        console.log('DNN this.context:' + this.context);
    }
    DnnInterceptor.prototype.intercept = function (request, next) {
        if (this.context != null) {
            console.log('​---------------------');
            console.log('​DnnInterceptor -> ', 'ok');
            console.log('​---------------------');
            request = request.clone({
                setHeaders: {
                    ModuleId: this.context.moduleId.toString(),
                    TabId: this.context.tabId.toString(),
                    RequestVerificationToken: this.context.antiForgeryToken,
                    'X-Debugging-Hint': 'bootstrapped by bbAngular',
                }
            });
        }
        else {
            console.log('​---------------------');
            console.log('​DnnInterceptor -> ', 'ko');
            console.log('​---------------------');
        }
        return next.handle(request);
    };
    DnnInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_service_dnncontext_service__WEBPACK_IMPORTED_MODULE_1__["DnnContextService"]])
    ], DnnInterceptor);
    return DnnInterceptor;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/service/dnncontext.service.ts":
/*!*******************************************!*\
  !*** ./src/service/dnncontext.service.ts ***!
  \*******************************************/
/*! exports provided: DnnContextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DnnContextService", function() { return DnnContextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DnnContextService = /** @class */ (function () {
    function DnnContextService() {
        // https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8
        this._moduleId = -1;
        this._tabId = -1;
        this._antiForgeryToken = '';
        this._properties = {};
        var MODULE = 'AngularNGMD';
        if (window && window[MODULE]) {
            this._properties = window[MODULE];
            console.log('​-----------------------------------------------------------------------');
            console.log('​DnnContextService -> constructor -> this._properties', this._properties);
            console.log('​-----------------------------------------------------------------------');
        }
        else {
            console.log('----------------------');
            console.log('ERROR: Missing window[MODULE] for DNN');
            console.log('----------------------');
        }
    }
    DnnContextService.prototype.getServiceFramework = function () {
        this._moduleId = this._properties.ModuleId;
        // this._properties.UserID;
        console.log('​---------------------------------------------------------------------------------------------');
        console.log('​DnnContextService -> getServiceFramework -> this._properties.UserID', this._properties.UserId);
        console.log('​---------------------------------------------------------------------------------------------');
        console.log('​---------------------------------------------------------------------------');
        if (this._antiForgeryToken !== '') {
            console.log('​-----------------------------------------------');
            console.log('​DnnContextService -> getServiceFramework -> ', 'FALL 00');
            console.log('​-----------------------------------------------');
            return this.context;
        }
        else {
            // Check if DNN Services framework exists.
            if (window.$ && window.$.ServicesFramework) {
                var sf = window.$.ServicesFramework();
                // Check if sf is initialized.
                console.log('​---------------------------------------------------------------------------------------------------------------------------------------------------');
                console.log('​DnnContextService -> getServiceFramework -> window.$.ServicesFramework().getAntiForgeryValue()', window.$.ServicesFramework().getAntiForgeryValue());
                console.log('​---------------------------------------------------------------------------------------------------------------------------------------------------');
                // const t = timer(0, 100)
                //     .pipe(take(10))
                //     .subscribe(x => {
                //         console.log('​-----------------------------------------------');
                //         console.log('​DnnContextService -> getServiceFramework -> ', 'TIMER START');
                //         console.log('​-----------------------------------------------');
                //         // Check if sf is initialized.
                //         if (sf.getAntiForgeryValue() && sf.getTabId() !== -1) {
                //             this._tabId = sf.getTabId();
                //             this._antiForgeryToken = sf.getAntiForgeryValue();
                //             console.log('​-----------------------------------------------');
                //             console.log('​DnnContextService -> getServiceFramework -> TROVATO ->', this._antiForgeryToken);
                //             console.log('​-----------------------------------------------');        
                //             t.unsubscribe();
                //             return this.context;                            
                //         } else {
                //             console.log('​-----------------------------------------------');
                //             console.log('​DnnContextService -> getServiceFramework -> ', 'MISSING');
                //             console.log('​-----------------------------------------------');
                //         }
                //     });
                if (sf.getAntiForgeryValue() && sf.getTabId() !== -1) {
                    this._tabId = sf.getTabId();
                    this._antiForgeryToken = sf.getAntiForgeryValue();
                    console.log('​-----------------------------------------------');
                    console.log('​DnnContextService -> getServiceFramework -> RETURN: this.context', this.context);
                    console.log('​-----------------------------------------------');
                    return this.context;
                }
                else {
                    console.log('​-----------------------------------------------');
                    console.log('​DnnContextService -> getServiceFramework -> ', 'FALL 01');
                    console.log('​-----------------------------------------------');
                    return null;
                }
            }
            else {
                return null;
            }
        }
    };
    Object.defineProperty(DnnContextService.prototype, "context", {
        get: function () {
            return { 'tabId': this._tabId, 'antiForgeryToken': this._antiForgeryToken, 'moduleId': this._moduleId };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnnContextService.prototype, "properties", {
        get: function () {
            return this._properties;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnnContextService.prototype, "resources", {
        get: function () {
            return this._properties.Resources;
        },
        enumerable: true,
        configurable: true
    });
    DnnContextService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DnnContextService);
    return DnnContextService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\matte_000\Documents\_SOLUTIONS\FrontEnd-Solutions\TMP\Angluar6-CLI\AngolarNG6MD\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
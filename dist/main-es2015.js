(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"simulator\",\"version\":\"0.0.0\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve --host 0.0.0.0 --disableHostCheck\",\"build\":\"ng build\",\"build--dev\":\"ng build  --build-optimizer --configuration=Dev\",\"build--stage\":\"ng build  --build-optimizer --configuration=Stage\",\"build--prod\":\"ng build  --build-optimizer --configuration=Prod\",\"build--pre\":\"ng build  --build-optimizer --configuration=Pre\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~9.1.3\",\"@angular/common\":\"~9.1.3\",\"@angular/compiler\":\"~9.1.3\",\"@angular/core\":\"~9.1.3\",\"@angular/forms\":\"~9.1.3\",\"@angular/platform-browser\":\"~9.1.3\",\"@angular/platform-browser-dynamic\":\"~9.1.3\",\"@angular/router\":\"~9.1.3\",\"file-saver\":\"^2.0.5\",\"multiparty\":\"^4.2.2\",\"ng-zorro-antd\":\"^9.1.2\",\"rxjs\":\"~6.5.4\",\"tslib\":\"^1.10.0\",\"xiot-core-xcp-browser-ts\":\"^0.50.0\",\"xlsx\":\"^0.16.9\",\"xml-js\":\"^1.6.11\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.901.3\",\"@angular/cli\":\"~9.1.3\",\"@angular/compiler-cli\":\"~9.1.3\",\"@angular/language-service\":\"~9.1.3\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.12.53\",\"@typescript-eslint/eslint-plugin\":\"^3.3.0\",\"@typescript-eslint/parser\":\"^3.3.0\",\"codelyzer\":\"^5.1.2\",\"eslint\":\"^7.2.0\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~4.2.1\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~2.1.0\",\"karma-jasmine\":\"~3.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.2\",\"protractor\":\"~5.4.3\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"^3.8.3\"}}");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '**',
        /* component: HomeComponent */
        redirectTo: '/'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true }),],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true }),],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var xml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xml-js */ "./node_modules/xml-js/lib/index.js");
/* harmony import */ var xml_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xml_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/upload */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-upload.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");















function AppComponent_tr_48_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_tr_48_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_48_ng_template_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const idx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.startEdit(idx_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_48_ng_template_7_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (data_r2["ID"] = $event); })("blur", function AppComponent_tr_48_ng_template_7_Template_input_blur_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.stopEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r3 = ctx_r16.index;
    const data_r2 = ctx_r16.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r6.editIndex === idx_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r2["ID"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r6.editIndex !== idx_r3)("ngModel", data_r2["ID"]);
} }
function AppComponent_tr_48_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_tr_48_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_48_ng_template_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const idx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.startEdit(idx_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_48_ng_template_11_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (data_r2["SN"] = $event); })("blur", function AppComponent_tr_48_ng_template_11_Template_input_blur_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.stopEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r3 = ctx_r23.index;
    const data_r2 = ctx_r23.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r9.editIndex === idx_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r2["SN"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r9.editIndex !== idx_r3)("ngModel", data_r2["SN"]);
} }
function AppComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_tr_48_ng_container_6_Template, 2, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_tr_48_ng_template_7_Template, 3, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_tr_48_ng_container_10_Template, 2, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_tr_48_ng_template_11_Template, 3, 4, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["\u8BA1\u6570"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["\u540D\u79F0"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2["\u7C7B\u522B"] != ctx_r1.DEVICETYPE.SMART)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2["\u7C7B\u522B"] != ctx_r1.DEVICETYPE.SMART)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["\u7C7B\u522B"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["\u4EA7\u54C1\u63CF\u8FF0"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["\u5355\u4EF7"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["\u5355\u4F4D"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["\u89C4\u683C"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["\u5185\u5E8F\u53F7"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["\u533A\u57DF\u540D\u79F0"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["\u4F4D\u7F6E\u7801"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["\u578B\u53F7"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["\u5907\u6CE8"]);
} }
const _c0 = function () { return ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]; };
window.Buffer = Uint8Array;
var DEVICETYPE;
(function (DEVICETYPE) {
    DEVICETYPE[DEVICETYPE["SMART"] = 1] = "SMART";
    DEVICETYPE[DEVICETYPE["UNSMART"] = 0] = "UNSMART";
})(DEVICETYPE || (DEVICETYPE = {}));
class AppComponent {
    constructor(http, msg) {
        this.http = http;
        this.msg = msg;
        this.DEVICETYPE = DEVICETYPE;
        this.uploading = false;
        this.fileList = [];
        this.beforeUpload = (file) => {
            console.log(file);
            this.fileList = [file];
            this.parseForm(file);
            return false;
        };
    }
    parseForm(file) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (e) => {
            console.log(e);
            const data = new Uint8Array(e.target.result);
            const workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](data, { type: 'array' }); // workbook 是 xlsx 解析 excel 后返回的对象
            const firstSheetName = workbook.SheetNames[0]; // 获取第一个 sheet 的名字
            const worksheet = workbook.Sheets[firstSheetName]; // 获取第一个 sheet 的内容
            const listOfData = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(worksheet); // 使用 utils 里的方法转换内容为便于使用的数组
            // 下面就是自己对数组进行操作就行了
            console.log(listOfData);
            this.listOfData = listOfData;
        };
    }
    startEdit(index) {
        this.editIndex = index;
    }
    stopEdit() {
        console.log(1231);
        this.editIndex = null;
    }
    saveToSheet(type) {
        const json = type === 'sale'
            ? this.getJsonOfSale(this.listOfData)
            : this.getJsonOfTech(this.listOfData);
        console.log(json);
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
        const workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(workbook, worksheet, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](workbook, `SheetJS.xlsx`);
    }
    saveToXml() {
        const body = JSON.parse('{"_declaration":{"_attributes":{"version":"1.0","encoding":"utf-8"}}}');
        body.devices = {};
        const json = this.getJsonOfTech(this.listOfData.filter(data => data.类别 === DEVICETYPE.SMART));
        body.devices.device = json;
        const xmlString = Object(xml_js__WEBPACK_IMPORTED_MODULE_1__["json2xml"])(JSON.stringify(body), { compact: true, spaces: 4 });
        console.log(xmlString);
        const blob = new Blob([xmlString]); //  创建一个blob对象
        const a = document.createElement('a'); //  创建一个<a></ a>标签
        a.href = URL.createObjectURL(blob); //  response is a blob
        a.download = `test.xml`; //  文件名称
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
    getJsonOfSale(dataList) {
        const json = [];
        for (const data of dataList) {
            if (json.find(ele => ele.产品名称 === data.名称)) {
                continue;
            }
            const sum = dataList
                .filter(ele => ele.名称 === data.名称)
                .reduce((pre, current) => {
                current.计数 += pre.计数;
                return current;
            });
            const sale = {
                型号: data.型号 || null,
                产品名称: data.名称 || null,
                规格: data.规格 || null,
                描述: data.产品描述 || null,
                单位: data.单位 || null,
                单价: data.单价,
                计数: sum.计数,
                总价: sum.计数 * data.单价,
                备注: data.备注 || null,
            };
            json.push(sale);
        }
        return json;
    }
    getJsonOfTech(dataList) {
        const json = [];
        const add = (() => {
            let count = 0;
            return () => {
                return ++count;
            };
        })();
        for (const data of dataList) {
            const tech = {
                编号: null,
                区域: data.区域名称 || null,
                区域内序号: data.内序号 || null,
                设备名称: data.名称 || null,
                型号: data.型号 || null,
                规格: data.规格 || null,
                SN: data.SN || null,
                ID: data.ID || null,
                位置码: data.位置码 || null,
                备注: data.备注 || null
            };
            for (let index = 0; index < data.计数; index++) {
                const copy = JSON.parse(JSON.stringify(tech));
                copy.编号 = add();
                json.push(copy);
            }
        }
        return json;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 51, vars: 12, consts: [["id", "app"], [2, "min-height", "100%"], [3, "nzFileList", "nzBeforeUpload", "nzAccept", "nzFileListChange"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"], ["nz-button", "", 2, "margin-left", "20px", 3, "nzType", "disabled", "click"], ["nzBordered", "", 2, "margin-top", "20px", "padding", "20px", 3, "nzData"], ["editRowTable", ""], ["nzWidth", "20%"], ["class", "editable-row", 4, "ngFor", "ngForOf"], [1, "editable-row"], [4, "ngIf", "ngIfElse"], ["elseIDTemplate", ""], ["elseSNTemplate", ""], [1, "editable-cell", 3, "hidden", "click"], ["type", "text", "nz-input", "", 3, "hidden", "ngModel", "ngModelChange", "blur"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-layout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Knowin Smart Web Tool\uFF01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-upload", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFileListChange", function AppComponent_Template_nz_upload_nzFileListChange_5_listener($event) { return ctx.fileList = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u9009\u62E9\u6587\u4EF6(xls/xlsx)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener($event) { ctx.saveToSheet("sale"); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u9500\u552E\u5411\u5BFC\u51FAxlsx ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener($event) { ctx.saveToSheet("tech"); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u6280\u672F\u5411\u5BFC\u51FAxlsx ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener($event) { ctx.saveToXml(); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u5BFC\u51FAxml ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-table", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u8BA1\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u7C7B\u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u4EA7\u54C1\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u5355\u4EF7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u5355\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u89C4\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u5185\u5E8F\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u533A\u57DF\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u4F4D\u7F6E\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u578B\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u5907\u6CE8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AppComponent_tr_48_Template, 33, 16, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nz-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "designed by angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFileList", ctx.fileList)("nzBeforeUpload", ctx.beforeUpload)("nzAccept", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary")("disabled", ctx.fileList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary")("disabled", ctx.fileList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary")("disabled", ctx.fileList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzHeaderComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzContentComponent"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_6__["NzUploadComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]], styles: ["#app[_ngcontent-%COMP%] {\n  font-family: 'Noto Sans SC', 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n  height: 100%;\n  min-width: 1260px;\n  text-align: center;\n  \n  position: relative;\n  color: #2c3e50;\n  background-color: #f5f5f5;\n  margin-top: 0px;\n}\n#app   [_nghost-%COMP%] {\n  text-align: center;\n}\n#app[_ngcontent-%COMP%]   nz-header[_ngcontent-%COMP%], #app[_ngcontent-%COMP%]   nz-footer[_ngcontent-%COMP%] {\n  background: #374051;\n  color: #fff;\n}\n#app[_ngcontent-%COMP%]   nz-footer[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n#app[_ngcontent-%COMP%]   nz-content[_ngcontent-%COMP%] {\n  background: whitesmoke;\n  color: lightblue;\n  min-height: 120px;\n  height: 100%;\n  line-height: 120px;\n}\n#app[_ngcontent-%COMP%]   nz-content[_ngcontent-%COMP%]   .editable-cell[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 5px 12px;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   nz-content[_ngcontent-%COMP%]   .editable-row[_ngcontent-%COMP%]:hover   .editable-cell[_ngcontent-%COMP%] {\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  padding: 4px 11px;\n}\n#app[_ngcontent-%COMP%]   nz-layout[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n#app[_ngcontent-%COMP%]   nz-layout[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvenNtL215d29yay9hbmd1bGFyL3hpb3QteGxzLXhtbC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUVBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VDQ0EscUJBQXFCO0VEQ3JCLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VDQ0Esd0JBQXdCO0VEQ3hCLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEYkE7RUFjSSxrQkFBQTtBQ0VKO0FEaEJBOztFQWtCSSxtQkFBQTtFQUNBLFdBQUE7QUNFSjtBRHJCQTtFQXVCSSxnQkFBQTtBQ0NKO0FEeEJBO0VBMkJJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEL0JBO0VBa0NNLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQU47QURwQ0E7RUF3Q00seUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRE47QUR6Q0E7RUErQ0ksbUJBQUE7QUNISjtBRDVDQTtFQW1ESSxTQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXBwIHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgU0MnLCAnQXZlbmlyJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC8qIHdpZHRoOiAnMTkyMHB4JzsgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEyNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMSk7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgOmhvc3Qge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBuei1oZWFkZXIsXG4gIG56LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogIzM3NDA1MTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIG56LWZvb3RlciB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIG56LWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEyMHB4O1xuXG4gICAgLmVkaXRhYmxlLWNlbGwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmVkaXRhYmxlLXJvdzpob3ZlciAuZWRpdGFibGUtY2VsbCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcGFkZGluZzogNHB4IDExcHg7XG4gICAgfVxuICB9XG5cbiAgbnotbGF5b3V0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICB9XG5cbiAgbnotbGF5b3V0Omxhc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5cbiIsIiNhcHAge1xuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBTQycsICdBdmVuaXInLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLyogd2lkdGg6ICcxOTIwcHgnOyAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTI2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuI2FwcCA6aG9zdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNhcHAgbnotaGVhZGVyLFxuI2FwcCBuei1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzc0MDUxO1xuICBjb2xvcjogI2ZmZjtcbn1cbiNhcHAgbnotZm9vdGVyIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbiNhcHAgbnotY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiBsaWdodGJsdWU7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxMjBweDtcbn1cbiNhcHAgbnotY29udGVudCAuZWRpdGFibGUtY2VsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNhcHAgbnotY29udGVudCAuZWRpdGFibGUtcm93OmhvdmVyIC5lZGl0YWJsZS1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA0cHggMTFweDtcbn1cbiNhcHAgbnotbGF5b3V0IHtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn1cbiNhcHAgbnotbGF5b3V0Omxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-dropdown.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tag */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/affix */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-affix.js");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/divider */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input-number.js");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-descriptions.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/slider */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-slider.js");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/switch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-switch.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-drawer.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/list */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-list.js");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/upload */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-upload.js");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






//


//
























/* import {MatIconModule} from '@angular/material/icon'; */
//


// service
Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_31__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_30__["NzMessageService"],
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__["zh_CN"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzGridModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__["NzLayoutModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__["NzDropDownModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconModule"],
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__["NzTagModule"],
            ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_16__["NzAffixModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__["NzDividerModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_18__["NzInputNumberModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__["NzModalModule"],
            ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_19__["NzDescriptionsModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__["NzFormModule"],
            ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_21__["NzSliderModule"],
            ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_22__["NzSwitchModule"],
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_23__["NzRadioModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_24__["NzSpinModule"],
            ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_25__["NzDrawerModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__["NzSelectModule"],
            ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_27__["NzListModule"],
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_28__["NzUploadModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__["NzTableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_31__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzGridModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__["NzLayoutModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__["NzDropDownModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__["NzTagModule"],
        ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_16__["NzAffixModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__["NzDividerModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_18__["NzInputNumberModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__["NzModalModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_19__["NzDescriptionsModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__["NzFormModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_21__["NzSliderModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_22__["NzSwitchModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_23__["NzRadioModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_24__["NzSpinModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_25__["NzDrawerModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__["NzSelectModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_27__["NzListModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_28__["NzUploadModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__["NzTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_31__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzGridModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__["NzLayoutModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__["NzDropDownModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__["NzTagModule"],
                    ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_16__["NzAffixModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__["NzDividerModule"],
                    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_18__["NzInputNumberModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__["NzModalModule"],
                    ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_19__["NzDescriptionsModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__["NzFormModule"],
                    ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_21__["NzSliderModule"],
                    ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_22__["NzSwitchModule"],
                    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_23__["NzRadioModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_24__["NzSpinModule"],
                    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_25__["NzDrawerModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__["NzSelectModule"],
                    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_27__["NzListModule"],
                    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_28__["NzUploadModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__["NzTableModule"]
                ],
                providers: [
                    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_30__["NzMessageService"],
                    { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__["zh_CN"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_31__["AppComponent"]]
            }]
    }], null, null); })();


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
const environment = {
    //  SERVER_URL: `http://10.10.0.54:8014`,
    SERVER_URL: `https://dev-iot-dvlp.knowin.com`,
    CONTROLLER_URL: `https://dev-iot-api.knowin.com`,
    ACCOUNT_URL: `https://dev-iot-account.knowin.com`,
    AP_URL: 'dev-iot-ap.knowin.com',
    GUIDE_URL: 'https://dev-iot-guide.knowin.com',
    DEVICE_URL: 'https://dev-iot-spec.knowin.com',
    MIOT_URL: 'http://miot-spec.org',
    VERSION: __webpack_require__(/*! ../../package.json */ "./package.json").version,
    mock: false,
    prod: false,
    useHash: true,
    dev: false,
    stage: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].prod) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zsm\mywork\angular\xiot-xls-xml\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
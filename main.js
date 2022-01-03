(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Users\Fabricio\Documents\# EM PRODUÇÃO\OBJECTIVE\projeto-code-hero\code-hero\src\main.ts */"zUnb");


/***/ }),

/***/ "4LLT":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/characters/characters-search/characters-search.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CharactersSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersSearchComponent", function() { return CharactersSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_characters_search_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./characters-search.component.html */ "vnQB");
/* harmony import */ var _characters_search_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters-search.component.css */ "vqVI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_api_services_listCharacters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/api/services/listCharacters.service */ "OpsF");







let CharactersSearchComponent = class CharactersSearchComponent {
    constructor(listCharactersService) {
        this.listCharactersService = listCharactersService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.characters$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((term) => this.listCharactersService.searchCharaters(term)));
    }
};
CharactersSearchComponent.ctorParameters = () => [
    { type: app_api_services_listCharacters_service__WEBPACK_IMPORTED_MODULE_6__["ListCharactersService"] }
];
CharactersSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-characters-search',
        template: _raw_loader_characters_search_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_characters_search_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CharactersSearchComponent);



/***/ }),

/***/ "69wn":
/*!*******************************************************!*\
  !*** ./src/app/pages/characters/characters.module.ts ***!
  \*******************************************************/
/*! exports provided: CharactersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersModule", function() { return CharactersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var app_shared_shares_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/shares.module */ "Lo0o");
/* harmony import */ var _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters.routing.module */ "caSs");
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/characters.component */ "kphy");
/* harmony import */ var _characters_search_characters_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters-search/characters-search.component */ "4LLT");
/* harmony import */ var _characters_not_found_characters_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./characters-not-found/characters-not-found.component */ "GX92");
/* harmony import */ var _character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./character-detail/character-detail.component */ "Mljc");
/* harmony import */ var _character_detail_extras_character_detail_extras_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./character-detail-extras/character-detail-extras.component */ "Z6Ba");











let CharactersModule = class CharactersModule {
};
CharactersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersRoutingModule"],
            app_shared_shares_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]
        ],
        declarations: [
            _characters_characters_component__WEBPACK_IMPORTED_MODULE_6__["CharactersComponent"],
            _character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_9__["CharacterDetailComponent"],
            _characters_search_characters_search_component__WEBPACK_IMPORTED_MODULE_7__["CharactersSearchComponent"],
            _characters_not_found_characters_not_found_component__WEBPACK_IMPORTED_MODULE_8__["CharactersNotFoundComponent"],
            _character_detail_extras_character_detail_extras_component__WEBPACK_IMPORTED_MODULE_10__["CharacterDetailExtrasComponent"]
        ]
    })
], CharactersModule);



/***/ }),

/***/ "7x1o":
/*!*********************************************************************!*\
  !*** ./src/app/pages/components/footer/footer/footer.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DiOw":
/*!**********************************************************************!*\
  !*** ./src/app/pages/characters/characters/characters.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n@media (max-width: 767.98px) {\r\n  .hidden-sm {\r\n    display: none;\r\n  }\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3RlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtDQUNEIiwiZmlsZSI6ImNoYXJhY3RlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAuaGlkZGVuLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gfVxyXG4iXX0= */");

/***/ }),

/***/ "F7Tq":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"progress\">\r\n  <div class=\"progress-bar indeterminate\"></div>\r\n  <span class=\"sr-only\">Carregando...</span>\r\n</div>\r\n\r\n<div class=\"loading\" *ngIf=\"!fullLoader\">\r\n  <div class=\"spinner-border\"></div>\r\n</div>\r\n\r\n<div [ngClass]=\"{featured: fullLoader}\"></div>\r\n");

/***/ }),

/***/ "FTI0":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/characters/character-detail-extras/character-detail-extras.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span.item-title {\r\n  display: block;\r\n  font: normal normal 700 24px/36px 'PT Sans';\r\n  padding: 10px 0;\r\n  margin: 40px 0 0;\r\n  text-align: center;\r\n  border-bottom: 1px solid #dbdbdb;\r\n}\r\n\r\nspan.item-info-title {\r\n  display: block;\r\n  font: normal normal 700 20px/22px 'PT Sans';\r\n  padding: 10px 0;\r\n}\r\n\r\n.item-content {\r\n  margin-bottom: 30px;\r\n  min-height: 560px;\r\n  padding: 20px;\r\n  position: relative;\r\n  box-shadow: 0 26px 24px -16px rgb(0 0 0 / 40%);\r\n}\r\n\r\n.link-item {\r\n  bottom: 20px;\r\n  position: absolute;\r\n}\r\n\r\n.imageMedium {\r\n  max-height: 300px;\r\n  max-width: 300px;\r\n  object-fit: contain;\r\n  width: 100%;\r\n}\r\n\r\n.imageSmall {\r\n  max-height: 295px;\r\n  max-width: 200px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1kZXRhaWwtZXh0cmFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsMkNBQTJDO0VBQzNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCwyQ0FBMkM7RUFDM0MsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2IiLCJmaWxlIjoiY2hhcmFjdGVyLWRldGFpbC1leHRyYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4uaXRlbS10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCA3MDAgMjRweC8zNnB4ICdQVCBTYW5zJztcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgbWFyZ2luOiA0MHB4IDAgMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmRiZGI7XHJcbn1cclxuXHJcbnNwYW4uaXRlbS1pbmZvLXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250OiBub3JtYWwgbm9ybWFsIDcwMCAyMHB4LzIycHggJ1BUIFNhbnMnO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLml0ZW0tY29udGVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBtaW4taGVpZ2h0OiA1NjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2hhZG93OiAwIDI2cHggMjRweCAtMTZweCByZ2IoMCAwIDAgLyA0MCUpO1xyXG59XHJcblxyXG4ubGluay1pdGVtIHtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uaW1hZ2VNZWRpdW0ge1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltYWdlU21hbGwge1xyXG4gIG1heC1oZWlnaHQ6IDI5NXB4O1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "GX92":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/characters/characters-not-found/characters-not-found.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CharactersNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersNotFoundComponent", function() { return CharactersNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_characters_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./characters-not-found.component.html */ "Uagt");
/* harmony import */ var _characters_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters-not-found.component.css */ "w5Sj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let CharactersNotFoundComponent = class CharactersNotFoundComponent {
    constructor() { }
    ngOnInit() { }
};
CharactersNotFoundComponent.ctorParameters = () => [];
CharactersNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-characters-not-found',
        template: _raw_loader_characters_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_characters_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CharactersNotFoundComponent);



/***/ }),

/***/ "JRqS":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/character-detail-extras/character-detail-extras.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"itemContent$ | async; let items\">\n\n  <div *ngIf=\"items.data.results.length\" class=\"row\">\n    <div class=\"col-xl-12\">\n      <div class=\"character-items\">\n        <span class=\"text-uppercase item-title\">{{ itemType }}</span><br>\n        <div class=\"row p-0\">\n          <ng-container *ngFor=\"let item of items.data.results\">\n          <div class=\"col-xl-4\">\n            <div class=\"item-content card\">\n              <div class=\"item-thumb text-center mb-2 mt-4\">\n                <ng-container *ngIf=\"item.thumbnail.path; else notImage\">\n                  <img src=\"{{ item.thumbnail.path}}.{{item.thumbnail.extension}}\" title=\"{{ item.title }}\"\n                  [ngClass]=\"{\n                    'imageMedium': itemType === 'Séries' || itemType === 'Eventos',\n                    'imageSmall': itemType === 'Comics'\n                  }\" loading=\"lazy\" />\n                </ng-container>\n                <ng-template #notImage>\n                  <img src=\"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg\" title=\"Image not found!\"\n                  [ngClass]=\"{\n                    'imageMedium': itemType === 'Séries' || itemType === 'Eventos',\n                    'imageSmall': itemType === 'Comics'\n                  }\" loading=\"lazy\" />\n                </ng-template>\n              </div>\n              <div class=\"item-info\">\n                <span class=\"item-info-title\">{{ item.title }}</span>\n                <p>{{ item.description | excerpt: 110 }}</p>\n                <ng-container *ngFor=\"let url of item.urls\">\n                  <ng-container *ngIf=\"url.type === 'detail'\">\n                    <a href=\"{{url.url}}\" class=\"btn btn-outline-secondary link-item\" target=\"_blank\">Veja mais</a>\n                  </ng-container>\n                </ng-container>\n              </div>\n            </div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ng-container>\n");

/***/ }),

/***/ "Jewv":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/character-detail/character-detail.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-in\" *ngIf=\"character; else loading\">\n  <ng-container *ngFor=\"let person of character\">\n\n    <!-- Details Start -->\n\n    <div class=\"header-featured\">\n      <div class=\"title-character\">\n        <span>{{ person.name | split }}</span>\n      </div>\n\n      <div class=\"filter-featured\">\n        <div class=\"image-detail-featured\"\n          style=\"background-image: url('{{ person.thumbnail.path }}.{{ person.thumbnail.extension }}');\"></div>\n      </div>\n    </div>\n\n    <div class=\"container character-detail my-4\">\n      <div class=\"container-white sup\">\n        <div class=\"row\">\n          <div class=\"col-xl-8\">\n            <div class=\"image-detail\"\n              style=\"background-image: url('{{ person.thumbnail.path }}.{{ person.thumbnail.extension }}');\"></div>\n          </div>\n          <div class=\"col-xl-4\">\n            <div class=\"title-detail\">\n              <h1>{{ person.name }}</h1>\n            </div>\n            <div class=\"description-character-detail\">\n              <ng-container *ngIf=\"person.description; else descriptionOff\">\n                <p>{{ person.description }}</p>\n              </ng-container>\n              <ng-template #descriptionOff>\n                {{ person.name | split }} ainda não tem uma descrição.\n              </ng-template>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <app-character-detail-extras [itemType]=\"'Comics'\" [itemContent$]=\"comics$\"></app-character-detail-extras>\n      <app-character-detail-extras [itemType]=\"'Séries'\" [itemContent$]=\"series$\"></app-character-detail-extras>\n      <app-character-detail-extras [itemType]=\"'Eventos'\" [itemContent$]=\"events$\"></app-character-detail-extras>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-xl-12\">\n          <a routerLink=\"/\" routerLinkActive=\"active-link\" class=\"btn btn-secondary\">\n            <svg style=\"vertical-align: text-bottom; margin-right: 8px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\"\n              height=\"20\" fill=\"#FFFFFF\" class=\"bi bi-arrow-left-short\" viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z\" />\n            </svg>\n            Voltar\n          </a>\n        </div>\n      </div>\n\n    </div>\n\n    <!-- Details End-->\n\n  </ng-container>\n<div>\n\n<ng-template #loading>\n  <app-loader [fullLoader]=\"false\"></app-loader>\n</ng-template>\n");

/***/ }),

/***/ "Lo0o":
/*!*****************************************!*\
  !*** ./src/app/shared/shares.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _loader_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader */ "g2at");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _pipes_splitName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/splitName */ "kf1R");
/* harmony import */ var _pipes_excerpt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/excerpt */ "nGwr");






let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ], declarations: [
            _pipes_splitName__WEBPACK_IMPORTED_MODULE_4__["SplitPipe"],
            _loader_loader__WEBPACK_IMPORTED_MODULE_1__["Loader"],
            _pipes_excerpt__WEBPACK_IMPORTED_MODULE_5__["ExcerptFilter"]
        ],
        exports: [
            _pipes_splitName__WEBPACK_IMPORTED_MODULE_4__["SplitPipe"],
            _loader_loader__WEBPACK_IMPORTED_MODULE_1__["Loader"],
            _pipes_excerpt__WEBPACK_IMPORTED_MODULE_5__["ExcerptFilter"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "Mljc":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/characters/character-detail/character-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CharacterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailComponent", function() { return CharacterDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_character_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./character-detail.component.html */ "Jewv");
/* harmony import */ var _character_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character-detail.component.css */ "zkYa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_api_services_characters_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/api/services/characters.service */ "NF7u");
/* harmony import */ var app_api_services_listCharacters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/api/services/listCharacters.service */ "OpsF");







let CharacterDetailComponent = class CharacterDetailComponent {
    constructor(charactersService, listCharactersService, route) {
        this.charactersService = charactersService;
        this.listCharactersService = listCharactersService;
        this.route = route;
        this.characterId = +this.route.snapshot.paramMap.get('id');
        this.characterId ? this.characterId = this.characterId : this.characterId = 0;
    }
    ngOnInit() {
        this.goTop();
        if (this.characterId) {
            let listArray = new Array();
            this.listCharactersService.listCharacters$
                .subscribe(list => {
                if (!list || !Object.keys(list).length) {
                    let id = this.characterId;
                    this.listCharactersService.getCharacterDetail(id);
                    this.listCharactersService.detailCharacter$
                        .subscribe(result => {
                        listArray = [result];
                        listArray.forEach((characterDetails) => {
                            var _a;
                            this.character = (_a = characterDetails.data) === null || _a === void 0 ? void 0 : _a.results.map((result) => result);
                        });
                    });
                }
                else {
                    listArray = [list];
                    this.getCharacter(listArray);
                }
            });
            this.getExtras();
        }
    }
    getCharacter(result) {
        result.forEach(lista => {
            var _a;
            this.character = (_a = lista.data) === null || _a === void 0 ? void 0 : _a.results.filter((characterSelected) => {
                return characterSelected.id === this.characterId;
            });
        });
    }
    getExtras() {
        this.comics$ = this.charactersService.getCharacterComics(this.characterId);
        this.series$ = this.charactersService.getCharacterSeries(this.characterId);
        this.events$ = this.charactersService.getCharacterEvents(this.characterId);
    }
    goTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
};
CharacterDetailComponent.ctorParameters = () => [
    { type: app_api_services_characters_service__WEBPACK_IMPORTED_MODULE_5__["CharactersService"] },
    { type: app_api_services_listCharacters_service__WEBPACK_IMPORTED_MODULE_6__["ListCharactersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CharacterDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-character-detail',
        template: _raw_loader_character_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_character_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CharacterDetailComponent);



/***/ }),

/***/ "NF7u":
/*!****************************************************!*\
  !*** ./src/app/api/services/characters.service.ts ***!
  \****************************************************/
/*! exports provided: CharactersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersService", function() { return CharactersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let CharactersService = class CharactersService {
    constructor(http) {
        this.http = http;
        this.API_URL = 'https://gateway.marvel.com';
        this.CHARACTERS_URL = '/v1/public/characters';
        this.PUBLIC_API_KEY = '259d79888a01634527fcd76951f071a1';
    }
    getCharacters(limit, offset, observe = 'body', reportProgress = false) {
        let limitList;
        let offsetList;
        limit ? limitList = `limit=${limit}&` : limitList = '';
        offset ? offsetList = `offset=${offset}&` : offsetList = '';
        const url = `${this.API_URL}${this.CHARACTERS_URL}?${limitList}${offsetList}apikey=${this.PUBLIC_API_KEY}`;
        return this.http.get(url, {
            observe: observe,
            reportProgress: reportProgress
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCharacters', [])));
    }
    getCharacterDetail(id, observe = 'body', reportProgress = false) {
        const url = `${this.API_URL}${this.CHARACTERS_URL}/${id}?apikey=${this.PUBLIC_API_KEY}`;
        return this.http.get(url, {
            observe: observe,
            reportProgress: reportProgress
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCharacterDetail', [])));
    }
    getCharacterComics(id, observe = 'body', reportProgress = false) {
        const url = `${this.API_URL}${this.CHARACTERS_URL}/${id}/comics?limit=6&apikey=${this.PUBLIC_API_KEY}`;
        return this.http.get(url, {
            observe: observe,
            reportProgress: reportProgress
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getComicsCollection', [])));
    }
    getCharacterEvents(id, observe = 'body', reportProgress = false) {
        const url = `${this.API_URL}${this.CHARACTERS_URL}/${id}/events?limit=6&apikey=${this.PUBLIC_API_KEY}`;
        return this.http.get(url, {
            observe: observe,
            reportProgress: reportProgress
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getEventsCollection', [])));
    }
    getCharacterSeries(id, observe = 'body', reportProgress = false) {
        const url = `${this.API_URL}${this.CHARACTERS_URL}/${id}/series?limit=6&apikey=${this.PUBLIC_API_KEY}`;
        return this.http.get(url, {
            observe: observe,
            reportProgress: reportProgress
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSeriesCollection', [])));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
CharactersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CharactersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CharactersService);



/***/ }),

/***/ "OpsF":
/*!********************************************************!*\
  !*** ./src/app/api/services/listCharacters.service.ts ***!
  \********************************************************/
/*! exports provided: ListCharactersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCharactersService", function() { return ListCharactersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var app_api_services_characters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/api/services/characters.service */ "NF7u");




let ListCharactersService = class ListCharactersService {
    constructor(charactersService) {
        this.charactersService = charactersService;
        this.listCharactersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.detailCharacterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.limit = 50;
        this.offset = undefined;
    }
    get listCharacters$() {
        return this.listCharactersSubject.asObservable();
    }
    get detailCharacter$() {
        return this.detailCharacterSubject.asObservable();
    }
    getListCharacters() {
        let checkList;
        this.listCharacters$.subscribe(list => {
            checkList = list;
            if (checkList.length === 0) {
                this.charactersService.getCharacters(this.limit, this.offset)
                    .subscribe(result => {
                    this.listCharactersSubject.next(Object.assign({}, result));
                });
            }
        });
    }
    getCharacterDetail(id) {
        let checkList;
        let listArray = [];
        this.detailCharacter$.subscribe(list => {
            checkList = list;
            if (checkList.length === 0) {
                this.charactersService.getCharacterDetail(id)
                    .subscribe(character => {
                    listArray.push(character);
                    listArray.forEach((characterDetails) => {
                        this.detailCharacterSubject.next(Object.assign({}, characterDetails));
                    });
                });
            }
        });
    }
    searchCharaters(term) {
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        let check = false;
        let charactersArray = [];
        let characterArray = [];
        let filterArray = [];
        this.listCharacters$.subscribe(characters => {
            characters ? check = true : check = false;
            if (check) {
                charactersArray.push(characters);
                charactersArray.map(character => {
                    var _a;
                    characterArray.push((_a = character.data) === null || _a === void 0 ? void 0 : _a.results);
                    const filterValue = term.toLowerCase();
                    characterArray.forEach(select => {
                        filterArray = select.filter((option) => { var _a; return (_a = option.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(filterValue); });
                    });
                    return filterArray;
                });
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(filterArray);
    }
};
ListCharactersService.ctorParameters = () => [
    { type: app_api_services_characters_service__WEBPACK_IMPORTED_MODULE_3__["CharactersService"] }
];
ListCharactersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ListCharactersService);



/***/ }),

/***/ "PglK":
/*!********************************************************************!*\
  !*** ./src/app/pages/components/footer/footer/footer.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "tejn");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "7x1o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let FooterComponent = class FooterComponent {
    ngOnInit() {
        this.marvelYear = Date.now();
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Teste de Front-end Objective';
        this.subtitle = 'Data provided by Marvel. © 2022 MARVEL';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "Uagt":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters-not-found/characters-not-found.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n  <div class=\"message-not-found\">\n    <h1>Ops! Não tem nada aqui.</h1>\n    <p>O personagem não foi encontrado ou a página que você está tentando acessar não existe.</p>\n    <button type=\"button\" class=\"btn btn-outline-secondary mt-4\" routerLink=\"/\" routerLinkActive=\"active-link\">Ir para a home</button>\n  </div>\n  <div class=\"background-heroes\"></div>\n</ng-container>\n\n");

/***/ }),

/***/ "VhD8":
/*!******************************************!*\
  !*** ./src/app/shared/loader/loader.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading {\r\n  display:flex;\r\n  align-items: center;\r\n  justify-items: center;\r\n  flex-direction: column;\r\n  height: auto;\r\n  width: 100%;\r\n  margin-top: 60px;\r\n  text-align: center;\r\n}\r\n\r\n.progress {\r\n  height: 4px;\r\n  background: #e56919;\r\n  position: fixed !important;\r\n  top: 0;\r\n  z-index: 9999999;\r\n  width: 100%;\r\n  border-radius: 0 !important;\r\n  left: 0;\r\n}\r\n\r\n.progress-bar.indeterminate {\r\n  position: relative;\r\n  animation: progress-indeterminate 1s linear infinite;\r\n  height: 4px;\r\n  background-color: #f0d974;\r\n}\r\n\r\n.loading .spinner-border {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  opacity: 0.5;\r\n}\r\n\r\n.loading .content-frase {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  max-width: 540px;\r\n  padding: 15px;\r\n}\r\n\r\n.loading .content-frase h5 {\r\n  line-height: 30px;\r\n  font-style: italic;\r\n  text-align: center;\r\n}\r\n\r\n@keyframes progress-indeterminate {\r\n   from { left: -25%; width: 25%; }\r\n   to { left: 100%; width: 25%;}\r\n}\r\n\r\n.featured {\r\n  background: url('marvel.gif') no-repeat center center;\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: -1;\r\n  position: absolute;\r\n  top: 0;\r\n  opacity: .9;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvREFBb0Q7RUFDcEQsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7R0FDRyxPQUFPLFVBQVUsRUFBRSxVQUFVLEVBQUU7R0FDL0IsS0FBSyxVQUFVLEVBQUUsVUFBVSxDQUFDO0FBQy9COztBQUVBO0VBQ0UscURBQW1GO0VBQ25GLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7QUFDYiIsImZpbGUiOiJsb2FkZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmcge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZTU2OTE5O1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTk5OTk5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyLmluZGV0ZXJtaW5hdGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbmltYXRpb246IHByb2dyZXNzLWluZGV0ZXJtaW5hdGUgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGQ5NzQ7XHJcbn1cclxuXHJcbi5sb2FkaW5nIC5zcGlubmVyLWJvcmRlciB7XHJcbiAgd2lkdGg6IDEuNXJlbTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5sb2FkaW5nIC5jb250ZW50LWZyYXNlIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDU0MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5sb2FkaW5nIC5jb250ZW50LWZyYXNlIGg1IHtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLWluZGV0ZXJtaW5hdGUge1xyXG4gICBmcm9tIHsgbGVmdDogLTI1JTsgd2lkdGg6IDI1JTsgfVxyXG4gICB0byB7IGxlZnQ6IDEwMCU7IHdpZHRoOiAyNSU7fVxyXG59XHJcblxyXG4uZmVhdHVyZWQge1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9hbmltYXRpb24vbWFydmVsLmdpZicpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiAtMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIG9wYWNpdHk6IC45O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "Z6Ba":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/characters/character-detail-extras/character-detail-extras.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CharacterDetailExtrasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailExtrasComponent", function() { return CharacterDetailExtrasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_character_detail_extras_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./character-detail-extras.component.html */ "JRqS");
/* harmony import */ var _character_detail_extras_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character-detail-extras.component.css */ "FTI0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let CharacterDetailExtrasComponent = class CharacterDetailExtrasComponent {
};
CharacterDetailExtrasComponent.propDecorators = {
    itemContent$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    itemType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CharacterDetailExtrasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-character-detail-extras',
        template: _raw_loader_character_detail_extras_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_character_detail_extras_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CharacterDetailExtrasComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _api_interceptor_http_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/interceptor/http.interceptor */ "dtUI");
/* harmony import */ var _api_services_characters_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/services/characters.service */ "NF7u");
/* harmony import */ var _api_services_listCharacters_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/services/listCharacters.service */ "OpsF");
/* harmony import */ var _pages_characters_characters_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/characters/characters.module */ "69wn");
/* harmony import */ var _pages_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/components/header/header.component */ "pI0V");
/* harmony import */ var _pages_components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/components/footer/footer/footer.component */ "PglK");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _pages_components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _pages_characters_characters_module__WEBPACK_IMPORTED_MODULE_9__["CharactersModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ],
        providers: [
            _api_services_characters_service__WEBPACK_IMPORTED_MODULE_7__["CharactersService"],
            _api_services_listCharacters_service__WEBPACK_IMPORTED_MODULE_8__["ListCharactersService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: _api_interceptor_http_interceptor__WEBPACK_IMPORTED_MODULE_6__["ApiInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "caSs":
/*!***************************************************************!*\
  !*** ./src/app/pages/characters/characters.routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CharactersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersRoutingModule", function() { return CharactersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/characters.component */ "kphy");
/* harmony import */ var _character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./character-detail/character-detail.component */ "Mljc");
/* harmony import */ var _characters_not_found_characters_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters-not-found/characters-not-found.component */ "GX92");






const charactersRoutes = [
    { path: '', component: _characters_characters_component__WEBPACK_IMPORTED_MODULE_3__["CharactersComponent"] },
    { path: 'characters/not-found', component: _characters_not_found_characters_not_found_component__WEBPACK_IMPORTED_MODULE_5__["CharactersNotFoundComponent"] },
    { path: 'characters/:id', component: _character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_4__["CharacterDetailComponent"] },
];
let CharactersRoutingModule = class CharactersRoutingModule {
};
CharactersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(charactersRoutes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], CharactersRoutingModule);



/***/ }),

/***/ "chni":
/*!**************************************************************!*\
  !*** ./src/app/pages/components/header/header.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\na.dropdown-toggle {\r\n  color: var(--text-color);\r\n  text-decoration: none;\r\n  transition: all .2s ease-out;\r\n}\r\n\r\na.dropdown-toggle:hover {\r\n  color: #82d0f5;\r\n}\r\n\r\n.dropdown-menu.show {\r\n  position: absolute;\r\n  right: auto;\r\n  left: 0;\r\n  top: 50px;\r\n  border: none;\r\n  box-shadow: 4px 8px 16px rgba(2, 2, 2, 0.3);\r\n}\r\n\r\n.dropdown-menu {\r\n  position:absolute;\r\n  background-color: #FFFFFF;\r\n  min-width: 160px;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.dropdown-menu a {\r\n  color: var(--text-color);\r\n  font-size: 14px;\r\n  margin: 8px 0;\r\n}\r\n\r\n.dropdown-menu a.dropdown-item {\r\n  transition: 400ms;\r\n}\r\n\r\n.dropdown-menu a.dropdown-item:hover {\r\n  color: #82d0f5;\r\n  background-color: transparent;\r\n}\r\n\r\n.dropdown-menu .box-profile {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  padding: 15px 15px;\r\n}\r\n\r\n.image-profile {\r\n  width: 65px;\r\n  border-radius: 4px;\r\n  filter: sepia(.8);\r\n  transition: all .4s ease-in;\r\n}\r\n\r\n.image-profile:hover {\r\n  filter: sepia(.2);\r\n  cursor: none;\r\n}\r\n\r\n@media (max-width: 575.98px) {\r\n\r\n  header .info-box {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLFNBQVM7RUFDVCxZQUFZO0VBQ1osMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7QUFFRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuYS5kcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcclxufVxyXG5hLmRyb3Bkb3duLXRvZ2dsZTpob3ZlciB7XHJcbiAgY29sb3I6ICM4MmQwZjU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LnNob3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogYXV0bztcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogNTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogNHB4IDhweCAxNnB4IHJnYmEoMiwgMiwgMiwgMC4zKTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSBhIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IGEuZHJvcGRvd24taXRlbSB7XHJcbiAgdHJhbnNpdGlvbjogNDAwbXM7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IGEuZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgY29sb3I6ICM4MmQwZjU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IC5ib3gtcHJvZmlsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5pbWFnZS1wcm9maWxlIHtcclxuICB3aWR0aDogNjVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZmlsdGVyOiBzZXBpYSguOCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluO1xyXG59XHJcblxyXG4uaW1hZ2UtcHJvZmlsZTpob3ZlciB7XHJcbiAgZmlsdGVyOiBzZXBpYSguMik7XHJcbiAgY3Vyc29yOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuXHJcbiAgaGVhZGVyIC5pbmZvLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "dpWz":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/header/header.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <!-- Header Start -->\n  <div class=\"header-top\">\n    <!-- Logo Objective -->\n    <div class=\"logo\">\n      <a routerLink=\"/\"\n        routerLinkActive=\"active-link\">\n        <img src=\"assets/img/logo/logo-objective.svg\" alt=\"Objective\" />\n      </a>\n    </div>\n    <div class=\"header-info-right\">\n      <div class=\"info-box\">\n        <a class=\"dropdown-toggle\"\n          href=\"#\"\n          id=\"navbarDropdownMenuProfile\"\n          role=\"button\"\n          data-toggle=\"dropdown\"\n          aria-haspopup=\"true\"\n          aria-expanded=\"false\"\n          (mouseenter)=\"openProfile()\">\n          <span><strong>{{desenvolvedorAngular}}</strong></span>\n        </a>\n        <span>Teste de Front-end</span>\n      </div>\n      <span class=\"cb\">CB</span>\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuProfile\" #menuProfile>\n        <div class=\"box-profile\" (mouseleave)=\"openProfile()\">\n          <img src=\"assets/img/profile/profile-fabricio.png\" title=\"Fabricio Soares\" class=\"image-profile\"/>\n          <div>\n            <a class=\"dropdown-item\"\n              href=\"{{ linkedin }}\"\n              target=\"_blank\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#82d0f5\" class=\"bi bi-linkedin\" viewBox=\"0 0 16 16\">\n                <path d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\"/>\n              </svg>\n              Linkedin\n            </a>\n            <a class=\"dropdown-item\"\n              href=\"mailto:{{ email }}\"\n              target=\"_blank\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#82d0f5\" class=\"bi bi-envelope-fill\" viewBox=\"0 0 16 16\">\n                <path d=\"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z\"/>\n              </svg>\n              E-mail\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Header End -->\n</header>\n");

/***/ }),

/***/ "dtUI":
/*!*****************************************************!*\
  !*** ./src/app/api/interceptor/http.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let ApiInterceptor = class ApiInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        let handled = false;
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((returnedError) => {
            let errorMessage = null;
            if (returnedError.error instanceof ErrorEvent) {
                errorMessage = `Error Event: ${returnedError.error.message}`;
            }
            else if (returnedError instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                errorMessage = `${returnedError.error}`;
                handled = this.handleServerSideError(returnedError);
            }
            if (!handled) {
                if (errorMessage) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])("Ocorreu um problema inesperado!");
                }
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(returnedError);
            }
        }));
    }
    handleServerSideError(error) {
        let handled = false;
        switch (error.status) {
            case 404:
                console.warn("O personagem não foi encontrado ou esta página não existe!");
                this.router.navigate(['/characters/not-found']);
                handled = true;
                break;
            case 429:
                console.warn("O limite de solicitações diárias para a API Marvel foi atingido!");
                this.router.navigate(['/characters/not-found?erro=limite-de-solicitacoes-excedido']);
                handled = true;
                break;
        }
        return handled;
    }
};
ApiInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ApiInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ApiInterceptor);



/***/ }),

/***/ "g2at":
/*!*****************************************!*\
  !*** ./src/app/shared/loader/loader.ts ***!
  \*****************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loader_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loader.html */ "F7Tq");
/* harmony import */ var _loader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.css */ "VhD8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let Loader = class Loader {
    constructor() {
        this.fullLoader = true;
    }
};
Loader.propDecorators = {
    fullLoader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Loader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loader',
        template: _raw_loader_loader_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loader_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Loader);



/***/ }),

/***/ "kf1R":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/splitName.ts ***!
  \*******************************************/
/*! exports provided: SplitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitPipe", function() { return SplitPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let SplitPipe = class SplitPipe {
    transform(value) {
        let firstName = value.split(' ');
        return firstName[0];
    }
};
SplitPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'split'
    })
], SplitPipe);



/***/ }),

/***/ "kphy":
/*!*********************************************************************!*\
  !*** ./src/app/pages/characters/characters/characters.component.ts ***!
  \*********************************************************************/
/*! exports provided: CharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersComponent", function() { return CharactersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_characters_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./characters.component.html */ "zfEj");
/* harmony import */ var _characters_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters.component.css */ "DiOw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var app_api_services_listCharacters_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/api/services/listCharacters.service */ "OpsF");





let CharactersComponent = class CharactersComponent {
    constructor(listCharactersService) {
        this.listCharactersService = listCharactersService;
        this.itemsPerPage = 10;
    }
    ngOnInit() {
        if (!this.listCharacters || !this.listCharacters.length) {
            this.listCharactersService.getListCharacters();
            this.listCharactersService.listCharacters$
                .subscribe(list => {
                this.listCharacters = list;
            });
        }
    }
};
CharactersComponent.ctorParameters = () => [
    { type: app_api_services_listCharacters_service__WEBPACK_IMPORTED_MODULE_4__["ListCharactersService"] }
];
CharactersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-characters',
        template: _raw_loader_characters_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_characters_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CharactersComponent);



/***/ }),

/***/ "nGwr":
/*!*****************************************!*\
  !*** ./src/app/shared/pipes/excerpt.ts ***!
  \*****************************************/
/*! exports provided: ExcerptFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcerptFilter", function() { return ExcerptFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let ExcerptFilter = class ExcerptFilter {
    transform(text, length) {
        if (!text || !length) {
            return text;
        }
        if (text.length > length) {
            return text.substr(0, length) + '...';
        }
        return text;
    }
};
ExcerptFilter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'excerpt',
        pure: false
    })
], ExcerptFilter);



/***/ }),

/***/ "pI0V":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "dpWz");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "chni");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let HeaderComponent = class HeaderComponent {
    constructor() {
        this.desenvolvedorAngular = 'Fabricio Soares';
        this.linkedin = 'https://www.linkedin.com/in/fabricio-soares-501835bb/';
        this.email = 'fabriciosoares.pr@gmail.com';
        this.profile = false;
    }
    ngOnInit() { }
    openProfile() {
        var _a, _b;
        this.profile = !this.profile;
        this.profile ? (_a = this.menuProfile) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('show') : (_b = this.menuProfile) === null || _b === void 0 ? void 0 : _b.nativeElement.classList.remove('show');
    }
};
HeaderComponent.propDecorators = {
    menuProfile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['menuProfile',] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "tejn":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/footer/footer/footer.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer id=\"footer\">\n  <small class=\"d-block\">Data provided by Marvel. © {{ marvelYear | date:'y' }} MARVEL.</small>\n</footer>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../app/pages/characters/characters.module */ "69wn")).then(m => m.CharactersModule)
    },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'characters', redirectTo: '/', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vnQB":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters-search/characters-search.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"search-box-characters\">\n  <h1>Busca de personagens</h1>\n  <span>Nome do personagem</span>\n\n  <div class=\"form-group has-search\">\n    <span class=\"icon-search\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"#8e8e8e\" class=\"bi bi-search\" viewBox=\"0 0 16 16\">\n      <path d=\"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\"/>\n    </svg>\n  </span>\n    <input placeholder=\"Search\" #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" autocomplete=\"off\" />\n  </div>\n\n  <ul class=\"search-result\" *ngIf=\"characters$ | async; let characters\">\n    <li *ngFor=\"let character of characters\" >\n      <a routerLink=\"/characters/{{character.id}}\">\n        <img src=\"{{ character.thumbnail.path }}.{{ character.thumbnail.extension }}\" />\n        {{ character.name }}\n      </a>\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "vqVI":
/*!************************************************************************************!*\
  !*** ./src/app/pages/characters/characters-search/characters-search.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-result li {\r\n  border-bottom: 1px solid var(--background-color);\r\n  width: 30%;\r\n  height: 45px;\r\n  background-color: #FFFFFF;\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n}\r\n\r\n.search-result li:hover {\r\n  background-color: #8d8d8d;\r\n}\r\n\r\n.search-result li a {\r\n  color: #888888;\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\n\r\n.search-result li a:hover {\r\n  color: #FFFFFF;\r\n}\r\n\r\n.search-result li a:active {\r\n  color: white;\r\n}\r\n\r\n.search-result li a img {\r\n  width: 45px;\r\n  height: 45px;\r\n  margin-right: 8px;\r\n}\r\n\r\n#search-box {\r\n  width: 100%;\r\n  max-width: 295px;\r\n  height: 32px;\r\n  margin-right: 8px;\r\n  font: italic normal normal 16px/24px 'PT Sans';\r\n  letter-spacing: 0px;\r\n  color: var(--text-color);\r\n  background: #FFFFFF 0% 0% no-repeat padding-box;\r\n  border: 1px solid #E5E5E5;\r\n  border-radius: 4px;\r\n  margin-top: 8px;\r\n  transition: border-color 0.2s, box-shadow 0.2s;\r\n  padding: 4px 8px;\r\n}\r\n\r\n#search-box:focus {\r\n  border-color: #8c8c8d;\r\n  box-shadow: 0px 0px 5px #00000033;\r\n  outline: none;\r\n}\r\n\r\n#search-box-characters h1,\r\n#search-box-characters span {\r\n  display: block;\r\n  color: var(--text-color);\r\n  font: normal normal 700 16px/24px 'PT Sans';\r\n}\r\n\r\n#search-box-characters h1 {\r\n  font: normal normal 700 32px/30px 'PT Sans';\r\n}\r\n\r\nul.search-result {\r\n  margin-top: 8px;\r\n  padding-left: 0;\r\n}\r\n\r\n.has-search {\r\n  position: relative;\r\n  max-width: 295px;\r\n  height: 32px;\r\n}\r\n\r\n.has-search > .icon-search {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 16px;\r\n}\r\n\r\n@media (max-width: 575.98px) {\r\n  #search-box-characters {\r\n    text-align: center;\r\n  }\r\n\r\n  #search-box {\r\n    max-width: 100%;\r\n  }\r\n\r\n  .has-search {\r\n    max-width: 100%;\r\n  }\r\n\r\n  .search-result li {\r\n    width: 100%;\r\n    height: 55px;\r\n    text-align: left;\r\n  }\r\n\r\n  .search-result li a img {\r\n    width: 55px;\r\n    height: 55px;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3RlcnMtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBZ0Q7RUFDaEQsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDhDQUE4QztFQUM5QyxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLCtDQUErQztFQUMvQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsY0FBYztFQUNkLHdCQUF3QjtFQUN4QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBR0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUVGIiwiZmlsZSI6ImNoYXJhY3RlcnMtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLXJlc3VsdCBsaSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZDhkOGQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpIGEge1xyXG4gIGNvbG9yOiAjODg4ODg4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLnNlYXJjaC1yZXN1bHQgbGkgYTphY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkgYSBpbWcge1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuI3NlYXJjaC1ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMjk1cHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGZvbnQ6IGl0YWxpYyBub3JtYWwgbm9ybWFsIDE2cHgvMjRweCAnUFQgU2Fucyc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0U1RTVFNTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XHJcbiAgcGFkZGluZzogNHB4IDhweDtcclxufVxyXG5cclxuI3NlYXJjaC1ib3g6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzhjOGM4ZDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjMDAwMDAwMzM7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI3NlYXJjaC1ib3gtY2hhcmFjdGVycyBoMSxcclxuI3NlYXJjaC1ib3gtY2hhcmFjdGVycyBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCA3MDAgMTZweC8yNHB4ICdQVCBTYW5zJztcclxufVxyXG5cclxuI3NlYXJjaC1ib3gtY2hhcmFjdGVycyBoMSB7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCA3MDAgMzJweC8zMHB4ICdQVCBTYW5zJztcclxufVxyXG5cclxuXHJcbnVsLnNlYXJjaC1yZXN1bHQge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5oYXMtc2VhcmNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAyOTVweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5oYXMtc2VhcmNoID4gLmljb24tc2VhcmNoIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgI3NlYXJjaC1ib3gtY2hhcmFjdGVycyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAjc2VhcmNoLWJveCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaGFzLXNlYXJjaCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLXJlc3VsdCBsaSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLXJlc3VsdCBsaSBhIGltZyB7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "w5Sj":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/characters/characters-not-found/characters-not-found.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-heroes {\r\n  background-image: url('020gga_ons_mas_dsk_03.jpg');\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  width: 100%;\r\n  min-height: calc(100vh - 116px);\r\n  background-attachment: fixed;\r\n}\r\n\r\n.message-not-found {\r\n  display: block;\r\n  position: absolute;\r\n  top: 120px;\r\n  color: #FFFFFF;\r\n  width: 100%;\r\n  max-width: 580px;\r\n  padding: 20px 20px;\r\n}\r\n\r\n.message-not-found p {\r\n  font-size: 24px;\r\n  line-height: 32px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3RlcnMtbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrREFBb0Y7RUFDcEYsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLCtCQUErQjtFQUMvQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImNoYXJhY3RlcnMtbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1oZXJvZXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLzAyMGdnYV9vbnNfbWFzX2Rza18wMy5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTE2cHgpO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlLW5vdC1mb3VuZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTIwcHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1ODBweDtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLW5vdC1mb3VuZCBwIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zfEj":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters/characters.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"listCharacters; let characters; else loading\">\n  <div class=\"container container-in\" *ngIf=\"characters.data?.results.length; else loading\">\n    <div class=\"row\">\n      <div class=\"col-xl-12\">\n        <div class=\"search-characters my-4\">\n          <app-characters-search></app-characters-search>\n        </div>\n      </div>\n    </div>\n    <table class=\"table table-borderless characters-list\">\n      <thead>\n        <tr>\n          <th colspan=\"2\" scope=\"col\">Personagem</th>\n          <th class=\"hidden-sm\" scope=\"col\">Séries</th>\n          <th class=\"hidden-sm\" scope=\"col\">Eventos</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let character of characters.data?.results | paginate: { itemsPerPage: itemsPerPage, currentPage: page, id: 'characters-pagination' }\">\n            <tr routerLink=\"/characters/{{ character.id }}\" routerLinkActive=\"active-link\">\n              <td>\n                <div class=\"thumb\" style=\"background-image: url('{{ character.thumbnail.path }}.{{ character.thumbnail.extension }}')\"></div>\n              </td>\n              <td>\n                <div class=\"character-name\">\n                  {{ character.name }}\n                </div>\n              </td>\n              <td class=\"character-items hidden-sm\">\n                <ng-container *ngFor=\"let serie of character.series?.items | slice: 0:3\">\n                  {{serie.name}}<br>\n                </ng-container>\n              </td>\n              <td class=\"character-items hidden-sm\">\n                <ng-container *ngFor=\"let event of character.events?.items | slice: 0:3\">\n                  {{event.name}}<br>\n                </ng-container>\n              </td>\n            </tr>\n            <div class=\"spacer\"></div>\n        </ng-container>\n      </tbody>\n    </table>\n\n    <pagination-controls\n      id=\"characters-pagination\"\n      (pageChange)=\"page = $event\"\n      autoHide=\"true\"\n      responsive=\"true\"\n      previousLabel=\"\"\n      nextLabel=\"\">\n    </pagination-controls>\n  </div>\n\n</ng-container>\n\n<ng-template #loading>\n  <app-loader [fullLoader]=\"true\"></app-loader>\n</ng-template>\n");

/***/ }),

/***/ "zkYa":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/characters/character-detail/character-detail.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-featured {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.header-featured .title-character {\r\n  align-items: flex-start;\r\n  display: flex;\r\n  height: 100%;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 0;\r\n  top: 80px;\r\n  word-break: break-all;\r\n}\r\n\r\n.header-featured .title-character span {\r\n  font: normal normal 700 180px/92px 'PT Sans';\r\n  color: #c0c0c0;\r\n  opacity: .15;\r\n  text-align: center;\r\n}\r\n\r\n.image-detail-featured {\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n  width: 100%;\r\n  height: 400px;\r\n  display: block;\r\n  opacity: .25;\r\n  filter: blur(7px);\r\n}\r\n\r\n.filter-featured {\r\n  background-color: #000000;\r\n  overflow: hidden;\r\n}\r\n\r\n.character-detail {\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n\r\n.character-detail .title-detail {\r\n  margin: 20px 0;\r\n  padding: 20px 40px 20px 20px;\r\n}\r\n\r\n.character-detail .title-detail h1 {\r\n  font-weight: 700;\r\n}\r\n\r\n.character-detail .image-detail {\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n  width: 100%;\r\n  height: 600px;\r\n  display: block;\r\n  border-radius: 4px;\r\n}\r\n\r\n.character-detail .description-character-detail {\r\n  display: flex;\r\n  align-items: center;\r\n  font: normal normal normal 16px/22px 'PT Sans';\r\n  padding: 20px 40px 20px 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLHNCQUFzQjs7RUFFdEIsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsc0JBQXNCOztFQUV0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5Qyw0QkFBNEI7QUFDOUIiLCJmaWxlIjoiY2hhcmFjdGVyLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1mZWF0dXJlZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlci1mZWF0dXJlZCAudGl0bGUtY2hhcmFjdGVyIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMDtcclxuICB0b3A6IDgwcHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG4uaGVhZGVyLWZlYXR1cmVkIC50aXRsZS1jaGFyYWN0ZXIgc3BhbiB7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCA3MDAgMTgwcHgvOTJweCAnUFQgU2Fucyc7XHJcbiAgY29sb3I6ICNjMGMwYzA7XHJcbiAgb3BhY2l0eTogLjE1O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLWRldGFpbC1mZWF0dXJlZCB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3BhY2l0eTogLjI1O1xyXG4gIGZpbHRlcjogYmx1cig3cHgpO1xyXG59XHJcblxyXG4uZmlsdGVyLWZlYXR1cmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlsIC50aXRsZS1kZXRhaWwge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIHBhZGRpbmc6IDIwcHggNDBweCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlsIC50aXRsZS1kZXRhaWwgaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlsIC5pbWFnZS1kZXRhaWwge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWwgLmRlc2NyaXB0aW9uLWNoYXJhY3Rlci1kZXRhaWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNnB4LzIycHggJ1BUIFNhbnMnO1xyXG4gIHBhZGRpbmc6IDIwcHggNDBweCAyMHB4IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
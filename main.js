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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.header {\n  background-color: #2c2e31;\n  padding: 20px;\n  width: 100%;\n  height:450px;\n  color: #FFFFFF;\n  text-align: center;\n  position: relative;\n}\n\n.header h1 {\n  margin: 0;\n  padding-top: 60px;\n  font-size: 52px;\n  font-weight: 100;\n  text-transform: uppercase;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmUzMTtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDo0NTBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"header\">\n  <h1> Chucknorris Jokes </h1>\n</div>\n\n<app-joke-category></app-joke-category>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chuck-jokes';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _jokes_joke_joke_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jokes/joke/joke.component */ "./src/app/jokes/joke/joke.component.ts");
/* harmony import */ var _jokes_joke_category_joke_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jokes/joke-category/joke-category.component */ "./src/app/jokes/joke-category/joke-category.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _jokes_joke_joke_component__WEBPACK_IMPORTED_MODULE_10__["JokeComponent"],
                _jokes_joke_category_joke_category_component__WEBPACK_IMPORTED_MODULE_11__["JokeCategoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/jokes/joke-category/joke-category.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/jokes/joke-category/joke-category.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-user-btn {\n  margin-top: 15px;\n  background-color: transparent;\n}\n\n\n.inner {\n  position: absolute;\n  top: 50%;\n  left:50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n\n\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9rZXMvam9rZS1jYXRlZ29yeS9qb2tlLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLHdDQUFnQztVQUFoQyxnQ0FBZ0M7Ozs7QUFJbEMiLCJmaWxlIjoic3JjL2FwcC9qb2tlcy9qb2tlLWNhdGVnb3J5L2pva2UtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctdXNlci1idG4ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG4uaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OjUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cblxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/jokes/joke-category/joke-category.component.html":
/*!******************************************************************!*\
  !*** ./src/app/jokes/joke-category/joke-category.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"inner l-container u-padding--none u-margin--tp-sm\">\n  <div  class=\"row\">\n    <div  class=\"u-content--center\">\n      <div  class=\"c-card u-text--centered\">\n        <div  class=\"c-card__content u-padding--none u-border--none\">\n          <div  class=\"c-card__header u-border--bottom\">\n              <img  alt=\"\" class=\"u-image u-image--150 u-image--rounded\" src=\"assets/images/chucknorris.jpg\">\n          </div>\n          <form>\n          <div>\n          <ngx-spinner></ngx-spinner>\n\n             <select  #item (change)=\"onChange(item.value)\" class=\"btn btn-primary\">\n               <option  value=\"0\">Select Category</option>\n               <option *ngFor=\"let category of categories\" value=\"{{category}}\">{{category}}</option>\n             </select>\n\n          </div>\n          </form>\n\n          <div class=\"c-tabs l-row u-grid-justify--center u-padding--md\">\n            <div class=\"ex1\">\n              <p>chuck Joke:{{category.value}} </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/jokes/joke-category/joke-category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/jokes/joke-category/joke-category.component.ts ***!
  \****************************************************************/
/*! exports provided: JokeCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokeCategoryComponent", function() { return JokeCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_joke_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/joke.service */ "./src/app/services/joke.service.ts");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/category */ "./src/app/models/category.ts");





var JokeCategoryComponent = /** @class */ (function () {
    /*
     * Create an instance of JokeCategoryComponent
     * @Param {JokeService} the instance of the JokeService being iinjected
     * @Param {NgxSpinnerService} the instance of the NgxSpinnerService being iinjected
     */
    function JokeCategoryComponent(jokeService, spinner) {
        this.jokeService = jokeService;
        this.spinner = spinner;
        this.category = new _models_category__WEBPACK_IMPORTED_MODULE_4__["Category"]();
        this.categories = [];
    }
    JokeCategoryComponent.prototype.ngOnInit = function () {
        this.getJokeCategory();
    };
    /*
     *
     */
    JokeCategoryComponent.prototype.getJokeCategory = function () {
        var _this = this;
        this.spinner.show();
        this.jokeService.getCategory().subscribe(function (data) {
            //  data.forEach(cat =>{
            //  this.categories.push(cat);
            //});
            //return this.categories
            _this.categories = data;
        }, function (error) {
        }, function () {
        });
        this.spinner.hide();
    };
    /*
     * Event list for dropn down on change
     */
    JokeCategoryComponent.prototype.onChange = function (value) {
        if (value) {
            var selectedCategory = value;
            this.getJoke(selectedCategory);
        }
    };
    JokeCategoryComponent.prototype.getJoke = function (selectedValue) {
        var _this = this;
        this.jokeService.getJoke(selectedValue)
            .subscribe(function (category) {
            _this.category = category;
        });
    };
    JokeCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joke-category',
            template: __webpack_require__(/*! ./joke-category.component.html */ "./src/app/jokes/joke-category/joke-category.component.html"),
            styles: [__webpack_require__(/*! ./joke-category.component.css */ "./src/app/jokes/joke-category/joke-category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_joke_service__WEBPACK_IMPORTED_MODULE_3__["JokeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], JokeCategoryComponent);
    return JokeCategoryComponent;
}());



/***/ }),

/***/ "./src/app/jokes/joke/joke.component.css":
/*!***********************************************!*\
  !*** ./src/app/jokes/joke/joke.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pva2VzL2pva2Uvam9rZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/jokes/joke/joke.component.html":
/*!************************************************!*\
  !*** ./src/app/jokes/joke/joke.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  joke works!\n</p>\n"

/***/ }),

/***/ "./src/app/jokes/joke/joke.component.ts":
/*!**********************************************!*\
  !*** ./src/app/jokes/joke/joke.component.ts ***!
  \**********************************************/
/*! exports provided: JokeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokeComponent", function() { return JokeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JokeComponent = /** @class */ (function () {
    function JokeComponent() {
    }
    JokeComponent.prototype.ngOnInit = function () {
    };
    JokeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joke',
            template: __webpack_require__(/*! ./joke.component.html */ "./src/app/jokes/joke/joke.component.html"),
            styles: [__webpack_require__(/*! ./joke.component.css */ "./src/app/jokes/joke/joke.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JokeComponent);
    return JokeComponent;
}());



/***/ }),

/***/ "./src/app/models/category.ts":
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(json) {
        if (json) {
            this.category = json.category;
            this.icon_url = json.icon_url;
            this.id = json.id;
            this.url = json.url;
            this.value = json.value;
        }
        else {
            this.category = '';
            this.icon_url = '';
            this.id = '';
            this.url = '';
            this.value = '';
        }
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/services/joke.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/joke.service.ts ***!
  \******************************************/
/*! exports provided: JokeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokeService", function() { return JokeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/category */ "./src/app/models/category.ts");





var JokeService = /** @class */ (function () {
    /*
     * Create an instance of a JokeService
     * @Param {HttpClient} the instance of the HttpClient being iinjected
     */
    function JokeService(httpClient) {
        this.httpClient = httpClient;
        this.host = 'https://api.chucknorris.io/jokes/';
    }
    /*
     * Get a list of categories
     *
     * @Return Observable<*>
     */
    JokeService.prototype.getCategory = function () {
        return this.httpClient.get(this.host + "categories");
    };
    /*
     * Get a random joke per selected category
     *
     * @Return Obesrvable<Category>
     */
    JokeService.prototype.getJoke = function (category) {
        if (category === void 0) { category = ''; }
        var method = category;
        return this.httpClient.get(this.host + "random?category=" + category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return new _models_category__WEBPACK_IMPORTED_MODULE_4__["Category"](data);
        }));
    };
    JokeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JokeService);
    return JokeService;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/selepe/chuck-jokes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
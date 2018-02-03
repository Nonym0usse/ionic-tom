webpackJsonp([5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MentionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MentionsPage = (function () {
    function MentionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MentionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MentionsPage');
    };
    MentionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mentions',template:/*ion-inline-start:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\mentions\mentions.html"*/'<!--\n  Generated template for the MentionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mentions Légales</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\mentions\mentions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MentionsPage);
    return MentionsPage;
}());

//# sourceMappingURL=mentions.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajout_ajout__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mentions_mentions__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            { title: "Ajouter une boisson", component: __WEBPACK_IMPORTED_MODULE_2__ajout_ajout__["a" /* AjoutPage */] },
            { title: "Mentions légales", component: __WEBPACK_IMPORTED_MODULE_3__mentions_mentions__["a" /* MentionsPage */] }
        ];
    }
    MenuPage.prototype.openPage = function (page) {
        this.navCtrl.push(page.component);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\menu\menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let p of items" (click)="openPage(p)">\n      {{ p.title }}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModificationPage = (function () {
    function ModificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModificationPage');
    };
    ModificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modification',template:/*ion-inline-start:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\modification\modification.html"*/'<!--\n\n  Generated template for the ModificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>modification</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\modification\modification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ModificationPage);
    return ModificationPage;
}());

//# sourceMappingURL=modification.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuppressionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pizza_service_pizza_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SuppressionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuppressionPage = (function () {
    function SuppressionPage(navCtrl, navParams, pizza) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pizza = pizza;
        this.pizza.get().then(function (data) {
            _this.mypizza = data;
        });
    }
    SuppressionPage.prototype.suppression = function (myid) {
        var _this = this;
        console.log(myid);
        this.pizza.delete(myid).then(function (data) {
            _this.mypizza = data;
            console.log(_this.mypizza);
        });
    };
    SuppressionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-suppression',template:/*ion-inline-start:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\suppression\suppression.html"*/'<!--\n\n  Generated template for the SuppressionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Suppression</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let pizza of mypizza">\n\n    <img src="{{pizza.picture}}"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        <b>{{pizza.name}}</b>\n\n        </ion-card-title>\n\n      <p>\n\n        {{ pizza.desc}}\n\n      </p>\n\n      <button ion-button color="secondary" (click)=\'suppression(pizza.id);\'>Suppression</button>\n\n      <span style="float: right; color: blue">{{pizza.price}}€</span>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\suppression\suppression.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pizza_service_pizza_service__["a" /* PizzaServiceProvider */]])
    ], SuppressionPage);
    return SuppressionPage;
}());

//# sourceMappingURL=suppression.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajout/ajout.module": [
		286,
		4
	],
	"../pages/mentions/mentions.module": [
		287,
		3
	],
	"../pages/menu/menu.module": [
		288,
		2
	],
	"../pages/modification/modification.module": [
		289,
		1
	],
	"../pages/suppression/suppression.module": [
		290,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pizza_service_pizza_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, pizza) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.pizza = pizza;
        this.pizza.get().then(function (data) {
            _this.mypizza = data;
            console.log(_this.mypizza);
        });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Choisir une boisson</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card class="card" *ngFor="let pizza of mypizza">\n\n    <img class="img-card" src="{{pizza.picture}}"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        <b>{{pizza.name}}</b>\n\n        </ion-card-title>\n\n      <p>\n\n        {{ pizza.desc}}\n\n      </p>\n\n      <span style="float: right; color: blue">{{pizza.price}}€</span>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_pizza_service_pizza_service__["a" /* PizzaServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = [];
        this.back;
    }
    ListPage.prototype.admin = function () {
        if (this.user['title'] === "admin" && this.user['password'] === "admin") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
        }
        else {
            this.back = "Mauvais identifiants ou mot de passe";
        }
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Espace administrateur</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <h1 class="title-nav">Bienvenue sur l\'espace administrateur</h1>\n\n  <h1>\n\n    {{ back }}\n\n  </h1>\n\n  <div class="form-center">\n\n    <form (ngSubmit)="admin()">\n\n         <ion-item>\n\n           <ion-label>Utilisateur</ion-label>\n\n           <ion-input type="text" [(ngModel)]="user.title" name="title"></ion-input>\n\n         </ion-item>\n\n         <ion-item>\n\n           <ion-label>Password</ion-label>\n\n           <ion-input type="password" [(ngModel)]="user.password"  name="description"></ion-input>\n\n         </ion-item>\n\n         <button ion-button type="submit" block>Connexion</button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ajout_ajout__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_suppression_suppression__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modification_modification__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mentions_mentions__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_pizza_service_pizza_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__ = __webpack_require__(285);
/**
 * @Author: CYRIL VELLA <Nonym0usse>
 * @Date:   2018-01-19T22:18:19+01:00
 * @Email:  cyril.vella@yahoo.com
 * @Last modified by:   Nonym0usse
 * @Last modified time: 2018-02-03T13:34:32+01:00
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_suppression_suppression__["a" /* SuppressionPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modification_modification__["a" /* ModificationPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_ajout_ajout__["a" /* AjoutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_mentions_mentions__["a" /* MentionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajout/ajout.module#AjoutPageModule', name: 'AjoutPage', segment: 'ajout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mentions/mentions.module#MentionsPageModule', name: 'MentionsPage', segment: 'mentions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modification/modification.module#ModificationPageModule', name: 'ModificationPage', segment: 'modification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suppression/suppression.module#SuppressionPageModule', name: 'SuppressionPage', segment: 'suppression', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_suppression_suppression__["a" /* SuppressionPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modification_modification__["a" /* ModificationPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_ajout_ajout__["a" /* AjoutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_mentions_mentions__["a" /* MentionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_pizza_service_pizza_service__["a" /* PizzaServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pizza; });
var Pizza = (function () {
    function Pizza(id, name, desc, picture, price) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = ""; }
        if (desc === void 0) { desc = ""; }
        if (picture === void 0) { picture = ""; }
        if (price === void 0) { price = null; }
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.picture = picture;
        this.price = price;
    }
    return Pizza;
}());

//# sourceMappingURL=pizza.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_suppression_suppression__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modification_modification__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ajout_ajout__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Espace administrateur', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Mentions légales', component: __WEBPACK_IMPORTED_MODULE_6__pages_suppression_suppression__["a" /* SuppressionPage */] },
            { title: 'Modification pizza', component: __WEBPACK_IMPORTED_MODULE_7__pages_modification_modification__["a" /* ModificationPage */] },
            { title: 'Ajouter pizza', component: __WEBPACK_IMPORTED_MODULE_8__pages_ajout_ajout__["a" /* AjoutPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/**
 * @Author: CYRIL VELLA <Nonym0usse>
 * @Date:   2018-01-19T22:18:19+01:00
 * @Email:  cyril.vella@yahoo.com
 * @Last modified by:   Nonym0usse
 * @Last modified time: 2018-02-03T12:25:16+01:00
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjoutPage = (function () {
    function AjoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.boisson = [];
    }
    AjoutPage.prototype.ajout = function () {
        console.log(this.boisson);
    };
    AjoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajout',template:/*ion-inline-start:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\ajout\ajout.html"*/'<!--\n\n  Generated template for the AjoutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ajouter une boisson</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="ajout()">\n\n       <ion-item>\n\n         <ion-label>Nom de la boisson</ion-label>\n\n         <ion-input type="text" [(ngModel)]="ajout.title" name="title"></ion-input>\n\n       </ion-item>\n\n       <ion-item>\n\n         <ion-label>Choix de la pompe</ion-label>\n\n         <ion-input type="number" [(ngModel)]="ajout.title" name="title"></ion-input>\n\n       </ion-item>\n\n       <ion-item>\n\n         <ion-label>Choix de la pompe 2</ion-label>\n\n         <ion-input type="number" [(ngModel)]="ajout.password"  name="description"></ion-input>\n\n       </ion-item>\n\n       <button ion-button type="submit" block>Ajouter une boisson</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cyril VELLA\Desktop\ionic-tom\src\pages\ajout\ajout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AjoutPage);
    return AjoutPage;
}());

//# sourceMappingURL=ajout.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PizzaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_pizza__ = __webpack_require__(258);
/**
 * @Date:   2018-01-19T22:18:19+01:00
 * @Last modified time: 2018-02-03T12:25:11+01:00
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  */
var PizzaServiceProvider = (function () {
    function PizzaServiceProvider(http) {
        this.http = http;
        //private readonly url = "http://localhost:8080/pizza/";
        //private readonly url = "http://kim.jcatania.io:3000/pizza/"
        this.url = "pizza.json";
        console.log('Hello PizzaServiceProvider Provider');
    }
    PizzaServiceProvider.prototype.sayHello = function (id) {
        console.log("sayHello('" + id + "')");
    };
    PizzaServiceProvider.prototype.get = function () {
        var _this = this;
        var rt = new Array();
        return new Promise(function (resolve) {
            _this.http.get(_this.url).subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    rt.push(new __WEBPACK_IMPORTED_MODULE_2__models_pizza__["a" /* Pizza */](data[i]['id'], data[i]['name'], data[i]['desc'], data[i]['picture'], data[i]['price']));
                }
                resolve(rt);
            });
        });
    };
    PizzaServiceProvider.prototype.getByiD = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url)
                .subscribe(function (data) {
                resolve(new __WEBPACK_IMPORTED_MODULE_2__models_pizza__["a" /* Pizza */](data['id'], data['name'], data['desc'], data['picture'], data['price']));
            });
        });
    };
    PizzaServiceProvider.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_this.url + id).subscribe(function (resp) { return console.log('deleted'); }, function (error) { return console.log('Impossible de supprimer.'); });
        });
    };
    PizzaServiceProvider.prototype.add = function (id, name, desc, picture, price) {
        return new Promise(function (resolve) {
        });
    };
    PizzaServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PizzaServiceProvider);
    return PizzaServiceProvider;
}());

//# sourceMappingURL=pizza-service.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map
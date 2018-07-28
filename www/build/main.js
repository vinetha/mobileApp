webpackJsonp([0],{

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		159
	],
	"../pages/foodmenu/foodmenu.module": [
		161
	],
	"../pages/home/home.module": [
		162
	],
	"../pages/login/login.module": [
		165
	],
	"../pages/signup/signup.module": [
		168
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foodmenu_foodmenu__ = __webpack_require__(80);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nextPage = __WEBPACK_IMPORTED_MODULE_2__foodmenu_foodmenu__["a" /* FoodmenuPage */];
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.redirectMap = function () {
        this.navCtrl.setRoot('HomePage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"F:\hybridwks\mobileApp\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-1>\n\n        <button icon-only (click)="redirectMap()">\n\n          <ion-icon name="arrow-back" class="no-padding"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-11>\n\n        <ion-row>\n\n          <ion-col col-12 class="page-title"> Set Delivery Location</ion-col>\n\n          <ion-col col-12>\n\n            <ion-searchbar placeholder="Search for Area, Restuarent ..." class="search-wrapper"></ion-searchbar>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content class="content-section">\n\n  <ion-grid>\n\n    <ion-row class="padding-vertical-10">\n\n      <ion-col col-6>\n\n        <span>346</span> Restaurents</ion-col>\n\n      <ion-col col-6 text-right>\n\n        <ion-select>\n\n          <ion-option value="Relevance" selected>Relevance</ion-option>\n\n          <ion-option value="Near by">Near by</ion-option>\n\n          <ion-option value="Delivery Time">Delivery Time</ion-option>\n\n          <ion-option value="Rating">Rating</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-list>\n\n\n\n      <button ion-item [navPush]="nextPage">\n\n        <ion-thumbnail item-start>\n\n          <img src="../assets/imgs/1.png">\n\n        </ion-thumbnail>\n\n        <h2>Restaurant 1</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <div class="text-small">\n\n          <span item-start>Free delivery</span>\n\n          <span item-end>45 mins</span>\n\n        </div>\n\n        <div clear item-end class="rating">\n\n          <span text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small"> 4.2</span>\n\n            </ion-icon>\n\n          </span>\n\n          <span class="text-small">321 reviews</span>\n\n        </div>\n\n      </button>\n\n      <button ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../assets/imgs/2.png">\n\n        </ion-thumbnail>\n\n        <h2>Restaurant 2</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <div class="text-small">\n\n          <span item-start>Free delivery</span>\n\n          <span item-end>30 mins</span>\n\n        </div>\n\n        <div clear item-end class="rating">\n\n          <span text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small"> 3.25</span>\n\n            </ion-icon>\n\n          </span>\n\n          <span class="text-small">321 reviews</span>\n\n        </div>\n\n      </button>\n\n      <button ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../assets/imgs/3.png">\n\n        </ion-thumbnail>\n\n        <h2>Restaurant 3</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <div class="text-small">\n\n          <span item-start>Free delivery</span>\n\n          <span item-end>20 mins</span>\n\n        </div>\n\n        <div clear item-end class="rating">\n\n          <span text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small"> 4</span>\n\n            </ion-icon>\n\n          </span>\n\n          <span class="text-small">69 reviews</span>\n\n        </div>\n\n      </button>\n\n      <button ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../assets/imgs/4.png">\n\n        </ion-thumbnail>\n\n        <h2>Restaurant 4</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <div class="text-small">\n\n          <span item-start>Free delivery</span>\n\n          <span item-end>45 mins</span>\n\n        </div>\n\n        <div clear item-end class="rating">\n\n          <span text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small"> 3.8</span>\n\n            </ion-icon>\n\n          </span>\n\n          <span class="text-small">73 reviews</span>\n\n        </div>\n\n      </button>\n\n      <button ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../assets/imgs/1.png">\n\n        </ion-thumbnail>\n\n        <h2>Restaurant 5</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <div class="text-small">\n\n          <span item-start>Free delivery</span>\n\n          <span item-end>30 mins</span>\n\n        </div>\n\n        <div clear item-end class="rating">\n\n          <span text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small"> 3.75</span>\n\n            </ion-icon>\n\n          </span>\n\n          <span class="text-small">210 reviews</span>\n\n        </div>\n\n      </button>\n\n      <button ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../assets/imgs/2.png">\n\n        </ion-thumbnail>\n\n        <h2>Restaurant 6</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <div class="text-small">\n\n          <span item-start>Free delivery</span>\n\n          <span item-end>45 mins</span>\n\n        </div>\n\n        <div clear item-end class="rating">\n\n          <span text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small"> 4</span>\n\n            </ion-icon>\n\n          </span>\n\n          <span class="text-small">127 reviews</span>\n\n        </div>\n\n      </button>\n\n    </ion-list>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"F:\hybridwks\mobileApp\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodmenuPageModule", function() { return FoodmenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foodmenu__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoodmenuPageModule = /** @class */ (function () {
    function FoodmenuPageModule() {
    }
    FoodmenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__foodmenu__["a" /* FoodmenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__foodmenu__["a" /* FoodmenuPage */]),
            ],
        })
    ], FoodmenuPageModule);
    return FoodmenuPageModule;
}());

//# sourceMappingURL=foodmenu.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    StorageService.prototype.setStorageData = function (key, data) {
        //if (this.plt.is('mobile')) {
        this.storage.set(key, data);
        /*}
        else{
    
        }*/
    };
    StorageService.prototype.getStorageData = function (key) {
        // if (this.plt.is('mobile')) {
        this.storage.get(key).then(function (val) {
            console.log('Your age is', val);
            return val;
        });
        // }
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_simple_global__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_simple_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_simple_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(47);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, formBuilder, sg, alertCtrl, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.sg = sg;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.signUpForm = {
            name: '',
            email: '',
            mobileNo: '',
            password: '',
            confirmPassword: ''
        };
        /* this.signUpForm = this.formBuilder.group({
           name: [''],
           email: [''],
           mobileNo: [''],
           password: [''],
           confirmPassword: ['']
           
         });*/
        this.signUpForm.mobileNo = this.navParams.get('mobileNo');
        this.loading = this.loadingCtrl.create({
            spinner: 'dots'
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.saveProfile = function () {
        this.loading.present();
        //console.log(this.signUpForm);
        //this.showPopup(this.signUpForm.password, this.signUpForm.confirmPassword);
        if (this.signUpForm.password != this.signUpForm.confirmPassword) {
            this.showPopup("Error", 'The password confirmation does not match.');
            this.loading.dismiss();
        }
        else {
            var currentUser = {
                name: '',
                email: '',
                mobileNo: ''
            };
            currentUser.name = this.signUpForm.name;
            currentUser.email = this.signUpForm.email;
            currentUser.mobileNo = this.signUpForm.mobileNo;
            this.storage.set('currentUser', currentUser);
            this.storage.set('isFirstimeUser', true);
            this.sg['currentUser'] = currentUser;
            this.navCtrl.push('HomePage');
            this.loading.dismiss();
        }
    };
    SignupPage.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"F:\hybridwks\mobileApp\src\pages\signup\signup.html"*/'<ion-grid>\n\n  <ion-row>\n\n    <ion-col>\n\n      <h1 center text-center>Food App</h1>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n<form (ngSubmit)="saveProfile()" #signUp="ngForm">\n\n  <ion-grid >\n\n    <ion-item>\n\n        <ion-label floating>Name</ion-label>\n\n        <ion-input type="text" name="name" [(ngModel)]="signUpForm.name" required></ion-input>\n\n        \n\n      </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="text" name="email" [(ngModel)]="signUpForm.email" required></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Mobile Number</ion-label>\n\n      <ion-input type="text" name="mobileNo" [(ngModel)]="signUpForm.mobileNo" [disabled]="true" ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" name="password" [(ngModel)]="signUpForm.password" required></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Confirm Password</ion-label>\n\n      <ion-input type="password" name="confirmPassword" [(ngModel)]="signUpForm.confirmPassword" required ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col center text-center>\n\n          <button ion-button full color="lightText"  type="submit" [disabled]="!signUp.form.valid">Save</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n\n\n</ion-grid>\n\n\n\n\n\n</form>\n\n\n\n'/*ion-inline-end:"F:\hybridwks\mobileApp\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_simple_global__["SimpleGlobal"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_simple_global__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_simple_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_simple_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_foodmenu_foodmenu__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_foodmenu_foodmenu_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(163);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup_module__["SignupPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_foodmenu_foodmenu_module__["FoodmenuPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/foodmenu/foodmenu.module#FoodmenuPageModule', name: 'FoodmenuPage', segment: 'foodmenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_foodmenu_foodmenu__["a" /* FoodmenuPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_simple_global__["SimpleGlobal"],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.mobileNoValidate = function (mobileNo) {
        return this.http.get('https://api.github.com/users');
    };
    LoginService.prototype.otpValidation = function (mobileNo, otp) {
        return this.http.get('https://api.github.com/users');
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_storage_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, sg, storage) {
        var _this = this;
        this.sg = sg;
        this.storage = storage;
        platform.ready().then(function () {
            _this.storage.get('isFirstimeUser').then(function (val) {
                if (!val) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
                else {
                    _this.storage.get('currentUser').then(function (val) {
                        console.log(val);
                        _this.sg['currentUser'] = val;
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                    });
                }
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"F:\hybridwks\mobileApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\hybridwks\mobileApp\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__utils_storage_service__["a" /* StorageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__["SimpleGlobal"], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodmenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the FoodmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodmenuPage = /** @class */ (function () {
    function FoodmenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FoodmenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodmenuPage');
    };
    FoodmenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-foodmenu',template:/*ion-inline-start:"F:\hybridwks\mobileApp\src\pages\foodmenu\foodmenu.html"*/'<ion-header>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-1>\n\n        <button icon-only navPop>\n\n          <ion-icon name="arrow-back" class="no-padding"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-11>\n\n        <ion-row>\n\n          <ion-col col-8 class="page-title"> Restaurant 1\n\n            <p text-lowercase no-margin class="text-small">Lorem ipsum dolor sit amet</p>\n\n          </ion-col>\n\n          <ion-col col-4 text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small text-bold"> 4.2</span>\n\n            </ion-icon>\n\n            <p no-margin class="text-small text-bold">321 reviews</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content class="content-section">\n\n  <ion-grid>\n\n    <ion-row class="detail-view">\n\n      <button col-6 ion-item>\n\n        <ion-thumbnail>\n\n          <img src="../assets/imgs/4.png">\n\n        </ion-thumbnail>\n\n        <h2>Item 1 title</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <ion-item class="item-footer">\n\n          <span float-left class="price">$45</span>\n\n          <button float-right ion-button color="dark">Add</button>\n\n        </ion-item>\n\n      </button>\n\n      <button col-6 ion-item>\n\n        <ion-thumbnail>\n\n          <img src="../assets/imgs/3.png">\n\n        </ion-thumbnail>\n\n        <h2>Item 2 title</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <ion-item class="item-footer">\n\n          <span float-left class="price">$45</span>\n\n          <button float-right ion-button color="dark">Add</button>\n\n        </ion-item>\n\n      </button>\n\n      <button col-6 ion-item>\n\n        <ion-thumbnail>\n\n          <img src="../assets/imgs/1.png">\n\n        </ion-thumbnail>\n\n        <h2>Item 3 title</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <ion-item class="item-footer">\n\n          <span float-left class="price">$45</span>\n\n          <button float-right ion-button color="dark">Add</button>\n\n        </ion-item>\n\n      </button>\n\n      <button col-6 ion-item>\n\n        <ion-thumbnail>\n\n          <img src="../assets/imgs/2.png">\n\n        </ion-thumbnail>\n\n        <h2>Item 4 title</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <ion-item class="item-footer">\n\n          <span float-left class="price">$45</span>\n\n          <button float-right ion-button color="dark">Add</button>\n\n        </ion-item>\n\n      </button>\n\n      <button col-6 ion-item>\n\n          <ion-thumbnail>\n\n            <img src="../assets/imgs/3.png">\n\n          </ion-thumbnail>\n\n          <h2>Item 5 title</h2>\n\n          <p>Lorem ipsum dolor sit amet</p>\n\n          <ion-item class="item-footer">\n\n            <span float-left class="price">$45</span>\n\n            <button float-right ion-button color="dark">Add</button>\n\n          </ion-item>\n\n        </button>\n\n        <button col-6 ion-item>\n\n            <ion-thumbnail>\n\n              <img src="../assets/imgs/4.png">\n\n            </ion-thumbnail>\n\n            <h2>Item 6 title</h2>\n\n            <p>Lorem ipsum dolor sit amet</p>\n\n            <ion-item class="item-footer">\n\n              <span float-left class="price">$45</span>\n\n              <button float-right ion-button color="dark">Add</button>\n\n            </ion-item>\n\n          </button>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer class="padding-10">\n\n<span float-left class="text-large text-white">Total $300</span>\n\n<button float-right ion-button small>Checkout</button>\n\n</ion-footer>'/*ion-inline-end:"F:\hybridwks\mobileApp\src\pages\foodmenu\foodmenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FoodmenuPage);
    return FoodmenuPage;
}());

//# sourceMappingURL=foodmenu.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, geolocation, platform) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    HomePage.prototype.initMap = function () {
        var _this = this;
        this.geocoder = new google.maps.Geocoder;
        this.platform.ready().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                _this.point = { lat: resp.coords.latitude, lng: resp.coords.longitude };
                var divMap = document.getElementById('map');
                var map = new google.maps.Map(divMap, {
                    center: _this.point,
                    zoom: 16,
                    disableDefaultUI: true,
                    draggable: true,
                    zoomControl: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                var marker = new google.maps.Marker({
                    map: map,
                    animation: google.maps.Animation.DROP,
                    position: map.getCenter()
                });
                marker.bindTo('position', map, 'center');
                _this.getLocationName(map.getCenter());
                google.maps.event.addListener(map, 'dragend', function (a) {
                    var geo = new google.maps.Geocoder;
                    geo.geocode({
                        'location': map.getCenter()
                    }, function (results, status) {
                        if (results[0]) {
                            var addr = (document.getElementById('address'));
                            addr.value = results[0].formatted_address;
                            console.log(results[0].formatted_address);
                        }
                    });
                });
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
        });
    };
    HomePage.prototype.getLocationName = function (point) {
        this.geocoder.geocode({
            'location': point
        }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    console.log(results[0].formatted_address);
                    var addr = document.getElementById("address");
                    addr.value = results[0].formatted_address;
                }
                else {
                    console.log('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    HomePage.prototype.redirectDashboard = function () {
        this.navCtrl.push('DashboardPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"F:\hybridwks\mobileApp\src\pages\home\home.html"*/'<ion-content>\n\n    <ion-row>\n\n        <p style="padding-left: 20px;"><b>Set delivery location</b></p>\n\n    </ion-row>\n\n    <div id="map"></div>\n\n<ion-grid>\n\n    <!-- <ion-item> -->\n\n        <ion-label color="primary" stacked>Address</ion-label>\n\n        <input type="text" id="address">\n\n    <!-- </ion-item> -->\n\n    <!-- <ion-item> -->\n\n        <ion-col center text-center>\n\n        <button ion-button round (click)="redirectDashboard()">Save Address and Proceed</button>\n\n        </ion-col>\n\n    <!-- </ion-item> -->\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\hybridwks\mobileApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_storage_service__ = __webpack_require__(167);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, storage, navParams, loginService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        this.mobileNo = '';
        this.otp = '';
        this.isOtpValidation = false;
        this.payload = {
            mobileNo: ''
        };
        this.loading = this.loadingCtrl.create({
            spinner: 'dots'
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.validateMobile = function () {
        var _this = this;
        var load = this.loadingCtrl.create({
            spinner: 'dots'
        });
        load.present();
        try {
            this.loginService.mobileNoValidate(this.mobileNo)
                .subscribe(function (resp) {
                //console.log(resp, "res");
                load.dismiss();
                _this.isOtpValidation = true;
            }, function (error) {
                load.dismiss();
                console.log(error, "error");
            });
        }
        catch (e) {
            load.dismiss();
            console.log(e);
        }
    };
    LoginPage.prototype.reSendOtp = function () {
        var _this = this;
        var load = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Resending the OTP..'
        });
        load.present();
        try {
            this.loginService.otpValidation(this.mobileNo, this.otp)
                .subscribe(function (resp) {
                _this.otp = '';
                load.dismiss();
            }, function (error) {
                load.dismiss();
                console.log(error, "error");
            });
        }
        catch (e) {
            load.dismiss();
            console.log(e);
        }
    };
    LoginPage.prototype.validateOTP = function () {
        var _this = this;
        var load = this.loadingCtrl.create({
            spinner: 'dots'
        });
        load.present();
        try {
            console.log(this.otp);
            this.loginService.otpValidation(this.mobileNo, this.otp)
                .subscribe(function (resp) {
                if (_this.otp == '1234') {
                    _this.payload.mobileNo = _this.mobileNo;
                    _this.redirectToSignup();
                }
                else {
                    _this.otp = '';
                    alert('Invalid OTP');
                }
                load.dismiss();
            }, function (error) {
                load.dismiss();
                console.log(error, "error");
            });
        }
        catch (e) {
            load.dismiss();
            console.log(e);
        }
    };
    /* loginAction()
     {
       console.log("Inside function")
         // Login with permissions
         this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
         .then( (res: FacebookLoginResponse) => {
     
             // The connection was successful
             if(res.status == "connected") {
     
                 // Get user ID and Token
                 var fb_id = res.authResponse.userID;
                 var fb_token = res.authResponse.accessToken;
     
                 // Get user infos from the API
                 this.fb.api("/me?fields=name,gender,birthday,email,picture", []).then((user) => {
     
                     // Get the connected user details
                     console.log(user)
           
     
                     // => Open user session and redirect to the next page
                     this.navCtrl.setRoot('HomePage',{
                       user:user
                   });
     
                 });
     
             }
             // An error occurred while loging-in
             else {
     
                 console.log("An error occurred...");
     
             }
     
         })
         .catch((e) => {
             console.log('Error logging into Facebook', e);
         });
     }*/
    LoginPage.prototype.login = function () {
        console.log("Inside login");
    };
    LoginPage.prototype.redirectToSignup = function () {
        this.navCtrl.push('SignupPage', this.payload);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"F:\hybridwks\mobileApp\src\pages\login\login.html"*/'<ion-grid>\n\n  <ion-row>\n\n    <ion-col>\n\n      <h1 center text-center>Food App</h1>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n<ion-grid>\n\n  <ion-item>\n\n    <ion-label floating>Mobile Number</ion-label>\n\n    <ion-input type="text" required [(ngModel)] ="mobileNo"  ></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item  *ngIf="!isOtpValidation">\n\n    <ion-row>\n\n      <ion-col center text-center>\n\n        <button ion-button full color="lightText" (click)="validateMobile();">Send OTP</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n</ion-grid>\n\n<ion-grid>\n\n  \n\n</ion-grid>\n\n  \n\n<ion-grid *ngIf="isOtpValidation">\n\n  <ion-item>\n\n    <ion-label floating>OTP</ion-label>\n\n    <ion-input type="text" [(ngModel)] ="otp" ></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-row>\n\n      <ion-col center text-center>\n\n        <button ion-button full color="lightText" (click)="validateOTP();">Validate</button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <button ion-button full color="lightText" (click)="reSendOtp();">Resend OTP</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n</ion-grid>\n\n  \n\n'/*ion-inline-end:"F:\hybridwks\mobileApp\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__utils_storage_service__["a" /* StorageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__utils_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map
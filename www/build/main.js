webpackJsonp([0],{

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		153
	],
	"../pages/foodmenu/foodmenu.module": [
		155
	],
	"../pages/home/home.module": [
		156
	],
	"../pages/login/login.module": [
		159
	],
	"../pages/signup/signup.module": [
		162
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
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(154);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foodmenu_foodmenu__ = __webpack_require__(78);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"E:\Projects\Ionic Apps\mobileApp\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-1>\n\n        <button icon-only (click)="redirectMap()">\n\n          <ion-icon name="arrow-back" class="no-padding"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-11>\n\n        <ion-row>\n\n          <ion-col col-12 class="page-title"> Set Delivery Location</ion-col>\n\n          <ion-col col-12>\n\n            <ion-searchbar placeholder="Search for Area, Restuarent ..." class="search-wrapper"></ion-searchbar>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content class="content-section">\n\n  <ion-grid>\n\n    <ion-row class="padding-vertical-10">\n\n      <ion-col col-6>\n\n        <span>346</span> Restaurents</ion-col>\n\n      <ion-col col-6 text-right>\n\n        <ion-select>\n\n          <ion-option value="Relevance" selected>Relevance</ion-option>\n\n          <ion-option value="Near by">Near by</ion-option>\n\n          <ion-option value="Delivery Time">Delivery Time</ion-option>\n\n          <ion-option value="Rating">Rating</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-list>\n\n\n\n      <button ion-item [navPush]="nextPage">\n\n        <ion-thumbnail item-start>\n\n          <img src="../assets/imgs/1.png">\n\n        </ion-thumbnail>\n\n        <h2>Restaurant 1</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <div class="text-small">\n\n          <span item-start>Free delivery</span>\n\n          <span item-end>45 mins</span>\n\n        </div>\n\n        <div clear item-end class="rating">\n\n          <span text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small"> 4.2</span>\n\n            </ion-icon>\n\n          </span>\n\n          <span class="text-small">321 reviews</span>\n\n        </div>\n\n      </button>\n\n      <button ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../assets/imgs/2.png">\n\n        </ion-thumbnail>\n\n        <h2>Restaurant 2</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <div class="text-small">\n\n          <span item-start>Free delivery</span>\n\n          <span item-end>30 mins</span>\n\n        </div>\n\n        <div clear item-end class="rating">\n\n          <span text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small"> 3.25</span>\n\n            </ion-icon>\n\n          </span>\n\n          <span class="text-small">321 reviews</span>\n\n        </div>\n\n      </button>\n\n      <button ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../assets/imgs/3.png">\n\n        </ion-thumbnail>\n\n        <h2>Restaurant 3</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <div class="text-small">\n\n          <span item-start>Free delivery</span>\n\n          <span item-end>20 mins</span>\n\n        </div>\n\n        <div clear item-end class="rating">\n\n          <span text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small"> 4</span>\n\n            </ion-icon>\n\n          </span>\n\n          <span class="text-small">69 reviews</span>\n\n        </div>\n\n      </button>\n\n      <button ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../assets/imgs/4.png">\n\n        </ion-thumbnail>\n\n        <h2>Restaurant 4</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <div class="text-small">\n\n          <span item-start>Free delivery</span>\n\n          <span item-end>45 mins</span>\n\n        </div>\n\n        <div clear item-end class="rating">\n\n          <span text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small"> 3.8</span>\n\n            </ion-icon>\n\n          </span>\n\n          <span class="text-small">73 reviews</span>\n\n        </div>\n\n      </button>\n\n      <button ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../assets/imgs/1.png">\n\n        </ion-thumbnail>\n\n        <h2>Restaurant 5</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <div class="text-small">\n\n          <span item-start>Free delivery</span>\n\n          <span item-end>30 mins</span>\n\n        </div>\n\n        <div clear item-end class="rating">\n\n          <span text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small"> 3.75</span>\n\n            </ion-icon>\n\n          </span>\n\n          <span class="text-small">210 reviews</span>\n\n        </div>\n\n      </button>\n\n      <button ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../assets/imgs/2.png">\n\n        </ion-thumbnail>\n\n        <h2>Restaurant 6</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <div class="text-small">\n\n          <span item-start>Free delivery</span>\n\n          <span item-end>45 mins</span>\n\n        </div>\n\n        <div clear item-end class="rating">\n\n          <span text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small"> 4</span>\n\n            </ion-icon>\n\n          </span>\n\n          <span class="text-small">127 reviews</span>\n\n        </div>\n\n      </button>\n\n    </ion-list>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\Projects\Ionic Apps\mobileApp\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodmenuPageModule", function() { return FoodmenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foodmenu__ = __webpack_require__(78);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__foodmenu__["a" /* FoodmenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__foodmenu__["a" /* FoodmenuPage */]),
            ],
        })
    ], FoodmenuPageModule);
    return FoodmenuPageModule;
}());

//# sourceMappingURL=foodmenu.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(79);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(160);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(161);
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
    function LoginPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginAction = function () {
        var _this = this;
        console.log("Inside function");
        // Login with permissions
        this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
            .then(function (res) {
            // The connection was successful
            if (res.status == "connected") {
                // Get user ID and Token
                var fb_id = res.authResponse.userID;
                var fb_token = res.authResponse.accessToken;
                // Get user infos from the API
                _this.fb.api("/me?fields=name,gender,birthday,email,picture", []).then(function (user) {
                    // Get the connected user details
                    console.log(user);
                    // => Open user session and redirect to the next page
                    _this.navCtrl.setRoot('HomePage', {
                        user: user
                    });
                });
            }
            else {
                console.log("An error occurred...");
            }
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', e);
        });
    };
    LoginPage.prototype.login = function () {
        console.log("Inside login");
    };
    LoginPage.prototype.redirectToSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Projects\Ionic Apps\mobileApp\src\pages\login\login.html"*/'<ion-grid>\n  <ion-row>\n    <ion-col>\n      <h1 center text-center>Food App</h1>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid >\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" #email></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" #password></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col center text-center>\n          <button ion-button full color="lightText" (click)="login();">Log in</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <p center text-center>OR</p>\n</ion-grid>\n<ion-grid padding>\n      <button ion-button full style="background: #3b5998;" (click)="loginAction()">Login with Facebook</button>\n</ion-grid> \n<ion-grid>\n    <ion-col center text-center>\n      <h6>Don\'t have an account? <span><a (click)="redirectToSignup()">Signup</a></span></h6>\n    </ion-col>\n</ion-grid>\n\n'/*ion-inline-end:"E:\Projects\Ionic Apps\mobileApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(163);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\Projects\Ionic Apps\mobileApp\src\pages\signup\signup.html"*/'<ion-grid>\n  <ion-row>\n    <ion-col>\n      <h1 center text-center>Food App</h1>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid >\n    <ion-item>\n        <ion-label floating>Name</ion-label>\n        <ion-input type="password" #password></ion-input>\n      </ion-item>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" #email></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Mobile Number</ion-label>\n      <ion-input type="number" #password></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" #password></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col center text-center>\n          <button ion-button full color="lightText" (click)="signup()">Signup</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n</ion-grid>\n\n\n'/*ion-inline-end:"E:\Projects\Ionic Apps\mobileApp\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_foodmenu_foodmenu__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_foodmenu_foodmenu_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(157);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup_module__["SignupPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_foodmenu_foodmenu_module__["FoodmenuPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/foodmenu/foodmenu.module#FoodmenuPageModule', name: 'FoodmenuPage', segment: 'foodmenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_foodmenu_foodmenu__["a" /* FoodmenuPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Projects\Ionic Apps\mobileApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Projects\Ionic Apps\mobileApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-foodmenu',template:/*ion-inline-start:"E:\Projects\Ionic Apps\mobileApp\src\pages\foodmenu\foodmenu.html"*/'<ion-header>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-1>\n\n        <button icon-only navPop>\n\n          <ion-icon name="arrow-back" class="no-padding"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-11>\n\n        <ion-row>\n\n          <ion-col col-8 class="page-title"> Restaurant 1\n\n            <p text-lowercase no-margin class="text-small">Lorem ipsum dolor sit amet</p>\n\n          </ion-col>\n\n          <ion-col col-4 text-right>\n\n            <ion-icon name="star">\n\n              <span text-right class="value text-small text-bold"> 4.2</span>\n\n            </ion-icon>\n\n            <p no-margin class="text-small text-bold">321 reviews</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content class="content-section">\n\n  <ion-grid>\n\n    <ion-row class="detail-view">\n\n      <button col-6 ion-item>\n\n        <ion-thumbnail>\n\n          <img src="../assets/imgs/4.png">\n\n        </ion-thumbnail>\n\n        <h2>Item 1 title</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <ion-item class="item-footer">\n\n          <span float-left class="price">$45</span>\n\n          <button float-right ion-button color="dark">Add</button>\n\n        </ion-item>\n\n      </button>\n\n      <button col-6 ion-item>\n\n        <ion-thumbnail>\n\n          <img src="../assets/imgs/3.png">\n\n        </ion-thumbnail>\n\n        <h2>Item 2 title</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <ion-item class="item-footer">\n\n          <span float-left class="price">$45</span>\n\n          <button float-right ion-button color="dark">Add</button>\n\n        </ion-item>\n\n      </button>\n\n      <button col-6 ion-item>\n\n        <ion-thumbnail>\n\n          <img src="../assets/imgs/1.png">\n\n        </ion-thumbnail>\n\n        <h2>Item 3 title</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <ion-item class="item-footer">\n\n          <span float-left class="price">$45</span>\n\n          <button float-right ion-button color="dark">Add</button>\n\n        </ion-item>\n\n      </button>\n\n      <button col-6 ion-item>\n\n        <ion-thumbnail>\n\n          <img src="../assets/imgs/2.png">\n\n        </ion-thumbnail>\n\n        <h2>Item 4 title</h2>\n\n        <p>Lorem ipsum dolor sit amet</p>\n\n        <ion-item class="item-footer">\n\n          <span float-left class="price">$45</span>\n\n          <button float-right ion-button color="dark">Add</button>\n\n        </ion-item>\n\n      </button>\n\n      <button col-6 ion-item>\n\n          <ion-thumbnail>\n\n            <img src="../assets/imgs/3.png">\n\n          </ion-thumbnail>\n\n          <h2>Item 5 title</h2>\n\n          <p>Lorem ipsum dolor sit amet</p>\n\n          <ion-item class="item-footer">\n\n            <span float-left class="price">$45</span>\n\n            <button float-right ion-button color="dark">Add</button>\n\n          </ion-item>\n\n        </button>\n\n        <button col-6 ion-item>\n\n            <ion-thumbnail>\n\n              <img src="../assets/imgs/4.png">\n\n            </ion-thumbnail>\n\n            <h2>Item 6 title</h2>\n\n            <p>Lorem ipsum dolor sit amet</p>\n\n            <ion-item class="item-footer">\n\n              <span float-left class="price">$45</span>\n\n              <button float-right ion-button color="dark">Add</button>\n\n            </ion-item>\n\n          </button>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer class="padding-10">\n\n<span float-left class="text-large text-white">Total $300</span>\n\n<button float-right ion-button small>Checkout</button>\n\n</ion-footer>'/*ion-inline-end:"E:\Projects\Ionic Apps\mobileApp\src\pages\foodmenu\foodmenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FoodmenuPage);
    return FoodmenuPage;
}());

//# sourceMappingURL=foodmenu.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(157);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Projects\Ionic Apps\mobileApp\src\pages\home\home.html"*/'<ion-content>\n\n    <ion-row>\n\n        <p style="padding-left: 20px;"><b>Set delivery location</b></p>\n\n    </ion-row>\n\n    <div id="map"></div>\n\n<ion-grid>\n\n    <!-- <ion-item> -->\n\n        <ion-label color="primary" stacked>Address</ion-label>\n\n        <input type="text" id="address">\n\n    <!-- </ion-item> -->\n\n    <!-- <ion-item> -->\n\n        <ion-col center text-center>\n\n        <button ion-button round (click)="redirectDashboard()">Save Address and Proceed</button>\n\n        </ion-col>\n\n    <!-- </ion-item> -->\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\Ionic Apps\mobileApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map
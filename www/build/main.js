webpackJsonp([3],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_gate_pass_add_gate_pass__ = __webpack_require__(137);
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
    function HomePage(navCtrl, afDB, afAuth, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.uid = null;
                _this.showAlert("Error", "User Not Logged In");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                return;
            }
            _this.displayName = user.displayName;
            _this.uid = user.uid;
        });
        this.items = afDB.list('passes').valueChanges();
        this.items.subscribe(function (data) {
            console.log("" + data);
            _this.passes = data;
            var listofkeys = [];
            var listofobjects = [];
            for (var i = 0; i < _this.passes.length; i++) {
                listofkeys = Object.keys(_this.passes[i].locations);
                for (var j = 0; j < listofkeys.length; j++) {
                    var mObject = _this.passes[i].locations[listofkeys[j]];
                    listofobjects.push(mObject);
                }
                _this.passes[i].locations = listofobjects;
                listofobjects = [];
            }
        });
    }
    HomePage.prototype.showAlert = function (mTitle, sTitle) {
        var alert = this.alertCtrl.create({
            title: mTitle,
            subTitle: sTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    HomePage.prototype.addGatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_gate_pass_add_gate_pass__["a" /* AddGatePassPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/bashayeraldaghari/Desktop/gatePass/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="signOut()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Hello, {{displayName}} {{uid}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button (click)="addGatePage()">\n    Add Gate Pass\n  </button>\n  <ion-list>\n    <ion-item class="text" *ngFor="let pass of passes">\n\n      <ion-card>\n\n        <ion-item>\n          <ion-icon name="school" item-start large></ion-icon>\n\n          <h2><a href="{{pass.id}}">{{pass.id}}</a></h2>\n          <p>{{pass.firstName}}</p>\n          <p>{{pass.lastName}}</p>\n          <p>{{pass.nationality}}</p>\n          <p>{{pass.company}}</p>\n          <p>{{pass.purpose}}</p>\n          <p>{{pass.approver}}</p>\n          <p>{{pass.date}}</p>\n          <p>{{pass.timeIn}}</p>\n          <p>{{pass.timeOut}}</p>\n          <p>{{pass.building}}</p>\n          <p>{{pass.section}}</p>\n          <p>{{pass.floor}}</p>\n\n        </ion-item>\n\n      </ion-card>\n    </ion-item>\n  </ion-list>\n\n\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/bashayeraldaghari/Desktop/gatePass/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGatePassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gate_guard_gate_guard__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddGatePassPage = (function () {
    function AddGatePassPage(navCtrl, navParams, afDB, afAuth, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.uid = null;
                _this.showAlert("Error", "User Not Logged In");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
                return;
            }
            _this.uid = user.uid;
        });
    }
    AddGatePassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddGatePassPage');
    };
    AddGatePassPage.prototype.addGatePass = function () {
        var myGatePass = {
            firstName: this.firstName,
            lastName: this.lastName,
            id: this.id,
            nationality: this.nationality,
            company: this.company,
            purpose: this.purpose,
            approver: this.approver,
            date: this.date,
            timeIn: this.timeIn,
            timeOut: this.timeOut,
            building: this.building,
            section: this.section,
            floor: this.floor,
            loginID: this.uid
        };
        var list = this.afDB.list("passes");
        list.push(myGatePass);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_6__gate_guard_gate_guard__["a" /* GateGuardPage */]);
    };
    AddGatePassPage.prototype.showAlert = function (mTitle, sTitle) {
        var alert = this.alertCtrl.create({
            title: mTitle,
            subTitle: sTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    AddGatePassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-add-gate-pass',template:/*ion-inline-start:"/Users/bashayeraldaghari/Desktop/gatePass/src/pages/add-gate-pass/add-gate-pass.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Gate Pass</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input type="text" [(ngModel)]="firstName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input type="text" [(ngModel)]="lastName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>UAE ID</ion-label>\n      <ion-input type="number" [(ngModel)]="id"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Nationality</ion-label>\n      <ion-input type="text" [(ngModel)]="nationality"></ion-input>\n    </ion-item>\n\n\n\n    <ion-item>\n      <ion-label floating>Company</ion-label>\n      <ion-input type="text" [(ngModel)]="company"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Purpose</ion-label>\n      <ion-input type="text" [(ngModel)]="purpose"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Approver</ion-label>\n      <ion-input type="text" [(ngModel)]="approver"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Date</ion-label>\n      <ion-input type="number" [(ngModel)]="date"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Time-In</ion-label>\n      <ion-input type="text" [(ngModel)]="timeIn"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Time-Out</ion-label>\n      <ion-input type="text" [(ngModel)]="timeOut"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Building</ion-label>\n      <ion-input type="text" [(ngModel)]="building"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Section</ion-label>\n      <ion-input type="text" [(ngModel)]="section"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Floor</ion-label>\n      <ion-input type="text" [(ngModel)]="floor"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button (click)="addGatePass()"> Send Data </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/bashayeraldaghari/Desktop/gatePass/src/pages/add-gate-pass/add-gate-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddGatePassPage);
    return AddGatePassPage;
}());

//# sourceMappingURL=add-gate-pass.js.map

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-gate-pass/add-gate-pass.module": [
		450,
		2
	],
	"../pages/gate-guard/gate-guard.module": [
		451,
		1
	],
	"../pages/login/login.module": [
		452,
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
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(307);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_gate_pass_add_gate_pass__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_gate_guard_gate_guard__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var firebaseConfig = {
    apiKey: "AIzaSyB9Qe3Y_SkKW1cK3LAlFjYWtJUXuiIzC3k",
    authDomain: "gatepass-336.firebaseapp.com",
    databaseURL: "https://gatepass-336.firebaseio.com",
    projectId: "gatepass-336",
    storageBucket: "gatepass-336.appspot.com",
    messagingSenderId: "650496318022"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_gate_pass_add_gate_pass__["a" /* AddGatePassPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_gate_guard_gate_guard__["a" /* GateGuardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-gate-pass/add-gate-pass.module#AddGatePassPageModule', name: 'AddGatePassPage', segment: 'add-gate-pass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gate-guard/gate-guard.module#GateGuardPageModule', name: 'GateGuardPage', segment: 'gate-guard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                //added
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                //added
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_gate_pass_add_gate_pass__["a" /* AddGatePassPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_gate_guard_gate_guard__["a" /* GateGuardPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                //added
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gate_guard_gate_guard__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, afAuth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.errorMessage = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        var e1 = "gateadmin@adu.ac.ae";
        var e2 = "gateguard@adu.ac.ae";
        var p1 = "123456";
        if (this.email == e1 && this.password == p1) {
            this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (user) {
                console.log(" user " + user.uid);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }).catch(function (error) {
                _this.showAlert("Error", error.message);
                _this.errorMessage = "Error: " + error.message;
            });
        }
        if (this.email == e2 && this.password == p1) {
            this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (user) {
                console.log(" user " + user.uid);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__gate_guard_gate_guard__["a" /* GateGuardPage */]);
            }).catch(function (error) {
                _this.showAlert("Error", error.message);
                _this.errorMessage = "Error: " + error.message;
            });
        }
    };
    LoginPage.prototype.showAlert = function (mTitle, sTitle) {
        var alert = this.alertCtrl.create({
            title: mTitle,
            subTitle: sTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/bashayeraldaghari/Desktop/gatePass/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Gate Pass System Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button (click)="signIn()">Sign In</button>\n    </ion-item>\n\n  </ion-list>\n  <p style="color:red;">\n    {{errorMessage}}\n  </p>\n  <p>\n    New user, sign up <span (click)="signUp()"> here. </span>\n  </p>\n</ion-content>\n\n'/*ion-inline-end:"/Users/bashayeraldaghari/Desktop/gatePass/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(43);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bashayeraldaghari/Desktop/gatePass/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/bashayeraldaghari/Desktop/gatePass/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GateGuardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GateGuardPage = (function () {
    function GateGuardPage(navCtrl, afDB, afAuth, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.uid = null;
                _this.showAlert("Error", "User Not Logged In");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                return;
            }
            _this.displayName = user.displayName;
            _this.uid = user.uid;
        });
        this.items = afDB.list('passes').valueChanges();
        this.items.subscribe(function (data) {
            console.log("" + data);
            _this.passes = data;
            var listofkeys = [];
            var listofobjects = [];
            for (var i = 0; i < _this.passes.length; i++) {
                listofkeys = Object.keys(_this.passes[i].locations);
                for (var j = 0; j < listofkeys.length; j++) {
                    var mObject = _this.passes[i].locations[listofkeys[j]];
                    listofobjects.push(mObject);
                }
                _this.passes[i].locations = listofobjects;
                listofobjects = [];
            }
        });
    }
    GateGuardPage.prototype.showAlert = function (mTitle, sTitle) {
        var alert = this.alertCtrl.create({
            title: mTitle,
            subTitle: sTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    GateGuardPage.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    GateGuardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GateGuardPage');
    };
    GateGuardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gate-guard',template:/*ion-inline-start:"/Users/bashayeraldaghari/Desktop/gatePass/src/pages/gate-guard/gate-guard.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>GateGuard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item class="text" *ngFor="let pass of passes">\n\n      <ion-card>\n\n        <ion-item>\n          <ion-icon name="school" item-start large></ion-icon>\n\n          <h2><a href="{{pass.id}}">{{pass.id}}</a></h2>\n          <p>{{pass.firstName}}</p>\n          <p>{{pass.lastName}}</p>\n          <p>{{pass.nationality}}</p>\n          <p>{{pass.company}}</p>\n          <p>{{pass.purpose}}</p>\n          <p>{{pass.approver}}</p>\n          <p>{{pass.date}}</p>\n          <p>{{pass.timeIn}}</p>\n          <p>{{pass.timeOut}}</p>\n          <p>{{pass.building}}</p>\n          <p>{{pass.section}}</p>\n          <p>{{pass.floor}}</p>\n        </ion-item>\n\n      </ion-card>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/bashayeraldaghari/Desktop/gatePass/src/pages/gate-guard/gate-guard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GateGuardPage);
    return GateGuardPage;
}());

//# sourceMappingURL=gate-guard.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map
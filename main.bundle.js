webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main *ngIf=\"opened\"></app-main>\n\n<a href=\"#\" (click)=\"openMain()\">open</a>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.opened = true;
        this.openMain = function () {
            console.log("openMain()");
            this.opened = !this.opened;
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__["a" /* MainComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"frame\">\n  <ul #chatList>\n    <li *ngFor=\"let message of messages\" class=\"message\" [ngClass]=\"{'message-right':message.from.name == 'me'}\">\n        <img class=\"img-circle\" src=\"{{'https://sheldonchaves.github.io/fusionchat/assets/' + message.from.image}}\">\n        <span class=\"text\">\n                {{message.text}}\n        </span>\n        <span class=\"time\">\n                {{message.time}}\n        </span>\n    </li>\n  </ul>\n  <div class=\"input-box\">\n    <input\n        #inputUser\n        (keyup.enter)=\"onEnter(inputUser.value)\"\n        (blur)=\"onEnter(inputUser.value)\"\n        class=\"input-chat\"\n        placeholder=\"message\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  width: 100%;\n  list-style-type: none;\n  padding: 10px;\n  height: 370px;\n  margin-top: 10px;\n  overflow-y: auto;\n  /*\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  */ }\n\n.frame {\n  background: #4691ec;\n  height: 450px;\n  width: 350px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5); }\n\n.frame > div:last-of-type {\n  position: absolute;\n  bottom: 5px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.input-chat {\n  border: 0;\n  padding: 10px;\n  background: whitesmoke;\n  width: 90%;\n  margin: 0 auto; }\n\n.input-box {\n  margin-top: 5px;\n  width: 85%;\n  border-radius: 5px;\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.message {\n  padding: 7px 10px;\n  background: #fff;\n  margin-bottom: 10px;\n  width: 90%;\n  float: left;\n  position: relative;\n  border-radius: 25px 0 25px 0;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); }\n\n.message .img-circle {\n  border-radius: 50%;\n  max-width: 50px;\n  float: left;\n  margin: 0 10px 0 0;\n  border: 3px solid #ccc; }\n\n.message-right {\n  float: right;\n  text-align: right;\n  border-radius: 0 25px 0 25px; }\n\n.message .text {\n  line-height: 1.2em;\n  font-size: .9em;\n  display: inline-block;\n  max-width: 75%;\n  margin-top: 3px; }\n\n.message .time {\n  position: absolute;\n  top: 0;\n  right: 12px;\n  opacity: .5;\n  font-size: 10px; }\n\n.message-right .time {\n  right: initial;\n  left: 12px; }\n\n.message-right .img-circle {\n  float: right;\n  margin: 0 0 0 10px; }\n\n.message-right .text {\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Message__ = __webpack_require__("../../../../../src/app/models/Message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent() {
        this.messages = [];
        this.bot = new __WEBPACK_IMPORTED_MODULE_2__models_User__["a" /* User */]("bot", "bot.jpg");
        this.me = new __WEBPACK_IMPORTED_MODULE_2__models_User__["a" /* User */]("me", "me.jpg");
        this.messages.push(new __WEBPACK_IMPORTED_MODULE_1__models_Message__["a" /* Message */](this.bot, this.me, this.getTime(), "hello, i'm a bot!! Enter a number between 1 and 10"));
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.onEnter = function (value) {
        var _this = this;
        if (value.length) {
            this.messages.push(new __WEBPACK_IMPORTED_MODULE_1__models_Message__["a" /* Message */](this.me, this.bot, this.getTime(), value));
            this.inputUser.nativeElement.value = "";
            setTimeout(function () {
                _this.processMessage(value);
            }, 100);
            this.scrollToBottom();
        }
    };
    MainComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            try {
                _this.chatList.nativeElement.scrollTop = _this.chatList.nativeElement.scrollHeight + 60;
            }
            catch (err) { }
        }, 10);
    };
    MainComponent.prototype.processMessage = function (message) {
        var msgs = [
            "message 1",
            "message 2",
            "message 3",
            "message 4",
            "message 5",
            "message 6",
            "message 7",
            "message 8",
            "message 9",
            "message 10"
        ];
        var randomMsgs = [
            "Hail a taxi",
            "Order food delivery",
            "Buy movie tickets",
            "Customize and order a pair of Nikes",
            "Send an order to the nearest Starbucks",
            "Track your daily fitness progress",
            "Shop Burberry’s latest collection",
            "Book doctor’s appointments",
            "Host a business conference call",
            "Pay your water bill"
        ];
        randomMsgs.sort(function () {
            return .5 - Math.random();
        });
        if (+message && message >= 1 && message <= 10) {
            this.messages.push(new __WEBPACK_IMPORTED_MODULE_1__models_Message__["a" /* Message */](this.bot, this.me, this.getTime(), msgs[message - 1]));
        }
        else {
            this.messages.push(new __WEBPACK_IMPORTED_MODULE_1__models_Message__["a" /* Message */](this.bot, this.me, this.getTime(), randomMsgs[0]));
        }
        this.scrollToBottom();
    };
    MainComponent.prototype.getTime = function () {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    return MainComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('inputUser'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], MainComponent.prototype, "inputUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('chatList'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object)
], MainComponent.prototype, "chatList", void 0);
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/main.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

var _a, _b;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/Message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(from, to, time, text) {
        this._from = from;
        this._to = to;
        this._time = time;
        this._text = text;
    }
    Object.defineProperty(Message.prototype, "from", {
        get: function () {
            return this._from;
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "to", {
        get: function () {
            return this._to;
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
        },
        enumerable: true,
        configurable: true
    });
    return Message;
}());

//# sourceMappingURL=Message.js.map

/***/ }),

/***/ "../../../../../src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, image) {
        this._name = name;
        this._image = image;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knex */ "knex");
/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knex__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var db = knex__WEBPACK_IMPORTED_MODULE_2___default()({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'danny',
        database: 'face-recognition'
    }
});
var tableNames = {
    users: "users",
    login: "login"
};
var tableProps = {
    users: {
        id: tableNames.users + ".id",
        name: tableNames.users + ".name",
        email: tableNames.users + ".email",
        entries: tableNames.users + ".entries",
        joined: tableNames.users + ".joined"
    },
    login: {
        id: tableNames.login + ".id",
        email: tableNames.login + ".email",
        hash: tableNames.login + ".hash"
    }
};
var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var validEmail = function (email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
};
var userExists = function (identifier) { return __awaiter(void 0, void 0, void 0, function () {
    var exists, exists;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(typeof identifier === 'string')) return [3 /*break*/, 2];
                return [4 /*yield*/, db.first(db.raw('EXISTS ? as exists', db.from(tableNames.users).select('id').where({ email: identifier }).limit(1)))];
            case 1:
                exists = (_a.sent()).exists;
                return [2 /*return*/, exists];
            case 2:
                if (!(typeof identifier === 'number')) return [3 /*break*/, 4];
                return [4 /*yield*/, db.first(db.raw('EXISTS ? as exists', db.from(tableNames.users).select('id').where({ id: identifier }).limit(1)))];
            case 3:
                exists = (_a.sent()).exists;
                return [2 /*return*/, exists];
            case 4: return [2 /*return*/];
        }
    });
}); };
var sendUser = function (res, user) {
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(400).send("Sorry, can't find user");
    }
};
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());
app.get('/', function (_req, res) {
    db.select("*").from(tableNames.users).then(function (data) { return res.json(data); });
});
app.get('/profile/:id', function (req, res) {
    var id = req.params.id;
    db.select("*").from(tableNames.users).where({ id: id }).then(function (user) {
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(400).send();
        }
    });
});
app.post('/signin', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, name, email, entries, joined, user;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                console.log(req.body);
                _a = tableProps.users, id = _a.id, name = _a.name, email = _a.email, entries = _a.entries, joined = _a.joined;
                return [4 /*yield*/, db.select(id, name, email, entries, joined)
                        .from(tableNames.users)
                        .join(tableNames.login, tableProps.users.email, "=", tableProps.login.email)
                        .where((_b = {}, _b[tableProps.users.email] = req.body.email, _b.hash = req.body.password, _b))
                        .first()];
            case 1:
                user = _c.sent();
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(400).send();
                }
                return [2 /*return*/];
        }
    });
}); });
app.post('/register', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, name, password, _b, newUser, newLogin;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, email = _a.email, name = _a.name, password = _a.password;
                _b = validEmail(email);
                if (!_b) return [3 /*break*/, 2];
                return [4 /*yield*/, userExists(email)];
            case 1:
                _b = !(_c.sent());
                _c.label = 2;
            case 2:
                if (!(_b && name && password)) return [3 /*break*/, 5];
                return [4 /*yield*/, db(tableNames.users)
                        .returning('*')
                        .insert({
                        email: email,
                        name: name,
                        joined: new Date()
                    })];
            case 3:
                newUser = (_c.sent())[0];
                console.log(newUser);
                sendUser(res, newUser);
                return [4 /*yield*/, db(tableNames.login)
                        .returning('*')
                        .insert({
                        email: email,
                        hash: password
                    })];
            case 4:
                newLogin = _c.sent();
                console.log(newLogin);
                return [3 /*break*/, 6];
            case 5:
                res.status(400).json("Email wasn't valid or other field(s) were empty!");
                _c.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
app.put('/image', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userEntries, newEntries, value;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.body.id;
                return [4 /*yield*/, db.select(tableProps.users.entries, tableProps.users.id)
                        .from(tableNames.users)
                        .where((_a = {}, _a[tableProps.users.id] = id, _a))
                        .first()];
            case 1:
                userEntries = _b.sent();
                if (!userEntries) return [3 /*break*/, 3];
                newEntries = Number(userEntries.entries) + 1;
                console.log(newEntries);
                return [4 /*yield*/, db(tableNames.users)
                        .update({ entries: newEntries })
                        .where({ id: Number(userEntries.id) })
                        .returning("entries")];
            case 2:
                value = (_b.sent())[0];
                res.status(200).json(value);
                return [3 /*break*/, 4];
            case 3:
                res.status(404).send('No user found');
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
app.listen(3000, function () {
    console.log('\x1b[32m%s\x1b[0m', '[app] app is running on port 3000');
});


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("knex");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtuZXhcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGNEM7QUFDcEI7QUFDQTtBQUV4QixJQUFNLEVBQUUsR0FBRywyQ0FBSSxDQUFDO0lBQ1osTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRSxrQkFBa0I7S0FDL0I7Q0FDSixDQUFD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LEtBQUssR0FBRyxDQUFDLFNBR1UsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFN0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OztnQkFFNUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7O0tBRzdDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO0FBQzFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUM5SkgsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyLnRzXCIpO1xuIiwiaW1wb3J0IEV4cHJlc3MsIHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0IGtuZXggZnJvbSAna25leCc7XG5cbmNvbnN0IGRiID0ga25leCh7XG4gICAgY2xpZW50OiAncGcnLFxuICAgIGNvbm5lY3Rpb246IHtcbiAgICAgICAgaG9zdDogJzEyNy4wLjAuMScsXG4gICAgICAgIHVzZXI6ICdkYW5ueScsXG4gICAgICAgIGRhdGFiYXNlOiAnZmFjZS1yZWNvZ25pdGlvbidcbiAgICB9XG59KTtcblxuY29uc3QgdGFibGVOYW1lcyA9IHtcbiAgICB1c2VyczogXCJ1c2Vyc1wiLFxuICAgIGxvZ2luOiBcImxvZ2luXCJcbn1cblxuY29uc3QgdGFibGVQcm9wcyA9IHtcbiAgICB1c2Vyczoge1xuICAgICAgICBpZDogYCR7dGFibGVOYW1lcy51c2Vyc30uaWRgLFxuICAgICAgICBuYW1lOiBgJHt0YWJsZU5hbWVzLnVzZXJzfS5uYW1lYCxcbiAgICAgICAgZW1haWw6IGAke3RhYmxlTmFtZXMudXNlcnN9LmVtYWlsYCxcbiAgICAgICAgZW50cmllczogYCR7dGFibGVOYW1lcy51c2Vyc30uZW50cmllc2AsXG4gICAgICAgIGpvaW5lZDogYCR7dGFibGVOYW1lcy51c2Vyc30uam9pbmVkYFxuICAgIH0sXG4gICAgbG9naW46IHtcbiAgICAgICAgaWQ6IGAke3RhYmxlTmFtZXMubG9naW59LmlkYCxcbiAgICAgICAgZW1haWw6IGAke3RhYmxlTmFtZXMubG9naW59LmVtYWlsYCxcbiAgICAgICAgaGFzaDogYCR7dGFibGVOYW1lcy5sb2dpbn0uaGFzaGBcbiAgICB9XG59XG5cbmNvbnN0IGFwcCA9IEV4cHJlc3MoKTtcblxuY29uc3QgdmFsaWRFbWFpbCA9IChlbWFpbDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdChlbWFpbCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHVzZXJFeGlzdHMgPSBhc3luYyAoaWRlbnRpZmllcjogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpZGVudGlmaWVyID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB7IGV4aXN0cyB9ID0gYXdhaXQgZGIuZmlyc3QoXG4gICAgICAgICAgICBkYi5yYXcoXG4gICAgICAgICAgICAgICAgJ0VYSVNUUyA/IGFzIGV4aXN0cycsXG4gICAgICAgICAgICAgICAgZGIuZnJvbSh0YWJsZU5hbWVzLnVzZXJzKS5zZWxlY3QoJ2lkJykud2hlcmUoe2VtYWlsOiBpZGVudGlmaWVyfSkubGltaXQoMSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGV4aXN0cztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpZGVudGlmaWVyID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zdCB7IGV4aXN0cyB9ID0gYXdhaXQgZGIuZmlyc3QoXG4gICAgICAgICAgICBkYi5yYXcoXG4gICAgICAgICAgICAgICAgJ0VYSVNUUyA/IGFzIGV4aXN0cycsXG4gICAgICAgICAgICAgICAgZGIuZnJvbSh0YWJsZU5hbWVzLnVzZXJzKS5zZWxlY3QoJ2lkJykud2hlcmUoe2lkOiBpZGVudGlmaWVyfSkubGltaXQoMSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGV4aXN0cztcbiAgICB9XG59O1xuXG5jb25zdCBzZW5kVXNlciA9IChyZXM6IFJlc3BvbnNlLCB1c2VyOiBhbnkpID0+IHtcbiAgICBpZiAodXNlcikge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChcIlNvcnJ5LCBjYW4ndCBmaW5kIHVzZXJcIik7XG4gICAgfVxufTtcblxuYXBwLnVzZShFeHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5cbmFwcC5nZXQoJy8nLCAoX3JlcSwgcmVzKSA9PiB7XG4gICAgZGIuc2VsZWN0KFwiKlwiKS5mcm9tKHRhYmxlTmFtZXMudXNlcnMpLnRoZW4oZGF0YSA9PiByZXMuanNvbihkYXRhKSk7XG59KTtcblxuYXBwLmdldCgnL3Byb2ZpbGUvOmlkJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcblxuICAgIGRiLnNlbGVjdChcIipcIikuZnJvbSh0YWJsZU5hbWVzLnVzZXJzKS53aGVyZSh7IGlkOiBpZCB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuYXBwLnBvc3QoJy9zaWduaW4nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG5cbiAgICBsZXQgeyBpZCwgbmFtZSwgZW1haWwsIGVudHJpZXMsIGpvaW5lZCB9ID0gdGFibGVQcm9wcy51c2VycztcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5zZWxlY3QoaWQsIG5hbWUsIGVtYWlsLCBlbnRyaWVzLCBqb2luZWQpXG4gICAgICAgIC5mcm9tKHRhYmxlTmFtZXMudXNlcnMpXG4gICAgICAgIC5qb2luKHRhYmxlTmFtZXMubG9naW4sIHRhYmxlUHJvcHMudXNlcnMuZW1haWwsIFwiPVwiLCB0YWJsZVByb3BzLmxvZ2luLmVtYWlsKVxuICAgICAgICAud2hlcmUoeyBbdGFibGVQcm9wcy51c2Vycy5lbWFpbF06IHJlcS5ib2R5LmVtYWlsLCBoYXNoOiByZXEuYm9keS5wYXNzd29yZCB9KVxuICAgICAgICAuZmlyc3QoKTtcbiAgICBcbiAgICBpZiAodXNlcikge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgpO1xuICAgIH1cbn0pO1xuXG5hcHAucG9zdCgnL3JlZ2lzdGVyJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBlbWFpbCwgbmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKHZhbGlkRW1haWwoZW1haWwpICYmICEoYXdhaXQgdXNlckV4aXN0cyhlbWFpbCkpICYmIG5hbWUgJiYgcGFzc3dvcmQpIHtcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IChhd2FpdCBkYih0YWJsZU5hbWVzLnVzZXJzKVxuICAgICAgICAgICAgLnJldHVybmluZygnKicpXG4gICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBqb2luZWQ6IG5ldyBEYXRlKClcbiAgICAgICAgICAgIH0pKVswXTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3VXNlcik7XG4gICAgICAgIHNlbmRVc2VyKHJlcywgbmV3VXNlcik7XG4gICAgICAgIGNvbnN0IG5ld0xvZ2luID0gYXdhaXQgZGIodGFibGVOYW1lcy5sb2dpbilcbiAgICAgICAgICAgIC5yZXR1cm5pbmcoJyonKVxuICAgICAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgIGhhc2g6IHBhc3N3b3JkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3TG9naW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKFwiRW1haWwgd2Fzbid0IHZhbGlkIG9yIG90aGVyIGZpZWxkKHMpIHdlcmUgZW1wdHkhXCIpO1xuICAgIH1cbn0pO1xuXG5hcHAucHV0KCcvaW1hZ2UnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBpZCA9IHJlcS5ib2R5LmlkIGFzIG51bWJlcjtcblxuICAgIGNvbnN0IHVzZXJFbnRyaWVzID0gXG4gICAgICAgIGF3YWl0IGRiLnNlbGVjdCh0YWJsZVByb3BzLnVzZXJzLmVudHJpZXMsIHRhYmxlUHJvcHMudXNlcnMuaWQpXG4gICAgICAgICAgICAuZnJvbSh0YWJsZU5hbWVzLnVzZXJzKVxuICAgICAgICAgICAgLndoZXJlKHsgW3RhYmxlUHJvcHMudXNlcnMuaWRdOiBpZCB9KVxuICAgICAgICAgICAgLmZpcnN0KCk7XG5cbiAgICBpZiAodXNlckVudHJpZXMpIHtcbiAgICAgICAgbGV0IG5ld0VudHJpZXMgPSBOdW1iZXIodXNlckVudHJpZXMuZW50cmllcykgKyAxO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdFbnRyaWVzKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAoYXdhaXQgZGIodGFibGVOYW1lcy51c2VycylcbiAgICAgICAgICAgIC51cGRhdGUoeyBlbnRyaWVzOiBuZXdFbnRyaWVzIH0pXG4gICAgICAgICAgICAud2hlcmUoeyBpZDogTnVtYmVyKHVzZXJFbnRyaWVzLmlkKSB9KVxuICAgICAgICAgICAgLnJldHVybmluZyhcImVudHJpZXNcIikpWzBdO1xuICAgICAgICBcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKCdObyB1c2VyIGZvdW5kJyk7XG4gICAgfVxuICAgIFxufSk7XG5cbmFwcC5saXN0ZW4oMzAwMCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdcXHgxYlszMm0lc1xceDFiWzBtJywgJ1thcHBdIGFwcCBpcyBydW5uaW5nIG9uIHBvcnQgMzAwMCcpO1xufSk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtuZXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
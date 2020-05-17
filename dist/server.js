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
var database = {
    users: [
        {
            id: 1,
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: 5,
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtuZXhcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGNEM7QUFDcEI7QUFDQTtBQUV4QixJQUFNLEVBQUUsR0FBRywyQ0FBSSxDQUFDO0lBQ1osTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRSxrQkFBa0I7S0FDL0I7Q0FDSixDQUFD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V0FBVyxHQUNiLFNBR1k7cUJBRVosV0FBVyxFQUFYLHdCQUFXO2dCQUNQLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDVCxxQkFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzt5QkFDcEMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO3lCQUMvQixLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO3lCQUNyQyxTQUFTLENBQUMsU0FBUyxDQUFDOztnQkFIbkIsS0FBSyxHQUFHLENBQUMsU0FHVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU3QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O2dCQUU1QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Ozs7S0FHN0MsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLG1DQUFtQyxDQUFDLENBQUM7QUFDMUUsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ25MSCxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIudHNcIik7XG4iLCJpbXBvcnQgRXhwcmVzcywgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQga25leCBmcm9tICdrbmV4JztcblxuY29uc3QgZGIgPSBrbmV4KHtcbiAgICBjbGllbnQ6ICdwZycsXG4gICAgY29ubmVjdGlvbjoge1xuICAgICAgICBob3N0OiAnMTI3LjAuMC4xJyxcbiAgICAgICAgdXNlcjogJ2Rhbm55JyxcbiAgICAgICAgZGF0YWJhc2U6ICdmYWNlLXJlY29nbml0aW9uJ1xuICAgIH1cbn0pO1xuXG5jb25zdCB0YWJsZU5hbWVzID0ge1xuICAgIHVzZXJzOiBcInVzZXJzXCIsXG4gICAgbG9naW46IFwibG9naW5cIlxufVxuXG5jb25zdCB0YWJsZVByb3BzID0ge1xuICAgIHVzZXJzOiB7XG4gICAgICAgIGlkOiBgJHt0YWJsZU5hbWVzLnVzZXJzfS5pZGAsXG4gICAgICAgIG5hbWU6IGAke3RhYmxlTmFtZXMudXNlcnN9Lm5hbWVgLFxuICAgICAgICBlbWFpbDogYCR7dGFibGVOYW1lcy51c2Vyc30uZW1haWxgLFxuICAgICAgICBlbnRyaWVzOiBgJHt0YWJsZU5hbWVzLnVzZXJzfS5lbnRyaWVzYCxcbiAgICAgICAgam9pbmVkOiBgJHt0YWJsZU5hbWVzLnVzZXJzfS5qb2luZWRgXG4gICAgfSxcbiAgICBsb2dpbjoge1xuICAgICAgICBpZDogYCR7dGFibGVOYW1lcy5sb2dpbn0uaWRgLFxuICAgICAgICBlbWFpbDogYCR7dGFibGVOYW1lcy5sb2dpbn0uZW1haWxgLFxuICAgICAgICBoYXNoOiBgJHt0YWJsZU5hbWVzLmxvZ2lufS5oYXNoYFxuICAgIH1cbn1cblxuY29uc3QgYXBwID0gRXhwcmVzcygpO1xuXG5jb25zdCBkYXRhYmFzZSA9IHtcbiAgICB1c2VyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5hbWU6ICdKb2huJyxcbiAgICAgICAgICAgIGVtYWlsOiAnam9obkBnbWFpbC5jb20nLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICdjb29raWVzJyxcbiAgICAgICAgICAgIGVudHJpZXM6IDAsXG4gICAgICAgICAgICBqb2luZWQ6IG5ldyBEYXRlKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICBuYW1lOiAnU2FsbHknLFxuICAgICAgICAgICAgZW1haWw6ICdzYWxseUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICdiYW5hbmFzJyxcbiAgICAgICAgICAgIGVudHJpZXM6IDAsXG4gICAgICAgICAgICBqb2luZWQ6IG5ldyBEYXRlKClcbiAgICAgICAgfVxuICAgIF1cbn1cblxuY29uc3QgdmFsaWRFbWFpbCA9IChlbWFpbDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdChlbWFpbCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHVzZXJFeGlzdHMgPSBhc3luYyAoaWRlbnRpZmllcjogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpZGVudGlmaWVyID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB7IGV4aXN0cyB9ID0gYXdhaXQgZGIuZmlyc3QoXG4gICAgICAgICAgICBkYi5yYXcoXG4gICAgICAgICAgICAgICAgJ0VYSVNUUyA/IGFzIGV4aXN0cycsXG4gICAgICAgICAgICAgICAgZGIuZnJvbSh0YWJsZU5hbWVzLnVzZXJzKS5zZWxlY3QoJ2lkJykud2hlcmUoe2VtYWlsOiBpZGVudGlmaWVyfSkubGltaXQoMSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGV4aXN0cztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpZGVudGlmaWVyID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zdCB7IGV4aXN0cyB9ID0gYXdhaXQgZGIuZmlyc3QoXG4gICAgICAgICAgICBkYi5yYXcoXG4gICAgICAgICAgICAgICAgJ0VYSVNUUyA/IGFzIGV4aXN0cycsXG4gICAgICAgICAgICAgICAgZGIuZnJvbSh0YWJsZU5hbWVzLnVzZXJzKS5zZWxlY3QoJ2lkJykud2hlcmUoe2lkOiBpZGVudGlmaWVyfSkubGltaXQoMSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGV4aXN0cztcbiAgICB9XG59O1xuXG5jb25zdCBzZW5kVXNlciA9IChyZXM6IFJlc3BvbnNlLCB1c2VyOiBhbnkpID0+IHtcbiAgICBpZiAodXNlcikge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChcIlNvcnJ5LCBjYW4ndCBmaW5kIHVzZXJcIik7XG4gICAgfVxufTtcblxuYXBwLnVzZShFeHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5cbmFwcC5nZXQoJy8nLCAoX3JlcSwgcmVzKSA9PiB7XG4gICAgZGIuc2VsZWN0KFwiKlwiKS5mcm9tKHRhYmxlTmFtZXMudXNlcnMpLnRoZW4oZGF0YSA9PiByZXMuanNvbihkYXRhKSk7XG59KTtcblxuYXBwLmdldCgnL3Byb2ZpbGUvOmlkJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcblxuICAgIGRiLnNlbGVjdChcIipcIikuZnJvbSh0YWJsZU5hbWVzLnVzZXJzKS53aGVyZSh7IGlkOiBpZCB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuYXBwLnBvc3QoJy9zaWduaW4nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG5cbiAgICBsZXQgeyBpZCwgbmFtZSwgZW1haWwsIGVudHJpZXMsIGpvaW5lZCB9ID0gdGFibGVQcm9wcy51c2VycztcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5zZWxlY3QoaWQsIG5hbWUsIGVtYWlsLCBlbnRyaWVzLCBqb2luZWQpXG4gICAgICAgIC5mcm9tKHRhYmxlTmFtZXMudXNlcnMpXG4gICAgICAgIC5qb2luKHRhYmxlTmFtZXMubG9naW4sIHRhYmxlUHJvcHMudXNlcnMuZW1haWwsIFwiPVwiLCB0YWJsZVByb3BzLmxvZ2luLmVtYWlsKVxuICAgICAgICAud2hlcmUoeyBbdGFibGVQcm9wcy51c2Vycy5lbWFpbF06IHJlcS5ib2R5LmVtYWlsLCBoYXNoOiByZXEuYm9keS5wYXNzd29yZCB9KVxuICAgICAgICAuZmlyc3QoKTtcbiAgICBcbiAgICBpZiAodXNlcikge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgpO1xuICAgIH1cbn0pO1xuXG5hcHAucG9zdCgnL3JlZ2lzdGVyJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBlbWFpbCwgbmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKHZhbGlkRW1haWwoZW1haWwpICYmICEoYXdhaXQgdXNlckV4aXN0cyhlbWFpbCkpICYmIG5hbWUgJiYgcGFzc3dvcmQpIHtcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IChhd2FpdCBkYih0YWJsZU5hbWVzLnVzZXJzKVxuICAgICAgICAgICAgLnJldHVybmluZygnKicpXG4gICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBqb2luZWQ6IG5ldyBEYXRlKClcbiAgICAgICAgICAgIH0pKVswXTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3VXNlcik7XG4gICAgICAgIHNlbmRVc2VyKHJlcywgbmV3VXNlcik7XG4gICAgICAgIGNvbnN0IG5ld0xvZ2luID0gYXdhaXQgZGIodGFibGVOYW1lcy5sb2dpbilcbiAgICAgICAgICAgIC5yZXR1cm5pbmcoJyonKVxuICAgICAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgIGhhc2g6IHBhc3N3b3JkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3TG9naW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKFwiRW1haWwgd2Fzbid0IHZhbGlkIG9yIG90aGVyIGZpZWxkKHMpIHdlcmUgZW1wdHkhXCIpO1xuICAgIH1cbn0pO1xuXG5hcHAucHV0KCcvaW1hZ2UnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBpZCA9IHJlcS5ib2R5LmlkIGFzIG51bWJlcjtcblxuICAgIGNvbnN0IHVzZXJFbnRyaWVzID0gXG4gICAgICAgIGF3YWl0IGRiLnNlbGVjdCh0YWJsZVByb3BzLnVzZXJzLmVudHJpZXMsIHRhYmxlUHJvcHMudXNlcnMuaWQpXG4gICAgICAgICAgICAuZnJvbSh0YWJsZU5hbWVzLnVzZXJzKVxuICAgICAgICAgICAgLndoZXJlKHsgW3RhYmxlUHJvcHMudXNlcnMuaWRdOiBpZCB9KVxuICAgICAgICAgICAgLmZpcnN0KCk7XG5cbiAgICBpZiAodXNlckVudHJpZXMpIHtcbiAgICAgICAgbGV0IG5ld0VudHJpZXMgPSBOdW1iZXIodXNlckVudHJpZXMuZW50cmllcykgKyAxO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdFbnRyaWVzKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAoYXdhaXQgZGIodGFibGVOYW1lcy51c2VycylcbiAgICAgICAgICAgIC51cGRhdGUoeyBlbnRyaWVzOiBuZXdFbnRyaWVzIH0pXG4gICAgICAgICAgICAud2hlcmUoeyBpZDogTnVtYmVyKHVzZXJFbnRyaWVzLmlkKSB9KVxuICAgICAgICAgICAgLnJldHVybmluZyhcImVudHJpZXNcIikpWzBdO1xuICAgICAgICBcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKCdObyB1c2VyIGZvdW5kJyk7XG4gICAgfVxuICAgIFxufSk7XG5cbmFwcC5saXN0ZW4oMzAwMCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdcXHgxYlszMm0lc1xceDFiWzBtJywgJ1thcHBdIGFwcCBpcyBydW5uaW5nIG9uIHBvcnQgMzAwMCcpO1xufSk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtuZXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
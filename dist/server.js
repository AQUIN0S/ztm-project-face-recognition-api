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
var newId = 1;
var generateNewId = function () {
    var uniqueId = true;
    do {
        if (database.users.some(function (value) {
            return value.id === newId;
        })) {
            uniqueId = false;
            newId++;
        }
        else {
            uniqueId = true;
        }
    } while (!uniqueId);
    return newId;
};
var validEmail = function (email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
};
var uniqueUser = function (email) {
    var emailAlreadyExists = database.users.some(function (user) { return email === user.email; });
    return !emailAlreadyExists;
};
var sendUser = function (res, user) {
    if (user) {
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            entries: user.entries,
            joined: user.joined
        });
    }
    else {
        res.status(400).send("Sorry, can't find user");
    }
};
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());
app.get('/', function (_req, res) {
    res.send(database.users);
});
app.get('/profile/:id', function (req, res) {
    var id = req.params.id;
    var status = 404;
    var response = "no such user";
    database.users.some(function (user) {
        if (user.id === Number(id)) {
            response = user;
            status = 200;
            return true;
        }
    });
    res.status(status).json(response);
});
app.post('/signin', function (req, res) {
    console.log(req.body);
    if (database.users.some(function (value) {
        return req.body.email === value.email && req.body.password === value.password;
    })) {
        res.status(200).send();
    }
    else {
        res.status(400).send();
    }
});
app.post('/register', function (req, res) {
    var _a = req.body, email = _a.email, name = _a.name, password = _a.password;
    if (validEmail(email) && uniqueUser(email) && name && password) {
        database.users.push({
            id: generateNewId(),
            name: name,
            email: email,
            password: password,
            entries: 0,
            joined: new Date()
        });
        sendUser(res, database.users[database.users.length - 1]);
    }
    else {
        res.status(400).json("Email wasn't valid or other field(s) were empty!");
    }
});
app.put('/image', function (req, res) {
    var id = req.body.id;
    var status = 404;
    var response = "no such user";
    database.users.some(function (user) {
        if (user.id === id) {
            user.entries++;
            response = user.entries;
            status = 200;
            return true;
        }
    });
    res.status(status).json(response);
});
app.listen(3000, function () {
    console.log("App is running on port 3000");
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUNwQjtBQVd4QixJQUFNLEdBQUcsR0FBRyw4Q0FBTyxFQUFFLENBQUM7QUFFdEIsSUFBTSxRQUFRLEdBQUc7SUFDYixLQUFLLEVBQUU7UUFDSDtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLElB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LENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUQ7U0FBTTtRQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxDQUFDLENBQUM7S0FDNUU7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDZixvQkFBRSxDQUFjO0lBQ3hCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNqQixJQUFJLFFBQVEsR0FBb0IsY0FBYyxDQUFDO0lBRS9DLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQUk7UUFDcEIsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN4QixNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDeEpILGlDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci50c1wiKTtcbiIsImltcG9ydCBFeHByZXNzLCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcblxuaW50ZXJmYWNlIFVzZXIge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBlbnRyaWVzOiBudW1iZXI7XG4gICAgam9pbmVkOiBEYXRlO1xufVxuXG5jb25zdCBhcHAgPSBFeHByZXNzKCk7XG5cbmNvbnN0IGRhdGFiYXNlID0ge1xuICAgIHVzZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogJ0pvaG4nLFxuICAgICAgICAgICAgZW1haWw6ICdqb2huQGdtYWlsLmNvbScsXG4gICAgICAgICAgICBwYXNzd29yZDogJ2Nvb2tpZXMnLFxuICAgICAgICAgICAgZW50cmllczogMCxcbiAgICAgICAgICAgIGpvaW5lZDogbmV3IERhdGUoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgIG5hbWU6ICdTYWxseScsXG4gICAgICAgICAgICBlbWFpbDogJ3NhbGx5QGdtYWlsLmNvbScsXG4gICAgICAgICAgICBwYXNzd29yZDogJ2JhbmFuYXMnLFxuICAgICAgICAgICAgZW50cmllczogMCxcbiAgICAgICAgICAgIGpvaW5lZDogbmV3IERhdGUoKVxuICAgICAgICB9XG4gICAgXVxufVxuXG5sZXQgbmV3SWQgPSAxO1xuXG5jb25zdCBnZW5lcmF0ZU5ld0lkID0gKCkgPT4ge1xuICAgIGxldCB1bmlxdWVJZCA9IHRydWU7XG5cbiAgICBkbyB7XG4gICAgICAgIGlmIChkYXRhYmFzZS51c2Vycy5zb21lKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmlkID09PSBuZXdJZDtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHVuaXF1ZUlkID0gZmFsc2U7XG4gICAgICAgICAgICBuZXdJZCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdW5pcXVlSWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAoIXVuaXF1ZUlkKTtcblxuICAgIHJldHVybiBuZXdJZDtcbn1cblxuY29uc3QgdmFsaWRFbWFpbCA9IChlbWFpbDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdChlbWFpbCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgdW5pcXVlVXNlciA9IChlbWFpbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZW1haWxBbHJlYWR5RXhpc3RzID0gZGF0YWJhc2UudXNlcnMuc29tZSh1c2VyID0+ICBlbWFpbCA9PT0gdXNlci5lbWFpbCk7XG4gICAgcmV0dXJuICFlbWFpbEFscmVhZHlFeGlzdHM7XG59XG5cbmNvbnN0IHNlbmRVc2VyID0gKHJlczogUmVzcG9uc2UsIHVzZXI6IFVzZXIgfCBudWxsKSA9PiB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIGVudHJpZXM6IHVzZXIuZW50cmllcyxcbiAgICAgICAgICAgIGpvaW5lZDogdXNlci5qb2luZWRcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoXCJTb3JyeSwgY2FuJ3QgZmluZCB1c2VyXCIpO1xuICAgIH1cbn1cblxuYXBwLnVzZShFeHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5cbmFwcC5nZXQoJy8nLCAoX3JlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnNlbmQoZGF0YWJhc2UudXNlcnMpO1xufSk7XG5cbmFwcC5nZXQoJy9wcm9maWxlLzppZCcsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgbGV0IHN0YXR1cyA9IDQwNDtcbiAgICBsZXQgcmVzcG9uc2U6IG9iamVjdCB8IHN0cmluZyA9IFwibm8gc3VjaCB1c2VyXCI7XG5cbiAgICBkYXRhYmFzZS51c2Vycy5zb21lKHVzZXIgPT4ge1xuICAgICAgICBpZiAodXNlci5pZCA9PT0gTnVtYmVyKGlkKSkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB1c2VyO1xuICAgICAgICAgICAgc3RhdHVzID0gMjAwO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoc3RhdHVzKS5qc29uKHJlc3BvbnNlKTtcbn0pO1xuXG5hcHAucG9zdCgnL3NpZ25pbicsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcblxuICAgIGlmIChkYXRhYmFzZS51c2Vycy5zb21lKCh2YWx1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVxLmJvZHkuZW1haWwgPT09IHZhbHVlLmVtYWlsICYmIHJlcS5ib2R5LnBhc3N3b3JkID09PSB2YWx1ZS5wYXNzd29yZDtcbiAgICB9KSkge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgfVxufSk7XG5cbmFwcC5wb3N0KCcvcmVnaXN0ZXInLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7IGVtYWlsLCBuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG5cbiAgICBpZiAodmFsaWRFbWFpbChlbWFpbCkgJiYgdW5pcXVlVXNlcihlbWFpbCkgJiYgbmFtZSAmJiBwYXNzd29yZCkge1xuICAgICAgICBkYXRhYmFzZS51c2Vycy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBnZW5lcmF0ZU5ld0lkKCksXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgZW50cmllczogMCxcbiAgICAgICAgICAgIGpvaW5lZDogbmV3IERhdGUoKVxuICAgICAgICB9KTtcbiAgICAgICAgc2VuZFVzZXIocmVzLCBkYXRhYmFzZS51c2Vyc1tkYXRhYmFzZS51c2Vycy5sZW5ndGggLSAxXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oXCJFbWFpbCB3YXNuJ3QgdmFsaWQgb3Igb3RoZXIgZmllbGQocykgd2VyZSBlbXB0eSFcIik7XG4gICAgfVxufSk7XG5cbmFwcC5wdXQoJy9pbWFnZScsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5ib2R5O1xuICAgIGxldCBzdGF0dXMgPSA0MDQ7XG4gICAgbGV0IHJlc3BvbnNlOiBudW1iZXIgfCBzdHJpbmcgPSBcIm5vIHN1Y2ggdXNlclwiO1xuXG4gICAgZGF0YWJhc2UudXNlcnMuc29tZSh1c2VyID0+IHtcbiAgICAgICAgaWYgKHVzZXIuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICB1c2VyLmVudHJpZXMrKztcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdXNlci5lbnRyaWVzO1xuICAgICAgICAgICAgc3RhdHVzID0gMjAwO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoc3RhdHVzKS5qc29uKHJlc3BvbnNlKTtcbn0pO1xuXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkFwcCBpcyBydW5uaW5nIG9uIHBvcnQgMzAwMFwiKTtcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9
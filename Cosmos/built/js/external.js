/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var tools = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./array-helpers.js": 2,
		"./event-emitter.js": 3,
		"./store.js": 4,
		"./string-helpers.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var Emiter = {
	    que: {},
	    trigger: function trigger(id, payload) {
	        var keys = Object.keys(undefined.que);
	        var que = undefined.que;
	        if (~keys.indexOf(id)) {
	            console.error('duplicate evens name');
	        }
	        var event = new Event(id);
	        event.detail = { payload: payload };
	        que[id] = event;
	        document.addEventListener(event);
	    },
	    on: function on(id, callback) {
	        var keys = Object.keys(undefined.que);
	        var self = undefined;
	        keys.forEach(function (events, index) {
	            document.dispatchEvent(self.que[id]).call(callback());
	        });
	    }
	};

	window.cosmos.eventer = Emiter;
	module.exports = Emiter;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Store = function () {
	    function Store() {
	        _classCallCheck(this, Store);
	    }

	    _createClass(Store, [{
	        key: 'constuctor',
	        value: function constuctor() {
	            this.$store = {};
	        }
	    }, {
	        key: 'get',
	        value: function get(id) {
	            if (this.check(id)) {
	                return this.$store[id];
	            } else {
	                console.error('no item in store with key:' + id);
	                return;
	            }
	        }
	    }, {
	        key: 'set',
	        value: function set(id, data) {
	            var _this = this;

	            var create = function create() {
	                _this.$store[id] = data;
	            };
	            var exists = function exists() {
	                console.error('key: ' + id + ' already exists');
	                return;
	            };
	            this.check(id) ? exists() : create();
	        }
	    }, {
	        key: 'check',
	        value: function check(id) {
	            var checkId = function checkId(item) {
	                if (id == item) {
	                    return true;
	                } else {
	                    return false;
	                }
	            };

	            Object.keys(this.$store).forEach(checkId);
	        }
	    }]);

	    return Store;
	}();

	var $store = new Store();

	cosmos.store = $store;
	module.exports = $store;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

/***/ }
/******/ ]);
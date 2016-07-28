/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _namespace = __webpack_require__(45);
	
	var _namespace2 = _interopRequireDefault(_namespace);
	
	var _reload = __webpack_require__(46);
	
	var _reload2 = _interopRequireDefault(_reload);
	
	var _eventStore = __webpack_require__(47);
	
	var _eventStore2 = _interopRequireDefault(_eventStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _namespace2.default)();
	(0, _reload2.default)();
	cosmos.store = new _eventStore2.default();

/***/ },

/***/ 45:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = namespace;
	function namespace() {
	  window.cosmos = {};
	  cosmos.info = {
	    reloadCount: localStorage['reloadCount']
	  };
	  cosmos.modules = {};
	  cosmos.noop = function () {};
	  cosmos.debounce = function debounce(func, wait, immediate) {
	    var timeout;
	    return function () {
	      var context = this,
	          args = arguments;
	      var later = function later() {
	        timeout = null;
	        if (!immediate) func.apply(context, args);
	      };
	      var callNow = immediate && !timeout;
	      clearTimeout(timeout);
	      timeout = setTimeout(later, wait);
	      if (callNow) {
	        func.apply(context, args);
	      }
	    };
	  };
	  cosmos.throttle = function throttle(fn, delay, context) {
	
	    var wait = false;
	    return function () {
	
	      if (!wait) {
	        fn.call(context ? this : null, arguments);
	        wait = true;
	        setTimeout(function () {
	          wait = false;
	        }, delay);
	      }
	    };
	  };
	  cosmos.toArray = function (arrayLikeObjects) {
	
	    return Array.prototype.slice.call(arrayLikeObjects);
	  };
	}

/***/ },

/***/ 46:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var ls = localStorage;
	  if (!ls.reloadCount) {
	    ls.reloadCount = 0;
	  }
	  var temp = parseInt(ls.reloadCount);
	  ls.reloadCount = temp + 1;
	};

/***/ },

/***/ 47:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var eventer = null;
	
	var Store = function () {
	  function Store() {
	    _classCallCheck(this, Store);
	
	    this.store = {};
	    this.memorize = [];
	    this.eventBus = {};
	  }
	
	  _createClass(Store, [{
	    key: 'memorize',
	    value: function memorize() {}
	  }, {
	    key: 'get',
	    value: function get(name) {
	      var keys = Object.keys(this.store);
	      var exist = undefined;
	      if (~keys.indexOf(name)) {
	        exist = this.store[name];
	      } else {
	        console.error('no such item in store');
	      }
	      return exist;
	    }
	  }, {
	    key: 'set',
	    value: function set(id, obj) {
	      var memoryCheck = undefined;
	      if (typeof id == 'string' && obj.toString() == '[object Object]') {
	        if (!Object.keys(obj).length) {
	          console.error('empty object');
	        }
	        this.store[id] = obj;
	        var OA = Object.assign;
	        var memory = OA({}, this.store);
	
	        this.memorize.push(memory);
	      } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	
	        console.error('arg2 is not a object');
	        return;
	      }
	      return this;
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(id) {
	      //this.memorize(id)
	      delete this.eventBus[id];
	      delete this.store[id];
	      return this;
	    }
	  }, {
	    key: 'on',
	    value: function on(id, callback) {
	      if (eventer == 'broadcast') {
	        var a = new CustomEvent(id, { 'detail': this.eventBus[id].detail });
	        callback(a.detail);
	      } else {
	        document.addEventListener(id, function (e) {
	          callback(e.detail);
	        });
	      }
	    }
	  }, {
	    key: 'broadcast',
	    value: function broadcast(id, anyType) {
	      eventer = 'broadcast';
	      var event = new CustomEvent(id, { detail: anyType });
	      this.eventBus[id] = Object.assign({}, { detail: anyType });
	
	      setTimeout(function () {
	        document.dispatchEvent(event);
	      }, 0);
	    }
	  }, {
	    key: 'emit',
	    value: function emit(id, anyType) {
	
	      var event = new CustomEvent(id, { 'detail': anyType });
	
	      this.eventBus[id] = event;
	      document.dispatchEvent(event);
	    }
	  }]);
	
	  return Store;
	}();

	exports.default = Store;

/***/ }

/******/ });
//# sourceMappingURL=External.js.map
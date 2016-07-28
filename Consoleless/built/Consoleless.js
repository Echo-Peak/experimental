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

	var _preLoad = __webpack_require__(1);

	var _preLoad2 = _interopRequireDefault(_preLoad);

	var _onLoad = __webpack_require__(29);

	var _onLoad2 = _interopRequireDefault(_onLoad);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _preLoad2.default)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  console.log();
	  var _displayStyles = document.createElement('style');
	  _displayStyles.setAttribute('info', 'main styles for the UI');
	  var _pannelStyles = document.createElement('style');
	  _pannelStyles.setAttribute('info', 'main styles for the pannel bar that controlls the ui');

	  var settings = document.createElement('div');
	  settings.innerHTML = _settings2.settingsHTML;
	  settings = settings.children[0];

	  var styles = document.createElement('div');
	  styles.innerHTML = _styleEditor.stylesHTML;
	  styles = styles.children[0];

	  var pannel = document.createElement('div');
	  pannel.setAttribute('id', 'Consoleless-pannel');
	  pannel.innerHTML = _pannel.pannelHTML;

	  var display = document.createElement('div');
	  display.innerHTML = _display2.displayHTML;

	  pannel.children[0].appendChild(settings);
	  pannel.children[0].appendChild(styles);
	  var options = {
	    state: (0, _state2.default)(),
	    dom: {
	      pannel: {
	        element: pannel.querySelector('#Consoleless-pannel'),
	        movePannel: pannel.querySelector('#Consoleless-pannel-movePannel'),
	        moveDisplay: pannel.querySelector('#Consoleless-pannel-moveDsiplay'),
	        title: pannel.querySelector('#Consoleless-pannel-title'),
	        settings: pannel.querySelector('#Consoleless-pannel-settings'),
	        styleEditor: pannel.querySelector('#Consoleless-pannel-styleEditor')
	      },
	      settings: {
	        toggle: settings.querySelector('#Consoleless-settings-toggle'),
	        showTitle: settings.querySelector('#Consoleless-settings-showTitle'),
	        animations: settings.querySelector('#Consoleless-settings-animations'),
	        opacity: settings.querySelector('#Consoleless-settings-opacity'),
	        bind: settings.querySelector('#Consoleless-settings-bind'),
	        reset: settings.querySelector('#Consoleless-settings-reset'),
	        element: settings
	      },
	      display: {
	        element: display.querySelector('#Consoleless-display'),
	        inject: display.querySelector('#Consoleless-display-inject'),
	        title: display.querySelector('#Consoleless-display-title'),
	        clear: display.querySelector('#Consoleless-display-clear')
	      },
	      styleEditor: {
	        element: styles,
	        types: {
	          'number': styles.querySelector('#Consoleless-style-number'),
	          'null': styles.querySelector('#Consoleless-style-null'),
	          'function': styles.querySelector('#Consoleless-style-function'),
	          'string': styles.querySelector('#Consoleless-style-string'),
	          'false': styles.querySelector('#Consoleless-style-false'),
	          'true': styles.querySelector('#Consoleless-style-true'),
	          'nan': styles.querySelector('#Consoleless-style-nan'),
	          'array': styles.querySelector('#Consoleless-style-array'),
	          'object': styles.querySelector('#Consoleless-style-object'),
	          'undefined': styles.querySelector('#Consoleless-style-undefined')
	        },
	        setDisplay: styles.querySelector('#Consoleless-style-setDisplay'),
	        setPannel: styles.querySelector('#Consoleless-style-setPannel'),
	        opacity: styles.querySelector('#Consoleless-style-opacity'),
	        applyStyles: styles.querySelector('#Consoleless-style-apply'),
	        display: styles.querySelector('#Consoleless-style-display'),
	        pannel: styles.querySelector('#Consoleless-style-pannel'),
	        displayBackground: styles.querySelector('#Consoleless-style-displayBackground'),
	        consoleDelay: styles.querySelector('#Consoleless-style-consoleDelay')

	      }

	    }
	  };

	  var injectStyles = function injectStyles(options) {
	    _displayStyles.innerHTML = _display.displayStyles;
	    _pannelStyles.innerHTML = _pannelStyles2.pannelStyles + _settings.settingsStyles + _styleEditor2.styleEditorStyles;

	    document.head.appendChild(_pannelStyles);
	    document.head.appendChild(_displayStyles);
	  };

	  injectStyles(options);
	  _prototype.Private.ready = options;
	};

	var _prototype = __webpack_require__(2);

	var _display = __webpack_require__(21);

	var _pannelStyles2 = __webpack_require__(22);

	var _settings = __webpack_require__(23);

	var _settings2 = __webpack_require__(24);

	var _styleEditor = __webpack_require__(25);

	var _styleEditor2 = __webpack_require__(26);

	var _pannel = __webpack_require__(27);

	var _display2 = __webpack_require__(28);

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Private = exports.consoleless = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	var _update = __webpack_require__(5);

	var _update2 = _interopRequireDefault(_update);

	var _log = __webpack_require__(6);

	var _log2 = _interopRequireDefault(_log);

	var _error = __webpack_require__(9);

	var _error2 = _interopRequireDefault(_error);

	var _info = __webpack_require__(10);

	var _info2 = _interopRequireDefault(_info);

	var _warn = __webpack_require__(11);

	var _warn2 = _interopRequireDefault(_warn);

	var _render = __webpack_require__(12);

	var _render2 = _interopRequireDefault(_render);

	var _enable = __webpack_require__(13);

	var _enable2 = _interopRequireDefault(_enable);

	var _disable = __webpack_require__(14);

	var _disable2 = _interopRequireDefault(_disable);

	var _bindConsole = __webpack_require__(15);

	var _bindConsole2 = _interopRequireDefault(_bindConsole);

	var _unbindConsole = __webpack_require__(16);

	var _unbindConsole2 = _interopRequireDefault(_unbindConsole);

	var _reset = __webpack_require__(17);

	var _reset2 = _interopRequireDefault(_reset);

	var _clear = __webpack_require__(18);

	var _clear2 = _interopRequireDefault(_clear);

	var _enableAnimations = __webpack_require__(19);

	var _enableAnimations2 = _interopRequireDefault(_enableAnimations);

	var _disableAnimations = __webpack_require__(20);

	var _disableAnimations2 = _interopRequireDefault(_disableAnimations);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Consoleless = function () {
	  function Consoleless() {
	    _classCallCheck(this, Consoleless);

	    Consoleless.context = this;
	    Consoleless.que = [];
	    this.consoleDefaults = {
	      log: console.log,
	      info: console.info,
	      warn: console.warn,
	      error: console.error
	    };
	    this.update = _update2.default;
	    this.allowAnimations = false;
	    this.log = _log2.default;
	    this.warn = _warn2.default;
	    this.error = _error2.default;
	    this.info = _info2.default;
	    this.destroy = null;
	    this.enable = _enable2.default;
	    this.disable = _disable2.default;
	    this.bindConsole = _bindConsole2.default;
	    this.unbindConsole = _unbindConsole2.default;
	    this.reset = _reset2.default;
	    this.render = _render2.default;
	    this.enableAnimations = _enableAnimations2.default;
	    this.disableAnimations = _disableAnimations2.default;
	    this.que = [];
	    this.state = (0, _state2.default)();
	    this.delay = this.state.delay;
	    this.clear = _clear2.default;
	  }

	  _createClass(Consoleless, [{
	    key: 'saveDOMhere',
	    value: function saveDOMhere(DOM) {
	      this.DOM = DOM.ready.dom;
	    }
	  }]);

	  return Consoleless;
	}();

	var consoleless = new Consoleless();
	var Private = Consoleless.Private = {};
	exports.consoleless = consoleless;
	exports.Private = Private;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = State;
	function State() {
	  //sets up local storage states
	  //FOO
	  var defaultState = {
	    enabled: true,
	    opacity: 1,
	    bindConsole: false,
	    animations: true,
	    delay: 5000,
	    animationSpeed: 0.5,
	    pannel: {
	      pos: [800, 0],

	      width: 600,
	      height: 40,
	      showTitle: true,
	      background: 'rgb(53, 131, 56)'
	    },
	    display: {
	      pos: [0, 0],
	      width: 700,
	      height: 400,
	      background: 'rgb(224, 224, 224)'
	    },
	    types: {
	      'number': 'blue',
	      'string': 'green',
	      'null': '#FF8100',
	      'array': 'red',
	      'object': 'purple',
	      'false': '#FF5858',
	      'true': '#1E82FF',
	      'nan': 'purple',
	      'function': 'purple',
	      'emptyString': 'rgb(213, 128, 255)',
	      'undefined': '#FF8100'
	    }

	  };

	  if (!localStorage['Consoleless'] || localStorage['Consoleless'] == null || localStorage['Consoleless'] == undefined) {

	    localStorage['Consoleless'] = JSON.stringify(defaultState);

	    return defaultState;
	  } else {

	    return JSON.parse(localStorage['Consoleless']);
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (newState) {
	  localStorage['Consoleless'] = JSON.stringify(newState);
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (execCallback) {

	  if (typeof execCallback === 'function') {
	    execCallback();
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    var context = Consoleless || Consoleless.context;

	    var log = document.createElement('li');
	    log.setAttribute('class', 'Consoleless-display-log');

	    var clean = [];

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }

	    args.forEach(function (arg, i, arrayLength) {
	        var newSpan = document.createElement('span');

	        clean.push((0, _parser2.default)(arg, newSpan));
	    });
	    log.innerHTML = clean;
	    clearInterval(context.destroy);
	    context.render(log);
	};

	var _parser = __webpack_require__(7);

	var _parser2 = _interopRequireDefault(_parser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = function (arg, newSpan) {
	  var getState = (0, _state2.default)();

	  if (typeof arg === 'number') {
	    newSpan.setAttribute('class', 'Consoleless-display-number');

	    if (isNaN(arg)) {
	      newSpan.setAttribute('style', 'color:' + getState.types['nan']);
	      newSpan.innerHTML = 'NaN';
	      return newSpan.outerHTML;
	    } else {
	      newSpan.setAttribute('style', 'color:' + getState.types['number']);
	      newSpan.innerHTML = arg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	      return newSpan.outerHTML;
	    }
	  }
	  if (Array.isArray(arg)) {
	    var buildArray = '';
	    arg.forEach(function (item) {
	      var arraySpan = document.createElement('span');
	      if (typeof item === 'number' || isNaN(item)) {
	        arraySpan.setAttribute('style', 'color:' + getState.types['number']);
	        arraySpan.setAttribute('class', 'Consoleless-display-number');
	        arraySpan.innerHTML = item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	      }
	      if (item === null) {
	        arraySpan.setAttribute('style', 'color:' + getState.types['null']);
	        arraySpan.setAttribute('class', 'Consoleless-display-null');
	        arraySpan.innerHTML = 'Null';
	      }
	      if (item === undefined) {
	        arraySpan.setAttribute('style', 'color:' + getState.types['undefined']);
	        arraySpan.setAttribute('class', 'Consoleless-display-undefined');
	        arraySpan.innerHTML = 'Undefined';
	      }
	      if (typeof item === 'function') {
	        arraySpan.setAttribute('style', 'color:' + getState.types['function']);
	        arraySpan.setAttribute('class', 'Consoleless-display-function');
	        arraySpan.innerHTML = '[ Function ]';
	      }

	      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && item !== null) {
	        arraySpan.setAttribute('style', 'color:' + getState.types['object']);
	        arraySpan.setAttribute('class', 'Consoleless-display-object');
	        arraySpan.innerHTML = JSON.stringify(item, null, 2);
	      }
	      if (typeof item === 'string') {
	        arraySpan.setAttribute('style', 'color:' + getState.types['string']);
	        arraySpan.setAttribute('class', 'Consoleless-display-string');
	        arraySpan.innerHTML = item;
	      }
	      if (item === false) {
	        arraySpan.setAttribute('style', 'color:' + getState.types['false']);
	        arraySpan.setAttribute('class', 'Consoleless-display-false');
	        arraySpan.innerHTML = 'False';
	      }
	      if (item === true) {
	        arraySpan.setAttribute('style', 'color:' + getState.types['true']);
	        arraySpan.setAttribute('class', 'Consoleless-display-true');
	        arraySpan.innerHTML = 'True';
	      }

	      buildArray += arraySpan.outerHTML + ',';
	    });
	    var built = '[' + buildArray.replace(/,$/, '') + ']';
	    return built;
	  }
	  if (typeof arg === 'string') {
	    newSpan.setAttribute('class', 'Consoleless-display-string');
	    newSpan.setAttribute('style', 'color:' + getState.types['string']);
	    if (arg.length) {
	      newSpan.innerHTML = arg;
	    } else {
	      newSpan.innerHTM = '[Empty-String]';
	    }
	    return newSpan.outerHTML;
	  }
	  if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null && Array.isArray(arg) === false) {
	    var build = '';
	    var finaleObj = {};
	    newSpan.setAttribute('class', 'Consoleless-display-object');
	    newSpan.setAttribute('style', 'color:' + getState.types['object']);
	    var toKeys = Object.keys(arg);
	    toKeys.forEach(function (key, index, array) {
	      var objectSpan = document.createElement('span');

	      if (typeof arg[key] == 'function') {
	        objectSpan.setAttribute('style', 'color:' + getState.types['function']);
	        objectSpan.setAttribute('class', 'Consoleless-display-function');
	        objectSpan.innerHTML = key + ':' + '[ Function ]' + ',';
	      }
	      if (typeof arg[key] == 'number' || isNaN(arg[key])) {
	        objectSpan.setAttribute('style', 'color:' + getState.types['number']);
	        objectSpan.setAttribute('class', 'Consoleless-display-number');
	        objectSpan.innerHTML = key + ':' + arg[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ',';
	      }
	      if (typeof arg[key] == 'string') {
	        objectSpan.setAttribute('style', 'color:' + getState.types['string']);
	        objectSpan.setAttribute('class', 'Consoleless-display-string');
	        objectSpan.innerHTML = key + ':' + arg[key] + ',';
	      }
	      if (arg[key] === false) {
	        objectSpan.setAttribute('style', 'color:' + getState.types['false']);
	        objectSpan.setAttribute('class', 'Consoleless-display-false');
	        objectSpan.innerHTML = key + ':False' + ',';
	      }
	      if (arg[key] === true) {
	        objectSpan.setAttribute('style', 'color:' + getState.types['true']);
	        objectSpan.setAttribute('class', 'Consoleless-display-true');
	        objectSpan.innerHTML = key + ':True' + ',';
	      }
	      if (arg[key] === undefined || arg[key] === 'undefined') {
	        objectSpan.setAttribute('style', 'color:' + getState.types['undefined']);
	        objectSpan.setAttribute('class', 'Consoleless-display-undefined');
	        objectSpan.innerHTML = key + ':' + arg[key] + ',';
	      }
	      if (arg[key] === null) {
	        objectSpan.setAttribute('style', 'color:' + getState.types['null']);
	        objectSpan.setAttribute('class', 'Consoleless-display-null');
	        objectSpan.innerHTML = key + ':Null' + ',';
	      }

	      build += objectSpan.outerHTML;
	    });
	    var deletetrailingComa = build.lastIndexOf(',');
	    var built = '{' + build.substr(0, deletetrailingComa) + '</span>' + '}';
	    console.log(built, build);
	    return built;
	  }
	  if (arg === null) {
	    newSpan.setAttribute('class', 'Consoleless-display-null');
	    newSpan.setAttribute('style', 'color:' + getState.types['null']);
	    newSpan.innerHTML = 'Null';
	    return newSpan.outerHTML;
	  }
	  if (arg === false) {
	    newSpan.setAttribute('class', 'Consoleless-display-false');
	    newSpan.setAttribute('style', 'color:' + getState.types['false']);
	    newSpan.innerHTML = 'False';
	    return newSpan.outerHTML;
	  }
	  if (arg === true) {
	    newSpan.setAttribute('class', 'Consoleless-display-true');
	    newSpan.setAttribute('style', 'color:' + getState.types['true']);
	    newSpan.innerHTML = 'False';
	    return newSpan.outerHTML;
	  }
	  if (typeof arg === 'function') {
	    newSpan.setAttribute('class', 'Consoleless-display-function');
	    newSpan.setAttribute('style', 'color:' + getState.types['function']);
	    var fnName = arg.toString().match(/^\bfunction ([a-z0-9]+)/i);

	    if (fnName === null) {
	      fnName = '[ Anonymous ] ';
	      newSpan.innerHTML = fnName + 'Function';
	      return newSpan.outerHTML;
	    } else {
	      fnName = '[ ' + fnName[1] + ' ] ';
	      newSpan.innerHTML = fnName + 'Function';
	      return newSpan.outerHTML;
	    }
	  }

	  if (arg === undefined) {
	    newSpan.setAttribute('class', 'Consoleless-display-undefined');
	    newSpan.setAttribute('style', 'color:' + getState.types['undefined']);
	    newSpan.innerHTML = 'Undefined';
	    return newSpan.outerHTML;
	  }
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	var _checkType = __webpack_require__(8);

	var _checkType2 = _interopRequireDefault(_checkType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = function (sometype) {

	  return {
	    'object': function object() {
	      if ((typeof sometype === 'undefined' ? 'undefined' : _typeof(sometype)) === 'object' && sometype !== null && Array.isArray(sometype) === false) {
	        return true;
	      }
	      return false;
	    },
	    'null': function _null() {
	      if (sometype === null) {
	        return true;
	      }
	      return false;
	    },
	    'number': function number() {
	      if (typeof sometype === 'number' || isNaN(sometype)) {
	        return true;
	      }
	      return false;
	    },
	    'string': function string() {
	      if (typeof sometype === 'string' && sometype.length) {
	        return true;
	      }
	      return false;
	    },
	    'false': function _false() {
	      if (sometype === false) {
	        return true;
	      }
	      return false;
	    },
	    'true': function _true() {
	      if (sometype === true) {
	        return true;
	      }
	      return false;
	    },
	    'undefined': function (_undefined) {
	      function undefined() {
	        return _undefined.apply(this, arguments);
	      }

	      undefined.toString = function () {
	        return _undefined.toString();
	      };

	      return undefined;
	    }(function () {
	      if (sometype === undefined || sometype === 'undefined') {
	        return true;
	      }
	      return false;
	    }),
	    'array': function array() {
	      if (Array.isArray(sometype)) {
	        return true;
	      }
	      return false;
	    },

	    'function': function _function() {
	      if (typeof sometype === 'function') {
	        return true;
	      }
	      return false;
	    }

	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {

	    var context = Consoleless || Consoleless.context;

	    var error = document.createElement('li');
	    error.setAttribute('class', 'Consoleless-display-error');

	    var clean = [];

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }

	    args.forEach(function (arg, i, arrayLength) {
	        var newSpan = document.createElement('span');

	        clean.push((0, _parser2.default)(arg, newSpan));
	    });
	    error.innerHTML = clean;
	    clearInterval(context.destroy);
	    context.render(error);
	};

	var _parser = __webpack_require__(7);

	var _parser2 = _interopRequireDefault(_parser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {

	    var context = Consoleless || Consoleless.context;

	    var info = document.createElement('li');
	    info.setAttribute('class', 'Consoleless-display-info');

	    var clean = [];

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }

	    args.forEach(function (arg, i, arrayLength) {
	        var newSpan = document.createElement('span');

	        clean.push((0, _parser2.default)(arg, newSpan));
	    });
	    info.innerHTML = clean;
	    clearInterval(context.destroy);
	    context.render(info);
	};

	var _parser = __webpack_require__(7);

	var _parser2 = _interopRequireDefault(_parser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {

	    var context = Consoleless || Consoleless.context;

	    var warn = document.createElement('li');
	    warn.setAttribute('class', 'Consoleless-display-warn');

	    var clean = [];

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }

	    args.forEach(function (arg, i, arrayLength) {
	        var newSpan = document.createElement('span');

	        clean.push((0, _parser2.default)(arg, newSpan));
	    });
	    warn.innerHTML = clean;
	    clearInterval(context.destroy);
	    context.render(warn);
	};

	var _parser = __webpack_require__(7);

	var _parser2 = _interopRequireDefault(_parser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (html) {
	  var context = Consoleless || Consoleless.context;
	  var injectToDisplay = this.DOM.display.inject;
	  var elm = injectToDisplay.appendChild(html);
	  this.DOM.display.title.style.display = 'none';
	  context.que.push(elm);
	  this.DOM.display.element.scrollTop = this.DOM.display.inject.offsetHeight;
	  context.destroy = setInterval(function () {

	    var newState = (0, _state2.default)();
	    if (context.que.length) {

	      if (newState.animations) {

	        context.que[0].className = 'Consoleless-display-fade';
	      } else {
	        context.que[0].style.display = 'none';
	      }

	      context.que.splice(0, 1);
	      if (context.que.length === 0) {
	        var cleanup = injectToDisplay.innerHTML = '';
	        context.DOM.display.title.style.display = 'inline-block';
	        clearInterval(context.destroy);
	      }
	    }
	  }, context.delay);
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var newState = (0, _state2.default)();
	  this.DOM.display.element.classList.remove('Consoleless-disabled');
	  this.DOM.pannel.element.classList.remove('Consoleless-disabled');

	  if (newState.bindConsole) {
	    console.log = this.log;
	    console.warn = this.warn;
	    console.info = this.info;
	    console.error = this.error;
	  }

	  newState.enabled = true;
	  (0, _mutateLs2.default)(newState);
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var newState = (0, _state2.default)();
	  if (newState.bindConsole) {
	    console.log = this.defaultLog;
	    console.warn = this.defaultWarn;
	    console.info = this.defaultInfo;
	    console.error = this.defaultError;
	  }
	  newState.enabled = false;
	  (0, _mutateLs2.default)(newState);
	  this.DOM.display.element.classList.add('Consoleless-disabled');
	  this.DOM.pannel.element.classList.add('Consoleless-disabled');
	  console.warn('Consoleless is disabled: Use Consoleless.enable() to enable Consoleless');
	  this.clear();
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var newState = (0, _state2.default)();
	  newState.bindConsole = true;
	  (0, _mutateLs2.default)(newState);
	  console.log = this.log;
	  console.warn = this.warn;
	  console.error = this.error;
	  console.info = this.info;
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  var newState = (0, _state2.default)();
	  newState.bindConsole = false;
	  (0, _mutateLs2.default)(newState);
	  console.log = this.consoleDefaults.log;
	  console.warn = this.consoleDefaults.warn;
	  console.error = this.consoleDefaults.error;
	  console.info = this.consoleDefaults.info;
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var _this = this;

	  delete localStorage['Consoleless'];

	  var getDefaltStates = (0, _state2.default)();
	  this.update(function () {

	    _this.DOM.display.element.style.top = getDefaltStates.display.pos[0] + 'px';
	    _this.DOM.display.element.style.left = getDefaltStates.display.pos[1] + 'px';
	    _this.DOM.display.element.style.width = getDefaltStates.display.width + 'px';
	    _this.DOM.display.element.style.height = getDefaltStates.display.height + 'px';
	    _this.DOM.display.element.style.background = getDefaltStates.display.background;

	    _this.DOM.pannel.element.style.top = getDefaltStates.pannel.pos[0] + 'px';
	    _this.DOM.pannel.element.style.left = getDefaltStates.pannel.pos[1] + 'px';
	    _this.DOM.pannel.element.style.width = getDefaltStates.pannel.width + 'px';
	    _this.DOM.pannel.element.style.height = getDefaltStates.pannel.height + 'px';

	    _this.DOM.pannel.element.style.background = getDefaltStates.pannel.background;
	  });
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  this.que = [];
	  this.DOM.display.inject.innerHTML = '';

	  clearInterval(this.destroy);
	  this.DOM.display.title.style.display = 'inline-block';
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var newState = (0, _state2.default)();
	  newState.animations = true;
	  (0, _mutateLs2.default)(newState);
	  this.allowAnimations = true;
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var newState = (0, _state2.default)();
	  newState.animations = false;
	  (0, _mutateLs2.default)(newState);
	  this.allowAnimations = false;
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var displayStyles = exports.displayStyles = "\n.Consoleless-disabled{\n  display:none; !important\n}\n.Consoleless-display {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 700px;\n  height: 400px;\n  z-index:5812;\n  font-size:15px;\n  font-family:\"Lucida Sans Unicode\";\n  overflow:hidden;\n  box-sizing:border-box;\n  box-shadow:0px 0px 15px rgba(0,0,0,0.2);\n}\n\n.Consoleless-display-pannel{\n  width:inherit;\n  height:25px;\n  box-shadow:0px 2px 10px rgba(0,0,0,0.2);\n  background:inherit;\n  position:absolute;\n  top:0px;\n  z-index:222333;\n}\n\n.Consoleless-display-title{\n\n  margin:30px;\n}\n.Consoleless-display-ui{\n  overflow-y:scroll;\n  width:inherit;\n  height:inherit;\n  position:absolute;\n\n}\n.Consoleless-display-ui::-webkit-scrollbar {\n  width:10px;\n  background:rgba(0,0,0,0.1);\n}\n.Consoleless-display-ui::-webkit-scrollbar-thumb {\n\n  background:rgba(53, 131, 56,1);\n}\n\n\n\n.Consoleless-display > .Consoleless-display-ui > ul{\n\nmargin:0;\nmargin-top:25px;\npadding:0;\noverflow:hidden;\n}\n.Consoleless-display-fade{\n  transition:all .4s;\n  opacity:0;\n  height:0px !important;\n  margin-top:0px !important;\n  padding-bottom:0px !important;\n  min-height:0px !important;\n}\n.Consoleless-display-clear{\npadding:5px 15px;\ncursor:pointer;\nbackground:rgba(53, 131, 56,1);\nborder:none;\nposition:absolute;\nz-index:2;\nright:0px;\ncolor:white;\n}\n\n.Consoleless-display > .Consoleless-display-ui > ul  li{\n\n  box-sizing:border-box;\npadding-left:50px;\nmargin-top:5px;\npadding-bottom:5px;\nposition:relative;\nheight:auto;\nmin-height:40px;\nmax-height:200px;\n}\n\n.Consoleless-display > .Consoleless-display-ui > ul  span{\npadding-left:10px;\npadding-right:10px;\n}\n\n.Consoleless-display-log{\n  background:rgba(255,255,255,0.8);\n  list-style:none;\n  height:40px;\n  border:2px solid rgb(179, 217, 255);\n\n}\n.Consoleless-display-log::before{\n\n\n}\n.Consoleless-display-log::after{\n\n\n\n\n}\n\n.Consoleless-display-warn{\n  border:2px solid rgba(255, 184, 77,0.8);\n  background:white;\n  list-style:none;\n\n}\n.Consoleless-display-warn::before{\nposition: absolute;\ncontent:'';\n  background:rgba(0, 0, 0,0.8);\nheight:50px;\nwidth:50px;\nleft:10px;\nz-index:2;\n background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABhwAAAYcBOqddywAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKVSURBVEiJvZbLaxNRFIe/6UObmsZgBXWsqZYqDWqxI9WWghTxhRRaROnGdxUqjVWKuPIfEKR7cSMouDGuFNzUbcHFlDQJqIho0bTWgoqSR5POdTFNYtJkZjJp+oOBmXvOPedj7uHcgxCCch7tk6+hnP2SEAJbUuUG4AHQDfhxeO/jnYiXGqbGXnZAqhlGpK4AtUAz8Q8hwF9qmCpbyYMHdiBSw8vJAVyIpZuo8sa1AUjO+4DmvNXDwNnKA6hyG3ARqM6z1AEjhHu2VxYA7gJbitj2kZy9UDmAgLcHGACkIh61aPGrqPLu1QcIdTpY+n0PcJt4tgAjVsNa7wOqfAZ4AtQDsG0s156ch4Wn6a9ZYAAl8nZ1AFTZBbxGbzq6Or6u9JtqSr9pwDPh7Lou7XkRMwpt9QjOAYqhh0jkxz0tRQO9ZoHNAVS5EbgNrDf0i3/MX3GjxXzLLbsMAKnmBtBm6hd7v2IncATosw8w3b4LkRrCyp2x+LnQqhMYQZU32QNILdwCPKbJjXUQGCwdINhxCDhv6GNNdcAoU54W6wCJmXUkv98Biv66EtWK0K4VMhTuA2rTcdD8QPEK3qCAqzf7/etVoUL8XzNAH0okaAwQ6nSw+O0lcNQomg1pwCOUyLAxgCoPAo/Rz664nN3QkG2M/JmEv5NmED+AfpRIxjEXQG+5b9Ar11j5rXhuHGbHzXYJ4Llwdl1Kt+jcIqyquwy0mya3Lwk4KUUDxzIpM6ZwtwctPkp2zquUXGixMVTZnQuQ+OIDdloOY37eRsrMj3oN6HPeBCCXE7VEqdTv70//gSFg6xomB9hLNHgiDdBI8TmvUqoGNqdvuYdAK1DSSF2GBBCm2uXP9oF3p9xEp51rCPATJRL9B1+VFqydMo7MAAAAAElFTkSuQmCC);\nbackground-repeat:no-repeat;\n\n}\n\n.Consoleless-display-error{\n  border:2px solid rgba(255, 51, 51,0.8);\n  background:white;\n  list-style:none;\n\n}\n.Consoleless-display-error::before{\n  position: absolute;\n  content:'';\n  height:50px;\n  width:50px;\n  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACNAAAAjQBWr9lrwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAS/SURBVFiFxZdfaFNnGMZ/3zknJm1Z6ibTDqwgrUU3qLKt9sZiMi1qtOKFuKtRtDAUB62KKzh0EaYrVfy3zRWdEenQadkuVgVBh22vZi+8GMpAwspkQqVSl8aQE/P5fbtIk502f3rKhL2X+d7zPM/7fH/eN0Jrzf8ZVqEftZRCtbYuJBarRcpHxvXrI8Ky1GzBVTot2LNnnh4ZeRsp/zauXftdVFamnTliugMqnRY6GGzAtruBeuBPysr2G3fu/CIsy7VdKp2G9vZaPTzcBQSBcebMOWQMDfUJy5LZPCNPcXt7DbZ9BmgCXgeWk0x2q1BopZZSuCbv6Figh4dPApuBN4AaXrz4QgUC67WUOedzArSUQgeDDXp4+HtgpWNNACsYH+9VgcBG58dFyAX79tXqu3e/A0KAx4GzGNs+p4LBHToa9cLkFmgphWpufo94/GugYbozWY1AFJ9vrzEwcNNp4xTyzs4aPTR0EljnIJ+OM0pZ2SHjxo1LBoC+fbuCeLyzBHm2glps+8SkjVO2wyV5FqeKZLJTbdu2NEMWjXqAeZOLpSIr4rRqalqrpTRz5Lt3v6OHhs4C60uQO3H8mOZrBoDYuTNGeXkEGCVj0UwfLyad/kYFAiEt5RwOHKjV9+6dANZQ5GpPCxv4kerq+7lrqCcmvKqlpZVEIgy85QJEA39QVfUTo6MNwKpZkPeKxsaDnDr1ZMo74BDRDVS6FPESMJl5+/LIDY8n/yHSUlpqzZodk05UuQR2EzameZZgMGx2dcWzP+YJgLzteBUibKCXZcs+M3t7x5wLBa+c8PtTRn//JSoqwrg7mDOSi8bGgyISGZu+WNCBbOhYzKtCoa2kUkeARczeiTimeZ66ui4RiYwZnvzbWezRyairrEwZg4NX8fmOAolZkissK0Jz82Gzt7cg+YwCALTWL5k79y8gPVNungC//5ERDidLJZUUkOuOo6MdwNxZCrAYH9+lAoF1pRpY0TOgpRQqEGiYbM2lekSpyDSeioqw0d9/Sfj9qekJBUFfETlkG08iEVYtLa06FvPmJZSYiP4ruTMyTni9+43BwatFJyItpdBbtqzAtnteITlknUiljqjVqz90OjFlIlKBQANPnnwLrHBJHgd+BR7jrosuIpU6pjZvbtUTE96cAC2lUJs2veuw3c2DE0OIU6KtbSs+3yfAiEsR2TPxkZbSkxFw61Y5T59+CryPu8pthDhNff0xY9eux8bAwHW83kO4nyeqSCQ6VShUlyF78MALLHBJHkOIbuPy5aPmhQtxAGFZ0hgc/AGf72Mg6lKEH8uqzExEHR0xyssvuKggNln5cbFkyZQ7LSzrpTEwcBOfb68LEZmJaP78+0bu40jkGmVl4UkRJcmzleeVZVnShYhsdzwszp+fmDoRPXzoVdu3byWVOgG8yb+HcQyfr5vq6h7zypXnJSrL4EhpqqamD0ine4DFDpznCHGOpUtz3bHwRBQMbieZ/JzMMBLD5/vSuHjxq+m2zyBCqEBgI7Z9HKgBUgjRQ339YaeDhSeiaNSr2trWkkisoqLiN5Yv/9k8c2a27TjjxIYNjTx7th6P5zELF/aZfX3jzpyizUil00IIYQBqNn9KC+AghDCL4fwDk9ZLA3RfuYEAAAAASUVORK5CYII=);\nbackground-repeat:no-repeat;\nleft:10px;\n}\n.Consoleless-display-info{\n  background:rgb(255,255,255);\n  list-style:none;\n  border:2px solid rgb(26, 140, 255);\n}\n\n.Consoleless-display-info::before{\n  position: absolute;\n  content:'';\n  height:50px;\n  width:50px;\n  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAfCAYAAAAIjIbwAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2gAAAdoBhaJl+wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHNSURBVEiJ7ZW/a1NRFMc/974kkjT2B9SSIaF0EBftWNKlUCi0DqXQQbMLEohDN3EQ7Z8SLPgHtNQWba3YIoKDWytIIaASM2ibNBGDecchiZW8+340xrp44E3nvM+573vO+14lIvQ6Ql7JYo3+7BZXgWhHSq4NU1hOc6gVjlO5Qm1BLb0gV65zF7jQmd/7xBtgHjg6y0lVqcYo0A8oQ34UiJmg2gOKC8w3/KBdhR/U9skZV8dVUxGRZFztfjhhCugzlOwAx6Z3ldee2kIIGDI0F6CiFdUzQ7uNvzIoo6a2YAVo2NDKPEgHtFhlIPecO1+/k8J9TyUR4/XKHI+04ocvNLvNeLnOPcwTP21eYwZYBz535kyfGAEsL6BfnQn6x+vggI4PUwQKQBmcenUFfZjmXSpO5lKUDPCqJ1CtaORnefv4OpvAPl3I8U9c6j+0R9CGLdD8772aKsBq2OLwB4ef2kLs1lNuRMOMHXzhJnDFBVpNJ1gpfeN9Ms7a/Qk5sLQyQxdWmazU2QAu4n+bSuvJP1vkdtuxHC6lmnd5JACwVY4CBn+vPx/nt4UyUAPCARlC01N/6WgaVCTzhOmQZoQAEohQvzwkLx9M8LE9qJ8874nXvRzn0wAAAABJRU5ErkJggg==);\n  background-repeat:no-repeat;\n  left:10px;\n}\n.Consoleless-display-number{\n  color:blue;\n}\n.Consoleless-display-string{\n  color:green;\n}\n.Consoleless-display-null{\n  color:#FF8100;\n  font-weight:bold\n}\n\n.Consoleless-display-array{\n  color:red;\n}\n.Consoleless-display-object{\n  color:purple;\n}\n.Consoleless-display-true{\n  color:#1E82FF;\n  font-weight:bold\n}\n.Consoleless-display-false{\n  color:#FF5858;\n  font-weight:bold\n}\n.Consoleless-display-nan{\n  color:purple;\n  font-weight:bold\n}\n.Consoleless-display-function{\n  color:purple;\n}\n.Consoleless-display-special{\n  color:purple;\n}\n.Consoleless-display-emptyString{\n  color:rgb(213, 128, 255);\n}\n";

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var pannelStyles = exports.pannelStyles = "\n.Consoleless-disabled{\n  display:none; !important\n}\n.Consoleless-ui-bar {\n  width: 600px;\n  height: 40px;\n  position: fixed;\n  z-index:5813;\n  background: rgb(53, 131, 56);\n  box-shadow:0px 0px 20px rgba(53, 131, 56,0.8);\n}\n.Consoleless-ui-bar .Consoleless.bar {\n\n  width: inherit;\n  height: inherit;\n  display: flex;\n  flex-direction: row;\n\n}\n.Consoleless-ui-bar .Consoleless.bar > .move {\n  flex: 1;\n  order: 1;\n  display: block;\n  text-align: center;\n  transition: all .2s;\nbackground:rgb(53, 131, 56);\n\n  cursor: pointer;\n  border-right: 1px solid white;\n}\n.Consoleless-ui-bar .Consoleless.bar > .move:hover {\n  -webkit-filter: brightness(120%);\n}\n.Consoleless-ui-bar .Consoleless.bar > .move > i {\n  width:25px;\n  height:25px;\n  display:inline-block;\n  background-repeat:no-repeat;\n  margin-top:5px;\n  -webkit-filter:invert();\n  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAMXAAADFwBSZ1fYAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFjSURBVEiJ1ZWxTkIxFIa/X+AxnGAgcTCERd4AEyBEFwZ3N8DNxBdwM8rkGxgHX8PByRgTA6MJm4mJkzAcB0ssVbktyGCTk6Y995yv/Xvai5kRa0ATeACaSXEJgBbwDpjrW38KCQCWCoqVKAT4oEzpYiCjXwAzG2XlyJPdDoAaUAYOvflL4Am4zcyQcPD1YAf12NiNiJ2s3OYgkhqS7iQVl0kmqejiG3MOT442MOFTis4ycgEd55sA7bmDl7QHXAEFxy5J2gkWWg7Hkl6DuZLrC8C1pI6Z3QDsA1MWl+myNnX5Ga8JMLNxzum3y/raSd7MBpJywJnnuOD7JdsGjr3xKXAffFMDut74yMwGfmX0+driqtVlQP/Ht8ut4gWoLAmpuPhu8lP/L56VzFdY0iawBVQDV1USwKOZPS9MEiHTkMX3YPgXcp2v6I/+x/vl7Vs/Kj6hukJQFCAJ4kA94A3opcR9ADC1gAmdEmAvAAAAAElFTkSuQmCC)\n}\n.Consoleless-ui-bar .Consoleless.bar > .title {\n  flex: 2;\n  order: 2;\n  border-right: 1px solid white;\n}\n.Consoleless-ui-bar .Consoleless.bar > .title > h2 {\n  padding-left: 20px;\n  color: white;\n  line-height: 40px;\n  margin: 0;\n  font-family: 'Lucida Sans Unicode';\n}\n.Consoleless-ui-bar .Consoleless.bar > .move-ui {\n  flex: 1;\n  order: 3;\n  display: block;\n  text-align: center;\n  border-right: 1px solid white;\nbackground:rgb(53, 131, 56);\n  transition: all .2s;\n  cursor: pointer;\n}\n.Consoleless-ui-bar .Consoleless.bar > .move-ui:hover {\n  -webkit-filter: brightness(120%);\n}\n.Consoleless-ui-bar .Consoleless.bar > .move-ui > i {\n  width:25px;\n  height:25px;\n  display:inline-block;\n  background-repeat:no-repeat;\n    margin-top:5px;\n    -webkit-filter:invert();\n  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAMXAAADFwBSZ1fYAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFjSURBVEiJ1ZWxTkIxFIa/X+AxnGAgcTCERd4AEyBEFwZ3N8DNxBdwM8rkGxgHX8PByRgTA6MJm4mJkzAcB0ssVbktyGCTk6Y995yv/Xvai5kRa0ATeACaSXEJgBbwDpjrW38KCQCWCoqVKAT4oEzpYiCjXwAzG2XlyJPdDoAaUAYOvflL4Am4zcyQcPD1YAf12NiNiJ2s3OYgkhqS7iQVl0kmqejiG3MOT442MOFTis4ycgEd55sA7bmDl7QHXAEFxy5J2gkWWg7Hkl6DuZLrC8C1pI6Z3QDsA1MWl+myNnX5Ga8JMLNxzum3y/raSd7MBpJywJnnuOD7JdsGjr3xKXAffFMDut74yMwGfmX0+driqtVlQP/Ht8ut4gWoLAmpuPhu8lP/L56VzFdY0iawBVQDV1USwKOZPS9MEiHTkMX3YPgXcp2v6I/+x/vl7Vs/Kj6hukJQFCAJ4kA94A3opcR9ADC1gAmdEmAvAAAAAElFTkSuQmCC)\n}\n.Consoleless-ui-bar .Consoleless.bar > .settings-config {\n  flex: 1;\n  order: 4;\n  display: block;\n  text-align: center;\n  border-right: 1px solid white;\nbackground:rgb(53, 131, 56);\n  transition: all .2s;\n  cursor: pointer;\n}\n.Consoleless-ui-bar .Consoleless.bar > .settings-config:hover {\n  -webkit-filter: brightness(120%);\n}\n.Consoleless-ui-bar .Consoleless.bar > .settings-config > i:nth-child(1) {\n  margin-right: 10px;\n  width:25px;\n  height:25px;\n  display:inline-block;\n  background-repeat:no-repeat;\n  margin-top:5px;\n  -webkit-filter:invert();\n  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOawAADmsBVP4NBgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHkSURBVEiJrdaxa1RBEMfxz4p3KIgcmqhIFCySEAtFlFQBi1RCCkWwsPcfEEs7EYONhZ2gooWVRSwUG3vtAtrENIIoaERjEhExuhbvnW7u9t09yQ0MBzO/me/bt7vzLsQY1bEQwmMcT0ILMcaTtWrrQEIIO/E1k9oRY/zWr35LpuFwCOFmCGE8CY936kobTepGQwh3QggHu1Qxxr+OI3iHiBWcxTZcL2OdfhXbcR6rZWwR+zb0TQCH8D7TaLkC0Pa1TOwVducgj/o0+1+/nYNM4eeAAN9xrAtSgi4NCHIh7bvhCIcQduEDtuq2JczhNcZwGsMZ3Q/sjTH+O/IlpIkJ3Kh4sqcY6lj1UBnP6a+keniO9R5Lf4tWCkiKW2W+qvYznqjxfmdzgAQ0269H143P2OIm891jJWMHNpkHb/Re7ks0K15Vs8z3ql9qi/coLuO9CuEtNDoAjTKe0z/EGcWJbXQ+2X7Vt34eFzFT/s5X6NYxkh2QJWQav/osv46fq5rCI4rbPoixsoKxHOTugABtn8tBDuPjgACrmKzak6OKURDxG9cUn9j7Fc0eKD52l5O9XMN05caXoBN4gZkkNlkBmUo0p/AME5096/5baeFLJjUcY/zUr77OWBFjXFZM29QW6gDgD0L4Xu6EOeKFAAAAAElFTkSuQmCC);\n}\n.Consoleless-ui-bar .Consoleless.bar > .settings-config > i:nth-child(2) {\n  margin-left: 10px;\n  width:25px;\n  height:25px;\n  display:inline-block;\n  background-repeat:no-repeat;\n  margin-top:5px;\n  -webkit-filter:invert();\n  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOawAADmsBVP4NBgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEaSURBVEiJtdS7LgRRHAfgr3ArvIBOPAIRFg0RQZRa77HuXoe4lcp9BlqdUoNCSCRHMyOzs7OzZy6KXzMn5/dl/mfOCCFoGszjEldYHFhvAdjEJ0KSL+y0hmArB2Sh3cYIpvFaAKT5xl5tBAsYwyo+RkDrdYDtZBzXkVCvLpAW3GAcKyXQU13gMQECbhOog/cC5KAu0MFLpugugZZzUDfq4COANPcJtIS3FBiJVACy0ARmoi5jDSDN/kBXy0C3sK9F4HDoVP4b6EMaAEcjv9AC4AcbkcBx5D3rA54jiisBKZICD5jCRQRwUvGf97dxLvOwDKoE5JE1zGKyBDqtCuSRNMuZxV5ToBTJvclZXWAYks95EyAGaQyEEPwCEwKzkCPTYMkAAAAASUVORK5CYII=);\n}\n.Consoleless-ui-bar .Consoleless.bar > .settings-config > i {\n\n}\n.Consoleless-ui-bar .Consoleless.bar > .enable {\n  flex: 1;\n  order: 4;\n\n  display: block;\n  text-align: center;\n}\n.Consoleless-ui-bar .Consoleless.bar > .enable > h4 {\n  cursor: pointer;\n  line-height: 40px;\n  font-size: 20px;\n  color: white;\n  font-family: 'Lucida Sans Unicode';\n  margin: 0;\n}\n\n";

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var settingsStyles = exports.settingsStyles = "\n.Consoleless-settings {\n  position: relative;\n  background: rgba(53, 131, 56, 0.8);\n  display: inline-block;\n  top:-310px;\n  left:300px;\n  width: 260px;\n  height: 230px;\n  box-shadow: inset 0px 0px 10px #358338;\n  padding: 20px;\n}\n.Consoleless-settings > .Consoleless-settings-ui h3 {\n  margin: 0;\n  font-family: \"Lucida Sans Unicode\";\n  color: white;\n}\n.Consoleless-settings > .Consoleless-settings-ui > div {\n  margin: 10px;\n}\n.Consoleless-settings > .Consoleless-settings-ui > div > label {\n  color: white;\n  font-family: \"Lucida Sans Unicode\";\n}\n.Consoleless-settings > .Consoleless-settings-ui > div > input {\n  -webkit-appearance: none;\n  position: absolute;\n  left: 200px;\n  width: 25px;\n  height: 25px;\n  background: #FF3333;\n  cursor: pointer;\n  transition: all .4s;\n  outline: none;\n}\n.Consoleless-settings > .Consoleless-settings-ui > div > input:checked {\n  background: #22BF22;\n  border-radius: 50px;\n}\n.Consoleless-settings > .Consoleless-settings-ui > div > button {\n  font-family: \"Lucida Sans Unicode\";\n  cursor: pointer;\n}\n\n";

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var settingsHTML = exports.settingsHTML = "\n<div class=\"Consoleless-settings\" id='Consoleless-settings'>\n  <div class=\"Consoleless-settings-ui\">\n    <h3>Settings</h3>\n    <div>\n      <label for=\"Consoleless-settings-toggle\">Enable</label>\n      <input type=\"checkbox\" name=\"Consoleless-settings-toggle\" id=\"Consoleless-settings-toggle\"/>\n    </div>\n    <div >\n      <label for=\"Consoleless-settings-showTitle\">Show title</label>\n      <input type=\"checkbox\" name=\"Consoleless-settings-showTitle\" id=\"Consoleless-settings-showTitle\"/>\n    </div>\n    <div >\n      <label for=\"Consoleless-settings-animations\">Animations</label>\n      <input type=\"checkbox\" name=\"Consoleless-settings-animations\" id=\"Consoleless-settings-animations\"/>\n    </div>\n\n    <div >\n      <label for=\"Consoleless-settings-bind\">Bind to console</label>\n      <input type=\"checkbox\" name=\"Consoleless-settings-bind\" id=\"Consoleless-settings-bind\"/>\n    </div>\n    <div id=\"Consoleless-settings-reset\">\n      <button id=\"Consoleless-settings-reset\" >Reset settings</button>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var stylesHTML = exports.stylesHTML = "\n\n<div id=\"Consoleless-style-editor\" class=\"Consoleless-style-editor\">\n  <div class=\"Consoleless-style-editor-ui\">\n    <ul>\n      <h3>Consoleless UI</h3>\n      <li>Display\n        <div id=\"Consoleless-style-display\">\n          <input type=\"number\" placeholder=\"Width: 700px\" style=\"width:100px\" min=\"700\" max=\"1900\" step='25'/>\n          <input type=\"number\" placeholder=\"Height: 300px\" style=\"width:100px\" min=\"400\" max=\"1050\" step='25'/>\n          <button style=\"cursor:pointer\" id=\"Consoleless-style-setDisplay\">Set</button>\n        </div>\n      </li>\n      <li>Pannel\n        <div id=\"Consoleless-style-pannel\">\n          <input type=\"number\" placeholder=\"Width: 700px\" style=\"width:100px\" min=\"600\" max=\"1900\" step='25'/>\n          <input type=\"number\" placeholder=\"Height: 40px\" style=\"width:100px\" min=\"40\" max=\"80\" step='5'/>\n          <button style=\"cursor:pointer\" id=\"Consoleless-style-setPannel\">Set    </button>\n        </div>\n      </li>\n      <li id=\"Consoleless-style-displayBackground\">Display background\n        <input type=\"text\" placeholder=\"RGB\"/>\n      </li>\n      <li id=\"Consoleless-style-opacity\">Opacity\n        <input type=\"number\" placeholder=\"Number\" min='0.1' max='1' step='0.1'/>\n      </li>\n      <li id=\"Consoleless-style-consoleDelay\">Console delay\n        <input type=\"number\" placeholder=\"Number\" min='2000' max='60000' style='width:80px' step='1000'/>\n      </li>\n    </ul>\n    <ul>\n      <h3>Types colors</h3>\n      <li id=\"Consoleless-style-number\">Number\n        <input type=\"text\" placeholder=\"RGB or HEX \"/>\n      </li>\n      <li id=\"Consoleless-style-string\">String\n        <input type=\"text\" placeholder=\"RGB or HEX \"/>\n      </li>\n      <li id=\"Consoleless-style-function\">Function\n        <input type=\"text\" placeholder=\"RGB or HEX \"/>\n      </li>\n      <li id=\"Consoleless-style-object\">Object\n        <input type=\"text\" placeholder=\"RGB or HEX \"/>\n      </li>\n      <li id=\"Consoleless-style-false\">False\n        <input type=\"text\" placeholder=\"RGB or HEX \"/>\n      </li>\n      <li id=\"Consoleless-style-true\">True\n        <input type=\"text\" placeholder=\"RGB or HEX \"/>\n      </li>\n      <li id=\"Consoleless-style-array\">Array\n        <input type=\"text\" placeholder=\"RGB or HEX \"/>\n      </li>\n      <li id=\"Consoleless-style-null\">Null\n        <input type=\"text\" placeholder=\"RGB or HEX \"/>\n      </li>\n      <li id=\"Consoleless-style-nan\">NaN\n        <input type=\"text\" placeholder=\"RGB or HEX \"/>\n      </li>\n      <li id=\"Consoleless-style-undefined\">undefined\n        <input type=\"text\" placeholder=\"RGB or HEX \"/>\n      </li>\n      <button style=\"padding:10px; width:200px; margin:30px; cursor:pointer\" title=\"apply settings\" id=\"Consoleless-style-apply\">Apply      </button>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var styleEditorStyles = exports.styleEditorStyles = "\n.Consoleless-style-editor {\n  position: absolute;\n  background: #358338;\n  top:-515px;\n  box-shadow: inset 0px 0px 50px rgba(0, 0, 0, 0.2);\n  width: 750px;\n  height: auto;\n\n}\n.Consoleless-style-editor > .Consoleless-style-editor-ui {\n  display: flex;\n  width: inherit;\n  height: inherit;\n  flex-direction: row;\n}\n.Consoleless-style-editor > .Consoleless-style-editor-ui > ul {\n  margin: 10px;\n  padding: 0;\n}\n.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(1) {\n  flex: 1;\n  order: 1;\n}\n.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(1) > h3 {\n  color: white;\n  margin: 5px;\n  font-family: \"Lucida Sans Unicode\";\n}\n.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(1) > li {\n  list-style: none;\n  position: relative;\n  margin: 10px;\n  color: white;\n  font-family: \"Lucida Sans Unicode\";\n}\n.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(1) > li > input {\n  position: absolute;\n  left: 180px;\n}\n.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(2) {\n  flex: 1;\n  order: 2;\n}\n.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(2) > h3 {\n  margin: 5px;\n  color: white;\n  font-family: \"Lucida Sans Unicode\";\n}\n.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(2) > li {\n  position: relative;\n  margin: 10px;\n  list-style: none;\n  font-family: \"Lucida Sans Unicode\";\n  color: white;\n}\n.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(2) > li > input {\n  position: absolute;\n  left: 100px;\n}\n";

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var pannelHTML = exports.pannelHTML = "\n<div class=\"Consoleless-ui-bar\" id='Consoleless-pannel'>\n  <div class=\"Consoleless bar\">\n    <div title=\"move this bar around\" class=\"move\" id='Consoleless-pannel-movePannel'>\n    <i ></i>\n    </div>\n    <div class=\"title\" id='Consoleless-pannel-title'>\n      <h2>Consoleless</h2>\n    </div>\n    <div class=\"move-ui\" ><i title=\"move the ui around\" id='Consoleless-pannel-moveDsiplay'></i></div>\n    <div class=\"settings-config\">\n    <i title=\"settings\" id='Consoleless-pannel-settings'></i>\n    <i title=\"style editor\" id='Consoleless-pannel-styleEditor'></i></div>\n\n  </div>\n</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var displayHTML = exports.displayHTML = "\n<div id=\"Consoleless-display\" class=\"Consoleless-display\" title='Consoleless'>\n  <div class='Consoleless-display-pannel'>\n    <button id=\"Consoleless-display-clear\" class='Consoleless-display-clear'>Clear</button>\n\n  </div>\n  <div class=\"Consoleless-display-ui\">\n    <h3 id=\"Consoleless-display-title\" style='opacity:0.2;display:none;' class='Consoleless-display-title'>Consoleless</h3>\n\n    <ul id=\"Consoleless-display-inject\" >\n\n    </ul>\n\n  </div>\n\n</div>\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _prototype = __webpack_require__(2);

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	var _throttle = __webpack_require__(30);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _userInteraction = __webpack_require__(31);

	var _clear = __webpack_require__(40);

	var _clear2 = _interopRequireDefault(_clear);

	var _setPositions = __webpack_require__(41);

	var _setPositions2 = _interopRequireDefault(_setPositions);

	var _pannel = __webpack_require__(42);

	var _pannel2 = _interopRequireDefault(_pannel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getStates = (0, _state2.default)();

	function tests() {
	  //  consoleless.log(2, null,false,true,RenTest,'hoo' ,[1,2,3] ,{one:38,capa:'i dont know',lol:function(){},sup:6736,mallowry:2})
	  _prototype.consoleless.log(42, 'somethign happend!!!');
	  _prototype.consoleless.log(42, 'somethign happend!!!');

	  _prototype.consoleless.log([1, 2, 3, 'one', null]);
	  _prototype.consoleless.warn('holly molly');
	  _prototype.consoleless.error('holly molly', '9238723', 348347, 9 * 8, 3e8);
	  // setTimeout(()=>{
	  //     consoleless.log(4434342,'somethign happend!!!');
	  // },55000)
	}

	function injectHTML(DOM) {

	  document.body.appendChild(DOM.ready.dom.display.element);
	  document.body.appendChild(DOM.ready.dom.pannel.element);
	  _prototype.consoleless.update(_setPositions2.default.bind(null, DOM, getStates));
	}

	exports.default = window.onload = function () {
	  window.Consoleless = _prototype.consoleless;

	  _prototype.consoleless.saveDOMhere(_prototype.Private);
	  injectHTML(_prototype.Private);
	  //MOOT 2
	  (0, _pannel2.default)(_prototype.Private, getStates);
	  (0, _clear2.default)(_prototype.Private);
	  _userInteraction.userInteraction.settings(_prototype.Private);
	  _userInteraction.userInteraction.resizeDisplay(_prototype.Private, getStates);
	  _userInteraction.userInteraction.resizePannel(_prototype.Private, getStates);
	  _userInteraction.userInteraction.applyTypeColor(_prototype.Private);
	  _userInteraction.userInteraction.applyBackground(_prototype.Private);
	  _userInteraction.userInteraction.enableConsoleless(getStates);
	  _userInteraction.userInteraction.enableAnimations(getStates);

	  //addStyleEditorListeners(Private);

	  tests();
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	exports.default = debounce;
	exports.default = throttle;
	function debounce(func, delay, immediate) {
			var timeout = undefined;
			return function () {
					var context = this,
					    args = arguments;

					var later = function later() {
							timeout = null;
							if (!immediate) func.apply(context, args);
					};
					var callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, delay);
					if (callNow) func.apply(context, args);
			};
	}
	var throttleWait = false;
	function throttle(func, delay) {

			var context = this,
			    args = arguments;
			if (!throttleWait) {
					func.call(context, args);
					throttleWait = true;
					setTimeout(function () {
							throttleWait = false;
					}, delay);
			}
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.userInteraction = undefined;

	var _applyBackground = __webpack_require__(32);

	var _applyBackground2 = _interopRequireDefault(_applyBackground);

	var _applyTypeColor = __webpack_require__(33);

	var _applyTypeColor2 = _interopRequireDefault(_applyTypeColor);

	var _resizeDisplay = __webpack_require__(34);

	var _resizeDisplay2 = _interopRequireDefault(_resizeDisplay);

	var _resizePannel = __webpack_require__(35);

	var _resizePannel2 = _interopRequireDefault(_resizePannel);

	var _enableDisable = __webpack_require__(36);

	var _enableDisable2 = _interopRequireDefault(_enableDisable);

	var _enableAnimations = __webpack_require__(37);

	var _enableAnimations2 = _interopRequireDefault(_enableAnimations);

	var _settings = __webpack_require__(38);

	var _settings2 = _interopRequireDefault(_settings);

	var _setDisplay = __webpack_require__(39);

	var _setDisplay2 = _interopRequireDefault(_setDisplay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var userInteraction = exports.userInteraction = {
	  applyBackground: _applyBackground2.default,
	  applyTypeColor: _applyTypeColor2.default,
	  resizeDisplay: _resizeDisplay2.default,
	  resizePannel: _resizePannel2.default,
	  settings: _settings2.default,
	  enableConsoleless: _enableDisable2.default,
	  enableAnimations: _enableAnimations2.default,
	  setDisplay: _setDisplay2.default
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (DOM) {

	  var displayBackground = DOM.ready.dom.styleEditor.displayBackground.children[0];
	  var opacity = DOM.ready.dom.styleEditor.opacity.children[0];
	  var consoleDelay = DOM.ready.dom.styleEditor.consoleDelay.children[0];

	  var rgb = /^rgb[(]\d{1,3},\d{1,3},\d{1,3}[)]/;
	  var getState = (0, _state2.default)();

	  DOM.ready.dom.styleEditor.applyStyles.addEventListener('click', function () {
	    //i know...

	    if (rgb.test(displayBackground.value)) {
	      getState.display.background = displayBackground.value;
	      (0, _mutateLs2.default)(getState);
	      _prototype.consoleless.update(function () {
	        DOM.ready.dom.display.element.style.background = displayBackground.value;
	      });
	    }
	    if (parseFloat(opacity.value) || parseInt(opacity.value)) {
	      getState.opacity = opacity.value;
	      (0, _mutateLs2.default)(getState);

	      _prototype.consoleless.update(function () {
	        var pannelBg = getState.pannel.background.match(/\d{1,3}/g);
	        var displayBg = getState.display.background.match(/\d{1,3}/g);
	        DOM.ready.dom.pannel.element.style.opacity = getState.opacity;
	        DOM.ready.dom.display.element.style.background = 'rgba(' + displayBg[0] + ', ' + displayBg[1] + ',' + displayBg[2] + ' ,' + getState.opacity + ')';

	        console.log(pannelBg, displayBg);
	      });
	    }
	    if (parseInt(consoleDelay.value)) {

	      getState.delay = consoleDelay.value;
	      (0, _mutateLs2.default)(getState);
	      _prototype.consoleless.delay = consoleDelay.value;
	    }
	  });
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	var _prototype = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (DOM) {
	  var types = DOM.ready.dom.styleEditor.types;
	  var mapKeys = Object.keys(types);
	  var hex = /^#[a-f0-9]{3,6}/i;
	  var rgb = /^rgb[(]\d{1,3},\d{1,3},\d{1,3}[)]/;
	  var getState = (0, _state2.default)();
	  DOM.ready.dom.styleEditor.applyStyles.addEventListener('click', function () {

	    mapKeys.forEach(function (item) {
	      var getState = (0, _state2.default)();
	      var colorMatch = hex.test(types[item].children[0].value) || rgb.test(types[item].children[0].value) ? true : false;
	      if (colorMatch) {

	        getState.types[item] = types[item].children[0].value;
	        (0, _mutateLs2.default)(getState);
	      } else {
	        return false;
	      }
	    });
	  });
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	var _prototype = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (DOM, state) {
	  var getState = state;

	  DOM.ready.dom.styleEditor.setDisplay.addEventListener('click', function () {
	    console.log('3443', DOM, state);
	    var width = DOM.ready.dom.styleEditor.display.children[0];
	    var height = DOM.ready.dom.styleEditor.display.children[1];

	    if (parseInt(width.value)) {
	      getState.display.width = width.value;

	      (0, _mutateLs2.default)(getState);
	      _prototype.consoleless.update(function () {
	        DOM.ready.dom.display.element.style.width = getState.display.width + 'px';
	      });
	    }
	    if (parseInt(height.value)) {
	      getState.display.height = height.value;
	      (0, _mutateLs2.default)(getState);
	      _prototype.consoleless.update(function () {
	        DOM.ready.dom.display.element.style.height = getState.display.height + 'px';
	      });
	    }
	  });
	};

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	var _prototype = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (DOM, state) {
	  var getState = state;
	  DOM.ready.dom.styleEditor.setPannel.addEventListener('click', function () {

	    var width = DOM.ready.dom.styleEditor.pannel.children[0];
	    var height = DOM.ready.dom.styleEditor.pannel.children[1];

	    if (parseInt(width.value)) {
	      getState.pannel.width = width.value;

	      (0, _mutateLs2.default)(getState);
	      _prototype.consoleless.update(function () {
	        DOM.ready.dom.pannel.element.style.width = getState.pannel.width + 'px';
	      });
	    }

	    if (parseInt(height.value)) {
	      getState.pannel.height = height.value;
	      (0, _mutateLs2.default)(getState);
	      _prototype.consoleless.update(function () {
	        DOM.ready.dom.pannel.element.style.height = getState.pannel.height + 'px';
	      });
	    }
	  });
	};

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	var _prototype = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (getState) {
	  if (getState.enabled) {
	    _prototype.consoleless.enable(getState);
	  } else {
	    _prototype.consoleless.disable(getState);
	  }
	};

	var _prototype = __webpack_require__(2);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (getStates) {
	  if (getStates.animations) {
	    _prototype.consoleless.enableAnimations();
	  } else {
	    _prototype.consoleless.disableAnimations();
	  }
	};

	var _prototype = __webpack_require__(2);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (DOM) {
	  var getState = (0, _state2.default)();
	  var settings = DOM.ready.dom.settings;

	  var settingsHandler = function settingsHandler(e) {

	    switch (e.target.id || e.target.name) {
	      case 'Consoleless-settings-showTitle':
	        {

	          if (e.target.checked) {
	            _prototype.Private.ready.dom.pannel.title.style.display = 'block';
	          } else {
	            _prototype.Private.ready.dom.pannel.title.style.display = 'none';
	          }
	          getState.pannel.showTitle = e.target.checked;
	          (0, _mutateLs2.default)(getState);
	        };
	        break;
	      case 'Consoleless-settings-toggle':
	        {
	          getState.enabled = e.target.checked;
	          (0, _mutateLs2.default)(getState);
	          if (e.target.checked) {
	            _prototype.consoleless.enable();
	          } else {
	            _prototype.consoleless.disable();
	          }
	        };
	        break;
	      case 'Consoleless-settings-animations':
	        {

	          getState.animations = e.target.checked;
	          (0, _mutateLs2.default)(getState);
	        };
	        break;
	      case 'Consoleless-settings-bind':
	        {

	          if (e.target.checked) {
	            _prototype.consoleless.bindConsole();
	          } else {
	            _prototype.consoleless.unbindConsole();
	          }
	        };
	        break;
	      case 'Consoleless-settings-reset':
	        {

	          var comfirmReset = confirm('RESET Consoleless to default settings?');
	          if (comfirmReset) {
	            _prototype.consoleless.reset(_prototype.Private);
	          }
	        };

	    }
	  };

	  DOM.ready.dom.settings.element.addEventListener('click', settingsHandler);
	};

	var _prototype = __webpack_require__(2);

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var opacity = false;
	var enable = false;
	function update() {}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	      value: true
	});

	exports.default = function (elm, mousemoveEventHandler) {
	      elm.addEventListener('click', function () {
	            var getState = (0, _state2.default)();
	            document.removeEventListener('mousemove', mousemoveEventHandler);
	            elm.style.transition = 'box-shadow 0.3s';
	            elm.title = 'Consoleless';
	            elm.style.zIndex = 5812;
	            elm.style.cursor = 'default';
	            elm.style.boxShadow = '0px 0px 20px rgba(0,0,0,0.2)';

	            getState.display.pos = [elm.offsetTop, elm.offsetLeft];
	            (0, _mutateLs2.default)(getState);
	      });
	};

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (DOM) {
	  DOM.ready.dom.display.clear.addEventListener('click', function () {
	    _prototype.consoleless.clear();
	  });
	};

	var _prototype = __webpack_require__(2);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (DOM, getStates) {

	  DOM.ready.dom.pannel.element.style.width = getStates.pannel.width + 'px';
	  DOM.ready.dom.pannel.element.style.height = getStates.pannel.height + 'px';
	  DOM.ready.dom.pannel.element.style.top = getStates.pannel.pos[0] + 'px';
	  DOM.ready.dom.pannel.element.style.left = getStates.pannel.pos[1] + 'px';
	  DOM.ready.dom.pannel.element.style.background = getStates.pannel.background;

	  if (getStates.pannel.showTitle) {
	    DOM.ready.dom.pannel.title.style.display = 'block';
	  } else {
	    DOM.ready.dom.pannel.title.style.display = 'none';
	  }
	  DOM.ready.dom.display.element.style.width = getStates.display.width + 'px';
	  DOM.ready.dom.display.element.style.height = getStates.display.height + 'px';
	  DOM.ready.dom.display.element.style.top = getStates.display.pos[0] + 'px';
	  DOM.ready.dom.display.element.style.left = getStates.display.pos[1] + 'px';
	  DOM.ready.dom.display.element.style.background = getStates.display.background;
	  DOM.ready.dom.styleEditor.element.style.transform = 'translate(20%, 50%) scale(0)';
	  if (getStates.animations) {} else {
	    DOM.ready.dom.styleEditor.element.style.cssText = 'display:none';
	  }
	};

	var _prototype = __webpack_require__(2);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (DOM, getState) {

	  var toggleSettings = false;
	  var settings = DOM.ready.dom.settings.element;
	  var pannelSettingsButton = DOM.ready.dom.pannel.settings;

	  if (!getState.animations) {
	    settings.style.transform = '';
	    settings.style.display = 'none';
	  } else {
	    settings.style.transition = 'all ' + (getState.animationSpeed || 0.5) + 's';
	    settings.style.transform = 'translate(20%,50%) scale(0)';
	  }

	  (0, _settingsButton2.default)(DOM, getState);
	  (0, _moveButton2.default)(DOM, getState);
	  (0, _moveDisplayButton2.default)(DOM, getState);
	  (0, _styleButton2.default)(DOM, getState);
	};

	var _settingsButton = __webpack_require__(43);

	var _settingsButton2 = _interopRequireDefault(_settingsButton);

	var _moveButton = __webpack_require__(44);

	var _moveButton2 = _interopRequireDefault(_moveButton);

	var _moveDisplayButton = __webpack_require__(45);

	var _moveDisplayButton2 = _interopRequireDefault(_moveDisplayButton);

	var _styleButton = __webpack_require__(47);

	var _styleButton2 = _interopRequireDefault(_styleButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (DOM) {
	  var toggleSettings = false;
	  DOM.ready.dom.pannel.settings.addEventListener('click', function () {
	    //toggles the settings ui
	    toggleSettings = !toggleSettings;
	    var newState = (0, _state2.default)();

	    if (toggleSettings) {
	      if (newState.animations) {
	        DOM.ready.dom.settings.element.style.cssText = 'transition:all ' + (newState.animationSpeed || 0.5) + 's; transform:translate(0%,0%) scale(1)';
	      } else {
	        DOM.ready.dom.settings.element.style.cssText = 'display:block';
	      }
	      DOM.ready.dom.settings.toggle.checked = newState.enabled;
	      DOM.ready.dom.settings.showTitle.checked = newState.pannel.showTitle;
	      DOM.ready.dom.settings.animations.checked = newState.animations;
	      DOM.ready.dom.settings.bind.checked = newState.bindConsole;
	    } else {
	      if (newState.animations) {
	        DOM.ready.dom.settings.element.style.cssText = 'transition:all ' + (newState.animationSpeed || 0.5) + 's; transform:translate(20%,50%) scale(0)';
	      } else {
	        DOM.ready.dom.settings.element.style.cssText = 'display:none';
	      }
	    }
	  });
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (DOM, getState) {
	  var enableMovePannel = false;
	  var pannel = DOM.ready.dom.pannel;
	  var mousemove = function mousemove(event) {
	    (0, _throttle2.default)(function () {
	      pannel.element.style.left = Math.round(event.clientX - pannel.movePannel.offsetWidth / 2) + 'px';
	      pannel.element.style.top = Math.round(event.clientY - pannel.movePannel.offsetHeight / 2) + 'px';
	    }, 40);
	  };

	  pannel.movePannel.addEventListener('click', function () {
	    enableMovePannel = !enableMovePannel;

	    if (enableMovePannel) {
	      pannel.element.style.transition = 'box-shadow .4s';
	      pannel.movePannel.title = 'Click again to set';
	      pannel.element.style.boxShadow = '0px 0px 50px rgb(53, 131, 56)';
	      document.addEventListener('mousemove', mousemove);
	    } else {
	      pannel.element.style.transition = 'box-shadow .4s';
	      pannel.movePannel.title = 'move this bar around';
	      pannel.element.style.boxShadow = '0px 0px 20px rgba(53, 131, 56 ,0.8)';
	      document.removeEventListener('mousemove', mousemove);

	      getState.pannel.pos = [pannel.element.offsetTop, pannel.element.offsetLeft];
	      (0, _mutateLs2.default)(getState);
	    }
	  });
	};

	var _mutateLs = __webpack_require__(4);

	var _mutateLs2 = _interopRequireDefault(_mutateLs);

	var _throttle = __webpack_require__(30);

	var _throttle2 = _interopRequireDefault(_throttle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (DOM) {

	  var display = DOM.ready.dom.display;
	  var moveDisplayHandler = function moveDisplayHandler(event) {

	    (0, _utils2.default)(function () {
	      display.element.style.left = Math.round(event.clientX - display.element.offsetWidth / 2) + 'px';
	      display.element.style.top = Math.round(event.clientY - display.element.offsetHeight / 2) + 'px';
	    }, 40);
	  };

	  var toggleMove = false;
	  DOM.ready.dom.pannel.moveDisplay.addEventListener('click', function () {
	    display.element.style.transition = 'box-shadow 0.3s';
	    display.element.title = 'Click again to set';
	    display.element.style.zIndex = 5815;
	    display.element.style.cursor = 'pointer';
	    display.element.style.boxShadow = "0px 0px 50px rgba(53, 131, 56, 0.79)";
	    document.addEventListener('mousemove', moveDisplayHandler);
	  });
	  _userInteraction.userInteraction.setDisplay(DOM.ready.dom.display.element, moveDisplayHandler);
	};

	var _utils = __webpack_require__(46);

	var _utils2 = _interopRequireDefault(_utils);

	var _userInteraction = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	exports.default = debounce;
	exports.default = throttle;
	function debounce(func, delay, immediate) {
			var timeout = undefined;
			return function () {
					var context = this,
					    args = arguments;

					var later = function later() {
							timeout = null;
							if (!immediate) func.apply(context, args);
					};
					var callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, delay);
					if (callNow) func.apply(context, args);
			};
	}
	var throttleWait = false;
	function throttle(func, delay) {

			var context = this,
			    args = arguments;
			if (!throttleWait) {
					func.call(context, args);
					throttleWait = true;
					setTimeout(function () {
							throttleWait = false;
					}, delay);
			}
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (DOM) {
	  var toggle = false;
	  DOM.ready.dom.pannel.styleEditor.addEventListener('click', function () {
	    var getNewState = (0, _state2.default)();
	    toggle = !toggle;
	    console.log(toggle, getNewState.animations);
	    if (toggle) {
	      if (getNewState.animations) {
	        DOM.ready.dom.styleEditor.element.style.cssText = 'transition:all ' + (getNewState.animationSpeed || 0.5) + 's; transform:translate(0%,0%) scale(1)';
	      } else {
	        DOM.ready.dom.styleEditor.element.style.cssText = 'display:block';
	      }
	    } else {
	      if (getNewState.animations) {
	        DOM.ready.dom.styleEditor.element.style.cssText = 'transition:all ' + (getNewState.animationSpeed || 0.5) + 's; transform:translate(20%,50%) scale(0)';
	      } else {
	        DOM.ready.dom.styleEditor.element.style.cssText = 'display:none';
	      }
	    }
	  });
	};

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }
/******/ ]);
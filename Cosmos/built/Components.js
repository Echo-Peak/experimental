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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ui = __webpack_require__(1);
	
	var _ui2 = _interopRequireDefault(_ui);
	
	var _actions = __webpack_require__(12);
	
	var _header = __webpack_require__(2);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _contact = __webpack_require__(14);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	var _rng = __webpack_require__(15);
	
	var _rng2 = _interopRequireDefault(_rng);
	
	var _canvas = __webpack_require__(18);
	
	var _canvas2 = _interopRequireDefault(_canvas);
	
	var _ajax = __webpack_require__(20);
	
	var _ajax2 = _interopRequireDefault(_ajax);
	
	var _lorem = __webpack_require__(39);
	
	var _lorem2 = _interopRequireDefault(_lorem);
	
	var _lSystem = __webpack_require__(41);
	
	var _lSystem2 = _interopRequireDefault(_lSystem);
	
	var _rngColor = __webpack_require__(42);
	
	var _rngColor2 = _interopRequireDefault(_rngColor);
	
	var _imgManip = __webpack_require__(43);
	
	var _imgManip2 = _interopRequireDefault(_imgManip);
	
	var _binary2Text = __webpack_require__(44);
	
	var _binary2Text2 = _interopRequireDefault(_binary2Text);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _window$ReactRouter = window.ReactRouter;
	var browserHistory = _window$ReactRouter.browserHistory;
	var Link = _window$ReactRouter.Link;
	var Router = _window$ReactRouter.Router;
	var IndexRoute = _window$ReactRouter.IndexRoute;
	var Route = _window$ReactRouter.Route;
	
	var APP = function (_React$Component) {
	    _inherits(APP, _React$Component);
	
	    function APP() {
	        _classCallCheck(this, APP);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(APP).call(this));
	
	        _this.moot = _this.moot;
	        return _this;
	    }
	
	    _createClass(APP, [{
	        key: 'viewTitle',
	        value: function viewTitle(path) {
	            _actions.actions_ui.setViewTitle(this.path);
	            console.info('ran');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            return React.createElement(
	                Router,
	                { history: browserHistory },
	                React.createElement(
	                    Route,
	                    { path: '/', component: _ui2.default, onEnter: this.viewTitle },
	                    React.createElement(Route, { path: 'ajax-manipulation', component: _ajax2.default, onEnter: this.viewTitle }),
	                    React.createElement(Route, { path: 'l-system-generator', component: _lSystem2.default, onEnter: this.viewTitle }),
	                    React.createElement(Route, { path: 'random-color-generator', component: _rngColor2.default, onEnter: this.viewTitle }),
	                    React.createElement(Route, { path: 'image-src-manipulation', component: _imgManip2.default, onEnter: this.viewTitle }),
	                    React.createElement(Route, { path: 'binary-to-text', component: _binary2Text2.default, onEnter: this.viewTitle }),
	                    React.createElement(Route, { path: 'canvas-random-shapes', component: _canvas2.default, onEnter: this.viewTitle }),
	                    React.createElement(Route, { path: 'random-generator', component: _rng2.default, onEnter: this.viewTitle }),
	                    React.createElement(Route, { path: 'lorem-ipsum-generator', component: _lorem2.default, onEnter: this.viewTitle })
	                ),
	                React.createElement(Route, { path: '/head', component: _header2.default, onEnter: _header2.default.prototype.transition }),
	                React.createElement(Route, { path: '/contact', component: _contact2.default })
	            );
	        }
	    }]);
	
	    return APP;
	}(React.Component);
	
	var mountElm = document.getElementById('app');
	
	ReactDOM.render(React.createElement(APP, null), mountElm);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _header = __webpack_require__(2);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _sidebar = __webpack_require__(9);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	var _actions = __webpack_require__(12);
	
	var _uid = __webpack_require__(13);
	
	var _uid2 = _interopRequireDefault(_uid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import Bubbles from '../bubbles/bubbles';
	//import BubblesItem from '../bubbles/items';
	//import BubblesLayer from '../bubbles/layers';
	
	
	var _window$ReactRouter = window.ReactRouter;
	var Link = _window$ReactRouter.Link;
	var Route = _window$ReactRouter.Route;
	var Router = _window$ReactRouter.Router;
	
	var UI = function (_React$Component) {
	  _inherits(UI, _React$Component);
	
	  function UI() {
	    _classCallCheck(this, UI);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UI).call(this));
	
	    var transition = function transition() {};
	    _this.transition = transition.call(_this);
	    return _this;
	  }
	
	  _createClass(UI, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _actions.actions_ui.cache({ id: 'ui', data: { component: this, refs: [] } }, true);
	    }
	  }, {
	    key: 'layers',
	    value: function layers() {
	      //subsitute index 0 for react component and that children is everthing but index 0
	      var layer1 = [['li', 'layer 1.0'], ['li', 'layer 1.1']];
	      var layer2 = [['li', 'layer 2'], ['li', 'layer 2'], ['li', 'layer 2.3']];
	      var layer3 = [['li', 'layer 3'], ['li', 'layer 3']];
	      var layer4 = [['li', 'some data'], ['li', 'some data here 2']];
	      var layer5 = [['li', 'some data 5'], ['li', 'some data here 5']];
	      var layer6 = [['li', 'some data 6'], ['li', 'some data here 6'], ['li', 'some dfff 6.0']];
	
	      //expands dynamily
	      //layers is then composed in bubbles.compose
	      return {
	        '1': layer1,
	        '2': layer2,
	        '3': layer3,
	        '4': layer4,
	        '5': layer5,
	        '6': layer6
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return React.createElement(
	        'div',
	        { ref: 'UI' },
	        React.createElement(_sidebar2.default, { ref: 'sidebar' }),
	        React.createElement(
	          'div',
	          { text: 'inside...everything outside will be position fixed or absolute and seperate from this div/block', className: 'view-shift' },
	          React.createElement(_header2.default, null),
	          React.createElement(
	            'div',
	            { text: 'this is where all child components get rendered by router' },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);
	
	  return UI;
	}(React.Component);
	
	exports.default = UI;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _settings = __webpack_require__(3);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _actions = __webpack_require__(4);
	
	var _appMenu = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _window$ReactRouter = window.ReactRouter;
	var RouteHandler = _window$ReactRouter.RouteHandler;
	var Link = _window$ReactRouter.Link;
	
	
	var UID = __webpack_require__(8);
	
	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);
	
	  function Header(props) {
	    _classCallCheck(this, Header);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this));
	
	    var self = _this;
	
	    var transition = function transition() {};
	    _this.transition = transition.call(_this);
	
	    _this.state = {
	      viewTitle: 'Home'
	    };
	    return _this;
	  }
	
	  _createClass(Header, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _actions.actions_header.cache({ id: 'header', data: this }, true);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var viewTitle = undefined;
	      _actions.actions_header.updateTitle(function (title) {
	
	        if (title == '/') {
	          viewTitle = 'Home';
	        } else {
	          viewTitle = title;
	        }
	      });
	      return React.createElement(
	        'div',
	        { className: '_header', ref: 'elm' },
	        React.createElement('div', { className: '_header-pannel' }),
	        React.createElement(
	          'div',
	          { className: '_header-title' },
	          React.createElement(
	            'h1',
	            null,
	            viewTitle
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: '_header-settings' },
	          React.createElement(_settings2.default, null)
	        )
	      );
	    }
	  }]);
	
	  return Header;
	}(React.Component);
	
	exports.default = Header;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Settings = function (_React$Component) {
	  _inherits(Settings, _React$Component);
	
	  function Settings(props) {
	    _classCallCheck(this, Settings);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Settings).call(this));
	  }
	
	  _createClass(Settings, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'section',
	        { className: '_settings' },
	        React.createElement('i', { className: 'fa fa-cogs _settings-trigger' })
	      );
	    }
	  }]);
	
	  return Settings;
	}(React.Component);
	
	exports.default = Settings;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	window.cosmos = window.cosmos || {};
	var actions_header = exports.actions_header = {
	  /*
	    @param{data} 'object'
	    @param{willCache} 'boolean'
	  */
	  cache: function cache(data, willCache) {
	    //optional to cache the component
	    willCache ? cosmos.store.set(data.id, data.data) : void 0;
	  },
	  updateTitle: function updateTitle(callback) {
	    cosmos.store.on('viewTitle', callback);
	  }
	
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var button = __webpack_require__(6);
	var content = __webpack_require__(7);
	
	var AppMenu = function (_React$Component) {
	  _inherits(AppMenu, _React$Component);
	
	  function AppMenu(props) {
	    _classCallCheck(this, AppMenu);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppMenu).call(this));
	
	    _this.props = props;
	    _this.state = {
	      openStyle: _this.props.openStyle,
	      isOpen: false
	    };
	
	    return _this;
	  }
	
	  _createClass(AppMenu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      cosmos.store.set('AppMenu', { component: this, refs: [], data: null });
	      var contentRef = this.refs['content-container'];
	
	      switch (this.state.openStyle) {
	        case 'top-left':
	          contentRef.style['transform-origin'] = '0% 0%';
	          break;
	        case 'top-right':
	          contentRef.style['transform-origin'] = '1000% 0%';
	          break;
	        case 'bottom-left':
	          contentRef.style['transform-origin'] = '0% 100%';
	          break;
	        case 'bottom-right':
	          contentRef.style['transform-origin'] = '100% 100%';
	          break;
	
	      }
	    }
	  }, {
	    key: 'setOpenState',
	    value: function setOpenState() {
	      this.state.isOpen = !this.state.isOpen;
	      this.setState({
	        isOpen: this.state.isOpen
	      });
	    }
	  }, {
	    key: 'openMenu',
	    value: function openMenu() {
	      var _this2 = this;
	
	      this.props.metaData.button.action();
	
	      var contentRef = this.refs['content-container'];
	      contentRef.style.transition = 'all .2s cubic-bezier(.17,.67,.39,.8)';
	
	      var scale1 = function scale1() {
	        contentRef.style.transform = 'scale(1)';
	      };
	      var scale0 = function scale0() {
	        contentRef.style.transform = 'scale(0)';
	      };
	
	      var topLeft = function topLeft() {
	        _this2.setOpenState();
	        _this2.state.isOpen ? scale1() : scale0();
	      };
	      var topRight = function topRight() {
	        _this2.setOpenState();
	        _this2.state.isOpen ? scale1() : scale0();
	      };
	      var bottomLeft = function bottomLeft() {
	        _this2.setOpenState();
	        _this2.state.isOpen ? scale1() : scale0();
	      };
	      var bottomRight = function bottomRight() {
	        _this2.setOpenState();
	        _this2.state.isOpen ? scale1() : scale0();
	      };
	
	      switch (this.state.openStyle) {
	        case 'top-left':
	          topLeft();
	          break;
	        case 'top-right':
	          topRight();
	          break;
	        case 'bottom-left':
	          bottomLeft();
	          break;
	        case 'bottom-right':
	          bottomRight();
	          break;
	
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {}
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var _class = undefined;
	
	      var offset = {
	        margin: '5px',
	        position: 'fixed',
	
	        boxShadow: '0px 0px 8px'
	
	      };
	      var metaData = this.props.metaData;
	      var button;
	
	      var content = metaData.content;
	
	      switch (metaData.button.type) {
	        case 'small':
	          _class = 'small';
	          break;
	        case 'normal':
	          _class = 'normal';
	          break;
	        case 'big':
	          _class = 'big';
	          break;
	      }
	
	      var button = React.createElement(
	        'button',
	        { className: (_class, 'appMenu-button'), onClick: this.openMenu.bind(this) },
	        metaData.button.title
	      );
	
	      return React.createElement(
	        'div',
	        { className: 'App-menu' },
	        React.createElement(
	          'div',
	          null,
	          button
	        ),
	        React.createElement(
	          'div',
	          { ref: 'content-container', className: 'App-menu-content', style: offset },
	          content
	        )
	      );
	    }
	  }]);
	
	  return AppMenu;
	}(React.Component);
	
	module.exports = {
	  AppMenu: AppMenu,
	  AppMenuButton: button,
	  AppMenuContent: content
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	module.exports = function (_React$Component) {
	    _inherits(AppMenuButton, _React$Component);
	
	    function AppMenuButton() {
	        _classCallCheck(this, AppMenuButton);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AppMenuButton).call(this));
	    }
	
	    _createClass(AppMenuButton, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement('div', { className: 'App-menu-button' });
	        }
	    }]);
	
	    return AppMenuButton;
	}(React.Component);

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	module.exports = function (_React$Component) {
	    _inherits(AppMenuContent, _React$Component);
	
	    function AppMenuContent() {
	        _classCallCheck(this, AppMenuContent);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AppMenuContent).call(this));
	    }
	
	    _createClass(AppMenuContent, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement('div', { className: 'App-menu-content' });
	        }
	    }]);
	
	    return AppMenuContent;
	}(React.Component);

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = UID;
	function UID() {
	  var date = +new Date();
	  var uid = Math.floor(Math.random() * date);
	  return uid.toString(30);
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _UID = __webpack_require__(8);
	
	var _UID2 = _interopRequireDefault(_UID);
	
	var _actions = __webpack_require__(10);
	
	var _FAarray = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Link = window.ReactRouter.Link;
	
	var Sidebar = function (_React$Component) {
	  _inherits(Sidebar, _React$Component);
	
	  function Sidebar(props) {
	    _classCallCheck(this, Sidebar);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sidebar).call(this));
	
	    _this.generateMenuContent = _this.generateMenuContent;
	    var menuButtons = [{ title: 'L system Generator', url: '#/one' }, { title: 'Random color Generator', url: '#/one' }, { title: 'Image src manipulation', url: '#/one' }, { title: 'Audio Manipulation', url: '#/one' }, { title: 'Random generator', url: '#/one' }, { title: 'lorem ipsum generator', url: '#/one' }, { title: 'binary to text', url: '#/one' }, { title: 'text to binary', url: '#/one' }, { title: 'canvas random shapes', url: '#/' }, { title: 'Ajax manipulation' }, { title: 'twiter' }];
	
	    _this.menuData = [menuButtons];
	    _this.state = {
	      isOpen: true
	    };
	    return _this;
	  }
	
	  _createClass(Sidebar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _actions.actions_sidebar.cache({ id: 'sidebar', data: { commponent: this, refs: [this.refs.container] } });
	    }
	  }, {
	    key: 'generateMenuContent',
	    value: function generateMenuContent() {
	      var colors = function colors() {
	        var hue = Math.floor(Math.random() * 1000);
	        var sat = Math.floor(80 + Math.random() * 10);
	        var light = Math.floor(50 + Math.random() * 10);
	
	        return 'hsl(' + hue + ', ' + sat + '% , ' + light + '% )';
	      };
	      var listings = [];
	
	      this.menuData[0].map(function (item, index) {
	        var href = item.title;
	        var hrefs = href.toLowerCase().replace(/ /g, '-');
	        var styles = {
	          paddingRight: '10px',
	          fontSize: '1.5em',
	          color: colors()
	        };
	        listings.push(React.createElement(
	          Link,
	          { to: '/' + hrefs, key: (0, _UID2.default)() },
	          React.createElement(
	            'li',
	            null,
	            React.createElement('span', { className: 'fa fa-' + (0, _FAarray.randomIcon)(), style: styles }),
	            item.title
	          )
	        ));
	      });
	      return listings;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var resetVieTitle = function resetVieTitle() {
	        _actions.actions_sidebar.resetVeiwTitle('Home');
	      };
	      return React.createElement(
	        'div',
	        { className: '_sidebar', ref: 'container' },
	        React.createElement(
	          'div',
	          { className: '_sidebar-container' },
	          React.createElement(
	            'header',
	            null,
	            React.createElement(
	              'div',
	              { className: 'map-padding' },
	              React.createElement(
	                'div',
	                { className: 'map' },
	                React.createElement('img', { src: 'http://placehold.it/150x100' })
	              )
	            ),
	            React.createElement(
	              'div',
	              null,
	              React.createElement(
	                Link,
	                { to: '/', onClick: resetVieTitle },
	                React.createElement(
	                  'h4',
	                  null,
	                  'TITLE'
	                )
	              )
	            )
	          ),
	          React.createElement(
	            'section',
	            null,
	            this.generateMenuContent()
	          ),
	          React.createElement(
	            'footer',
	            null,
	            React.createElement(
	              Link,
	              { to: '/contact' },
	              React.createElement(
	                'h4',
	                { style: { padding: '10px', color: 'white' } },
	                'Snail Mail: echopeakdev@gmail.com'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Sidebar;
	}(React.Component);
	
	exports.default = Sidebar;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	window.cosmos = window.cosmos || {};
	var actions_sidebar = exports.actions_sidebar = {
	  /*
	    @param{data} 'object'
	    @param{willCache} 'boolean'
	  */
	  cache: function cache(data, willCache) {
	    //optional to cache the component
	    willCache ? window.cosmos.store.set(data.id, data.data) : void 0;
	  },
	  resetVeiwTitle: function resetVeiwTitle(home) {
	    cosmos.store.broadcast('viewTitle', home);
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//used to generate random font-awsome icons
	var fontAwsomeArray = ["adjust", "anchor", "archive", "area-chart", "arrows", "arrows-h", "arrows-v", "asterisk", "at", "automobile", "balance-scale", "ban", "bank", "bar-chart", "bar-chart-o", "barcode", "bars", "battery-0", "battery-1", "battery-2", "battery-3", "battery-4", "battery-empty", "battery-full", "battery-half", "battery-quarter", "battery-three-quarters", "bed", "beer", "bell", "bell-o", "bell-slash", "bell-slash-o", "bicycle", "binoculars", "birthday-cake", "bluetooth", "bluetooth-b", "bolt", "bomb", "book", "bookmark", "bookmark-o", "briefcase", "bug", "building", "building-o", "bullhorn", "bullseye", "bus", "cab", "calculator", "calendar", "calendar-check-o", "calendar-minus-o", "calendar-o", "calendar-plus-o", "calendar-times-o", "camera", "camera-retro", "car", "caret-square-o-down", "caret-square-o-left", "caret-square-o-right", "caret-square-o-up", "cart-arrow-down", "cart-plus", "cc", "certificate", "check", "check-circle", "check-circle-o", "check-square", "check-square-o", "child", "circle", "circle-o", "circle-o-notch", "circle-thin", "clock-o", "clone", "close", "cloud", "cloud-download", "cloud-upload", "code", "code-fork", "coffee", "cog", "cogs", "comment", "comment-o", "commenting", "commenting-o", "comments", "comments-o", "compass", "copyright", "creative-commons", "credit-card", "credit-card-alt", "crop", "crosshairs", "cube", "cubes", "cutlery", "dashboard", "database", "desktop", "diamond", "dot-circle-o", "download", "edit", "ellipsis-h", "ellipsis-v", "envelope", "envelope-o", "envelope-square", "eraser", "exchange", "exclamation", "exclamation-circle", "exclamation-triangle", "external-link", "external-link-square", "eye", "eye-slash", "eyedropper", "fax", "feed", "female", "fighter-jet", "file-archive-o", "file-audio-o", "file-code-o", "file-excel-o", "file-image-o", "file-movie-o", "file-pdf-o", "file-photo-o", "file-picture-o", "file-powerpoint-o", "file-sound-o", "file-video-o", "file-word-o", "file-zip-o", "film", "filter", "fire", "fire-extinguisher", "flag", "flag-checkered", "flag-o", "flash", "flask", "folder", "folder-o", "folder-open", "folder-open-o", "frown-o", "futbol-o", "gamepad", "gavel", "gear", "gears", "gift", "glass", "globe", "graduation-cap", "group", "hand-grab-o", "hand-lizard-o", "hand-paper-o", "hand-peace-o", "hand-pointer-o", "hand-rock-o", "hand-scissors-o", "hand-spock-o", "hand-stop-o", "hashtag", "hdd-o", "headphones", "heart", "heart-o", "heartbeat", "history", "home", "hotel", "hourglass", "hourglass-1", "hourglass-2", "hourglass-3", "hourglass-end", "hourglass-half", "hourglass-o", "hourglass-start", "i-cursor", "image", "inbox", "industry", "info", "info-circle", "institution", "key", "keyboard-o", "language", "laptop", "leaf", "legal", "lemon-o", "level-down", "level-up", "life-bouy", "life-buoy", "life-ring", "life-saver", "lightbulb-o", "line-chart", "location-arrow", "lock", "magic", "magnet", "mail-forward", "mail-reply", "mail-reply-all", "male", "map", "map-marker", "map-o", "map-pin", "map-signs", "meh-o", "microphone", "microphone-slash", "minus", "minus-circle", "minus-square", "minus-square-o", "mobile", "mobile-phone", "money", "moon-o", "mortar-board", "motorcycle", "mouse-pointer", "music", "navicon", "newspaper-o", "object-group", "object-ungroup", "paint-brush", "paper-plane", "paper-plane-o", "paw", "pencil", "pencil-square", "pencil-square-o", "percent", "phone", "phone-square", "photo", "picture-o", "pie-chart", "plane", "plug", "plus", "plus-circle", "plus-square", "plus-square-o", "power-off", "print", "puzzle-piece", "qrcode", "question", "question-circle", "quote-left", "quote-right", "random", "recycle", "refresh", "registered", "remove", "reorder", "reply", "reply-all", "retweet", "road", "rocket", "rss", "rss-square", "search", "search-minus", "search-plus", "send", "send-o", "server", "share", "share-alt", "share-alt-square", "share-square", "share-square-o", "shield", "ship", "shopping-bag", "shopping-basket", "shopping-cart", "sign-in", "sign-out", "signal", "sitemap", "sliders", "smile-o", "soccer-ball-o", "sort", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-asc", "sort-desc", "sort-down", "sort-numeric-asc", "sort-numeric-desc", "sort-up", "space-shuttle", "spinner", "spoon", "square", "square-o", "star", "star-half", "star-half-empty", "star-half-full", "star-half-o", "star-o", "sticky-note", "sticky-note-o", "street-view", "suitcase", "sun-o", "support", "tablet", "tachometer", "tag", "tags", "tasks", "taxi", "television", "terminal", "thumb-tack", "thumbs-down", "thumbs-o-down", "thumbs-o-up", "thumbs-up", "ticket", "times", "times-circle", "times-circle-o", "tint", "toggle-down", "toggle-left", "toggle-off", "toggle-on", "toggle-right", "toggle-up", "trademark", "trash", "trash-o", "tree", "trophy", "truck", "tty", "tv", "umbrella", "university", "unlock", "unlock-alt", "unsorted", "upload", "user", "user-plus", "user-secret", "user-times", "users", "video-camera", "volume-down", "volume-off", "volume-up", "warning", "wheelchair", "wifi", "wrench"];
	
	function randomIcon() {
	  return fontAwsomeArray[Math.floor(Math.random() * fontAwsomeArray.length)];
	}
	exports.FAarray = fontAwsomeArray;
	exports.randomIcon = randomIcon;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	window.cosmos = window.cosmos || {};
	var actions_ui = exports.actions_ui = {
	  /*
	    @param{data} 'object'
	    @param{willCache} 'boolean'
	  */
	  cache: function cache(data, willCache) {
	    //optional to cache the component
	    willCache ? window.cosmos.store.set(data.id, data.data) : void 0;
	  },
	  setViewTitle: function setViewTitle(path) {
	    console.log('worked');
	    cosmos.store.broadcast('viewTitle', path);
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = UID;
	function UID() {
	  var date = +new Date();
	  var uid = Math.floor(Math.random() * date);
	  return uid.toString(30);
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Contact = function (_React$Component) {
	  _inherits(Contact, _React$Component);
	
	  function Contact() {
	    _classCallCheck(this, Contact);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Contact).call(this));
	  }
	
	  _createClass(Contact, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "h1",
	        null,
	        "comming soon!!!"
	      );
	    }
	  }]);
	
	  return Contact;
	}(React.Component);
	
	exports.default = Contact;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _header = __webpack_require__(2);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _elements = __webpack_require__(16);
	
	var _positionFixed = __webpack_require__(17);
	
	var _positionFixed2 = _interopRequireDefault(_positionFixed);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = _elements.elements.Button;
	var Input = _elements.elements.Input;
	
	var RNG = function (_React$Component) {
	  _inherits(RNG, _React$Component);
	
	  function RNG(props) {
	    _classCallCheck(this, RNG);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RNG).call(this));
	
	    _this.calculate = _this.calculate;
	    _this.state = {
	      start: 0,
	      end: 0,
	      multi: 0,
	      result: 0
	    };
	    return _this;
	  }
	
	  _createClass(RNG, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      cosmos.store.set('RNG', { component: this, refs: [], data: null });
	      console.log(this.props);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'inputStart',
	    value: function inputStart(input) {
	
	      if (input.value > 100) {
	        this.state.start = 100;
	      } else if (input.value < 0) {
	        this.state.start = 0;
	      } else {
	
	        this.state.start = parseInt(input.value);
	      }
	      console.log('after', this.state);
	    }
	  }, {
	    key: 'inputEnd',
	    value: function inputEnd(input) {
	      if (input.value > 100) {
	        this.state.end = 100;
	      } else if (input.value < 0) {
	        this.state.end = 0;
	      } else {
	
	        this.state.end = parseInt(input.value);
	      }
	    }
	  }, {
	    key: 'inputMulti',
	    value: function inputMulti(input) {
	      if (input.value > 50) {
	
	        this.state.multi = 50;
	      } else if (input.value < 0) {
	
	        this.state.multi = 0;
	      } else {
	
	        this.state.multi = parseInt(input.value);
	      }
	    }
	  }, {
	    key: 'calculate',
	    value: function calculate(input) {
	
	      var target = input.target;
	      var state = this.state;
	      switch (target.id) {
	        case 'start':
	          this.inputStart(input.target);
	          break;
	        case 'end':
	          this.inputEnd(input.target);
	          break;
	        case 'multi':
	          this.inputMulti(input.target);
	      }
	      //wtf is this?
	      this.state.result = Math.pow(Math.floor(state.start * Math.random() * state.end), state.multi);
	      this.forceUpdate();
	      console.info(this.state, input.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var inputStyle = {
	        width: '150px',
	        height: '50px',
	        border: '2px solid orange'
	
	      };
	
	      return React.createElement(
	        _positionFixed2.default,
	        { margin: '100px' },
	        React.createElement(
	          'h1',
	          null,
	          'Random Number Generator'
	        ),
	        React.createElement(
	          'div',
	          { className: 'Generator--rng' },
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'label',
	              null,
	              'Start'
	            ),
	            React.createElement(Input, { type: 'number', css: inputStyle, value: this.state.start, calculate: this.calculate.bind(this), 'switch': 'start', minmax: [0, 100] })
	          ),
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'label',
	              null,
	              'End:'
	            ),
	            React.createElement(Input, { type: 'number', css: inputStyle, value: this.state.end, calculate: this.calculate.bind(this), 'switch': 'end', minmax: [0, 100] })
	          ),
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'label',
	              null,
	              'Multiplyer'
	            ),
	            React.createElement(Input, { type: 'number', css: inputStyle, value: this.state.multi, calculate: this.calculate.bind(this), 'switch': 'multi', minmax: [0, 50] })
	          ),
	          React.createElement(
	            'h2',
	            null,
	            'Result: ',
	            this.state.result
	          )
	        )
	      );
	    }
	  }]);
	
	  return RNG;
	}(React.Component);
	
	exports.default = RNG;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import classNames from 'classnames';
	
	var _h1 = function (_React$Component) {
	  _inherits(_h1, _React$Component);
	
	  function _h1(props) {
	    _classCallCheck(this, _h1);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_h1).call(this));
	
	    _this.props = props;
	    return _this;
	  }
	
	  _createClass(_h1, [{
	    key: 'render',
	    value: function render() {
	      var styles = {
	        padding: this.props.padding,
	        color: this.props.color,
	        fontSize: this.props.size
	      };
	      return React.createElement(
	        'h1',
	        { style: styles },
	        this.props.children
	      );
	    }
	  }]);
	
	  return _h1;
	}(React.Component);
	
	var _h2 = function (_React$Component2) {
	  _inherits(_h2, _React$Component2);
	
	  function _h2(props) {
	    _classCallCheck(this, _h2);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(_h2).call(this));
	
	    _this2.props = props;
	    return _this2;
	  }
	
	  _createClass(_h2, [{
	    key: 'render',
	    value: function render() {
	      var styles = {
	        padding: this.props.padding,
	        color: this.props.color,
	        fontSize: this.props.size
	      };
	      return React.createElement(
	        'h2',
	        { style: styles },
	        this.props.children
	      );
	    }
	  }]);
	
	  return _h2;
	}(React.Component);
	
	var _h3 = function (_React$Component3) {
	  _inherits(_h3, _React$Component3);
	
	  function _h3(props) {
	    _classCallCheck(this, _h3);
	
	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(_h3).call(this));
	
	    _this3.props = props;
	    return _this3;
	  }
	
	  _createClass(_h3, [{
	    key: 'render',
	    value: function render() {
	      var styles = {
	        padding: this.props.padding,
	        color: this.props.color,
	        fontSize: this.props.size
	      };
	      return React.createElement(
	        'h3',
	        { style: styles },
	        this.props.children
	      );
	    }
	  }]);
	
	  return _h3;
	}(React.Component);
	
	var _h4 = function (_React$Component4) {
	  _inherits(_h4, _React$Component4);
	
	  function _h4(props) {
	    _classCallCheck(this, _h4);
	
	    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(_h4).call(this));
	
	    _this4.props = props;
	    return _this4;
	  }
	
	  _createClass(_h4, [{
	    key: 'render',
	    value: function render() {
	      var styles = {
	        padding: this.props.padding,
	        color: this.props.color,
	        fontSize: this.props.size
	      };
	      return React.createElement(
	        'h4',
	        { style: styles },
	        this.props.children
	      );
	    }
	  }]);
	
	  return _h4;
	}(React.Component);
	
	var _h5 = function (_React$Component5) {
	  _inherits(_h5, _React$Component5);
	
	  function _h5(props) {
	    _classCallCheck(this, _h5);
	
	    var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(_h5).call(this));
	
	    _this5.props = props;
	    return _this5;
	  }
	
	  _createClass(_h5, [{
	    key: 'render',
	    value: function render() {
	      var styles = {
	        padding: this.props.padding,
	        color: this.props.color,
	        fontSize: this.props.size
	      };
	      return React.createElement(
	        'h5',
	        { style: styles },
	        this.props.children
	      );
	    }
	  }]);
	
	  return _h5;
	}(React.Component);
	
	var _button = function (_React$Component6) {
	  _inherits(_button, _React$Component6);
	
	  function _button(props) {
	    _classCallCheck(this, _button);
	
	    var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(_button).call(this));
	
	    _this6.props = props;
	    return _this6;
	  }
	
	  _createClass(_button, [{
	    key: 'render',
	    value: function render() {
	      var classes = '_button';
	      switch (this.props.type) {
	        case 'sm':
	          classes += ' sm';
	          break;
	        case 'md':
	          classes += ' md';
	          break;
	        case 'lg':
	          classes += ' lg';
	          break;
	        case 'xl':
	          classes += ' xl';
	          break;
	      }
	
	      return React.createElement(
	        'button',
	        { className: classes, onClick: this.props.onClick },
	        this.props.children
	      );
	    }
	  }]);
	
	  return _button;
	}(React.Component);
	
	var _input = function (_React$Component7) {
	  _inherits(_input, _React$Component7);
	
	  function _input(props) {
	    _classCallCheck(this, _input);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(_input).call(this));
	  }
	
	  _createClass(_input, [{
	    key: 'render',
	    value: function render() {
	      var custumStyles = this.props.css;
	      return React.createElement('input', { style: custumStyles,
	        type: this.props.type,
	        className: '_input',
	        value: this.props.value,
	        id: this.props.switch,
	        max: this.props.minmax[1],
	        min: this.props.minmax[0],
	        onChange: this.props.calculate });
	    }
	  }]);
	
	  return _input;
	}(React.Component);
	
	var elements = {
	  H1: _h1,
	  H2: _h2,
	  H3: _h3,
	  H4: _h4,
	  H5: _h5,
	  Button: _button,
	  Input: _input
	
	};
	
	exports.elements = elements;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _actions = __webpack_require__(12);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PositionFixed = function (_React$Component) {
	  _inherits(PositionFixed, _React$Component);
	
	  function PositionFixed(props) {
	    _classCallCheck(this, PositionFixed);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PositionFixed).call(this));
	  }
	
	  _createClass(PositionFixed, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _actions2.default.cache({ id: 'PositionFixed', data: this }, false);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: { position: 'fixed', zIndex: '1000', bottom: '0', right: '0', margin: this.props.margin } },
	        this.props.children
	      );
	    }
	  }]);
	
	  return PositionFixed;
	}(React.Component);
	
	exports.default = PositionFixed;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _debounce = __webpack_require__(19);
	
	var _debounce2 = _interopRequireDefault(_debounce);
	
	var _header = __webpack_require__(2);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Canvas = function (_React$Component) {
	  _inherits(Canvas, _React$Component);
	
	  function Canvas(props) {
	    _classCallCheck(this, Canvas);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Canvas).call(this));
	
	    _this.state = {
	      loaded: false,
	      canvas: null,
	      ctx: null
	    };
	    _this.options = {
	      shape: 'sqaure',
	      amount: 1000,
	      color: 'white'
	    };
	    return _this;
	  }
	
	  _createClass(Canvas, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      cosmos.store.set('Canvas', { component: this, refs: [], data: null });
	      console.log('0');
	      var canvas = this.refs.canvas;
	      canvas.width = window.innerWidth;
	      canvas.height = window.innerHeight;
	      var ctx = canvas.getContext('2d');
	      this.setState({
	        loaded: true,
	        canvas: canvas,
	        ctx: ctx
	      });
	
	      window.addEventListener('resize', (0, _debounce2.default)(this.resizeCanvas, 100, false).bind(this));
	      this.forceUpdate(function () {
	        console.log('canvas', this.props);
	
	        this.resizeCanvas();
	      });
	    }
	  }, {
	    key: 'resizeCanvas',
	    value: function resizeCanvas() {
	
	      this.state.canvas.width = 1920 - 320;
	      this.state.canvas.height = window.innerHeight;
	
	      this.setState({
	        canvas: this.state.canvas
	      });
	      //this.setup(this.draw);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      console.log('hi');
	    }
	  }, {
	    key: 'setup',
	    value: function setup() {
	      var opt = this.options;
	      opt['pixels'] = [];
	      opt['shapes'] = ['circle', 'rectangle', 'triangle', 'square'];
	      var deltaY = 0;
	      var deltaX = 0;
	      while (opt.amount--) {
	        console.log('g');
	        deltaY += 1;
	        deltaX += 1 * 0.2;
	        // opt.pixels.push({
	        //   x:100 + Math.round(Math.random()*window.innerWidth),
	        //   y:100 + Math.round(Math.random()*window.innerHeight),
	        //   shape:Math.floor(Math.random() * opt.shapes.length),
	        //   deltaY:deltaY,
	        //   deltaX:deltaX,
	        //   velocity:Math.floor(Math.random() *100)
	        // });
	        this.state.ctx.fillStyle = 'white';
	        this.state.ctx.fillRect(100 + Math.round(Math.random() * window.innerWidth), 100 + Math.round(Math.random() * window.innerHeight), 10, 50);
	      }
	      console.log(opt.pixels);
	
	      var bloop = function bloop() {
	        // opt.pixels.forEach(function(item){
	        //   console.log(item)
	        // });
	
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return React.createElement('canvas', { className: '_canvas', ref: 'canvas' });
	    }
	  }]);
	
	  return Canvas;
	}(React.Component);
	
	exports.default = Canvas;

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = debounce;
	function debounce(func, wait, immediate) {
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
			if (callNow) func.apply(context, args);
		};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _elements = __webpack_require__(16);
	
	var _axios = __webpack_require__(21);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _uid = __webpack_require__(13);
	
	var _uid2 = _interopRequireDefault(_uid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _window$ReactRouter = window.ReactRouter;
	var Link = _window$ReactRouter.Link;
	var Route = _window$ReactRouter.Route;
	var Router = _window$ReactRouter.Router;
	var H1 = _elements.elements.H1;
	var Button = _elements.elements.Button;
	
	var Ajax = function (_React$Component) {
	  _inherits(Ajax, _React$Component);
	
	  function Ajax(props) {
	    _classCallCheck(this, Ajax);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ajax).call(this));
	
	    _this.state = {
	      isCached: false,
	      isLoaded: false,
	      data: null,
	      flow: null
	    };
	
	    return _this;
	  }
	
	  _createClass(Ajax, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      cosmos.store.set('ajax', { component: this, refs: [], data: null });
	      var self = this;
	      var peeps = [];
	
	      var doWork = function doWork(item, index, array) {
	        peeps.push(React.createElement(
	          'li',
	          { key: (0, _uid2.default)(), style: { padding: '10px' } },
	          React.createElement(
	            'span',
	            null,
	            item.id
	          ),
	          React.createElement(
	            'h4',
	            null,
	            item.name,
	            ' ',
	            item.gender
	          ),
	          React.createElement(
	            'div',
	            null,
	            React.createElement('img', { src: item.picture })
	          ),
	          React.createElement(
	            'h5',
	            null,
	            item.balance
	          ),
	          React.createElement(
	            'p',
	            null,
	            item.about
	          )
	        ));
	        index + 1 === array.length ? self.setState({ data: peeps }) : void 0;
	      };
	      var request = function request(data) {
	        data.data.forEach(doWork);
	        localStorage['ajax'] = JSON.stringify(data);
	      };
	
	      if (localStorage['ajax']) {
	        try {
	          JSON.parse(localStorage['ajax']).forEach(doWork);
	        } catch (e) {
	          _axios2.default.get('DB/people.json').then(request);
	        }
	      } else {
	
	        _axios2.default.get('DB/people.json').then(request);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: '_ajax' },
	        React.createElement(
	          Link,
	          { to: '/' },
	          React.createElement(
	            Button,
	            null,
	            'Back'
	          )
	        ),
	        React.createElement(
	          H1,
	          { padding: 10 },
	          'AJAXIFY IT UP!!!'
	        ),
	        React.createElement(
	          'code',
	          null,
	          'status',
	          React.createElement('br', null),
	          'cached:',
	          this.state.isCached,
	          React.createElement('br', null),
	          'load:',
	          this.state.isLoaded
	        ),
	        React.createElement(
	          'h4',
	          null,
	          'list..'
	        ),
	        React.createElement(
	          'ul',
	          null,
	          this.state.data
	        ),
	        React.createElement('div', null)
	      );
	    }
	  }]);
	
	  return Ajax;
	}(React.Component);
	
	exports.default = Ajax;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(23);
	var utils = __webpack_require__(24);
	var dispatchRequest = __webpack_require__(25);
	var InterceptorManager = __webpack_require__(34);
	var isAbsoluteURL = __webpack_require__(35);
	var combineURLs = __webpack_require__(36);
	var bind = __webpack_require__(37);
	var transformData = __webpack_require__(30);
	
	function Axios(defaultConfig) {
	  this.defaults = utils.merge({}, defaultConfig);
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Don't allow overriding defaults.withCredentials
	  config.withCredentials = config.withCredentials || this.defaults.withCredentials;
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	var defaultInstance = new Axios(defaults);
	var axios = module.exports = bind(Axios.prototype.request, defaultInstance);
	
	axios.create = function create(defaultConfig) {
	  return new Axios(defaultConfig);
	};
	
	// Expose defaults
	axios.defaults = defaultInstance.defaults;
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(38);
	
	// Expose interceptors
	axios.interceptors = defaultInstance.interceptors;
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	  axios[method] = bind(Axios.prototype[method], defaultInstance);
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	  axios[method] = bind(Axios.prototype[method], defaultInstance);
	});


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(24);
	
	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	module.exports = {
	  transformRequest: [function transformResponseJSON(data, headers) {
	    if (utils.isFormData(data)) {
	      return data;
	    }
	    if (utils.isArrayBuffer(data)) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isObject(data) && !utils.isFile(data) && !utils.isBlob(data)) {
	      // Set application/json if no Content-Type has been specified
	      if (!utils.isUndefined(headers)) {
	        utils.forEach(headers, function processContentTypeHeader(val, key) {
	          if (key.toLowerCase() === 'content-type') {
	            headers['Content-Type'] = val;
	          }
	        });
	
	        if (utils.isUndefined(headers['Content-Type'])) {
	          headers['Content-Type'] = 'application/json;charset=utf-8';
	        }
	      }
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponseJSON(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    },
	    patch: utils.merge(DEFAULT_CONTENT_TYPE),
	    post: utils.merge(DEFAULT_CONTENT_TYPE),
	    put: utils.merge(DEFAULT_CONTENT_TYPE)
	  },
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN'
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return toString.call(val) === '[object FormData]';
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  trim: trim
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/**
	 * Dispatch a request to the server using whichever adapter
	 * is supported by the current environment.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  return new Promise(function executor(resolve, reject) {
	    try {
	      var adapter;
	
	      if (typeof config.adapter === 'function') {
	        // For custom adapter support
	        adapter = config.adapter;
	      } else if (typeof XMLHttpRequest !== 'undefined') {
	        // For browsers use XHR adapter
	        adapter = __webpack_require__(27);
	      } else if (typeof process !== 'undefined') {
	        // For node use HTTP adapter
	        adapter = __webpack_require__(27);
	      }
	
	      if (typeof adapter === 'function') {
	        adapter(resolve, reject, config);
	      }
	    } catch (e) {
	      reject(e);
	    }
	  });
	};
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ },
/* 26 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(24);
	var buildURL = __webpack_require__(28);
	var parseHeaders = __webpack_require__(29);
	var transformData = __webpack_require__(30);
	var isURLSameOrigin = __webpack_require__(31);
	var btoa = window.btoa || __webpack_require__(32);
	
	module.exports = function xhrAdapter(resolve, reject, config) {
	  var requestData = config.data;
	  var requestHeaders = config.headers;
	
	  if (utils.isFormData(requestData)) {
	    delete requestHeaders['Content-Type']; // Let the browser set it
	  }
	
	  var request = new XMLHttpRequest();
	
	  // For IE 8/9 CORS support
	  // Only supports POST and GET calls and doesn't returns the response headers.
	  if (window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
	    request = new window.XDomainRequest();
	  }
	
	  // HTTP basic authentication
	  if (config.auth) {
	    var username = config.auth.username || '';
	    var password = config.auth.password || '';
	    requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	  }
	
	  request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	  // Set the request timeout in MS
	  request.timeout = config.timeout;
	
	  // Listen for ready state
	  request.onload = function handleLoad() {
	    if (!request) {
	      return;
	    }
	    // Prepare the response
	    var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	    var responseData = ['text', ''].indexOf(config.responseType || '') !== -1 ? request.responseText : request.response;
	    var response = {
	      data: transformData(
	        responseData,
	        responseHeaders,
	        config.transformResponse
	      ),
	      // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	      status: request.status === 1223 ? 204 : request.status,
	      statusText: request.status === 1223 ? 'No Content' : request.statusText,
	      headers: responseHeaders,
	      config: config
	    };
	
	    // Resolve or reject the Promise based on the status
	    ((response.status >= 200 && response.status < 300) ||
	     (!('status' in request) && response.responseText) ?
	      resolve :
	      reject)(response);
	
	    // Clean up request
	    request = null;
	  };
	
	  // Handle low level network errors
	  request.onerror = function handleError() {
	    // Real errors are hidden from us by the browser
	    // onerror should only fire if it's a network error
	    reject(new Error('Network Error'));
	
	    // Clean up request
	    request = null;
	  };
	
	  // Add xsrf header
	  // This is only done if running in a standard browser environment.
	  // Specifically not if we're in a web worker, or react-native.
	  if (utils.isStandardBrowserEnv()) {
	    var cookies = __webpack_require__(33);
	
	    // Add xsrf header
	    var xsrfValue = config.withCredentials || isURLSameOrigin(config.url) ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;
	
	    if (xsrfValue) {
	      requestHeaders[config.xsrfHeaderName] = xsrfValue;
	    }
	  }
	
	  // Add headers to the request
	  if ('setRequestHeader' in request) {
	    utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	      if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	        // Remove Content-Type if data is undefined
	        delete requestHeaders[key];
	      } else {
	        // Otherwise add header to the request
	        request.setRequestHeader(key, val);
	      }
	    });
	  }
	
	  // Add withCredentials to request if needed
	  if (config.withCredentials) {
	    request.withCredentials = true;
	  }
	
	  // Add responseType to request if needed
	  if (config.responseType) {
	    try {
	      request.responseType = config.responseType;
	    } catch (e) {
	      if (request.responseType !== 'json') {
	        throw e;
	      }
	    }
	  }
	
	  if (utils.isArrayBuffer(requestData)) {
	    requestData = new DataView(requestData);
	  }
	
	  // Send the request
	  request.send(requestData);
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(24);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};
	


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(24);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(24);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(24);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function InvalidCharacterError(message) {
	  this.message = message;
	}
	InvalidCharacterError.prototype = new Error;
	InvalidCharacterError.prototype.code = 5;
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new InvalidCharacterError('INVALID_CHARACTER_ERR: DOM Exception 5');
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(24);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(24);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _loremIpsumSample = __webpack_require__(40);
	
	var _elements = __webpack_require__(16);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = _elements.elements.Input;
	var Button = _elements.elements.Button;
	
	var LoremIpsum = function (_React$Component) {
	  _inherits(LoremIpsum, _React$Component);
	
	  function LoremIpsum(props) {
	    _classCallCheck(this, LoremIpsum);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoremIpsum).call(this));
	
	    _this.state = {
	      base: 1,
	      step: 1,
	      multi: 1,
	      output: 'click to generate some text'
	    };
	    return _this;
	  }
	
	  _createClass(LoremIpsum, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      cosmos.store.set('LoremIpsum', { component: this, refs: [], data: null });
	    }
	  }, {
	    key: 'base',
	    value: function base(input) {
	      if (input.vale < 1) {
	        this.state.base = 1;
	      } else if (input.value > 500) {
	        this.state.base = 500;
	      } else {
	        this.state.base = parseInt(input.value);
	      }
	    }
	  }, {
	    key: 'step',
	    value: function step(input) {
	      if (input.vale < 1) {
	        this.state.step = 1;
	      } else if (input.value > 10) {
	        this.state.step = 10;
	      } else {
	        this.state.step = parseInt(input.value);
	      }
	    }
	  }, {
	    key: 'multi',
	    value: function multi(input) {
	      if (input.vale < 1) {
	        this.state.multi = 1;
	      } else if (input.value > 10) {
	        this.state.multi = 10;
	      } else {
	        this.state.multi = parseInt(input.value);
	      }
	    }
	  }, {
	    key: 'generate',
	    value: function generate(inputs) {
	      var target = inputs.target;
	      switch (target.id) {
	        case 'base':
	          this.base(target);
	          break;
	        case 'step':
	          this.step(target);
	          break;
	        case 'multi':
	          this.multi(target);
	      }
	      this.forceUpdate();
	      console.info(this.state, inputs.target.value);
	    }
	  }, {
	    key: 'output',
	    value: function output() {
	
	      var chunk = [];
	      var amount = undefined;
	      var self = this;
	      var wait = false;
	      var timeout = undefined;
	
	      for (var i = 0; i < this.state.step; i++) {
	        console.log('hi', i, this.state.base);
	
	        //  chunk.push(clean[Math.floor(Math.random()*clean.length)])
	        // chunk.push(
	        //   clean.splice(i,this.state.step).toString()
	        // );
	
	        for (var a = 0; a < this.state.base; a++) {
	
	          chunk.push(_loremIpsumSample.clean.slice(a, this.state.base).toString());
	        }
	      }
	      for (var multi = 0; multi < this.state.multi; multi++) {
	        var c = chunk.slice(0);
	        chunk[chunk.length - 1] = chunk.toString();
	      }
	
	      var final = chunk.toString().replace(/,/gm, ' ');
	      this.setState({
	        output: final
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'label',
	          null,
	          'Base:'
	        ),
	        React.createElement(Input, { type: 'number', minmax: [1, 500], value: this.state.base, 'switch': 'base', calculate: this.generate.bind(this) }),
	        React.createElement(
	          'label',
	          null,
	          'amount per base:'
	        ),
	        React.createElement(Input, { type: 'number', minmax: [1, 10], value: this.state.step, 'switch': 'step', calculate: this.generate.bind(this) }),
	        React.createElement(
	          'label',
	          null,
	          'Multipleyer on base:'
	        ),
	        React.createElement(Input, { type: 'number', minmax: [1, 10], value: this.state.multi, 'switch': 'multi', calculate: this.generate.bind(this) }),
	        React.createElement(
	          Button,
	          { clicked: this.output.bind(this) },
	          'GENERATE'
	        ),
	        React.createElement(
	          'p',
	          null,
	          this.state.output
	        )
	      );
	    }
	  }]);
	
	  return LoremIpsum;
	}(React.Component);
	
	exports.default = LoremIpsum;

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var lorem = 'Lorem. ipsum dolor sit amet, consectetur adipisicing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum\ndolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\nsunt in culpa qui officia deserunt mollit anim id est laborum.\nCurabitur efficitur sagittis ornare. Donec suscipit mi lacus, eget sagittis lectus vehicula quis.\n Nullam tellus libero, mattis vel facilisis eu, eleifend et nisi. Phasellus sed urna leo.\n  Donec luctus venenatis risus, tristique tristique arcu euismod quis. Nullam ac viverra nulla.\n  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n  Nulla fermentum erat in porttitor pellentesque. Aliquam erat volutpat. Proin dictum et ligula a\ndignissim. Integer vestibulum diam at ex venenatis, sit amet bibendum lorem viverra.\nAenean a arcu et dolor tincidunt dignissim\n';
	var clean = lorem.split(' ');
	
	exports.clean = clean;

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Lsystem = function (_React$Component) {
	  _inherits(Lsystem, _React$Component);
	
	  function Lsystem(props) {
	    _classCallCheck(this, Lsystem);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Lsystem).call(this));
	  }
	
	  _createClass(Lsystem, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      cosmos.store.set('Lsystem', { component: this, refs: [], data: null });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('div', null);
	    }
	  }]);
	
	  return Lsystem;
	}(React.Component);
	
	exports.default = Lsystem;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _elements = __webpack_require__(16);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = _elements.elements.Button;
	
	var RNGcolor = function (_React$Component) {
	  _inherits(RNGcolor, _React$Component);
	
	  function RNGcolor(props) {
	    _classCallCheck(this, RNGcolor);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RNGcolor).call(this));
	
	    _this.state = {
	      result: '#fff',
	      type: 'RGB',
	      background: null,
	      position: 0
	    };
	    _this.arc = 0.01;
	    _this.angle = 0;
	    return _this;
	  }
	
	  _createClass(RNGcolor, [{
	    key: 'mouseController',
	    value: function mouseController(e) {
	      console.log(e[0].clientX);
	      if (e[0].clientX >= this.colorWheel.wheel.x) {
	        this.arc += 10;
	        var centerX = this.colorWheel.wheel.width / 2 + Math.cos(this.angle) * this.colorWheel.wheel.height;
	        var centerY = this.colorWheel.wheel.height / 2 + Math.sin(this.angle) * this.colorWheel.wheel.width;
	        var sinX = e[0].clientX - this.colorWheel.wheel.width * this.arc;
	
	        this.colorWheel.wheel.elm.style.transform = 'translate(' + centerX + 'px, ' + centerY + 'px)';
	
	        console.log(this.colorWheel.wheel.elm.style.transform);
	        this.angle += this.arc;
	      }
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      cosmos.store.set('RNGcolor', { component: this, refs: [], data: null });
	      this.colorWheel = {
	        wheel: {
	          elm: this.refs.wheel,
	          x: this.refs.wheel.offsetLeft,
	          y: this.refs.wheel.offsetTop,
	          width: this.refs.wheel.offsetWidth,
	          height: this.refs.wheel.offsetHeight
	        },
	        thumb: {
	          elm: this.refs.thumb,
	          x: this.refs.thumb.offsetLeft,
	          y: this.refs.thumb.offsetTop,
	          width: this.refs.thumb.offsetWidth,
	          height: this.refs.thumb.offsetHeight
	
	        }
	      };
	      document.addEventListener('mousemove', cosmos.throttle(this.mouseController.bind(this), 100));
	      console.log(this.colorWheel.wheel);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //this.init();
	      this.setType(this.state.type);
	    }
	  }, {
	    key: 'setType',
	    value: function setType(option) {
	      try {
	        this.state.type = option.target.value;
	      } catch (err) {
	        this.state.type = option;
	      }
	      console.log('-->', this.state.type);
	      switch (this.state.type) {
	        case 'RGB':
	          this.rgb();
	          break;
	        case 'HEX':
	          this.hex();
	          break;
	        case 'hsl'.toUpperCase():
	          this.hsl();
	          break;
	      }
	    }
	  }, {
	    key: 'updateResult',
	    value: function updateResult() {
	
	      this.setType(this.state.type);
	    }
	  }, {
	    key: 'rgb',
	    value: function rgb() {
	      var rgb = undefined;
	      var startingValue = 0;
	      var red = Math.round(Math.random() * 255);
	      var green = Math.round(Math.random() * 255);
	      var blue = Math.round(Math.random() * 255);
	      console.log(red, green);
	      this.setState({
	        result: 'rgb(' + red + ' , ' + green + ' , ' + blue + ')'
	      });
	    }
	  }, {
	    key: 'hex',
	    value: function hex() {
	      var hex = '1234567890ABCDEF'.split('');
	      var result = '#';
	
	      var generateHex = function generateHex() {
	        for (var i = 0; i < 6; i++) {
	          result += hex[Math.floor(Math.random() * 16)];
	        }
	        return result;
	      };
	
	      this.setState({
	        result: generateHex()
	      });
	    }
	  }, {
	    key: 'hsl',
	    value: function hsl() {
	      var hue = Math.floor(Math.random() * 1000);
	      var saturation = Math.round(Math.random() * 100);
	      var lightness = Math.round(50 + Math.random() * 10);
	
	      var hsl = 'hsl(' + hue + ' , ' + saturation + '% , ' + lightness + '%)';
	      this.setState({
	        result: hsl
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: '_rng-color', style: { background: this.state.result } },
	        React.createElement(
	          Button,
	          { onClick: this.updateResult.bind(this) },
	          'GENERATE!!!!'
	        ),
	        React.createElement(
	          'label',
	          null,
	          'type'
	        ),
	        React.createElement(
	          'select',
	          { onChange: this.setType.bind(this) },
	          React.createElement(
	            'option',
	            { value: 'RGB' },
	            'RGB'
	          ),
	          React.createElement(
	            'option',
	            { value: 'HEX' },
	            'HEX'
	          ),
	          React.createElement(
	            'option',
	            { value: 'HSL' },
	            'HSL'
	          )
	        ),
	        React.createElement(
	          'h1',
	          null,
	          this.state.result
	        )
	      );
	    }
	  }]);
	
	  return RNGcolor;
	}(React.Component);
	
	exports.default = RNGcolor;

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ImgManip = function (_React$Component) {
	  _inherits(ImgManip, _React$Component);
	
	  function ImgManip(props) {
	    _classCallCheck(this, ImgManip);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImgManip).call(this));
	  }
	
	  _createClass(ImgManip, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      cosmos.store.set('ImgManip', { component: this, refs: [], data: null });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('div', null);
	    }
	  }]);
	
	  return ImgManip;
	}(React.Component);
	
	exports.default = ImgManip;

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BinaryText = function (_React$Component) {
	  _inherits(BinaryText, _React$Component);
	
	  function BinaryText(props) {
	    _classCallCheck(this, BinaryText);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BinaryText).call(this));
	  }
	
	  _createClass(BinaryText, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      cosmos.store.set('BinaryText', { component: this, refs: [], data: null });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('div', null);
	    }
	  }]);
	
	  return BinaryText;
	}(React.Component);
	
	exports.default = BinaryText;

/***/ }
/******/ ]);
//# sourceMappingURL=Components.js.map
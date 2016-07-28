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

	
	var core = __webpack_require__(1);
	var Header = __webpack_require__(2);
	//var Header = reqiuredDirectory('./compontents/header');
	//var Footer = reqiuredDirectory('./compontents/footer');
	//var dataFlow = reqiuredDirectory('./compontents/data flow');
	//var Menu = reqiuredDirectory('./compontents/menu');
	//var Layout = reqiuredDirectory('./compontents/layout');
	//var twitter = reqiuredDirectory('./compontents/twitter');
	///var ui = reqiuredDirectory('./compontents/ui');


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	//var tools = require('../external/utils');
	//--COMPONENTS

	//var reqiuredDirectdory = require.context('./header' ,false ,/\.jsx$/);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	;(function (window) {
	    var Core = function () {
	        function Core(dd) {
	            _classCallCheck(this, Core);

	            this.cosmos = window.cosmos;
	            this.reloadCounter();
	        }

	        _createClass(Core, [{
	            key: 'reloadCounter',
	            value: function reloadCounter() {

	                if (!localStorage.reloadCount) {
	                    localStorage.reloadCount = 0;
	                }

	                var reloads = parseInt(localStorage.reloadCount) + 1;
	                console.log('ran');

	                localStorage.reloadCount = reloads;
	                this.cosmos.info.count = reloads;
	            }
	        }]);

	        return Core;
	    }();

	    var core = new Core();
	})(window);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Layout = __webpack_require__(3);
	var HeaderLayout = __webpack_require__(4);
	console.log(ReactDOM);(function () {
	    var Header = function (_React$Component) {
	        _inherits(Header, _React$Component);

	        function Header(props) {
	            _classCallCheck(this, Header);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this));
	        }

	        _createClass(Header, [{
	            key: 'render',
	            value: function render() {
	                return React.createElement(
	                    Layout,
	                    { type: 'row', width: '100%', height: '100px', flex: true, ref: 'layout' },
	                    React.createElement(HeaderLayout, null)
	                );
	            }
	        }]);

	        return Header;
	    }(React.Component);

	    Header.defaultProps = {
	        stuff: 'dam'
	    };

	    ReactDOM.render(React.createElement(Header, null), document.getElementById('header'));
	    module.exports = Header;
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function () {
	    var Layout = function (_React$Component) {
	        _inherits(Layout, _React$Component);

	        function Layout(props) {
	            _classCallCheck(this, Layout);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).call(this));

	            _this.props = props;
	            console.log(_this.refs, 's');

	            _this.state = {
	                parentFlex: null,
	                childFlex: null
	            };

	            var options = ['row', 'column', 'row-reverse', 'column-reverse'];
	            _this.applyedStyles = {
	                display: 'flex'

	            };
	            var CSS_Units = /\d[0-9]{0,5}[px|em|%|rem|vh|vw]+/;

	            if (~options.indexOf(props.type)) {
	                _this.applyedStyles['flexDirection'] = props.type;
	            }

	            if (props.width.match(CSS_Units) && props.height.match(CSS_Units)) {
	                _this.applyedStyles['width'] = props.width;
	                _this.applyedStyles['height'] = props.height;
	            } else {
	                console.error('Layout:  -> Invaild width/height');
	            }

	            return _this;
	        }

	        _createClass(Layout, [{
	            key: 'componentDidMount',
	            value: function componentDidMount() {
	                if (this.props.flex) {
	                    if (this.refs.layout.parentElement.hasAttribute('flex')) {

	                        this.setState({
	                            parentFlex: true,
	                            childFlex: true
	                        });
	                        console.log('yes');
	                    } else {
	                        this.setState({
	                            parentFlex: false,
	                            childFlex: true
	                        });
	                        console.log('no', this.props.children);
	                    }
	                }

	                this.props.status = this.state;
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                return React.createElement(
	                    'div',
	                    { style: this.applyedStyles, ref: 'layout' },
	                    this.props.children
	                );
	            }
	        }]);

	        return Layout;
	    }(React.Component);

	    module.exports = Layout;
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderLayout = function (_React$Component) {
	    _inherits(HeaderLayout, _React$Component);

	    function HeaderLayout(props) {
	        _classCallCheck(this, HeaderLayout);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderLayout).call(this));

	        _this.state = {
	            transform: 'translate(0,0)'
	        };

	        _this.styles = {
	            width: 'inherit',
	            height: 'inherit',
	            background: '#222',
	            boxShadow: '0px 0px 10px'

	        };

	        return _this;
	    }

	    _createClass(HeaderLayout, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { style: this.styles, key: 'header', ref: 'header_container' },
	                React.createElement(
	                    'h1',
	                    { style: this.state },
	                    'i dont feel good'
	                )
	            );
	        }
	    }]);

	    return HeaderLayout;
	}(React.Component);

	module.exports = HeaderLayout;

/***/ }
/******/ ]);
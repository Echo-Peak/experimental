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
	
	var _namespace = __webpack_require__(1);
	
	var _helpers = __webpack_require__(3);
	
	var stringHelpers = _interopRequireWildcard(_helpers);
	
	var _util = __webpack_require__(4);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _events = __webpack_require__(10);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _router = __webpack_require__(13);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _data = __webpack_require__(22);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _controller = __webpack_require__(24);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _menu = __webpack_require__(25);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _header = __webpack_require__(31);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _themes = __webpack_require__(39);
	
	var _themes2 = _interopRequireDefault(_themes);
	
	var _footer = __webpack_require__(44);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _overlay = __webpack_require__(47);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	var _siteSettings = __webpack_require__(51);
	
	var _siteSettings2 = _interopRequireDefault(_siteSettings);
	
	var _templateInjector = __webpack_require__(56);
	
	var _templateInjector2 = _interopRequireDefault(_templateInjector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	_namespace.Concepts.stores.create('Proto');
	_namespace.Concepts.stores.create('States');
	
	_namespace.Concepts['modules-loaded'] = [
	//dependancys
	'ui.router', 'ngAnimate', 'ngMaterial',
	//templateCache
	'templates',
	//data / tools
	_data2.default, _themes2.default, _events2.default, _util2.default, _templateInjector2.default,
	//components/modules
	_router2.default, _header2.default, _footer2.default, _menu2.default, _overlay2.default, _siteSettings2.default];
	
	angular.module('app', _namespace.Concepts['modules-loaded']).controller('GLOBAL', ['$scope', '$state', '$themes', '$rootScope', '$timeout', '$mdUtil', 'windowResizeEvent', _controller2.default]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Concepts = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _Store = __webpack_require__(2);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.Concepts = {
	    Modules: {},
	    info: {
	        http: {}
	    },
	    toArray: function toArray(arrayLikeObject) {
	        //convert Array like objects to Array objects
	        return Array.prototype.slice.call(arrayLikeObject);
	    },
	    validateObject: function validateObject(_object) {
	        if ((typeof _object === 'undefined' ? 'undefined' : _typeof(_object)) == 'object' && _object !== null) {
	            var objLength = Object.keys(_object);
	            if (objLength.length) {
	                return true;
	            } else {
	                return false;
	            }
	        } else {
	            return false;
	        }
	    },
	    info: {
	        times_reloaded: localStorage.reloadCount,
	        $themes_enabled: localStorage.$themeIsEnabled,
	        current_theme: localStorage.$theme
	
	    },
	    throttle: function throttle(callback, delay, context) {
	        var wait = false;
	        var context = context;
	        if (!context) {
	            context = null;
	        }
	        return function () {
	            if (!wait) {
	                callback.apply(null, arguments);
	                wait = true;
	                setTimeout(function () {
	
	                    wait = false;
	                }, delay);
	            }
	        };
	    },
	    debounce: function debounce(callback, delay, immediate) {
	        var timeout;
	        return function () {
	            var context = this,
	                args = arguments;
	            var later = function later() {
	                timeout = null;
	                !immediate && callback.call(context);
	            };
	            var callNow = immediate && !timeout;
	            clearTimeout(timeout);
	            timeout = setTimeout(later, delay);
	            callNow && callback.call(context);
	        };
	    },
	    stores: new _Store2.default()
	};
	
	var Concepts = exports.Concepts = window.Concepts;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Store = function () {
	  function Store() {
	    var _this = this;
	
	    _classCallCheck(this, Store);
	
	    this._store = {};
	    this.sets = {};
	    this.memorize = [];
	    this.error = function (msg) {
	      console.error(msg);
	    };
	    this.create = function (storeName) {
	      var validStoreName = storeName;
	
	      if (typeof validStoreName == 'string' && validStoreName.length) {
	        var privateObjects = Object.keys(_this);
	        var privateProto = Object.keys(Store.prototype);
	        var _private = privateObjects.concat(privateProto);
	        if (_private.indexOf(validStoreName) >= 0) {
	          throw new Error("'" + validStoreName + "'" + ' exists on Store prototype, can not overwrite');
	        }
	        _this._store[validStoreName] = {};
	        _this[validStoreName] = function (key, data) {
	          if (typeof key === 'string' && key.length) {
	
	            this._store[validStoreName][key] = data;
	            return this._store[validStoreName];
	          } else {
	            console.error("Invaild key:'" + key + "', expected string.");
	          }
	        };
	      } else {
	        _this.error('invalid store name');
	      }
	
	      return _this;
	    };
	  }
	
	  _createClass(Store, [{
	    key: "getStore",
	    value: function getStore(storeName) {
	      return this._store[storeName];
	    }
	  }, {
	    key: "info",
	    value: function info() {
	      var temp = Object.assign({}, this._store);
	      var keys = Object.keys(temp);
	      var size = JSON.stringify(temp).length * 16 / (8 * 1024);
	      return "Store length: " + keys.length + " | Keys: " + keys + " | size:" + size.toFixed(2) + "KB";
	    }
	  }, {
	    key: "bounce",
	    value: function bounce(to, msg, fn) {
	      this[to](msg, fn());
	    }
	  }, {
	    key: "stores",
	    value: function stores() {
	      return this._store;
	    }
	  }, {
	    key: "createSet",
	    value: function createSet(key) {
	      this.sets[key] = new Set();
	    }
	  }, {
	    key: "Set",
	    value: function Set(key) {
	      var _keys = Object.keys(this.sets);
	      console.log(_keys, key, this.sets);
	      if (! ~_keys.indexOf(key)) {
	
	        console.error("'" + key + "'", 'no such Set');
	      } else {
	
	        return this.sets[key];
	      }
	    }
	  }, {
	    key: "mem",
	    value: function mem(key, value) {
	      this.memorize.push({ key: key, value: value });
	      return this;
	    }
	  }, {
	    key: "memGet",
	    value: function memGet(key) {
	      var _this2 = this;
	
	      var ready = [];
	
	      this.memorize.forEach(function (item, index) {
	        if (key == item.key) {
	          ready.push(_this2.memorize[index]);
	        }
	      });
	      return ready;
	    }
	  }]);
	
	  return Store;
	}();

	exports.default = Store;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = countPageReloads;
	
	exports.default = String.prototype.toCamelCase = function (text) {
	  var newString = '';
	  var words = /\w+/g;
	  var string = this;
	  var eachWords = string.match(words);
	  var firstword = undefined;
	  eachWords.forEach(function (word, index) {
	    firstword = eachWords[0];
	    if (index) {
	      var temp = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
	      newString += temp;
	    }
	  });
	  return firstword + newString;
	};
	
	exports.default = String.prototype.toTitleCase = function (text) {
	  var newString = '';
	  var words = /\w+/g;
	  var string = this;
	  var eachWords = string.match(words);
	  eachWords.forEach(function (word) {
	    var temp = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
	    newString += temp + ' ';
	  });
	  return newString.replace(/\W$/, '');
	};
	//returns a boolean if a vaule is in array or not
	
	
	exports.default = Array.prototype.inArray = function (itemInArray) {
	  for (var i = 0; i < this.length; i++) {
	    return ~this.indexOf(itemInArray) ? true : false;
	  }
	};
	
	function countPageReloads() {
	  if (!localStorage.reloadCount) {
	    localStorage.reloadCount = 0;
	  }
	  var getReloadCount = localStorage.getItem('reloadCount');
	  var b = parseInt(getReloadCount);
	  localStorage.reloadCount = b + 1;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _FAGenerator = __webpack_require__(5);
	
	var _FAGenerator2 = _interopRequireDefault(_FAGenerator);
	
	var _gesture = __webpack_require__(7);
	
	var _gesture2 = _interopRequireDefault(_gesture);
	
	var _loremIpsumGenerator = __webpack_require__(8);
	
	var _loremIpsumGenerator2 = _interopRequireDefault(_loremIpsumGenerator);
	
	var _preventScroll = __webpack_require__(9);
	
	var _preventScroll2 = _interopRequireDefault(_preventScroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Concepts.Modules.util = angular.module('util', []).directive('loremIpsum', _loremIpsumGenerator2.default).constant('FA_gen', _FAGenerator2.default).directive('gesture', _gesture2.default).service('preventScroll', _preventScroll2.default);exports.default = Concepts.Modules.util.name;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return _faArray.FAarray[Math.floor(Math.random() * _faArray.FAarray.length)];
	};
	
	var _faArray = __webpack_require__(6);

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FAarray = exports.FAarray = ["adjust", "anchor", "archive", "area-chart", "arrows", "arrows-h", "arrows-v", "asterisk", "at", "automobile", "balance-scale", "ban", "bank", "bar-chart", "bar-chart-o", "barcode", "bars", "battery-0", "battery-1", "battery-2", "battery-3", "battery-4", "battery-empty", "battery-full", "battery-half", "battery-quarter", "battery-three-quarters", "bed", "beer", "bell", "bell-o", "bell-slash", "bell-slash-o", "bicycle", "binoculars", "birthday-cake", "bluetooth", "bluetooth-b", "bolt", "bomb", "book", "bookmark", "bookmark-o", "briefcase", "bug", "building", "building-o", "bullhorn", "bullseye", "bus", "cab", "calculator", "calendar", "calendar-check-o", "calendar-minus-o", "calendar-o", "calendar-plus-o", "calendar-times-o", "camera", "camera-retro", "car", "caret-square-o-down", "caret-square-o-left", "caret-square-o-right", "caret-square-o-up", "cart-arrow-down", "cart-plus", "cc", "certificate", "check", "check-circle", "check-circle-o", "check-square", "check-square-o", "child", "circle", "circle-o", "circle-o-notch", "circle-thin", "clock-o", "clone", "close", "cloud", "cloud-download", "cloud-upload", "code", "code-fork", "coffee", "cog", "cogs", "comment", "comment-o", "commenting", "commenting-o", "comments", "comments-o", "compass", "copyright", "creative-commons", "credit-card", "credit-card-alt", "crop", "crosshairs", "cube", "cubes", "cutlery", "dashboard", "database", "desktop", "diamond", "dot-circle-o", "download", "edit", "ellipsis-h", "ellipsis-v", "envelope", "envelope-o", "envelope-square", "eraser", "exchange", "exclamation", "exclamation-circle", "exclamation-triangle", "external-link", "external-link-square", "eye", "eye-slash", "eyedropper", "fax", "feed", "female", "fighter-jet", "file-archive-o", "file-audio-o", "file-code-o", "file-excel-o", "file-image-o", "file-movie-o", "file-pdf-o", "file-photo-o", "file-picture-o", "file-powerpoint-o", "file-sound-o", "file-video-o", "file-word-o", "file-zip-o", "film", "filter", "fire", "fire-extinguisher", "flag", "flag-checkered", "flag-o", "flash", "flask", "folder", "folder-o", "folder-open", "folder-open-o", "frown-o", "futbol-o", "gamepad", "gavel", "gear", "gears", "gift", "glass", "globe", "graduation-cap", "group", "hand-grab-o", "hand-lizard-o", "hand-paper-o", "hand-peace-o", "hand-pointer-o", "hand-rock-o", "hand-scissors-o", "hand-spock-o", "hand-stop-o", "hashtag", "hdd-o", "headphones", "heart", "heart-o", "heartbeat", "history", "home", "hotel", "hourglass", "hourglass-1", "hourglass-2", "hourglass-3", "hourglass-end", "hourglass-half", "hourglass-o", "hourglass-start", "i-cursor", "image", "inbox", "industry", "info", "info-circle", "institution", "key", "keyboard-o", "language", "laptop", "leaf", "legal", "lemon-o", "level-down", "level-up", "life-bouy", "life-buoy", "life-ring", "life-saver", "lightbulb-o", "line-chart", "location-arrow", "lock", "magic", "magnet", "mail-forward", "mail-reply", "mail-reply-all", "male", "map", "map-marker", "map-o", "map-pin", "map-signs", "meh-o", "microphone", "microphone-slash", "minus", "minus-circle", "minus-square", "minus-square-o", "mobile", "mobile-phone", "money", "moon-o", "mortar-board", "motorcycle", "mouse-pointer", "music", "navicon", "newspaper-o", "object-group", "object-ungroup", "paint-brush", "paper-plane", "paper-plane-o", "paw", "pencil", "pencil-square", "pencil-square-o", "percent", "phone", "phone-square", "photo", "picture-o", "pie-chart", "plane", "plug", "plus", "plus-circle", "plus-square", "plus-square-o", "power-off", "print", "puzzle-piece", "qrcode", "question", "question-circle", "quote-left", "quote-right", "random", "recycle", "refresh", "registered", "remove", "reorder", "reply", "reply-all", "retweet", "road", "rocket", "rss", "rss-square", "search", "search-minus", "search-plus", "send", "send-o", "server", "share", "share-alt", "share-alt-square", "share-square", "share-square-o", "shield", "ship", "shopping-bag", "shopping-basket", "shopping-cart", "sign-in", "sign-out", "signal", "sitemap", "sliders", "smile-o", "soccer-ball-o", "sort", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-asc", "sort-desc", "sort-down", "sort-numeric-asc", "sort-numeric-desc", "sort-up", "space-shuttle", "spinner", "spoon", "square", "square-o", "star", "star-half", "star-half-empty", "star-half-full", "star-half-o", "star-o", "sticky-note", "sticky-note-o", "street-view", "suitcase", "sun-o", "support", "tablet", "tachometer", "tag", "tags", "tasks", "taxi", "television", "terminal", "thumb-tack", "thumbs-down", "thumbs-o-down", "thumbs-o-up", "thumbs-up", "ticket", "times", "times-circle", "times-circle-o", "tint", "toggle-down", "toggle-left", "toggle-off", "toggle-on", "toggle-right", "toggle-up", "trademark", "trash", "trash-o", "tree", "trophy", "truck", "tty", "tv", "umbrella", "university", "unlock", "unlock-alt", "unsorted", "upload", "user", "user-plus", "user-secret", "user-times", "users", "video-camera", "volume-down", "volume-off", "volume-up", "warning", "wheelchair", "wifi", "wrench"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = appGesture;
	function appGesture($state) {
	
	    return {
	        scope: {
	            appGesture: '@'
	        },
	        link: function link(scope, elm, attr) {
	            var w = 0;
	            //console.log(attr.appGesture ,'appGesture' ,'stufffffffff');
	
	            var movement = undefined;
	            var deltaX = 100;
	            var deltaY = 50;
	            var options = {
	                //enterfunctions here to apply
	                left: function left() {
	                    //alert('up')
	                    $state.go('root.home');
	                    //TweenMax.fromTo(elm[0],2,{backgroundColor:'red'} ,{backgroundColor:'#fc2'})
	                }
	            };
	            var gesture = {
	
	                horizontal: function horizontal(e) {
	                    movement = e.changedTouches[0].clientX;
	                    //alert('mouse down')
	                    console.log(e);
	                },
	
	                vertical: function vertical(e) {
	
	                    //movement = e.clientY
	                },
	                left: function left(e) {
	                    // alert('left')
	
	                    var diff1 = movement - e.changedTouches[0].clientX;
	                    if (diff1 > deltaX) {
	
	                        options.left();
	                    }
	                    // debugger;
	                },
	                right: function right(e) {
	                    var diff2 = e.clientX - movement;
	                    if (diff2 > deltaX) {
	                        options.right();
	                    }
	                },
	                up: function up(e) {
	                    var diff3 = movement - e.clientY;
	                    if (diff3 > deltaY) {
	                        options.up();
	                    }
	                },
	                down: function down(e) {
	                    var diff4 = e.clientY - movement;
	
	                    if (diff4 > deltaY) {
	
	                        return options.down();
	                    }
	                }
	            };
	            switch (attr.appGesture) {
	
	                case 'left':
	                    elm[0].addEventListener('touchstart', gesture.horizontal, false);elm[0].addEventListener('touchend', gesture.left);
	                    break;
	                case 'right':
	                    elm[0].addEventListener('mousedown', gesture.horizontal);elm[0].addEventListener('mouseup', gesture.right);
	                    break;
	                case 'up':
	                    elm[0].addEventListener('mousedown', gesture.vertical);elm[0].addEventListener('mouseup', gesture.up);
	                    break;
	                case 'down':
	                    elm[0].addEventListener('mousedown', gesture.vertical);elm[0].addEventListener('mouseup', gesture.down);
	
	            }
	        }
	    };
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = loremIpsum;
	function loremIpsum() {
	    var loremArray = ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.", "Donec", "a", "erat", "augue.", "Suspendisse", "rutrum", "felis", "risus,", "at", "dictum", "mauris", "pulvinar", "ac.", "Ut", "bibendum,", "lorem", "vitae", "vehicula", "tempus,", "quam", "ante", "mattis", "erat,", "ac", "tristique", "sapien", "quam", "quis", "nisi.", "Donec", "et", "nisl", "bibendum,", "condimentum", "velit", "a,", "aliquam", "dolor.", "Pellentesque", "venenatis", "bibendum", "ex", "at", "dictum.", "Donec", "eros", "turpis,", "commodo", "et", "imperdiet", "et,", "malesuada", "nec", "magna.", "Sed", "ornare", "aliquet", "tellus,", "sed", "elementum", "nulla", "congue", "eget.", "In", "hendrerit", "gravida", "ligula", "quis", "malesuada.", "Integer", "tempus", "mattis", "suscipit.", "Nullam", "ornare", "lorem", "et", "mauris", "porttitor", "lobortis.", "Donec", "sem", "enim,", "efficitur", "eget", "tortor", "quis,", "auctor", "iaculis", "sapien.", "Pellentesque", "habitant."];
	    var copy = loremArray.slice(0);
	
	    return {
	        restric: 'EA',
	        //scope:{},
	        replace: true,
	
	        link: function link(scope, elm, attr) {
	            //attrs available | amount , type , multiplyer
	            attr.amount = attr.amount || 5;
	            attr.multiplyer = attr.multiplyer || 1;
	            attr.type = attr.type || 'p';
	            elm[0].style.color = attr.color || 'white';
	
	            var restrictedTags = ['body', 'head', 'script', 'iframe', 'html'];
	            var tag = document.createElement(attr.type);
	            if (~restrictedTags.indexOf(attr.type)) {
	
	                console.error('cant create element you silly goose');
	                throw new Error('cant create element');
	            }
	            var blob = [];
	            var generate = function generate() {
	
	                for (var i = 0; i < attr.amount * attr.multiplyer; i++) {
	                    var getRandomIndex = Math.floor(Math.random() * copy.length);
	                    blob.push(copy[getRandomIndex]);
	                }
	                JSON.stringify(blob);
	
	                return blob.toString().replace(/,/g, ' ');
	            };
	            tag.innerHTML = generate();
	            elm[0].appendChild(tag);
	        }
	    };
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = lockBody;
	function lockBody() {
	
	    return function (s, elm) {
	
	        var state = true;
	        var windowFocus = function windowFocus() {
	            state = true;
	        };
	        var windowBlur = function windowBlur() {
	            state = false;
	        };
	
	        var lock = function lock() {
	
	            if (state) {
	                document.body.style.overflow = 'hidden';
	            }
	        };
	        var release = function release() {
	            document.body.style.overflow = 'initial';
	        };
	
	        elm[0].addEventListener('mouseenter', lock);
	        elm[0].addEventListener('mouseleave', release);
	        window.addEventListener('focus', windowFocus);
	        window.addEventListener('blur', windowBlur);
	    };
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _resize = __webpack_require__(11);
	
	var _resize2 = _interopRequireDefault(_resize);
	
	var _scroll = __webpack_require__(12);
	
	var _scroll2 = _interopRequireDefault(_scroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Concepts.Modules.events = angular.module('events', []).service('windowResizeEvent', ['$mdUtil', _resize2.default]).service('scrollChangeEvent', ['$mdUtil', '$timeout', _scroll2.default]).run(['windowResizeEvent', 'scrollChangeEvent', angular.noop]) //just to instantiate services
	
	;exports.default = Concepts.Modules.events.name;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var windowResizeEvent = function windowResizeEvent($mdUtil) {
	    _classCallCheck(this, windowResizeEvent);
	
	    var delay = 100;
	    this.update = window.innerWidth;
	    var self = this;
	    this.listen = function () {
	        //self.update = window.innerWidth;
	        Concepts.stores.getStore('Proto').global.resize(window.innerWidth);
	    };
	
	    setTimeout(function () {
	        Concepts.stores.getStore('Proto').global.resize(window.innerWidth);
	    }, 0);
	    window.addEventListener('resize', $mdUtil.debounce(this.listen, delay, true));
	};
	
	exports.default = windowResizeEvent;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var scrollChangeEvent = function scrollChangeEvent($mdUtil, $timeout) {
	    _classCallCheck(this, scrollChangeEvent);
	
	    var delay = 200;
	    this.status = window.pageYOffset;
	    var self = this;
	
	    this.listen = function () {
	        Concepts.stores.getStore('Proto').global.scroll(window.pageYOffset);
	
	        setTimeout(function () {
	            Concepts.stores.getStore('Proto').global.scroll(window.pageYOffset);
	        }, 250); //offsets the delay by 50ms so that if the last window.pageYOffset is not acurate this will fix it
	    };
	    window.addEventListener('scroll', $mdUtil.throttle(this.listen, delay));
	};
	
	exports.default = scrollChangeEvent;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _states = __webpack_require__(14);
	
	var _views = __webpack_require__(15);
	
	var _baseURL = __webpack_require__(16);
	
	var _baseURL2 = _interopRequireDefault(_baseURL);
	
	var _runBlocks = __webpack_require__(17);
	
	var _runBlocks2 = _interopRequireDefault(_runBlocks);
	
	var _configBlocks = __webpack_require__(18);
	
	var _configBlocks2 = _interopRequireDefault(_configBlocks);
	
	var _applyControllers = __webpack_require__(21);
	
	var _applyControllers2 = _interopRequireDefault(_applyControllers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Concepts.Modules.ROUTER = angular.module('routing-setup', []).run(['$rootScope', _runBlocks2.default]).config(['$urlRouterProvider', '$stateProvider', _configBlocks2.default]).constant('RouterStates', function () {
	    return _states.states;
	});
	//.directive('injectHtmlTemplate' ,injectHTML);
	
	//import injectHTML from './injectHTML';
	exports.default = Concepts.Modules.ROUTER.name;
	
	(0, _applyControllers2.default)();

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	          value: true
	});
	var states = exports.states = ['angular', 'jquery', 'bootstrap', 'tweenmax', 'sass', 'css', 'html', 'javascript', 'angular-material', 'node', 'gulp', 'mongo', 'lodash', 'underscore', 'react', 'threejs', 'tips', 'bable', 'es6'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	var views = exports.views = {
	        angular: ['start', 'controllers', 'breakdown', 'directives', 'factorys', 'services', 'filters', 'bestPracetices', 'examples'],
	        jquery: ['start', 'ui', 'effects', 'callbacks', 'selectors', 'events', 'dom', 'html', 'manipulation', 'help', 'breakdown'],
	        gulp: ['start', 'intro', 'why', 'vs', 'bestPractices', 'syntax'],
	
	        javascript: ['start', 'syntax', 'tips', 'breakdown', 'what', 'why'],
	
	        tweenmax: ['start', 'syntax', 'easing', 'methods', 'help'],
	        sass: ['syntax', 'examples', 'why', 'nested-elements'],
	        node: ['syntax'],
	        mongo: ['mongo-syntax'],
	        underscore: ['syntax'],
	        lodash: ['syntax'],
	        react: ['react-syntax'],
	        tips: ['free'],
	        css: ['syntax'],
	        html: ['syntax'],
	        bootstrap: ['syntax'],
	        es6: ['syntax'],
	        angular_material: ['demos', 'typography', 'directives', 'services', 'providers', 'help', 'themes', 'layout', 'grid']
	
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (stateProvider) {
	    stateProvider.state('home', {
	        url: '/home',
	        data: {
	            title: 'Home'
	        },
	        views: {
	            '@': {
	                templateUrl: 'router/views/homepage/index'
	            }
	        }
	
	    }).state('about', {
	        url: '/about',
	        data: {
	            title: 'About'
	        },
	        views: {
	            '@': {
	                template: 'About'
	
	            }
	        }
	    }).state('contact', {
	        url: '/contact',
	        data: {
	            title: 'Contact'
	        },
	        views: {
	            '@': {
	                template: 'Contact'
	            }
	        }
	    });
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (root) {
	  root.$on('$stateChangeError', function (err) {
	    console.log(err);
	  });
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	      value: true
	});
	exports.default = configBlock;
	
	var _animateView = __webpack_require__(19);
	
	var _animateView2 = _interopRequireDefault(_animateView);
	
	var _baseURL = __webpack_require__(16);
	
	var _baseURL2 = _interopRequireDefault(_baseURL);
	
	var _loopStates = __webpack_require__(20);
	
	var _loopStates2 = _interopRequireDefault(_loopStates);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configBlock(urlRouter, stateProvider) {
	
	      var uiView = document.getElementById('UI'),
	          styleTag = document.createElement('style');
	      document.head.appendChild(styleTag);
	
	      (0, _animateView2.default)(styleTag);
	
	      (0, _baseURL2.default)(stateProvider);
	      (0, _loopStates2.default)(stateProvider);
	      urlRouter.otherwise('/home');
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = animateView;
	function animateView(styleTag) {
	    var cornersX = [0, 1918, -1918];
	    var cornersY = [1000, 1918, -1918];
	    var css = "\n/*RANDOMIZE ng-enter animation on main content*/\n    .UI.ng-enter{\n    transform:translateY(" + cornersY[Math.floor(Math.random() * cornersY.length)] + "px) translateX(" + cornersX[Math.floor(Math.random() * cornersX.length)] + "px)\n\n}\n    .UI.ng-leave-active{\n    transform:translateY(" + cornersY[Math.floor(Math.random() * cornersY.length)] + "px) translateX(" + cornersX[Math.floor(Math.random() * cornersX.length)] + "px)\n\n}\n";
	    styleTag.innerHTML = css;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = loopStates;
	
	var _states = __webpack_require__(14);
	
	var _views = __webpack_require__(15);
	
	var _animateView = __webpack_require__(19);
	
	var _animateView2 = _interopRequireDefault(_animateView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function loopStates(stateProvider) {
	    //`<inject-html-template template='${pageName}' persistent='true' class='ng-cloak'></inject-html-template>`;
	
	    return angular.forEach(_states.states, function (pageName, index) {
	        var pageName = pageName;
	        stateProvider.state(pageName, {
	            //parent:'home',
	            data: {
	                title: pageName,
	                cache: false //JSON.parse(localStorage.isCached) //needs a handler first
	            },
	            url: '/' + pageName,
	            resolve: {
	                checkStore: function checkStore($q, local_cache, $state) {
	                    var defer = $q.defer();
	                    var cache = local_cache.willCache();
	                    var targetUrl = 'views/' + pageName + '/index.html';
	                    if (typeof local_cache.get(targetUrl) == 'string') {
	                        return local_cache.get(targetUrl);
	                    } else {
	                        local_cache.get(targetUrl).then(function (content) {
	                            defer.resolve(content);
	                        });
	                        return defer.promise;
	                    }
	                }
	            },
	
	            views: {
	                '@': {
	                    controller: ['$scope', 'checkStore', '$element', '$compile', 'local_cache', function ($scope, checkStore, $element, $compile, local_cache) {
	                        var isString = typeof checkStore == 'string' ? true : false;
	                        var target = $element[0];
	                        var content = document.createElement('div');;
	                        var ready = undefined;
	                        var perform = performance.now();
	                        if (isString) {
	
	                            content.innerHTML = checkStore;
	                            ready = $compile(content)($scope);
	                            target.appendChild(ready[0]);
	                            local_cache.log({ status: 'string', time: performance.now() - perform });
	                        } else {
	
	                            content.innerHTML = checkStore.data;
	                            ready = $compile(content)($scope);
	                            target.appendChild(ready[0]);
	                            local_cache.log({ status: 'promise', time: performance.now() - perform });
	                        }
	                    }],
	                    controllerAs: 'state'
	                }
	            },
	            onEnter: function onEnter() {
	                var styleTag = document.createElement('style');
	                document.head.appendChild(styleTag);
	                (0, _animateView2.default)(styleTag);
	            }
	        });
	
	        //these dont need controllers as they will inheirt from parrent ^^^^
	        angular.forEach(_views.views[pageName], function (item, index) {
	            stateProvider.state(pageName + '.' + item, {
	                parent: pageName,
	                data: {
	                    title: pageName + ' ' + item
	                },
	                url: '/' + item,
	                views: {
	                    '@': {
	                        templateUrl: '../cache/' + pageName + '/' + item + '.html'
	                    }
	                }
	            });
	        });
	    });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = applyControllers;
	
	var _states = __webpack_require__(14);
	
	function applyControllers() {
	    angular.forEach(_states.states, function (items, index) {
	        Concepts.Modules.ROUTER.controller(items, function () {
	            var state = this;
	            this.title = items;
	        });
	    });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DOMcache = __webpack_require__(23);
	
	exports.default = angular.module('data', []).constant('DOMcache', function () {
	  return _DOMcache.DOMcache;
	}).name;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	//dont need this but i think i will use this more in the futrue
	var DOMcache = exports.DOMcache = {
	    title: document.getElementById('title'),
	    ui: document.getElementById('UI'),
	    container: document.getElementById('container'),
	    menu: document.getElementById('menu'),
	    footer: document.getElementById('footer')
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = GLOBAL;
	function GLOBAL($scope, $state, $themes, $rootScope, $timeout, $mdUtil, windowResizeEvent) {
	    Concepts.stores.Proto('global', GLOBAL.prototype);
	    var global = this;
	    global.$theme = {};
	    //cacheing events
	    var broadcastCache = function broadcastCache(target, data) {
	        $timeout(function () {
	            $scope.$broadcast('cache-event', data);
	        });
	    };
	    $scope.$on('global-cache-event', broadcastCache);
	    //cacheing events
	    //------------------------------------------
	    //window resize events  for screen handeling
	    global.screen = {
	        width: null,
	        adjust: {}
	    };
	
	    //window resize events
	    //--------------------
	    // menu events & handleing menu placement
	
	    var watch_window_and_menu_event = function watch_window_and_menu_event(newValue) {
	        console.info(newValue);
	        if (newValue && window.innerWidth > 1280) {
	            global.screen.adjust = { width: '84.30%', marginLeft: '300px' };
	        } else {}
	    };
	
	    var resizeUI = function resizeUI(bool, windowWidth) {
	        $timeout(function () {
	            if (bool && windowWidth > 1280) {
	                console.log('should be ');
	                global.screen.adjust = { width: '84.30%', marginLeft: '300px' };
	            } else {
	                global.screen.adjust = { width: '100%', marginLeft: '0%' };
	            }
	        });
	    };
	
	    var dynamicResizeUI = function dynamicResizeUI(menuShouldOpen, windowWidth) {
	
	        if (windowWidth >= 1280 && menuShouldOpen) {
	            global.screen.adjust = { width: '84.30%', marginLeft: '300px' };
	        } else {
	            global.screen.adjust = { width: '100%', marginLeft: '0%' };
	        }
	    };
	
	    //gets event from headerSettings controller > applyTheme
	    //$scope.$on('global-$themeChange' ,setGlobal$theme);
	    //--new code
	
	    var menuShouldOpen = false; //placeholder for GLOBAL.prototype.resize(arg1)
	    GLOBAL.prototype.menuUpdate = function (bool) {
	        menuShouldOpen = bool;
	        resizeUI(bool, window.innerWidth); //
	
	        $scope.$broadcast('menu-should-open', bool); //broadcast to entire app this event occours
	    };
	    GLOBAL.prototype.footerUpdate = function (value) {};
	    GLOBAL.prototype.resize = function (windowWidth) {
	        dynamicResizeUI(menuShouldOpen, windowWidth); //resizes UI dynamicly for responsive desgn
	        $scope.$broadcast('window-resize-event', windowWidth); //useing this function to broadcast this event to rest of app
	    };
	    GLOBAL.prototype.scroll = function (pageY) {
	        $scope.$broadcast('scroll-event', pageY); //useing this function to broadcast this event to rest of app
	    };
	
	    GLOBAL.prototype.Broadcaster = function (name, value) {
	        $scope.$broadcast(name, value);
	    };
	
	    $rootScope.$on('$stateChangeSuccess', function () {
	        $scope.$broadcast('global.pageReady', $state.current.data); //broadcast to entire app state has changed without error
	    });
	
	    GLOBAL.prototype.updateTheme = function (theme) {
	        //this applys the styles to website
	
	        $timeout(function () {
	            global.$theme.color = theme.props.color;
	            global.$theme.background = theme.props.background;
	            global.$theme.accent = theme.props.accent;
	        });
	    };
	
	    setTimeout(function () {
	        //developer info...gets all elements with ng-style atribute
	        console.warn('Number of ng-styles/watchers for', document.querySelectorAll('*[ng-style]').length);
	    }, 2000);
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _menu = __webpack_require__(26);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _menu3 = __webpack_require__(27);
	
	var _menu4 = _interopRequireDefault(_menu3);
	
	var _menuList = __webpack_require__(28);
	
	var _menuList2 = _interopRequireDefault(_menuList);
	
	var _menu5 = __webpack_require__(29);
	
	var _menu6 = _interopRequireDefault(_menu5);
	
	var _titleLinks = __webpack_require__(30);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Concepts.Modules.menu = angular.module('menu', []).directive('appMenu', [_menu2.default]).directive('menuList', ['$compile', _menuList2.default]).factory('menuFactory', _menu6.default).constant('menu.titleLinks', function () {
	  return _titleLinks.links;
	}).controller('menuController', ['$scope', 'menuFactory', _menu4.default]);exports.default = Concepts.Modules.menu.name;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = menuDirective;
	function menuDirective() {
	    Concepts.stores.Proto('MenuDirective', menuDirective.prototype);
	    var target = undefined;
	    var animation = undefined;
	    var shouldUpdate = false;
	
	    menuDirective.prototype.update = function (bool) {
	        shouldUpdate = bool;
	        updater();
	    };
	    function updater() {
	        shouldUpdate ? element.show() : element.hide();
	    }
	
	    var element = {
	        show: function show() {
	            try {
	                animation.play();
	            } catch (e) {
	                target.classList.add('open');
	            }
	        },
	        hide: function hide() {
	            try {
	                animation.reverse();
	            } catch (e) {
	                target.classList.remove('open');
	            }
	        }
	    };
	
	    function link(scope, elm, attr, ctrl) {
	        target = elm[0].querySelector('.menu-container');
	        animation = new TweenMax(target, 0, { x: 0 });
	        updater();
	    }
	
	    return {
	        link: link,
	        templateUrl: 'menu/index',
	        restric: 'EA',
	        controller: 'menuController as menu'
	    };
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = menu;
	function menu($scope, menuFactory) {
	  Concepts.stores.Proto('Menu', menu.prototype);
	  $scope.$applyAsync(function () {
	    $scope.$broadcast('menu-list', menuFactory.getSelected('titles'));
	  });
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function ($compile) {
	    return function (scope, elm) {
	        var $elms = '';
	        var compile = function compile(item, index, arr) {
	            var mdButton = document.createElement('md-button');
	            mdButton.setAttribute('ui-sref', item[1]);
	            //mdButton.setAttribute('class' , 'fa fa-'+item[2])
	            mdButton.setAttribute('ng-style', 'global.$theme.accent');
	            mdButton.innerText = item[0];
	            $elms += mdButton.outerHTML;
	
	            if (index + 1 === arr.length) {
	                render();
	            }
	        };
	        function render() {
	            var compiled = $compile($elms)(scope);
	            elm.append(compiled);
	        }
	
	        scope.$on('menu-list', function (target, data) {
	            data.forEach(compile);
	        });
	    };
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = menuFactory;
	function menuFactory() {
	    //loads all template cache
	    var mainTitles = [
	    //TITLE , STATEURL , FA-ICON
	    ['Angular', 'angular', 'cog'], ['Jquery', 'jquery', 'cogs'], ['Sass', 'sass', 'facebook'], ['Tweenmax (GSAP)', 'tweenmax', 'th-large'], ['Gulp', 'gulp', 'bars'], ['Node', 'node', 'recorder'], ['HTML', 'html', 'send'], ['CSS', 'css', 'clipboard'], ['Lodash', 'lodash', 'bomb']];
	    var angular = [{ desc: 'Get Started', state: 'angular.start', class: 'fa-facebook', name: 'Help' }, { desc: 'Controllers', state: 'angular.controllers', class: 'fa-cogs', name: 'Controllers' }, { desc: 'Directives', state: 'angular.directives', class: 'fa-cube', name: 'Firectives' }, { desc: 'Factorys', state: 'angular.factorys', class: 'fa-cloud', name: 'Factorys' }, { desc: 'Servies', state: 'angular.services', class: 'fa-circle', name: 'Services' }, { desc: 'Filters', state: 'angular.filters', class: 'fa-coffee', name: 'Filters' }, { desc: 'Best Practices', state: 'angular.bestPrac', class: 'fa-bomb', name: 'Best Practices' }, { desc: 'Cool Examples', state: 'angular.examples', class: 'fa-crop', name: 'Examples' }];
	
	    var jquery = [{ desc: 'Get Started', state: 'jquery.help', class: 'fa-cogs', name: 'help' }, { desc: 'Dom', state: 'jquery.dom', class: 'fa-cube', name: 'dom' }, { desc: 'UI', state: 'jquery.ui', class: 'fa-cloud', name: 'ui' }, { desc: 'Events', state: 'jquery.events', class: 'fa-circle', name: 'events' }, { desc: 'Syntax', state: 'syntax', class: 'fa-coffee', name: 'syntax' }, { desc: 'best practive', state: 'jquery.bestPrac', class: 'fa-bomb', name: 'best Prac' }, { desc: 'Stuff', state: 'jquery.examples', class: 'fa-crop', name: 'Examples' }];
	    var sass = [{ desc: 'Get Started', state: 'sass.help', class: 'fa-cogs', name: 'help' }, { desc: 'The syntax', state: 'sass.syntax', class: 'fa-cube', name: 'syntax' }, { desc: 'Advance sass', state: 'sass.advance', class: 'fa-cloud', name: 'advance' }, { desc: 'Cool thingamabobs', state: 'sass.examples', class: 'fa-circle', name: 'examples' }];
	    var tweenmax = [{ desc: 'Get Started', state: 'tweenmax.help', class: 'fa-cogs', name: 'help' }, { desc: 'Why GSAP?', state: 'tweenmax.why', class: 'fa-cube', name: 'why' }, { desc: 'The Syntax', state: 'tweenmax.syntax', class: 'fa-cloud', name: 'syntax' }, { desc: 'The Events', state: 'tweenmax.events', class: 'fa-circle', name: 'events' }, { desc: 'Tween it up!!!', state: 'tweenmax.manager', class: 'fa-cloud', name: 'manager' }, { desc: 'Yep cool things', state: 'tweenmax.coolthings', class: 'fa-circle', name: 'coolthings' }];
	    var gulp = [{ desc: 'Get Started', state: 'gulp.help', class: 'fa-cogs', name: 'help' }, { desc: 'Why Gulp?', state: 'gulp.why', class: 'fa-cube', name: 'why' }, { desc: 'Syntax', state: 'gulp.syntax', class: 'fa-cloud', name: 'syntax' }, { desc: 'Best thingamajigs', state: 'gulp.bestPrac', class: 'fa-circle', name: 'best prac' }, { desc: 'Gulp with node?', state: 'gulp.node', class: 'fa-cloud', name: 'node' }, { desc: 'Gulp vs Grunt vs YOU!!!!!!!!!', state: 'gulp.vs', class: 'fa-circle', name: 'vs' }];
	    var node = [{ desc: 'Get Started', state: 'node.help', class: 'fa-cogs', name: 'help' }, { desc: 'Why Gulp?', state: 'node.why', class: 'fa-cube', name: 'why' }, { desc: 'Syntax', state: 'node.syntax', class: 'fa-cloud', name: 'syntax' }, { desc: 'node', state: 'node.bestPrac', class: 'fa-circle', name: 'bestPrac' }, { desc: 'Gulp with node?', state: 'node.node', class: 'fa-cloud', name: 'node' }, { desc: 'Gulp vs Grunt vs YOU!!!NODE IFY!!!!!!', state: 'node.vs', class: 'fa-circle', name: 'vs' }];
	    var html = [{ desc: 'Get Started', state: 'html.help', class: 'fa-cogs', name: 'help' }, { desc: 'Why HTML?', state: 'html.why', class: 'fa-cube', name: 'why' }, { desc: 'Syntax', state: 'html.syntax', class: 'fa-cloud', name: 'syntax' }, { desc: 'node', state: 'node.bestPrac', class: 'fa-circle', name: 'bestPrac' }, { desc: 'Gulp with html?', state: 'html.node', class: 'fa-cloud', name: 'node' }, { desc: 'html things', state: 'html.vs', class: 'fa-circle', name: 'vs' }];
	    var css = [{ desc: 'Get Started', state: 'css.help', class: 'fa-cogs', name: 'help' }, { desc: 'Why css?', state: 'css.why', class: 'fa-cube', name: 'why' }, { desc: 'Syntax', state: 'css.syntax', class: 'fa-cloud', name: 'syntax' }, { desc: 'node', state: 'css.bestPrac', class: 'fa-circle', name: 'bestPrac' }, { desc: 'Gulp with css?', state: 'node.node', class: 'fa-cloud', name: 'node' }, { desc: 'html things', state: 'css.vs', class: 'fa-circle', name: 'vs' }];
	    var lodash = [{ desc: 'Get Started', state: 'lodash.help', class: 'fa-cogs', name: 'help' }, { desc: 'Why css?', state: 'lodash.why', class: 'fa-cube', name: 'why' }, { desc: 'Syntax', state: 'lodash.syntax', class: 'fa-cloud', name: 'syntax' }, { desc: 'lodash', state: 'lodash.bestPrac', class: 'fa-circle', name: 'bestPrac' }, { desc: 'lodash with css?', state: 'lodash.node', class: 'fa-cloud', name: 'node' }, { desc: 'lodash things', state: 'lodash.vs', class: 'fa-circle', name: 'vs' }];
	    var javascript = [{ desc: 'Get Started', state: 'javascript.help', class: 'fa-cogs', name: 'help' }, { desc: 'Why css?', state: 'javascript.why', class: 'fa-cube', name: 'why' }, { desc: 'Syntax', state: 'javascript.syntax', class: 'fa-cloud', name: 'syntax' }, { desc: 'lodash javascrip[t]', state: 'javascript.bestPrac', class: 'fa-circle', name: 'bestPrac' }, { desc: 'javascript with css?', state: 'javascript.node', class: 'fa-cloud', name: 'node' }, { desc: 'javascript things', state: 'javascript.vs', class: 'fa-circle', name: 'vs' }];
	    var angularMaterial = [{ desc: 'Get started', state: 'angularMaterial.help', class: 'fa-facebook', name: 'help' }, { desc: 'Why angularMaterial?', state: 'angularMaterial.why', class: 'fa-facebook', name: 'why' }, { desc: 'Best thingamajigs', state: 'angularMaterial.bestPrac', class: 'fa-facebook', name: 'bestPrac' }, { desc: 'Themes & options', state: 'angularMaterial.themes', class: 'fa-facebook', name: 'themes' }, { desc: 'Grid System', state: 'angularMaterial.grid', class: 'fa-facebook', name: 'grid' }, { desc: 'Layout guide', state: 'angularMaterial.layout', class: 'fa-facebook', name: 'layout' }, { desc: 'Core directives', state: 'angularMaterial.directives', class: 'fa-facebook', name: 'directives' }, { desc: 'Core providers', state: 'angularMaterial.providers', class: 'fa-facebook', name: 'providers' }, { desc: 'typography', state: 'angularMaterial.typography', class: 'fa-facebook', name: 'typography' }, { desc: 'Servacies', state: 'angularMaterial.services', class: 'fa-facebook', name: 'services' }];
	    var exteneded = [{ type: 'Indepth guide', class: 'fa-fax', tooltip: 'See indepth guide' }, { type: 'Help', class: 'fa-database', tooltip: 'Need help? Check out the forms' }, { type: 'API', class: 'fa-fire', tooltip: 'See the API referance for this libary' }, { type: 'Tutorial', class: 'fa-leaf', tooltip: 'See twitch vods' }];
	
	    var all = {
	        titles: mainTitles,
	        exteneded: exteneded,
	        angular: angular,
	        jquery: jquery,
	        sass: sass,
	        tweenmax: tweenmax,
	        gulp: gulp,
	        node: node,
	        html: html,
	        css: css,
	        lodash: lodash,
	        javascript: javascript,
	        angularMaterial: angularMaterial
	    };
	
	    var getSelected = function getSelected(data) {
	        return all[data];
	    };
	    return {
	        all: all,
	        getSelected: getSelected
	    };
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	      value: true
	});
	var titleLinks = exports.titleLinks = [{ title: 'Angular', url: 'angular', icon: 'cog' }, { title: 'Jquery', url: 'jquery', icon: 'cogs' }, { title: 'Sass', url: 'sass', icon: 'facebook' }, { title: 'Tweenmax (GSAP)', url: 'tweenmax', icon: 'th-large' }, { title: 'Gulp', url: 'gulp', icon: 'bars' }, { title: 'Node', url: 'node', icon: 'recorder' }, { title: 'HTML', url: 'html', icon: 'send' }, { title: 'CSS', url: 'css', icon: 'clipboard' }, { title: 'Lodash', url: 'lodash', icon: 'bomb' }];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MAIN = __webpack_require__(32);
	
	var _MAIN2 = _interopRequireDefault(_MAIN);
	
	var _options = __webpack_require__(33);
	
	var _options2 = _interopRequireDefault(_options);
	
	var _header = __webpack_require__(35);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _pageOptions = __webpack_require__(36);
	
	var _pageOptions2 = _interopRequireDefault(_pageOptions);
	
	var _pageSearch = __webpack_require__(37);
	
	var _pageSearch2 = _interopRequireDefault(_pageSearch);
	
	var _trigger = __webpack_require__(38);
	
	var _trigger2 = _interopRequireDefault(_trigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Concepts.Modules.header = angular.module('header', []).controller('headerController', ['$scope', 'menuFactory', 'DOMcache', _MAIN2.default]).controller('headerOptionsController', ['menuFactory', '$scope', '$timeout', _options2.default]).directive('appHeader', _header2.default).directive('headerPageSearch', _pageSearch2.default).directive('triggerMenuEvent', ['$timeout', _trigger2.default]).directive('headerPageOptions', ['$templateCache', _pageOptions2.default]);exports.default = Concepts.Modules.header.name;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = headerController;
	function headerController($scope, menuFactory, DOMcache) {
	    Concepts.stores.Proto('Header', headerController.prototype);
	    var header = this;
	    header.view = {};
	
	    //assighns  header.getPageDocs to header > .page-options > ng-repeat
	    //header.getPageDocs is populated from menufactory[ui.router > state > data > title]
	    //replace(/[a-z]/,data.title.charAt(0).toUpperCase())
	
	    $scope.$on('pageReady', function (target, data) {
	        //manualy updates website site title
	        header.view.currentPage = data.title;
	        DOMcache().title.innerText = data.title;
	    });
	
	    var toggleFlag = false;
	    header.broadcastMenuEvent = function () {
	        toggleFlag = !toggleFlag;
	        $scope.$emit('toggle-menu-event', toggleFlag);
	    };
	
	    header.openMenu = function () {
	        $scope.$emit('open-menu-event');
	    };
	
	    //need to send down broadcast since not this button is not in headerOption scope
	    header.hideOverlay = function () {
	        $scope.$broadcast('header.overlay-toggle', false);
	    };
	
	    //listens for icon click from headerOptions controller  to trigger dropdown
	    $scope.$on('Header-ui-overlay-toggle', function (target, data) {
	        $scope.$broadcast('header-ui-overlay-toggle', data);
	    });
	    //just functions for ng-repeats for random lorem ipsom data
	    header.randomStuff = {
	        overlay: function overlay() {
	
	            var arr = Array.apply(null, Array(20)).map(function (item, index) {
	                return item = index;
	            });
	
	            return arr;
	        },
	        gen: function gen(num) {
	            var arr = Array.apply(null, Array(num)).map(function (item, index) {
	                return item = index;
	            });
	            return arr;
	        }
	    };
	    $scope.$on('Header-flush-cache-event', function () {
	
	        // $store.removal(function(data){
	        //     $scope.$broadcast('header-flush-cache-event' , data)
	        // });
	    });
	
	    $scope.$emit('global-load-footer');
	
	    //NEW CODE--------------
	    var t = false;
	    header.toggle_siteSettings = function () {
	        t = !t;
	        Concepts.stores.getStore('Proto').SettingsDirective.toggle(t);
	    };
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = headerOptionsController;
	
	var _restrictStates = __webpack_require__(34);
	
	function headerOptionsController(menuFactory, scope, $timeout) {
	    var options = this; //controller as
	    options.title = 'Home'; //default title if {global.pageReady} fails
	
	    scope.$on('global.pageReady', function (target, data) {
	        //updated drom CORE controller (ui.router > $stateChangeSuccses)
	        options.title = data.title;
	        if (~_restrictStates.restrict.indexOf(data.title.toLowerCase())) {
	            options.overlayShouldHide = true; //if {restric} matches a index of data.title then it will hide the button
	            Concepts.stores.getStore('Proto').global.Broadcaster('overlay-should-open', false); //hides overlay if its open while swithing to a restricted page
	        } else {
	                options.overlayShouldHide = false; //otherwise it will show
	            }
	    });
	
	    options.openOverlay = function () {
	        //opens overlay
	        Concepts.stores.getStore('Proto').Overlay.open();
	    };
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var restrict = exports.restrict = ['home', 'about', 'contact'];

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Header;
	function Header() {
	    return {
	        restric: 'A',
	        templateUrl: 'header/index',
	        link: function link(scope, elm, attr) {
	            var targetBackground = elm[0].querySelector('.header-flexbox');
	
	            // setTimeout(()=>{
	            //   let placeholder = targetBackground.style.background
	            //   let bgValues = placeholder.match(/\d{2,3}/g);
	            //
	            //   let aplphaBackground = `rgba(${bgValues[0]},${bgValues[1]} ,${bgValues[2]} ,0.8)`;
	            //
	            //   scope.$on('scroll-event', function(target ,pageY){
	            //     if(pageY > 100){
	            //         targetBackground.style.background = aplphaBackground
	            //     }else{
	            //         targetBackground.style.background = placeholder
	            //     }
	            //   })
	            //
	            // },0)
	        }
	    };
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function ($templateCache) {
	    var ready = '';
	
	    function compile(item) {
	        var mdMenuItem = document.createElement('md-menu-item');
	        var mdButton = document.createElement('md-button');
	        mdButton.setAttribute('ui-sref', item.url); //sets the url for the button
	        mdButton.innerText = item.title; //sets the title for the button element
	        mdMenuItem.appendChild(mdButton); //md-menu-item has md-button as a child node
	        ready += mdMenuItem.outerHTML; //adds to readys
	    }
	
	    _titleLinks.titleLinks.forEach(compile); //gets menu title links(same links in menu module) since i have the formated title and url already set up
	    function precompile(telm) {
	        var template = $templateCache.get('header/options/index'); //get desired template from template cache
	        var stringToHTML = angular.element(template); //convert templateCache value to html element
	        var getInsertPoint = stringToHTML[0].querySelector('#header_options'); //gets the entry point to transclude whats inside ready
	        getInsertPoint.innerHTML = ready; // ready is a string thus the dom will parse this as such
	
	        getInsertPoint.removeAttribute('id'); //remove id since im done working on element
	        telm[0].appendChild(stringToHTML[0]); //the dom gets updated with this content
	    }
	    return {
	        restric: 'E',
	        compile: precompile
	    };
	};
	
	var _titleLinks = __webpack_require__(30);

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = headerPageSearch;
	function headerPageSearch() {
	
	    var link = function link(scope, elm, attr) {
	        var input = elm[0].querySelector('input');
	        var target = elm[0].children[1];
	
	        input.addEventListener('focus', function () {
	            target.style.display = 'flex';
	        });
	        input.addEventListener('blur', function () {
	
	            setTimeout(function () {
	                target.style.display = 'none';
	            }, 800);
	        });
	    };
	
	    //this is for page docs
	    var tt = '<section layout="column" style="display:none" dropdown-list="dropdown-list" class="md-whiteframe-z2">\n  <md-button ng-repeat="list in header.view.getPageDocs | filter:header.searchDocs" ui-sref="{{list.state}}" ng-bind="list.name" aria-label="{{list.name}}" class="section-list"></md-button>\n</section>';
	    return {
	        restric: 'E',
	        template: '\n<md-input-container>\n  <label>Search {{header.view.currentPage}} docs</label>\n  <input type="text" ng-model="header.searchDocs"/>\n</md-input-container>\n',
	        scope: false,
	        replace: true
	
	    };
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = triggerMenuEvent;
	function triggerMenuEvent($timeout) {
	  //Concepts.link.triggerMenuEvent = triggerMenuEvent.prototype
	  return {
	    restric: 'E',
	    replace: true,
	    template: '\n<div class="material-design-hamburger">\n <button class="material-design-hamburger__icon">\n   <span class="material-design-hamburger__layer" ng-style="{\'background\':global.$theme.color.color}"></span>\n </button>\n</div>\n',
	    link: function link(scope, elm) {
	      var flag = false;
	      var changeClass = function changeClass() {
	        flag = !flag;
	        var child;
	
	        Concepts.stores.getStore('Proto').MenuDirective.update(flag);
	        Concepts.stores.getStore('Proto').global.menuUpdate(flag);
	        Concepts.stores.getStore('Proto').Overlay.adjustMargins(flag);
	
	        //scope.$emit('toggle-menu-event' ,flag)
	        child = this.childNodes[1].childNodes[1].classList;
	
	        if (child.contains('material-design-hamburger__icon--to-arrow')) {
	          child.remove('material-design-hamburger__icon--to-arrow');
	          child.add('material-design-hamburger__icon--from-arrow');
	        } else {
	          child.remove('material-design-hamburger__icon--from-arrow');
	          child.add('material-design-hamburger__icon--to-arrow');
	        }
	      };
	
	      elm[0].addEventListener('click', changeClass);
	    }
	  };
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _themes = __webpack_require__(40);
	
	Concepts.Modules.$themes = angular.module('$themes', []).service('$themes', ['$q', _themes.$themes]).run(['$themes', function () {}]) //initiate $themes
	.constant('$allThemes', function () {
	  return _themes.allThemes;
	}).constant('THEME_KEYS', function () {
	  return _themes.THEME_KEYS;
	});
	
	exports.default = Concepts.Modules.$themes.name;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.THEME_KEYS = exports.allThemes = exports.$themes = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _init = __webpack_require__(41);
	
	var _init2 = _interopRequireDefault(_init);
	
	var _generate = __webpack_require__(42);
	
	var _generate2 = _interopRequireDefault(_generate);
	
	var _allThemes = __webpack_require__(43);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PRIVATE_KEYS = Object.keys(_allThemes.allThemes);
	(0, _init2.default)();
	var THEME_KEYS = Object.keys(_allThemes.allThemes);
	
	var $themes = function () {
	  function $themes($q) {
	    var _this = this;
	
	    _classCallCheck(this, $themes);
	
	    Concepts.stores.Proto('$themes', this);
	
	    this._themes = _allThemes.allThemes;
	    this.check = this.check;
	    this.update = this.update;
	    this.set = this.set;
	    this.get = this.get;
	    this.toggle = this.toggle;
	    this.enable = this.enable;
	    this.disable = this.disable;
	    this.ls = '[]';
	    this.current = {};
	    this._toggle = JSON.parse(localStorage['$themeIsEnabled']);
	    this.first_run = function () {
	      _this.set(localStorage['$theme']);
	    };
	    this.first_run();
	  }
	  /*
	  sets a theme whether a existeing theme or a custom theme
	  @param1{themeName}'string'
	  @param2{color}'string' - optional
	  @param3{background}'string' - optional
	  @param4{accent}'string' - optional
	    */
	
	
	  _createClass($themes, [{
	    key: 'set',
	    value: function set(themeName, color, background, accent) {
	      var keys = Object.keys(this._themes);
	      localStorage.$theme = themeName;
	      if (keys.indexOf(themeName) <= -1) {
	        //checks to see if themeName does not exist before creating a theme
	        this._themes[themeName] = (0, _generate2.default)(color, background, accent);
	      }
	      this.current = { theme: themeName, props: this._themes[themeName] }; //sets the object structure
	
	      this.update(this.current); //updates!!!
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      return this.current; //returns the current theme{object}
	    }
	  }, {
	    key: 'update',
	    value: function update(props) {
	      var _this2 = this;
	
	      //hooks in with site-settings controller settings.themeStatus...calls this method
	
	      setTimeout(function () {
	        //runs after Concepts.stores.getStore('Proto').global is created
	        Concepts.stores.getStore('Proto').global.updateTheme(_this2.current); //sends this.current{object} to global controller to be applied
	      });
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      this._toggle = !this._toggle;
	      update(null, this._toggle);
	    }
	  }, {
	    key: 'createTheme',
	    value: function createTheme(theme) {
	      var prefix = 'USER_THEME';
	      var ls = localStorage[prefix];
	      var append = JSON.parse(ls);
	      append.push(theme);
	      localStorage[prefix] = JSON.stringify(append);
	      this.set(theme.title, theme.text, theme.background, theme.accent);
	      THEME_KEYS.push(theme.title);
	      Concepts.stores.getStore('Proto').Settings.recompileThemeList(THEME_KEYS);
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var _this3 = this;
	
	      var ls = localStorage['USER_THEME'];
	
	      var _delete = false;
	      THEME_KEYS.forEach(function (theme, index, array) {
	        if (PRIVATE_KEYS.indexOf(_this3.current.theme) <= -1) {
	          _delete = true;
	        }
	        if (index + 1 === array.length && _delete) {
	          delete localStorage['USER_THEME'];
	          _this3.set('default');
	          Concepts.stores.getStore('Proto').Settings.recompileThemeList(PRIVATE_KEYS);
	          Concepts.stores.getStore('Proto').Settings.updateCurrentTheme('default');
	        }
	      });
	    }
	  }]);
	
	  return $themes;
	}();
	
	exports.$themes = $themes;
	exports.allThemes = _allThemes.allThemes;
	exports.THEME_KEYS = THEME_KEYS;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = FIRST_RUN;
	
	var _generate = __webpack_require__(42);
	
	var _generate2 = _interopRequireDefault(_generate);
	
	var _allThemes = __webpack_require__(43);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function FIRST_RUN() {
	  var theme = localStorage['$theme'];
	  var themesEnabled = localStorage['$themeIsEnabled'];
	  var userTheme = localStorage['USER_THEME'];
	
	  if (theme == 'null' || theme == undefined || theme == '0') {
	    localStorage['$theme'] = 'default';
	  }
	  if (themesEnabled == 'null' || themesEnabled == undefined || themesEnabled == '0') {
	    localStorage['$themeIsEnabled'] = 'true';
	  }
	
	  if (userTheme == 'null' || userTheme == undefined || userTheme == '0') {
	    localStorage['USER_THEME'] = '[]';
	  }
	  var USER_THEMES = JSON.parse(localStorage['USER_THEME']);
	  var privateThemeKeys = Object.keys(_allThemes.allThemes);
	  USER_THEMES.forEach(function (theme) {
	    if (~privateThemeKeys.indexOf(theme.title)) {
	      console.error('can not overwrite theme');
	      return;
	    }
	    _allThemes.allThemes[theme.title] = (0, _generate2.default)(theme.text, theme.background, theme.accent);
	  });
	  return;
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = generate;
	function generate(color, background, accent) {
	    return {
	        color: {
	            color: color
	        },
	        background: {
	            background: background
	        },
	        accent: {
	            background: accent
	        }
	    };
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.allThemes = undefined;
	
	var _generate = __webpack_require__(42);
	
	var _generate2 = _interopRequireDefault(_generate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//text color,background ,accent
	var allThemes = exports.allThemes = {
	    default: (0, _generate2.default)('white', '#222', '#444'),
	    fire: (0, _generate2.default)('black', '#ff0000', '#ff8533'),
	    pink: (0, _generate2.default)('white', '#E91E63', '#EC407A'),
	    moonlight: (0, _generate2.default)('white', '#1f4060', '#3873ad'),
	    dark: (0, _generate2.default)('white', '#222', '#333'),
	    light: (0, _generate2.default)('#ffd480', '#ffcc66', 'black'),
	    material: (0, _generate2.default)('white', '#e62e00', '#ff5c33'),
	    sky: (0, _generate2.default)('black', '2196F3', '#42A5F5'),
	    indigo: (0, _generate2.default)('white', '#3F51B5', '#5C6BC0'),
	    purple: (0, _generate2.default)('white', '#9C27B0', '#AB47BC'),
	    blue: (0, _generate2.default)('white', '#2196F3', '#42A5F5'),
	    teal: (0, _generate2.default)('white', '#009688', '#26A69A'),
	    cyan: (0, _generate2.default)('black', '#00BCD4', '#4DD0E1'),
	    green: (0, _generate2.default)('white', '#4CAF50', '#66BB6A'),
	    'hot pink': (0, _generate2.default)('white', '#E91ED2', '#f52ade'),
	    navyblue: (0, _generate2.default)('white', '#1D127D', '#312691'),
	    crimson: (0, _generate2.default)('white', '#830303', '#a31515'),
	    black: (0, _generate2.default)('white', '#000', '#111'),
	    brown: (0, _generate2.default)('white', '#5a2900', '#7b4314'),
	    'dark green': (0, _generate2.default)('white', '#007409', '#17801f')
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _footer = __webpack_require__(45);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _footer3 = __webpack_require__(46);
	
	var _footer4 = _interopRequireDefault(_footer3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Concepts.Modules.footer = angular.module('footer', []).controller('footerController', ['$scope', _footer2.default]).directive('conceptsFooter', _footer4.default);exports.default = Concepts.Modules.footer.name;

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = footer;
	function footer($scope) {
	  Concepts.stores.Proto('Footer', footer.prototype);
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    restric: 'E',
	    templateUrl: 'footer/index'
	  };
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _overlay = __webpack_require__(48);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	var _overlay3 = __webpack_require__(49);
	
	var _overlay4 = _interopRequireDefault(_overlay3);
	
	var _overlay5 = __webpack_require__(50);
	
	var _overlay6 = _interopRequireDefault(_overlay5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Concepts.Modules.overlay = angular.module('overlay', []).factory('overlayFactory', _overlay6.default).controller('overlayController', ['overlayFactory', '$scope', 'RouterStates', _overlay4.default]).directive('overlay', ['menuFactory', 'DOMcache', '$timeout', _overlay2.default]);exports.default = Concepts.Modules.overlay.name;

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = overlay;
	function overlay(menuFactory, DOMcache, $timeout) {
	  var animation = undefined,
	      closeButton = undefined,
	      ui = undefined,
	      innerContainer = undefined,
	      column_elms = undefined;
	
	  var canUseTween = false;
	  try {
	    window.TweenMax;
	    canUseTween = true;
	  } catch (e) {
	    canUseTween = false;
	  };
	  var data = undefined;
	  var link = function link(scope, elm, attr) {
	    data = {
	      close: elm[0].querySelector('#close'),
	      inner: elm[0].children[0].children[0],
	      columns: elm[0].children[0].children[0].children[0].children,
	      ui: elm[0].children[0]
	
	    };
	    var animation = new TweenMax(data.ui, 0, { y: 1000 });
	    //element.tweenmaxHide();//default state...closes overlay
	    //scope.$on('menu-should-open',toggleMargins); //adjust margins for the overlay since menu is position fixed it will cover the overlay
	    //scope.$on('overlay-column-adjust',columnsAdjust); //hides/shows columns that have any data in them
	
	    //scope.$on('window-resize-event' ,fixMargin.bind(element)); //fixes overlay margins when window is resizing
	    var element = {
	      open: function open() {
	        if (canUseTween) {
	          animation.play();
	        } else {
	          innerContainer.classList.remove('open');
	          elms.classList.add('open');
	        }
	      },
	      close: function close() {
	        if (canUseTween) {
	          animation.reverse();
	        } else {
	          elms.classList.add('open');
	        }
	      },
	      clear: function clear() {
	
	        if (window.innerWidth > 1450) {
	          console.log(elm);
	          data.ui.style['margin-left'] = 110 + 'px';
	        } else {
	          data.ui.style['margin-left'] = 0 + 'px';
	        }
	      },
	      adjust: function adjust() {
	        if (window.innerWidth > 1450) {
	          data.ui.style['margin-left'] = '0px';
	        }
	      }
	    };
	
	    element.close(); //default to hidden
	    scope.$on('overlay-will-open', function () {
	      element.open();
	    });
	    scope.$on('overlay-adjust-margins', function (target, bool) {
	      //bound to menu toggleMargins
	      bool ? element.clear() : element.adjust();
	    });
	    data.close.addEventListener('click', function () {
	      element.close();
	    });
	  };
	  return {
	    //replace:true,
	    restric: 'E',
	    link: link,
	    templateUrl: 'overlay/index'
	  };
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = overlayController;
	
	var _states = __webpack_require__(14);
	
	function overlayController(overlayFactory, $scope, RouterStates) {
	    Concepts.stores.Proto('Overlay', overlayController.prototype);
	    console.log('ran');
	    var overlay = this;
	    overlay.data = null;
	    //gets available router states
	    var _keys = Object.keys(RouterStates());
	
	    function switchPageData(target, state) {
	        var columns = [];
	        if (_states.states.indexOf(state.title) > -1) {
	            (function () {
	
	                var data = overlayFactory.get(state.title);
	                var keys = Object.keys(data);
	                overlay.data = data;
	
	                keys.forEach(function (item, index) {
	                    //pushes the state of whether data[item] has data inside
	                    if (data[item].length > 0) {
	                        columns.push(true);
	                    } else {
	                        columns.push(false);
	                    }
	                });
	                //sets the status for this directive {Array of booleans} used by pageOptions{directive} $watches
	                //broadcasting to?
	                overlay.columns = columns;
	            })();
	        } else {
	            overlay.data = null;
	        }
	    }
	
	    //waits for CORE controller to broadcast ui.router $stateChangeSuccess
	    $scope.$on('global.pageReady', switchPageData);
	
	    overlayController.prototype.open = function () {
	        $scope.$broadcast('overlay-will-open');
	    };
	
	    overlayController.prototype.adjustMargins = function (bool) {
	        $scope.$broadcast('overlay-adjust-margins', bool);
	    };
	
	    overlayController.prototype.column_adjust = function (columns) {
	
	        // columns.forEach(function(column ,index){
	        //     if(!column){
	        //         column_elms[index].style.display ='none';
	        //     }else{
	        //         column_elms[index].style.display ='initial'
	        //     }
	        //
	        //
	        // });
	    };
	}

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = overlayFactory;
	function overlayFactory() {
	
	    var angular = {
	        column1: [['functions', { content: ['angular.bind', 'angular.bootstrap', 'angular.copy', 'angular.element', 'angular.equals', 'angular.extend', 'angular.forEach', 'angular.isArray', 'angular.toJson', 'angular.identify', 'angular.injector', 'angular.merge'] }], ['core', { content: ['ng-app', 'ng-bind', 'ng-model', 'ng-click', 'ng-class', 'ng-copy', 'ng-if', 'ng-show', 'ng-repeat', 'ng-hide', 'ng-options', 'ng-controller', 'ng-include', 'ng-init'] }]],
	        column2: [
	
	        //put controllers , directives ...ect in col 3 and have all the providers and services in col 2
	        ['services', { content: ['$anchorScroll', '$animate', '$cacheFactory', '$compile', '$controller', '$document', '$window', '$filter', '$http', '$local', '$interpolate', '$q', '$rootElement', '$timeout', '$interval', '$parse', '$log', '$resource'] }], ['providers', { content: ['$anchorScrollProvider', '$animateProvider', '$compileProvider', '$controllerProvider', '$httpProvider', '$interpolateProvider', '$logProvider', '$parseProvider', '$rootScopeProvider', '$filterProvider', '$templateRequestProvider'] }]],
	        column3: [['misc', { content: ['$scope', '$watch', '$watchCollection', '$sce', '$sceDelegate', '$cacheFactory', '$xhrFactory', '$broadcast', '$emit', '$rootScope', '$apply', '$applyAsync', '$digest'] }], ['create', { content: ['factory', 'controller', 'directive', 'decorator', 'animation', 'service', 'provider', 'constant', 'decorator', 'filter', 'run block', 'config block', 'value'] }]],
	        column4: [['links', { content: ['Egg Head IO', 'Angular Docs', 'ng-conf', 'Angular 2 Docs', 'Codepen', 'Plunker dev team', 'local resource'] }]],
	        column5: [['helpLinks', { content: ['angular docs', 'creapy chat bot', 'cleverbot', 'code school', 'tree house'] }], ['Best Practice', { content: ['when to use $scope', 'controller as syntax', 'optimize ng repeat', 'compile compile $compile!!!', 'desighn patterns', 'performance testing'] }], ['otherApis', { content: ['angular animate', 'angular material', 'angular aria', 'angular ui router', 'angular mock', 'angular sanitize', 'angular ui bootstrap', 'angular util'] }], ['spamLinks', { content: ['spamlink! one', 'spamlink! two', 'spamlink! three', 'spamlink! four', 'spamlink! five', 'spamlink! lost count'] }]]
	    };
	    var jquery = {
	        column1: [['Effects', { content: ['hide', 'show', 'toggle', 'animate', 'delay', 'finish', 'queue', 'stop', 'dequeue', 'fadeIn', 'fadeOut', 'fadeToggle', 'fadeTo', 'slideDown', 'slideUp', 'slideToggle'] }], ['Events', { content: ['bind', 'blur', 'change', 'click', 'contextmenu', 'dbclick', 'delegate', 'die', 'error', 'focus', 'focusin', 'focusout', 'hover', 'live', 'load', 'mousedown', 'mouseenter', 'on', 'off', 'ready', 'trigger', 'toggle', 'unbind'] }]],
	        column2: [['Ajax', { content: ['ajaxComplete', 'ajaxError', 'ajaxSend', 'ajaxStop', 'ajaxSuccses', 'ajax', 'ajaxSetup', 'ajaxTranport', 'get', 'getJSON', 'getStript'] }], ['Dimensions', { content: ['height', 'innerHeight', 'innerWidth', 'outerHeight', 'outerWidth', 'width'] }], ['Core Jquery', { content: ['jQuery', 'holdReady', 'noConflict', 'sub', 'when'] }], ['Manipulation', { content: ['addClass', 'after', 'append', 'appendTo', 'attr', 'before', 'css', 'detactch', 'empty', 'hasClass', 'height', 'clone', 'html', 'offset', 'prop', 'remove'] }]],
	        column3: [['Utilitys', { content: ['clearQueue', 'dequeue', 'boxModel', 'browser', 'contains', 'data', 'each', 'globalEval', 'isArray', 'isObject', 'isNumber', 'grep', 'merge', 'noop', 'now', 'proxy', 'html', 'parseHTML'] }]],
	        column4: [['Help links', { content: ['porn hub', 'jquery website', '^^ MUCH better than this shit ass website', 'Codeshool', 'Learn Code.acadamy', 'Treehouse', 'Thoughts in-depth'] }]],
	        column5: [['Best of practice', { content: ['dont use it!', 'food for thoughts'] }], ['jane! jane? or jane^', { content: ['dont use it!', 'food for thoughts'] }]]
	
	    };
	    var sass = {
	        column1: {
	            sass: [['sassify!!'], ['sassify!!'], ['sassify!!']]
	        },
	        column2: {},
	        column3: {},
	        column4: {},
	        column5: {}
	    };
	    var gulp = {
	        column1: [['features', { content: ['foo', 'bar', 'cats', 'jnagles', 'flufy'] }], ['syntax2.0', { content: ['o;;oasd', 'sex', 'death', 'jnagles', 'flufy', 'majoras mask'] }], ['DAM IT', { content: ['oh not', 'sex', 'death', 'jnagles', 'flufy', 'majoras mask'] }]],
	        column2: [['syntax', { content: ['foo', 'sex', 'death', 'jnagles', 'flufy', 'majoras mask'] }]],
	        column3: [['pupp', { content: ['foo', 'sex', 'death', 'jnagles', 'flufy', 'majoras mask', 'shoots'] }]],
	        column4: [['sex', { content: ['foo', 'sex', 'death', 'jnagles', 'flufy', 'majoras mask', 'just like it'] }]],
	        column5: [['fiels', { content: ['foo', 'fields of barlu'] }]]
	
	    };
	    var all = {
	        angular: angular,
	        jquery: jquery,
	        sass: sass,
	        gulp: gulp
	    };
	    var getSelected = function getSelected(data) {
	        return all[data];
	    };
	    return {
	        all: all,
	        get: getSelected
	    };
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _siteSettings = __webpack_require__(52);
	
	var _siteSettings2 = _interopRequireDefault(_siteSettings);
	
	var _siteSettings3 = __webpack_require__(53);
	
	var _siteSettings4 = _interopRequireDefault(_siteSettings3);
	
	var _themeList = __webpack_require__(54);
	
	var _themeList2 = _interopRequireDefault(_themeList);
	
	var _createTheme = __webpack_require__(55);
	
	var _createTheme2 = _interopRequireDefault(_createTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Concepts.Modules.siteSettings = angular.module('siteSettings', []).controller('siteSettingsController', ['$themes', '$scope', '$timeout', _siteSettings2.default]).directive('siteSettings', ['$timeout', _siteSettings4.default]).directive('themeList', ['$compile', 'THEME_KEYS', '$themes', _themeList2.default]).directive('createTheme', _createTheme2.default);exports.default = Concepts.Modules.siteSettings.name;

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = siteSettingsController;
	function siteSettingsController($themes, $scope, $timeout) {
	  Concepts.stores.Proto('Settings', siteSettingsController.prototype);
	  var settings = this;
	
	  //NEW CODE  ----------------------
	  var themeBool = JSON.parse(localStorage.$themeIsEnabled);
	  settings.themeToggler = function () {
	    themeBool = !themeBool;
	
	    localStorage.setItem('$themeIsEnabled', themeBool);
	
	    //console.log('%c'+themeBool,'color:green; font-size:25px');
	    updateThemeModel();
	  };
	
	  settings.cacheStatus = JSON.parse(localStorage.cache);
	  settings.cache = settings.cacheStatus;
	
	  settings.setCache = function () {
	    settings.cacheStatus = !settings.cacheStatus;
	    localStorage.cache = settings.cacheStatus;
	    $timeout(function () {
	
	      settings.cache = settings.cacheStatus;
	    });
	  };
	  settings.flushCache = function () {
	    Concepts.stores.getStore('Proto').localCache.clear();
	  };
	
	  settings.themeModel = false;
	  function updateThemeModel() {
	
	    var themeBool = localStorage.$themeIsEnabled;
	    if (themeBool == 'false') {
	      Concepts.stores.getStore('Proto').$themes.set('default');
	      settings.currentTheme = 'disabled';
	    } else {
	      //console.log('%c'+themeBool,'color:red; font-size:25px');
	      $timeout(function () {
	        settings.themeModel = JSON.parse(themeBool);
	        settings.themeStatus = settings.themeModel.toString().toTitleCase();
	        settings.currentTheme = localStorage.$theme;
	        localStorage.$theme = settings.currentTheme;
	        Concepts.stores.getStore('Proto').$themes.set(settings.currentTheme);
	      });
	    }
	  }
	  //when clicked on a theme in menu
	  settings.applyTheme = function (themeName) {
	    if (JSON.parse(localStorage.$themeIsEnabled)) {
	      Concepts.stores.getStore('Proto').$themes.set(themeName);
	      localStorage.$theme = themeName;
	      settings.currentTheme = themeName;
	    }
	  };
	  //init
	  updateThemeModel();
	
	  settings.toggleCustomThemes = function () {
	    Concepts.stores.getStore('Proto').createThemeDirective.open();
	  };
	  settings.exit = function () {
	    Concepts.stores.getStore('Proto').createThemeDirective.close();
	  };
	  siteSettingsController.prototype.recompileThemeList = function (updatedThemeKeys) {
	    $scope.$broadcast('recompile-themes', updatedThemeKeys);
	  };
	
	  siteSettingsController.prototype.updateCurrentTheme = function (current) {
	    settings.currentTheme = current;
	  };
	}

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = siteSettings;
	function siteSettings() {
	  Concepts.stores.Proto('SettingsDirective', siteSettings.prototype);
	
	  var target = undefined;
	  var shouldOpen = false;
	  siteSettings.prototype.toggle = function (bool) {
	    shouldOpen = bool;
	    update();
	  };
	
	  function displayNone() {
	    target.style.display = 'none';
	  }
	  var open = function open() {
	    target.style.display = 'flex';
	    setTimeout(function () {
	      target.style.opacity = '1';
	      target.style.transform = 'translate(0% ,0%)';
	    }, 500 / 2);
	  };
	  var close = function close() {
	    target.style.opacity = '0';
	    target.style.transform = 'translate(100% ,-100%)';
	    setTimeout(function () {
	      target.style.display = 'none';
	    }, 500 / 2);
	  };
	
	  function update() {
	    shouldOpen ? open() : close();
	  }
	
	  function link(scope, elm, attr) {
	    target = elm[0].children[0];
	    update();
	  }
	
	  return {
	    restric: 'E',
	    link: link,
	    templateUrl: 'site-settings/index'
	  };
	}

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function ($compile, THEME_KEYS, $themes) {
	    var link = function link(scope, elm) {
	        var built = [];
	        var updated = [];
	        var compile = null;
	        var self = this;
	        var once = true;
	        THEME_KEYS().forEach(build);
	        function recompile(target, keys) {
	            compile = null;
	            built = [];
	            keys.forEach(build);
	        }
	
	        function build(item, index, arr) {
	
	            var mdButton = document.createElement('md-button');
	            mdButton.setAttribute('ng-click', 'settings.applyTheme(\'' + item + '\')');
	            mdButton.innerText = item;
	            var mdMenuItem = document.createElement('md-menu-item');
	            mdMenuItem.appendChild(mdButton);
	            built.push(mdMenuItem);
	
	            if (index + 1 === arr.length) {
	                render();
	            }
	        }
	
	        function render() {
	
	            var compiled = undefined;
	            if (once) {
	
	                compiled = $compile(built)(scope);
	                elm.append(compiled);
	                once = false;
	            } else {
	                var _once = built.pop();
	                compiled = $compile(_once)(scope);
	                elm.append(compiled);
	            }
	        }
	        scope.$on('recompile-themes', recompile);
	    };
	    return {
	        scope: true,
	        restric: 'E',
	        link: link
	    };
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createTheme;
	function createTheme() {
	  Concepts.stores.Proto('createThemeDirective', createTheme.prototype);
	  var link = function link(scope, elm, attr) {
	    //gets elements requierd
	    var $elms = elm[0].children[0].children;
	    var input = $elms[0].querySelector('input');
	    var colorSwatches = $elms[1].children;
	    var color = colorSwatches[0].querySelector('input');
	    var background = colorSwatches[1].querySelector('input');
	    var accent = colorSwatches[2].querySelector('input');
	    var ui = elm[0].children[0];
	    var timeline = new TimelineMax();
	    var closeButton = elm[0].querySelector('#close');
	    //let animate = new TweenMax(ui ,0, {x:100 ,y:-100, height:0, zIndex:-1, width:0, ease:null, opacity:0});
	    var regex = /[a-z]/ig;
	
	    //regex for input to only allow chars a-z and A-Z
	
	    //md-button trigger
	
	    //this is used for this scope for watching Bridge.custumTheme.status boolean
	    //toggles Bridge.custumTheme.status boolean
	
	    createTheme.prototype.open = function () {
	      ui.style.display = 'flex';
	      setTimeout(function () {
	        ui.style.transform = 'translate(0% ,0%)';
	        ui.style.opacity = '1';
	        ui.style.width = '300px';
	        ui.style.height = '210px';
	      }, 500);
	    };
	    createTheme.prototype.close = function () {
	      ui.style.transform = 'translate(100% ,-100%)';
	      ui.style.opacity = '0';
	      ui.style.width = '0';
	      ui.style.height = '0';
	      setTimeout(function () {
	        ui.style.display = 'none';
	      }, 500);
	    };
	    var placeholder = {};
	    function process() {
	      var regex = /[^a-zA-Z ]/g;
	      if (input.value === '') {
	        alert('input is empty');
	      } else if (regex.test(input.value)) {
	        alert('malform string');
	      } else {
	        placeholder.title = input.value;
	        placeholder.text = color.value;
	        placeholder.background = background.value;
	        placeholder.accent = accent.value;
	        Concepts.stores.getStore('Proto').$themes.createTheme(placeholder);
	        Concepts.stores.getStore('Proto').Settings.updateCurrentTheme(placeholder.title);
	      }
	    }
	
	    function delegater(e) {
	
	      switch (e.target.id || e.target.parentNode.id) {
	        case 'close':
	          createTheme.prototype.close();
	          break;
	        case 'applyTheme':
	          process();
	          break;
	      }
	    }
	    ui.addEventListener('click', delegater);
	  };
	  return {
	    link: link,
	    templateUrl: 'site-settings/create-theme'
	  };
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _localCache = __webpack_require__(57);
	
	var _localCache2 = _interopRequireDefault(_localCache);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Concepts.Modules.templateInjector = angular.module('templateInjector', []).service('local_cache', ['$q', '$http', '$state', _localCache2.default]);exports.default = Concepts.Modules.templateInjector.name;

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var local_cache = function () {
	  function local_cache($q, $http, $state) {
	    var _this = this;
	
	    _classCallCheck(this, local_cache);
	
	    Concepts.stores.Proto('localCache', this);
	    this.$q = $q;
	    this.$http = $http;
	    this.state = $state;
	    this.get = this.get;
	    this.requests = 0;
	    this.cache = false;
	    this.log = this.log;
	    this.logs = [];
	    Concepts.info.http = [];
	
	    var first_run = function first_run() {
	      if (!localStorage.cache || localStorage.cache === 'null' || localStorage.cache === 'undefined') {
	        localStorage.cache = false;
	      }
	      _this.cache = localStorage.cache;
	    };
	    first_run();
	  }
	
	  _createClass(local_cache, [{
	    key: 'toggleCache',
	    value: function toggleCache() {}
	  }, {
	    key: 'get',
	    value: function get(url) {
	      var _this2 = this;
	
	      this.requests++;
	      var defer = this.$q.defer();
	      var path = url.replace(/\\/, '');
	      var key = url.match(/\/(.*)\//).pop();
	      var prefix = 'TEMPLATE_';
	      if (JSON.parse(localStorage.cache)) {
	
	        if (localStorage[prefix + key]) {
	          return localStorage[prefix + key];
	        } else {
	          this.$http.get(url).then(function (html) {
	            localStorage[prefix + key] = html.data;
	            defer.resolve(html);
	            console.log(html.data);
	            Concepts.info.http.push({ id: _this2.requests, url: url, timeStamp: Date.now() });
	          });
	          return defer.promise;
	        }
	      } else {
	
	        Concepts.info.http.push({ id: this.requests, url: url, timeStamp: Date.now() });
	        return this.$http.get(url);
	      }
	    }
	  }, {
	    key: 'willCache',
	    value: function willCache() {
	      return this.cache;
	    }
	  }, {
	    key: 'log',
	    value: function log(obj) {
	      this.logs.push(obj);
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ls = Object.keys(localStorage);
	      var templatePrefix = /TEMPLATE_/;
	      var count = 0;
	      ls.forEach(function (key, index, array) {
	        if (templatePrefix.test(key)) {
	          count++;
	          delete localStorage[key];
	        }
	        if (index + 1 == array.length) {
	          console.log('local templates cleared', count + ' in total');
	        }
	      });
	    }
	  }]);
	
	  return local_cache;
	}();

	exports.default = local_cache;

/***/ }
/******/ ]);
//# sourceMappingURL=Modules.js.map
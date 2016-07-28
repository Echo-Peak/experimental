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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _essentials = __webpack_require__(1);

	var _platform = __webpack_require__(11);

	var _platform2 = _interopRequireDefault(_platform);

	var _tabBar = __webpack_require__(22);

	var _tabBar2 = _interopRequireDefault(_tabBar);

	var _homepage = __webpack_require__(24);

	var _homepage2 = _interopRequireDefault(_homepage);

	var _mediaBar = __webpack_require__(25);

	var _mediaBar2 = _interopRequireDefault(_mediaBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_essentials.essentials.mount('lila'); //codename
	var _window$ReactRouter = window.ReactRouter;
	var hashHistory = _window$ReactRouter.hashHistory;
	var Link = _window$ReactRouter.Link;
	var Router = _window$ReactRouter.Router;
	var IndexRoute = _window$ReactRouter.IndexRoute;
	var Route = _window$ReactRouter.Route;

	var UI = function (_React$Component) {
	    _inherits(UI, _React$Component);

	    function UI(props) {
	        _classCallCheck(this, UI);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UI).call(this));

	        _this.state = {};

	        return _this;
	    }

	    _createClass(UI, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            lila.store.dom().add('UI', this);
	            hashHistory.push('home');
	            console.log(this.props);
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'UI', id: 'UI' },
	                React.createElement(
	                    'div',
	                    { className: 'top-bar' },
	                    React.createElement(_tabBar2.default, null),
	                    React.createElement('div', null)
	                ),
	                React.createElement(
	                    'span',
	                    null,
	                    'Version',
	                    Math.floor(Math.random() * 100)
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    this.props.children
	                ),
	                React.createElement(_mediaBar2.default, null)
	            );
	        }
	    }]);

	    return UI;
	}(React.Component);

	var App = function (_React$Component2) {
	    _inherits(App, _React$Component2);

	    function App(props) {
	        _classCallCheck(this, App);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

	        _this2.state = {};
	        return _this2;
	    }

	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'stuff',
	        value: function stuff(url) {
	            console.log(url);
	            document.getElementById('DEBUG-URL').innerText = url.location.pathname;
	        }
	    }, {
	        key: 'animate',
	        value: function animate(whatToAnimate) {

	            return function () {};
	        }
	    }, {
	        key: 'left',
	        value: function left() {
	            console.log("left");
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                Router,
	                { history: hashHistory },
	                React.createElement(
	                    Route,
	                    { path: '/', component: UI, onEnter: this.stuff },
	                    React.createElement(Route, { path: '/home', component: _platform2.default, onEnter: this.animate('homepage'), onLeave: this.left })
	                )
	            );
	        }
	    }]);

	    return App;
	}(React.Component);

	ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.essentials = undefined;

	var _namespace = __webpack_require__(2);

	var _namespace2 = _interopRequireDefault(_namespace);

	var _prototypes = __webpack_require__(9);

	var _prototypes2 = _interopRequireDefault(_prototypes);

	var _localStorage2 = __webpack_require__(6);

	var _localStorage3 = _interopRequireDefault(_localStorage2);

	var _onLoad = __webpack_require__(10);

	var _onLoad2 = _interopRequireDefault(_onLoad);

	var _audio = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var essentials = exports.essentials = {
	  mount: function mount(windowNamespace) {

	    window[windowNamespace] = new _namespace2.default();

	    this.firstRun(windowNamespace);
	  },
	  firstRun: function firstRun(windowNamespace) {
	    (0, _localStorage3.default)();
	    window.onload = _onLoad2.default.bind(_namespace2.default);
	    window[windowNamespace].audio = _audio.audio;
	    window[windowNamespace].audio.init();
	  }

	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _store = __webpack_require__(3);

	var _store2 = _interopRequireDefault(_store);

	var _utils = __webpack_require__(4);

	var _isolated = __webpack_require__(5);

	var _isolated2 = _interopRequireDefault(_isolated);

	var _pubSub = __webpack_require__(7);

	var _pubSub2 = _interopRequireDefault(_pubSub);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = function App() {
	  _classCallCheck(this, App);

	  this.store = (0, _store2.default)();
	  App._ = (0, _isolated2.default)();
	  this.UNSAFE = App._;

	  this.on = PubSub.subscribe;
	  this.emit = PubSub.publishSync;

	  this.broadcast = PubSub.publish;
	  this.util = _utils.utils;
	};

	exports.default = App;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var store = {};

	  return {
	    get keys() {
	      return Object.keys(store);
	    },
	    get length() {
	      return Object.keys(store).length;
	    },
	    add: function add(key) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      store[key] = args;
	    },
	    remove: function remove(key) {
	      store[key] = null;
	      delete store[key];
	    },
	    get: function get(key) {
	      return store[key];
	    },
	    ls: {
	      get ls() {
	        return JSON.parse(localStorage['app']);
	      },
	      update: function update(key, args) {
	        var x = JSON.parse(localStorage['app']);
	        x[key] = args;
	        localStorage['app'] = JSON.stringify(x);
	      }

	    },
	    dom: function dom() {
	      if (!store.hasOwnProperty('dom')) {
	        store.dom = {};
	      }

	      return {
	        add: function add(key, DOMElement) {
	          store.dom[key] = DOMElement;
	        },
	        get: function get(key) {
	          return store.dom[key];
	        },
	        delete: function _delete(key) {

	          store.dom[key] = null;
	          delete store.dom[key];
	        },
	        get list() {
	          return Object.keys(store.dom);
	        }
	      };
	    }
	  };
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var utils = exports.utils = {
	  debounce: function debounce(func, wait, immediate) {
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
	  },
	  error: function error(severity, msg) {
	    console[severity](msg);
	    if (severity == 'fatal') {
	      throw new Error(msg);
	    }
	  },
	  throttle: function throttle(fn, delay, context) {

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
	  },
	  //  http:
	  //  async:
	  toArray: function toArray(arrayLikeObjects) {

	    return Array.prototype.slice.call(arrayLikeObjects);
	  },
	  addFunctionality: function addFunctionality(name, fn) {
	    var self = utils;
	    var keys = Object.keys(utils);
	    if (typeof name === 'string' && typeof fn === 'function') {
	      keys.forEach(function (key) {
	        if (key === name) {
	          console.error('cant create fuctionallity');
	          return false;
	        }
	      });
	      self[name] = fn;
	    } else {
	      self.error('warn', 'invaild name or function');
	      return false;
	    }
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  return {
	    flushCache: function flushCache() {
	      var keys = Object.keys(localStorage);
	      keys.forEach(function (i) {
	        return delete localStorage[i];
	      });
	      (0, _localStorage3.default)();
	    },
	    eventBus: {}
	  };
	};

	var _localStorage2 = __webpack_require__(6);

	var _localStorage3 = _interopRequireDefault(_localStorage2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = {
	    location: null,
	    volume: 0,
	    playlist: null,
	    youtubeAuth: null,
	    isMuted: false,
	    seek: 0,
	    lastItem: null
	  };
	  var toKey = Object.keys(state);

	  if (!localStorage['app'] || localStorage['app'] === (null || undefined)) {
	    localStorage['app'] = JSON.stringify(state);
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*
	Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
	License: MIT - http://mrgnrdrck.mit-license.org
	https://github.com/mroderick/PubSubJS
	*/

	exports.default = function (root, factory) {
		'use strict';

		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
			// CommonJS
			factory(exports);
		}

		// Browser globals
		var PubSub = {};
		root.PubSub = PubSub;
		factory(PubSub);
	}((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window || undefined, function (PubSub) {
		'use strict';

		var messages = {},
		    lastUid = -1;

		function hasKeys(obj) {
			var key;

			for (key in obj) {
				if (obj.hasOwnProperty(key)) {
					return true;
				}
			}
			return false;
		}

		/**
	  *	Returns a function that throws the passed exception, for use as argument for setTimeout
	  *	@param { Object } ex An Error object
	  */
		function throwException(ex) {
			return function reThrowException() {
				throw ex;
			};
		}

		function callSubscriberWithDelayedExceptions(subscriber, message, data) {
			try {
				subscriber(message, data);
			} catch (ex) {
				setTimeout(throwException(ex), 0);
			}
		}

		function callSubscriberWithImmediateExceptions(subscriber, message, data) {
			subscriber(message, data);
		}

		function deliverMessage(originalMessage, matchedMessage, data, immediateExceptions) {
			var subscribers = messages[matchedMessage],
			    callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
			    s;

			if (!messages.hasOwnProperty(matchedMessage)) {
				return;
			}

			for (s in subscribers) {
				if (subscribers.hasOwnProperty(s)) {
					callSubscriber(subscribers[s], originalMessage, data);
				}
			}
		}

		function createDeliveryFunction(message, data, immediateExceptions) {
			return function deliverNamespaced() {
				var topic = String(message),
				    position = topic.lastIndexOf('.');

				// deliver the message as it is now
				deliverMessage(message, message, data, immediateExceptions);

				// trim the hierarchy and deliver message to each level
				while (position !== -1) {
					topic = topic.substr(0, position);
					position = topic.lastIndexOf('.');
					deliverMessage(message, topic, data, immediateExceptions);
				}
			};
		}

		function messageHasSubscribers(message) {
			var topic = String(message),
			    found = Boolean(messages.hasOwnProperty(topic) && hasKeys(messages[topic])),
			    position = topic.lastIndexOf('.');

			while (!found && position !== -1) {
				topic = topic.substr(0, position);
				position = topic.lastIndexOf('.');
				found = Boolean(messages.hasOwnProperty(topic) && hasKeys(messages[topic]));
			}

			return found;
		}

		function publish(message, data, sync, immediateExceptions) {
			var deliver = createDeliveryFunction(message, data, immediateExceptions),
			    hasSubscribers = messageHasSubscribers(message);

			if (!hasSubscribers) {
				return false;
			}

			if (sync === true) {
				deliver();
			} else {
				setTimeout(deliver, 0);
			}
			return true;
		}

		/**
	  *	PubSub.publish( message[, data] ) -> Boolean
	  *	- message (String): The message to publish
	  *	- data: The data to pass to subscribers
	  *	Publishes the the message, passing the data to it's subscribers
	 **/
		PubSub.publish = function (message, data) {
			return publish(message, data, false, PubSub.immediateExceptions);
		};

		/**
	  *	PubSub.publishSync( message[, data] ) -> Boolean
	  *	- message (String): The message to publish
	  *	- data: The data to pass to subscribers
	  *	Publishes the the message synchronously, passing the data to it's subscribers
	 **/
		PubSub.publishSync = function (message, data) {
			return publish(message, data, true, PubSub.immediateExceptions);
		};

		/**
	  *	PubSub.subscribe( message, func ) -> String
	  *	- message (String): The message to subscribe to
	  *	- func (Function): The function to call when a new message is published
	  *	Subscribes the passed function to the passed message. Every returned token is unique and should be stored if
	  *	you need to unsubscribe
	 **/
		PubSub.subscribe = function (message, func) {
			if (typeof func !== 'function') {
				return false;
			}

			// message is not registered yet
			if (!messages.hasOwnProperty(message)) {
				messages[message] = {};
			}

			// forcing token as String, to allow for future expansions without breaking usage
			// and allow for easy use as key names for the 'messages' object
			var token = 'uid_' + String(++lastUid);
			messages[message][token] = func;

			// return token for unsubscribing
			return token;
		};

		/* Public: Clears all subscriptions
	  */
		PubSub.clearAllSubscriptions = function clearAllSubscriptions() {
			messages = {};
		};

		/*Public: Clear subscriptions by the topic
	 */
		PubSub.clearSubscriptions = function clearSubscriptions(topic) {
			var m;
			for (m in messages) {
				if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0) {
					delete messages[m];
				}
			}
		};

		/* Public: removes subscriptions.
	  * When passed a token, removes a specific subscription.
	  * When passed a function, removes all subscriptions for that function
	  * When passed a topic, removes all subscriptions for that topic (hierarchy)
	  *
	  * value - A token, function or topic to unsubscribe.
	  *
	  * Examples
	  *
	  *		// Example 1 - unsubscribing with a token
	  *		var token = PubSub.subscribe('mytopic', myFunc);
	  *		PubSub.unsubscribe(token);
	  *
	  *		// Example 2 - unsubscribing with a function
	  *		PubSub.unsubscribe(myFunc);
	  *
	  *		// Example 3 - unsubscribing a topic
	  *		PubSub.unsubscribe('mytopic');
	  */
		PubSub.unsubscribe = function (value) {
			var isTopic = typeof value === 'string' && messages.hasOwnProperty(value),
			    isToken = !isTopic && typeof value === 'string',
			    isFunction = typeof value === 'function',
			    result = false,
			    m,
			    message,
			    t;

			if (isTopic) {
				delete messages[value];
				return;
			}

			for (m in messages) {
				if (messages.hasOwnProperty(m)) {
					message = messages[m];

					if (isToken && message[value]) {
						delete message[value];
						result = value;
						// tokens are unique, so we can just stop here
						break;
					}

					if (isFunction) {
						for (t in message) {
							if (message.hasOwnProperty(t) && message[t] === value) {
								delete message[t];
								result = true;
							}
						}
					}
				}
			}

			return result;
		};
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Path = __webpack_require__(30);
	var fs = __webpack_require__(31);

	var audio = exports.audio = {
	  clock: null,
	  counter: 0,
	  que: [],
	  loop: false,
	  init: function init() {
	    var _this = this;

	    lila.on('play', function (m, data) {});
	    lila.on('next', function (m, data) {
	      _this.nextItem(data);
	    });
	    lila.on('previous', function (m, data) {
	      _this.previousItem(data); //{loading from this.que}
	    });
	    lila.on('playback-pause', function (m, bool) {
	      _this.pause(bool);
	    });
	    lila.on('loop', function () {
	      _this.loop();
	    });
	    lila.on('seek', function (m, to) {
	      _this.seek(to);
	    });
	  },
	  load: function load(pathOrDir) {
	    var _this2 = this;

	    var self = this;
	    var url = /^http/.test(pathOrDir);
	    var fileTypes = /\.oog|\.mp3$/;
	    var file = undefined;

	    if (url) {
	      file = pathOrDir;
	    } else {
	      if (fileTypes.test(pathOrDir)) {

	        fs.readdir(pathOrDir, function (err, data) {
	          if (err || data == undefined) {
	            console.warn(err, data);
	            file = Path.resolve(pathOrDir);
	          } else {
	            file = [];
	            data.forEach(function (fileItem) {
	              if (fileTypes.test(fileItem)) {
	                audioFiles.push(Path.resolve(pathOrDir, fileItem));
	              }
	            });
	          }
	          process.nextTick(function () {
	            console.log('FILE', file);
	            _this2.play(file);
	            _this2.toggleClock(true);
	          });
	        });
	      }
	    }

	    return {
	      play: this.play.bind(null, file),
	      pause: this.pause.bind(null, this.que)
	    };
	  },
	  play: function play(file) {
	    var _this3 = this;

	    var createAudio = undefined;
	    var self = this;
	    if (Array.isArray(file)) {
	      file.forEach(function (src) {
	        createAudio = new Audio();
	        createAudio.src = src;

	        self.que.push({ src: src, audio: createAudio });
	      });
	    } else {
	      createAudio = new Audio();
	      createAudio.src = file;

	      this.que.push({ src: file, audio: createAudio });
	    }
	    this.que[0].audio.play();
	    console.log('PLAY', this.que[0].audio);

	    this.que[0].audio.addEventListener('loadedmetadata', function () {
	      var trackLength = Math.floor(_this3.que[0].audio.seekable.start(0) + _this3.que[0].audio.seekable.end(0));
	      var mins = Math.floor(trackLength / 60);
	      var secs = trackLength - mins * 60;

	      lila.broadcast('playback-length', {
	        time: [mins, secs],
	        trackLength: trackLength
	      });
	    });
	  },
	  pause: function pause(bool) {

	    if (bool) {
	      this.que[0].audio.pause();
	      this.toggleClock(false);
	    } else {
	      this.que[0].audio.play();
	      this.toggleClock(true);
	    }
	  },
	  nextItem: function nextItem(item) {
	    this.unload();
	  },
	  uload: function uload() {
	    this.que[0].audio.pause();
	    this.que[0].audo.src = '';
	  },
	  seek: function seek(seekNumber) {
	    this.que[0].audio.currentTime = seekNumber;
	  },
	  previousItem: function previousItem(item) {},
	  loop: function loop() {
	    if (this.loop) {
	      this.que[0].audio.loop = true;
	    } else {
	      this.que[0].audio.loop = false;
	    }
	  },
	  toggleClock: function toggleClock(willRun) {
	    clearInterval(this.clock);

	    var self = this;
	    var trackLength = 2;
	    //console.log('TOGGLE CLOCK', this.que[0].audio.seekable )
	    if (willRun) {
	      this.counter = 0;
	      this.clock = setInterval(function () {
	        self.counter++;
	        lila.emit('playback-time', {
	          elapsed: self.counter,
	          audo: self.que[0],
	          currentTime: self.que[0].audio.currentTime });
	      }, 1000);
	    }
	  },
	  localQue: function localQue() {
	    var ls = JSON.parse(localStorage['app']);

	    if (ls.que.length) {
	      return ls.que;
	    } else {
	      return false;
	    }
	  }

	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(String.prototype, 'uid', {
	  get: function get() {
	    var alphabet = 'abcdefghijkmnopqrstuvwxyz';
	    alphabet += alphabet.toUpperCase();
	    alphabet += '0123456789';
	    alphabet.split('');

	    var amount = 8;

	    if (this.length >= 1 && parseInt(this) !== NaN && isNaN(parseInt(this)) == false) {
	      amount = parseInt(this);
	    }
	    var x = '';
	    for (var i = 0; i < amount; i++) {
	      x += alphabet[Math.floor(Math.random() * alphabet.length)];
	    }
	    return x;
	  }
	});

	Object.defineProperty(Object, 'toJson', {
	  get: function get() {
	    return JSON.stringify(this);
	  }
	});
	Object.defineProperty(String.prototype, 'toObject', {
	  get: function get() {
	    return JSON.parse(this);
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _local = __webpack_require__(12);

	var _local2 = _interopRequireDefault(_local);

	var _youtube = __webpack_require__(14);

	var _youtube2 = _interopRequireDefault(_youtube);

	var _soundcloud = __webpack_require__(20);

	var _soundcloud2 = _interopRequireDefault(_soundcloud);

	var _bandcamp = __webpack_require__(21);

	var _bandcamp2 = _interopRequireDefault(_bandcamp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Platform = function (_React$Component) {
	    _inherits(Platform, _React$Component);

	    function Platform(props) {
	        _classCallCheck(this, Platform);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Platform).call(this));

	        _this.state = {};

	        return _this;
	    }

	    _createClass(Platform, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'platform' },
	                React.createElement(
	                    'div',
	                    { className: 'platform-margin-auto' },
	                    React.createElement(_local2.default, { url: this.props.route.path, delayOffset: 0 }),
	                    React.createElement(_youtube2.default, { url: this.props.route.path, delayOffset: 5 }),
	                    React.createElement(_soundcloud2.default, { url: this.props.route.path, delayOffset: 10 }),
	                    React.createElement(_bandcamp2.default, { url: this.props.route.path, delayOffset: 15 })
	                )
	            );
	        }
	    }]);

	    return Platform;
	}(React.Component);

	exports.default = Platform;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import PlatformMenu from './platform-menu';
	var electron = __webpack_require__(13);

	var Local = function (_React$Component) {
	  _inherits(Local, _React$Component);

	  function Local(props) {
	    _classCallCheck(this, Local);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Local).call(this));

	    _this.state = {
	      isOpen: false,
	      tip: 'something'
	    };
	    _this.tipInterval = null;
	    _this.tipsArray = ['join us', 'walmart is death', 'green is acually red', 'i crached and landed', 'it almost happend again'];
	    _this.interval = null;
	    return _this;
	  }

	  _createClass(Local, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //console.error('has mounted' ,this.props.url)

	      this.animateTips(true);
	      //  this.refs['current-folder'].innerText = lila.ls.location
	    }
	  }, {
	    key: 'animateTips',
	    value: function animateTips(shouldAnimate) {
	      var _this2 = this;

	      var interval = false;
	      var direction = ['top', 'left', 'right', 'bottom'];
	      var delay = 8000 + (this.props.delayOffset || 0);
	      var tween = TweenMax;
	      var aDelay = 0.8;
	      var statingProps = { opacity: 1, transform: 'translate(0%,0%)' };
	      var element = this.refs.tip;
	      var self = this;

	      if (shouldAnimate) {
	        clearInterval(this.internal);

	        this.internal = setInterval(function () {
	          var currentTip = _this2.tipsArray[Math.floor(Math.random() * _this2.tipsArray.length)];
	          var Rdirection = direction[Math.floor(Math.random() * direction.length)];
	          console.log('runiing');

	          var whenDone = function whenDone() {
	            console.warn('complete', currentTip);
	            tween.to(element, aDelay, { x: '0%', y: '0%', opacity: 1, scale: 1 });
	            self.setState({
	              tip: currentTip
	            });
	          };

	          switch (Rdirection) {
	            case 'left':
	              tween.to(element, aDelay, { x: '-100%', opacity: 0, scale: 0, onComplete: whenDone });break;
	            case 'right':
	              tween.to(element, aDelay, { x: '100%', opacity: 0, scale: 0, onComplete: whenDone });break;
	            case 'top':
	              tween.to(element, aDelay, { y: '-100%', opacity: 0, scale: 0, onComplete: whenDone });break;
	            case 'bottom':
	              tween.to(element, aDelay, { y: '100%', opacity: 0, scale: 0, onComplete: whenDone });break;

	          }
	        }, delay);
	      } else {
	        element.style.cssText = '';
	        clearInterval(this.internal);
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      this.state.isOpen = !this.state.isOpen;

	      if (this.state.isOpen) {
	        TweenMax.to(this.refs.elm, 0.3, {
	          marginTop: -250,
	          ease: Expo.easeOut
	        });
	        this.animateTips(false);
	      } else {
	        TweenMax.to(this.refs.elm, 0.3, {
	          marginTop: 0,
	          ease: Expo.easeIn
	        });
	        this.animateTips(true);
	      }
	    }
	  }, {
	    key: 'openFolder',
	    value: function openFolder() {
	      electron.remote.dialog.showOpenDialog({ tile: 'open folder',
	        properties: ['openDirectory'] }, function (dirname) {
	        //localStorage['app'] = dirname.toString()
	        lila.store.ls.update('location', dirname);
	        //go to local page
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return React.createElement(
	        'div',
	        { className: 'platform-local', title: 'Play music from your computer', onMouseEnter: this.toggle.bind(this), onMouseLeave: this.toggle.bind(this) },
	        React.createElement(
	          'div',
	          { className: 'platform-local-margins', ref: 'elm' },
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'div',
	              { className: 'platform-local-img' },
	              React.createElement('img', { src: 'res/local.png' })
	            ),
	            React.createElement(
	              'div',
	              { className: 'platform-local-heading' },
	              React.createElement(
	                'p',
	                { ref: 'tip' },
	                this.state.tip || 'somthing'
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'div',
	              { className: 'platform-local-hoverState' },
	              React.createElement(
	                'h4',
	                { ref: 'current-folder' },
	                lila.store.ls.ls.location || 'no folder'
	              ),
	              React.createElement(
	                'span',
	                null,
	                'Open folder'
	              ),
	              React.createElement(
	                'button',
	                { onClick: this.openFolder },
	                'Open'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Local;
	}(React.Component);

	exports.default = Local;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _platformMenu = __webpack_require__(15);

	var _platformMenu2 = _interopRequireDefault(_platformMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Youtube = function (_React$Component) {
	  _inherits(Youtube, _React$Component);

	  function Youtube(props) {
	    _classCallCheck(this, Youtube);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Youtube).call(this));

	    _this.state = {
	      isOpen: false
	    };
	    return _this;
	  }

	  _createClass(Youtube, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      this.state.isOpen = !this.state.isOpen;

	      if (this.state.isOpen) {
	        TweenMax.to(this.refs.elm, 0.3, {
	          marginTop: -250,
	          ease: Expo.easeOut
	        });
	      } else {
	        TweenMax.to(this.refs.elm, 0.3, {
	          marginTop: 0,
	          ease: Expo.easeIn
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'platform-youtube', title: 'Play music from your computer', onMouseEnter: this.toggle.bind(this), onMouseLeave: this.toggle.bind(this) },
	        React.createElement(
	          'div',
	          { className: 'platform-youtube-margins', ref: 'elm' },
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'div',
	              { className: 'platform-youtube-img' },
	              React.createElement('img', { src: 'res/youtube.png' })
	            ),
	            React.createElement(
	              'div',
	              { className: 'platform-youtube-heading' },
	              React.createElement(
	                'p',
	                null,
	                this.state.tip || 'somthing'
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'div',
	              { className: 'platform-youtube-hoverState' },
	              'helo'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Youtube;
	}(React.Component);

	exports.default = Youtube;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _localMenu = __webpack_require__(16);

	var _localMenu2 = _interopRequireDefault(_localMenu);

	var _youtubeMenu = __webpack_require__(17);

	var _youtubeMenu2 = _interopRequireDefault(_youtubeMenu);

	var _soundcloudMenu = __webpack_require__(18);

	var _soundcloudMenu2 = _interopRequireDefault(_soundcloudMenu);

	var _bandcampMenu = __webpack_require__(19);

	var _bandcampMenu2 = _interopRequireDefault(_bandcampMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PlatformMenu = function (_React$Component) {
	  _inherits(PlatformMenu, _React$Component);

	  function PlatformMenu(props) {
	    _classCallCheck(this, PlatformMenu);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlatformMenu).call(this));

	    _this.state = {
	      open: false,
	      platform: null
	    };
	    return _this;
	  }

	  _createClass(PlatformMenu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {

	      var hide = this.props.status ? { display: 'block' } : { display: 'none' };
	      var position = {
	        left: this.props.mouse[0],
	        top: this.props.mouse[1]
	      };

	      var styles = Object.assign({}, hide, position);

	      var Alias = undefined;

	      switch (this.props.platform) {
	        case 'local':
	          Alias = _localMenu2.default;break;
	        case 'youtube':
	          Alias = _youtubeMenu2.default;break;
	        case 'soundcloud':
	          Alias = _soundcloudMenu2.default;break;
	        case 'bandcamp':
	          Alias = _bandcampMenu2.default;break;
	        default:
	          Alias = 'h6';
	      }

	      return React.createElement(
	        'div',
	        { className: 'platform-menu', style: styles },
	        React.createElement(
	          Alias,
	          null,
	          'No platform selected'
	        )
	      );
	    }
	  }]);

	  return PlatformMenu;
	}(React.Component);

	exports.default = PlatformMenu;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var electron = __webpack_require__(13);

	var LocalMenu = function (_React$Component) {
	  _inherits(LocalMenu, _React$Component);

	  function LocalMenu(props) {
	    _classCallCheck(this, LocalMenu);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LocalMenu).call(this));

	    _this.state = {
	      location: null,
	      isFileSystemOpen: false

	    };
	    return _this;
	  }

	  _createClass(LocalMenu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'openFileSystem',
	    value: function openFileSystem() {

	      electron.remote.dialog.showOpenDialog({ title: 'Open Folder',
	        filters: [{ name: 'Music', extensions: ['mp3', 'oog'] }],
	        defaultPath: 'C:/',
	        properties: ['openDirectory', 'openFile', 'multiSelections']
	      }, function (directory) {
	        electron.ipcRenderer.send('platform-local-menu', directory);
	      });

	      this.setState({
	        isFileSystemOpen: true
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'platform-local-menu' },
	        React.createElement(
	          'ul',
	          null,
	          React.createElement(
	            'li',
	            { onClick: this.openFileSystem.bind(this) },
	            'Open folder'
	          ),
	          React.createElement(
	            'li',
	            null,
	            'play file'
	          )
	        )
	      );
	    }
	  }]);

	  return LocalMenu;
	}(React.Component);

	exports.default = LocalMenu;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var YoutubeMenu = function (_React$Component) {
	    _inherits(YoutubeMenu, _React$Component);

	    function YoutubeMenu(props) {
	        _classCallCheck(this, YoutubeMenu);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(YoutubeMenu).call(this));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(YoutubeMenu, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('div', { className: 'platform-youtube-menu' });
	        }
	    }]);

	    return YoutubeMenu;
	}(React.Component);

	exports.default = YoutubeMenu;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SoundcloudMenu = function (_React$Component) {
	    _inherits(SoundcloudMenu, _React$Component);

	    function SoundcloudMenu(props) {
	        _classCallCheck(this, SoundcloudMenu);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SoundcloudMenu).call(this));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(SoundcloudMenu, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'platform-soundcloud-menu' },
	                React.createElement(
	                    'h6',
	                    null,
	                    'fo bar'
	                )
	            );
	        }
	    }]);

	    return SoundcloudMenu;
	}(React.Component);

	exports.default = SoundcloudMenu;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BandcampMenu = function (_React$Component) {
	    _inherits(BandcampMenu, _React$Component);

	    function BandcampMenu(props) {
	        _classCallCheck(this, BandcampMenu);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BandcampMenu).call(this));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(BandcampMenu, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('div', { className: 'platform-bandcamp-menu' });
	        }
	    }]);

	    return BandcampMenu;
	}(React.Component);

	exports.default = BandcampMenu;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _platformMenu = __webpack_require__(15);

	var _platformMenu2 = _interopRequireDefault(_platformMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Soundcloud = function (_React$Component) {
	  _inherits(Soundcloud, _React$Component);

	  function Soundcloud(props) {
	    _classCallCheck(this, Soundcloud);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Soundcloud).call(this));

	    _this.state = {
	      isOpen: false
	    };
	    return _this;
	  }

	  _createClass(Soundcloud, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      this.state.isOpen = !this.state.isOpen;

	      if (this.state.isOpen) {
	        TweenMax.to(this.refs.elm, 0.3, {
	          marginTop: -250,
	          ease: Expo.easeOut
	        });
	      } else {
	        TweenMax.to(this.refs.elm, 0.3, {
	          marginTop: 0,
	          ease: Expo.easeIn
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'platform-soundcloud', title: 'Play music from your computer', onMouseEnter: this.toggle.bind(this), onMouseLeave: this.toggle.bind(this) },
	        React.createElement(
	          'div',
	          { className: 'platform-soundcloud-margins', ref: 'elm' },
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'div',
	              { className: 'platform-soundcloud-img' },
	              React.createElement('img', { src: 'res/soundcloud.png' })
	            ),
	            React.createElement(
	              'div',
	              { className: 'platform-soundcloud-heading' },
	              React.createElement(
	                'p',
	                null,
	                this.state.tip || 'somthing'
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'div',
	              { className: 'platform-soundcloud-hoverState' },
	              'helo'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Soundcloud;
	}(React.Component);

	exports.default = Soundcloud;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bandcamp = function (_React$Component) {
	  _inherits(Bandcamp, _React$Component);

	  function Bandcamp(props) {
	    _classCallCheck(this, Bandcamp);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bandcamp).call(this));

	    _this.state = {
	      isOpen: false
	    };
	    return _this;
	  }

	  _createClass(Bandcamp, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      this.state.isOpen = !this.state.isOpen;

	      if (this.state.isOpen) {
	        TweenMax.to(this.refs.elm, 0.3, {
	          marginTop: -250,
	          ease: Expo.easeOut
	        });
	      } else {
	        TweenMax.to(this.refs.elm, 0.3, {
	          marginTop: 0,
	          ease: Expo.easeIn
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'platform-bandcamp', title: 'Play music from your computer', onMouseEnter: this.toggle.bind(this), onMouseLeave: this.toggle.bind(this) },
	        React.createElement(
	          'div',
	          { className: 'platform-bandcamp-margins', ref: 'elm' },
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'div',
	              { className: 'platform-bandcamp-img' },
	              React.createElement('img', { src: 'res/bandcamp.png' })
	            ),
	            React.createElement(
	              'div',
	              { className: 'platform-bandcamp-heading' },
	              React.createElement(
	                'p',
	                null,
	                this.state.tip || 'somthing'
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'div',
	              { className: 'platform-bandcamp-hoverState' },
	              'helo'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Bandcamp;
	}(React.Component);

	exports.default = Bandcamp;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _tab = __webpack_require__(23);

	var _tab2 = _interopRequireDefault(_tab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tabs = function (_React$Component) {
	  _inherits(Tabs, _React$Component);

	  function Tabs(props) {
	    _classCallCheck(this, Tabs);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Tabs, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {

	      return React.createElement(
	        'div',
	        { className: 'tab-bar' },
	        React.createElement(
	          'ul',
	          null,
	          React.createElement(_tab2.default, { title: 'Home', icon: 'home' }),
	          React.createElement(_tab2.default, { title: 'Local', icon: 'windows' }),
	          React.createElement(_tab2.default, { title: 'Youtube', icon: 'youtube' }),
	          React.createElement(_tab2.default, { title: 'Sound Cloud', icon: 'soundcloud' }),
	          React.createElement(_tab2.default, { title: 'Bandcamp', icon: 'book' })
	        )
	      );
	    }
	  }]);

	  return Tabs;
	}(React.Component);

	exports.default = Tabs;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var hashHistory = window.ReactRouter.hashHistory;

	var Tab = function (_React$Component) {
	  _inherits(Tab, _React$Component);

	  function Tab(props) {
	    _classCallCheck(this, Tab);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Tab, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'gotoPage',
	    value: function gotoPage() {
	      hashHistory.push('/' + this.props.title.toLowerCase());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'li',
	        { className: 'tab', onClick: this.gotoPage },
	        React.createElement(
	          'div',
	          null,
	          React.createElement('i', { className: 'fa fa-' + this.props.icon + ' tab-icon-' + this.props.icon })
	        ),
	        React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'h5',
	            null,
	            this.props.title
	          )
	        )
	      );
	    }
	  }]);

	  return Tab;
	}(React.Component);

	exports.default = Tab;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mediaBar = __webpack_require__(25);

	var _mediaBar2 = _interopRequireDefault(_mediaBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Homepage = function (_React$Component) {
	  _inherits(Homepage, _React$Component);

	  function Homepage(props) {
	    _classCallCheck(this, Homepage);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Homepage).call(this));

	    _this.state = {
	      dynamicBackground: false
	    };

	    return _this;
	  }

	  _createClass(Homepage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log(this.props.route.path);
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'dynamicBackground',
	    value: function dynamicBackground() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var items = [{ title: 'Youtube', icon: 'youtube' }, { title: 'Sound Cloud', icon: 'soundcloud' }, { title: 'Local', icon: 'windows' }, { title: 'Bandcamp', icon: 'book' }];
	      return React.createElement(
	        'div',
	        { className: 'homepage' },
	        React.createElement(
	          'div',
	          { className: 'home-menu' },
	          React.createElement(
	            'div',
	            { className: 'home-menu-version' },
	            React.createElement(
	              'span',
	              null,
	              'v 0.2'
	            )
	          ),
	          React.createElement('div', { className: 'home-menu-menu' })
	        ),
	        React.createElement(
	          'div',
	          { className: 'home-aside' },
	          'f'
	        )
	      );
	    }
	  }]);

	  return Homepage;
	}(React.Component);

	exports.default = Homepage;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mediaBarControls = __webpack_require__(26);

	var _mediaBarControls2 = _interopRequireDefault(_mediaBarControls);

	var _mediaTimeline = __webpack_require__(27);

	var _mediaTimeline2 = _interopRequireDefault(_mediaTimeline);

	var _mediaAvatar = __webpack_require__(28);

	var _mediaAvatar2 = _interopRequireDefault(_mediaAvatar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MediaBar = function (_React$Component) {
	  _inherits(MediaBar, _React$Component);

	  function MediaBar(props) {
	    _classCallCheck(this, MediaBar);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MediaBar).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(MediaBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'media-bar' },
	        React.createElement(
	          'div',
	          { className: 'inner-bar' },
	          React.createElement(_mediaBarControls2.default, null),
	          React.createElement(_mediaTimeline2.default, null),
	          React.createElement(_mediaAvatar2.default, null)
	        )
	      );
	    }
	  }]);

	  return MediaBar;
	}(React.Component);

	exports.default = MediaBar;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MediaBarControls = function (_React$Component) {
	  _inherits(MediaBarControls, _React$Component);

	  function MediaBarControls(props) {
	    _classCallCheck(this, MediaBarControls);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MediaBarControls).call(this));

	    _this.state = {
	      play: false,
	      volume: 0.25,
	      repeat: false,
	      audio: null
	    };

	    var audioSrc = undefined;
	    var self = _this;

	    return _this;
	  }

	  _createClass(MediaBarControls, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'playItem',
	    value: function playItem() {

	      this.setState({ play: !this.state.play });

	      if (this.state.play) {
	        lila.emit('playback-pause', false);
	      } else {
	        lila.emit('playback-pause', true);
	      }
	    }
	  }, {
	    key: 'changeVolume',
	    value: function changeVolume(elm) {
	      console.log(elm.target.value, this.state.audio);
	      this.setState({
	        volume: Number(elm.target.value)
	      });
	      if (this.state.audio != null) {
	        this.state.audio.volume = Number(elm.target.value);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var playIcon = this.state.play ? 'play' : 'pause';
	      var volume = this.state.volume;

	      return React.createElement(
	        'div',
	        { className: 'media-inner-controls' },
	        React.createElement('div', { title: 'previous item', className: 'back fa fa-step-backward fa-2x' }),
	        React.createElement('div', { title: 'play', className: 'play fa fa-' + playIcon + ' fa-2x', onClick: this.playItem.bind(this) }),
	        React.createElement('div', { title: 'next item', className: 'next fa fa-step-forward fa-2x' }),
	        React.createElement('div', { title: 'repeat', className: 'repeat fa fa-repeat fa-2x' }),
	        React.createElement(
	          'div',
	          { title: 'change volume', className: 'volume fa fa-volume-up fa-2x' },
	          React.createElement('input', { type: 'range', id: 'volume-slider', onChange: this.changeVolume.bind(this), min: '0', max: '1', step: '.10', value: volume })
	        )
	      );
	    }
	  }]);

	  return MediaBarControls;
	}(React.Component);

	exports.default = MediaBarControls;

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import Track from './track';

	var MediaTimeline = function (_React$Component) {
	  _inherits(MediaTimeline, _React$Component);

	  function MediaTimeline(props) {
	    _classCallCheck(this, MediaTimeline);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MediaTimeline).call(this));

	    _this.state = {
	      pos: 0,
	      currentTime: null,
	      trackLength: 100,
	      totlalTime: null
	    };

	    return _this;
	  }

	  _createClass(MediaTimeline, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      lila.on('playback-time', function (m, data) {
	        console.log(data);
	        var toMins = Math.floor(data.elapsed / 60);
	        var secs = data.elapsed - toMins * 60;

	        _this2.setState({
	          currentTime: toMins + ':' + secs,
	          pos: data.currentTime

	        });
	      });
	      lila.on('playback-length', function (m, data) {
	        var displayTrackLength = data.time[0] + ':' + data.time[1];
	        var trackLength = data.trackLength;

	        _this2.setState({
	          totlalTime: displayTrackLength,
	          trackLength: trackLength
	        });
	      });
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'seek',
	    value: function seek(e) {
	      this.setState({
	        pos: Number(e.target.value)
	      });
	      lila.emit('playback-seek', Number(e.target.value));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'media-inner-timeline', ref: 'timeline' },
	        React.createElement(
	          'div',
	          { className: 'current-time' },
	          React.createElement(
	            'span',
	            { ref: 'current-time' },
	            this.state.currentTime
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'track' },
	          React.createElement('input', { type: 'range', id: 'track-slider', min: '0', max: this.state.trackLength, onChange: this.seek.bind(this), value: this.state.pos })
	        ),
	        React.createElement(
	          'div',
	          { className: 'track-length' },
	          React.createElement(
	            'span',
	            { ref: 'track-length' },
	            this.state.totlalTime
	          )
	        )
	      );
	    }
	  }]);

	  return MediaTimeline;
	}(React.Component);

	exports.default = MediaTimeline;

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MediaAvatar = function (_React$Component) {
	    _inherits(MediaAvatar, _React$Component);

	    function MediaAvatar(props) {
	        _classCallCheck(this, MediaAvatar);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MediaAvatar).call(this));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(MediaAvatar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('div', { className: 'media-inner-avatar-title' });
	        }
	    }]);

	    return MediaAvatar;
	}(React.Component);

	exports.default = MediaAvatar;

/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }
/******/ ]);
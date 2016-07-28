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

	var _render = __webpack_require__(1);

	var _render2 = _interopRequireDefault(_render);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	//import user from './user-actions'

	//compiledi

	var foo = exports.foo = {

	  out: '(null /*ERROR no such file \'C:/WEB PROJECTS/Gulp POWERED Apps/github/include-file/demo/stuff.html\'*/)',
	  stuffa: "var a = \`"+
	"\"use strict\";"+
	"Object.defineProperty(exports, \'__esModule\', {"+
	"  value: true"+
	"});"+
	"//import user from \"./user-actions\""+
	"//compiledi"+
	"var foo = exports.foo = {"+
	"  out: File(\"stuff.html\"),"+
	"  stuffa: \"\""+
	"};"+
	"\`;"+
	"var html = \`"+
	"<!DOCTYPE html>"+
	"<html>"+
	"  <head>"+
	"    <meta charset=\'UTF-8\'>"+
	"    <title>Hello world</title>"+
	"    </script>"+
	"  </head>"+
	"  <body>"+
	"  </body>"+
	"</html>"+
	"\`;"+
	"var reg = new RegExp(\`(.File[(](.+?)[)].)\` ,\"gm\");"+
	"let newlines = /n+?/mg;"+
	"//console.log(html.trim().split(newlines),\"\")"+
	"let match = a.replace(reg ,function(found , capture ,index){"+
	"  let delems = found[0] || found[found.length-1];"+
	"  let file = html.trim().split(newlines);"+
	"  let formated;"+
	"  console.log(found)"+
	"  switch(false){"+
	"    case \'\"\':{"+
	"      file.forEach(function(line ,index ,array){"+
	"        if(index + 1 === array.length){"+
	"          formated += \`\"${line}\"\`;"+
	"        }else{"+
	"          formated += \`\"${line}\"+n\`;"+
	"        }"+
	"      });"+
	"    }break;"+
	"    case \"\'\":{"+
	"       file.forEach(function(line ,index ,array){"+
	"        if(index + 1 === array.length){"+
	"          formated += \`\'${line}\';\`;"+
	"        }else{"+
	"          formated += \`\'${line}\'+n\`;"+
	"        }"+
	"      })"+
	"    }"+
	"  }"+
	"  console.log(formated);"+
	" // console.log(found ,delems)"+
	"})"+
	"//console.log(match)"
	};

/***/ }
/******/ ]);
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var app = angular.module( 'interface', ['ngAria', 'ngRoute', 'ngSanitize', 'pascalprecht.translate']);
	// -----------------------------------------------------------------------------
	// define routes
	var routes = [];

	// -----------------------------------------------------------------------------
	// bind routes
	app.config(["$routeProvider", function( $routeProvider ) {
	    for( var i in routes ) {
	        $routeProvider.when( routes[i].link, {
	            templateUrl: routes[i].templateUrl,
	            controller: routes[i].controller
	        });
	    }

	    $routeProvider.otherwise( "/home" );
	}]);

	// ----------------------------------------------------------------------------
	// declaration languages
	var languages    = ['en', 'fr'];
	var translations = {};

	// ----------------------------------------------------------------------------
	// load languages
	for( var i in languages ) {
	    translations[ languages[i]] = __webpack_require__(2)("./" + languages[i] + '.lang');
	}

	// -----------------------------------------------------------------------------
	// create config for transtations
	app.config(["$translateProvider", function( $translateProvider ) {
	    // -----------------------------------------------------------------------------
	    // load languages
	    for( var i in translations ) {
	        $translateProvider.translations( i, translations[i] );
	    }

	    $translateProvider.useSanitizeValueStrategy( 'sanitize' );
	    $translateProvider.preferredLanguage( 'en' );
	    $translateProvider.fallbackLanguage( 'en' );
	}]);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./en.lang": 3,
		"./fr.lang": 4
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
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	    "app": {
	        "title": "Portfolio"
	    },
	    
	    "welcome": "Welcome !"
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	    "app": {
	        "title": "Portfolio"
	    },
	    
	    "welcome": "Bienvenue !"
	};

/***/ }
/******/ ]);
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["navigate"]; });



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(24);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(63);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(65);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});
exports.default = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(26);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(33);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(66);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(25);

var _helpers = __webpack_require__(67);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        }).catch(function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(25);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(64)("" + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(20);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(5);

// EXTERNAL MODULE: /Users/danielszenasi/Projects/sc-workshop/src/components/Router.js
var Router = __webpack_require__(1);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(11);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(13);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(14);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: /Users/danielszenasi/Projects/sc-workshop/src/containers/Dynamic.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ var Dynamic = (function () {
  var _useState = Object(external_react_["useState"])([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      appointments = _useState2[0],
      setAppointments = _useState2[1];

  var generateHeaders = function generateHeaders() {
    var headers = {
      'Content-Type': 'application/json'
    };

    if (window.netlifyIdentity.currentUser()) {
      return window.netlifyIdentity.currentUser().jwt().then(function (token) {
        return _objectSpread({}, headers, {
          Authorization: "Bearer ".concat(token)
        });
      });
    }

    return Promise.resolve(headers);
  };

  Object(external_react_["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var headers, result;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return generateHeaders();

              case 2:
                headers = _context.sent;
                _context.next = 5;
                return external_axios_default.a.get("/.netlify/functions/appointments", {
                  headers: headers
                });

              case 5:
                result = _context.sent;
                setAppointments(result.data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'America/Los_Angeles'
  };
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h2", null, "Appointments"), appointments.map(function (appointment) {
    var start = new Intl.DateTimeFormat('en-US', options).format(new Date(appointment.data.start));
    var end = new Intl.DateTimeFormat('en-US', options).format(new Date(appointment.data.end));
    return external_react_default.a.createElement("div", null, start, " - ", end);
  }));
});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(21);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /Users/danielszenasi/Projects/sc-workshop/src/App.js


function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 1rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100%;\n  background: #108db8;\n  display: flex;\n  & a {\n    color: white;\n    padding: 1rem;\n    display: inline-block;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  * {\n    scroll-behavior: smooth;\n  }\n  body {\n    font-family: 'Roboto', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n  a {\n    text-decoration: none;\n    color: #108db8;\n    font-weight: bold;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  .pagination {\n    display: inline-block;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\n  .pagination li {\n      display: inline-block;\n      padding: 5px;\n    margin: 5px;\n    border: solid black 1px;\n  }\n\n  .netlify-identity-menu {\n    display: flex;\n    margin: 0;\n    list-style-type: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //




var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(_templateObject());
var Nav = external_styled_components_default.a.nav(_templateObject2());
var Content = external_styled_components_default.a.div(_templateObject3()); // Any routes that start with 'appointmens' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['appointments']);

function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement(GlobalStyle, null), external_react_default.a.createElement(Nav, null, external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/"
  }, "Home"), external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/about"
  }, "About"), external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/blog"
  }, "Blog"), external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/listings"
  }, "Listings"), external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/appointments"
  }, "Appointments"), external_react_default.a.createElement("div", {
    "data-netlify-identity-menu": true
  })), external_react_default.a.createElement(Content, null, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading...")
  }, external_react_default.a.createElement(Router["b" /* Router */], null, external_react_default.a.createElement(Dynamic, {
    path: "appointments"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(24);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(16);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "../node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "../node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "..",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("/Users/danielszenasi/Projects/sc-workshop/node_modules/react-static/lib/browser");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_danielszenasi_Projects_sc_workshop_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _Users_danielszenasi_Projects_sc_workshop_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_danielszenasi_Projects_sc_workshop_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);
















Object(_Users_danielszenasi_Projects_sc_workshop_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_danielszenasi_Projects_sc_workshop_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/sites/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/sites/404 */).then(__webpack_require__.bind(null, 34))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/sites/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return "src/sites/404";
  }
}), universalOptions);
t_0.template = '../src/sites/404.js';
var t_1 = _Users_danielszenasi_Projects_sc_workshop_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/sites/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/sites/about */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/sites/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "src/sites/about";
  }
}), universalOptions);
t_1.template = '../src/sites/about.js';
var t_2 = _Users_danielszenasi_Projects_sc_workshop_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/sites/blog.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/sites/blog */).then(__webpack_require__.bind(null, 36))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/sites/blog.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return "src/sites/blog";
  }
}), universalOptions);
t_2.template = '../src/sites/blog.js';
var t_3 = _Users_danielszenasi_Projects_sc_workshop_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/sites/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/sites/index */).then(__webpack_require__.bind(null, 37))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/sites/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return "src/sites/index";
  }
}), universalOptions);
t_3.template = '../src/sites/index.js';
var t_4 = _Users_danielszenasi_Projects_sc_workshop_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/sites/listings",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/sites/listings */).then(__webpack_require__.bind(null, 40))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/sites/listings');
  },
  resolve: function resolve() {
    return /*require.resolve*/(40);
  },
  chunkName: function chunkName() {
    return "src/sites/listings";
  }
}), universalOptions);
t_4.template = '../src/sites/listings';
var t_5 = _Users_danielszenasi_Projects_sc_workshop_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/containers/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/containers/Post */).then(__webpack_require__.bind(null, 38))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(38);
  },
  chunkName: function chunkName() {
    return "src/containers/Post";
  }
}), universalOptions);
t_5.template = '../src/containers/Post';
var t_6 = _Users_danielszenasi_Projects_sc_workshop_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/containers/Listing",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/containers/Listing */).then(__webpack_require__.bind(null, 39))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/containers/Listing');
  },
  resolve: function resolve() {
    return /*require.resolve*/(39);
  },
  chunkName: function chunkName() {
    return "src/containers/Listing";
  }
}), universalOptions);
t_6.template = '../src/containers/Listing'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '../src/sites/404.js': t_0,
  '../src/sites/about.js': t_1,
  '../src/sites/blog.js': t_2,
  '../src/sites/index.js': t_3,
  '../src/sites/listings': t_4,
  '../src/containers/Post': t_5,
  '../src/containers/Listing': t_6 // Not Found Template

});
var notFoundTemplate = "../src/sites/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Static is a progressive static site generator for React."));
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Notes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44);
/* harmony import */ var _material_ui_icons_Notes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notes__WEBPACK_IMPORTED_MODULE_7__);

 //







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      position: 'relative',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#fff',
      backgroundSize: 'cover',
      backgroundPosition: '50%',
      height: '100%',
      '&::after': {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        content: "''",
        display: 'block',
        zIndex: 1,
        position: 'absolute',
        borderRadius: '6px',
        backgroundColor: 'rgba(0, 0, 0, 0.56)'
      },
      '& a': {
        color: '#fff'
      }
    },
    item: {
      zIndex: 2,
      position: 'relative'
    }
  };
});
function Blog() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      posts = _useRouteData.posts;

  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "It's blog time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    spacing: 3
  }, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: post.data.slug,
      item: true,
      xs: 12,
      md: 4
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.paper,
      style: {
        backgroundImage: "url(".concat(post.data.featuredimage, ")")
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.item
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, post.data.tags), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
      to: "/blog/post/".concat(post.data.slug)
    }, post.data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, post.data.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "extended",
      size: "medium",
      color: "primary",
      "aria-label": "Read",
      component: components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"],
      to: "/blog/post/".concat(post.data.slug)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Notes__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.extendedIcon
    }), "Read"))));
  }))));
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to React-Static"));
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);

 //



function Post() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      post = _useRouteData.post;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"],
    to: "/blog/"
  }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: post.html
    }
  }));
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Listing; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59);
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 //






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
  return {
    button: {
      margin: theme.spacing(1)
    }
  };
});
function Listing() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_5__["useRouteData"])(),
      listing = _useRouteData.listing;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      slots = _useState2[0],
      setSlots = _useState2[1];

  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/.netlify/functions/slots");

              case 2:
                result = _context.sent;
                setSlots(result.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);

  var generateHeaders = function generateHeaders() {
    var headers = {
      'Content-Type': 'application/json'
    };

    if (window.netlifyIdentity.currentUser()) {
      return window.netlifyIdentity.currentUser().jwt().then(function (token) {
        return _objectSpread({}, headers, {
          Authorization: "Bearer ".concat(token)
        });
      });
    }

    return Promise.resolve(headers);
  };

  var handleBook =
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(slot) {
      var headers, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return generateHeaders();

            case 2:
              headers = _context2.sent;
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/.netlify/functions/appointments", {
                slotId: slot.id,
                start: slot.start,
                end: slot.end,
                listingSlug: listing.slug
              }, {
                headers: headers
              });

            case 5:
              result = _context2.sent;
              console.log(result);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleBook(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "a"], {
    to: "/listings/"
  }, '<', " Back"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_7___default.a, {
    items: listing.photos.map(function (photo) {
      return {
        original: photo.PHOTO_URL,
        thumbnail: photo.PHOTO_URL
      };
    })
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, "address"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, listing.address), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, "price"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, "$ ", listing.price), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, listing.propertyType, " in ", listing.neighborhoods), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, "description"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, listing.description), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, "amenities"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, listing.amenities), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, "slots"), slots.map(function (slot) {
    var options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: 'America/Los_Angeles'
    };
    var start = new Intl.DateTimeFormat('en-US', options).format(new Date(slot.start));
    var end = new Intl.DateTimeFormat('en-US', options).format(new Date(slot.end));
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: slot.id
    }, start, " - ", end, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
      onClick: function onClick() {
        return handleBook(slot);
      },
      variant: "contained",
      color: "primary",
      className: classes.button
    }, "Book"));
  }));
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(11);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(13);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(5);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(12);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(7);

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__(45);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardActionArea"
var CardActionArea_ = __webpack_require__(46);
var CardActionArea_default = /*#__PURE__*/__webpack_require__.n(CardActionArea_);

// EXTERNAL MODULE: external "@material-ui/core/CardActions"
var CardActions_ = __webpack_require__(47);
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__(48);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/CardMedia"
var CardMedia_ = __webpack_require__(49);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(18);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(9);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: /Users/danielszenasi/Projects/sc-workshop/src/components/Router.js
var Router = __webpack_require__(1);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// CONCATENATED MODULE: /Users/danielszenasi/Projects/sc-workshop/src/components/Bath.js



var Bath_Bath = function Bath(props) {
  return external_react_default.a.createElement("svg", extends_default()({
    width: 24,
    height: 24
  }, props), external_react_default.a.createElement("defs", null, external_react_default.a.createElement("path", {
    id: "prefix__a",
    d: "M10.91 0C9.716 0 8.726 1.002 8.726 2.21v5.527H1.091C.488 7.737 0 8.23 0 8.842s.488 1.105 1.09 1.105h.129l.494 4a5.516 5.516 0 0 0 2.088 3.668l-.496 2.012A1.103 1.103 0 0 0 4.364 21c.5 0 .935-.346 1.056-.838l.384-1.558c.426.108.865.185 1.321.185h9.75c.457 0 .895-.077 1.321-.185l.384 1.558c.12.492.556.838 1.056.838.71 0 1.23-.676 1.06-1.373l-.497-2.01a5.516 5.516 0 0 0 2.088-3.67l.496-4h.126c.603 0 1.091-.494 1.091-1.105s-.488-1.105-1.09-1.105h-12V2.21h3.272v1.105c-.602 0-1.091.495-1.091 1.105s.489 1.105 1.09 1.105h.908c.118.02.239.02.356 0h.919c.602 0 1.09-.495 1.09-1.105s-.488-1.105-1.09-1.105V2.21c0-1.209-.99-2.211-2.182-2.211h-3.273z"
  })), external_react_default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 2)"
  }, external_react_default.a.createElement("mask", {
    id: "prefix__b",
    fill: "#fff"
  }, external_react_default.a.createElement("use", {
    xlinkHref: "#prefix__a"
  })), external_react_default.a.createElement("use", {
    fill: "#CDCDCD",
    fillRule: "nonzero",
    xlinkHref: "#prefix__a"
  }), external_react_default.a.createElement("g", {
    fill: "#1E1E84",
    mask: "url(#prefix__b)"
  }, external_react_default.a.createElement("path", {
    d: "M0-2h24v24H0z"
  }))));
};

/* harmony default export */ var components_Bath = (Bath_Bath);
// CONCATENATED MODULE: /Users/danielszenasi/Projects/sc-workshop/src/components/Bed.js



var Bed_Bed = function Bed(props) {
  return external_react_default.a.createElement("svg", extends_default()({
    width: 24,
    height: 24
  }, props), external_react_default.a.createElement("defs", null, external_react_default.a.createElement("path", {
    id: "prefix__a",
    d: "M3.6 0C2.274 0 1.2 1.094 1.2 2.444v4.89c0 .674.538 1.222 1.2 1.222.662 0 1.2-.548 1.2-1.223V6.111c0-.675.538-1.222 1.2-1.222h4.8c.662 0 1.2.547 1.2 1.222v1.222c0 .675.538 1.223 1.2 1.223.662 0 1.2-.548 1.2-1.223V6.111c0-.675.538-1.222 1.2-1.222h4.8c.662 0 1.2.547 1.2 1.222v1.222c0 .675.538 1.223 1.2 1.223.662 0 1.2-.548 1.2-1.223V2.444C22.8 1.094 21.726 0 20.4 0H3.6zM2.4 11C1.074 11 0 12.094 0 13.444v7.334C0 21.452.538 22 1.2 22c.662 0 1.2-.548 1.2-1.222v-1.222h19.2v1.222c0 .674.538 1.222 1.2 1.222.662 0 1.2-.548 1.2-1.222v-7.334C24 12.094 22.926 11 21.6 11H2.4z"
  })), external_react_default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 1)"
  }, external_react_default.a.createElement("mask", {
    id: "prefix__b",
    fill: "#fff"
  }, external_react_default.a.createElement("use", {
    xlinkHref: "#prefix__a"
  })), external_react_default.a.createElement("use", {
    fill: "#D1D1D1",
    fillRule: "nonzero",
    xlinkHref: "#prefix__a"
  }), external_react_default.a.createElement("g", {
    fill: "#1E1E84",
    mask: "url(#prefix__b)"
  }, external_react_default.a.createElement("path", {
    d: "M0-1h24v24H0z"
  }))));
};

/* harmony default export */ var components_Bed = (Bed_Bed);
// CONCATENATED MODULE: /Users/danielszenasi/Projects/sc-workshop/src/components/ListingCard.js












var useStyles = Object(styles_["makeStyles"])({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  rooms: {
    display: 'flex'
  }
});
function ListingCard(props) {
  var classes = useStyles();
  var listing = props.listing;
  var photo = listing.photo ? listing.photo : listing.photos && listing.photos.length > 0 ? listing.photos[0].PHOTO_URL : null;
  return external_react_default.a.createElement(Card_default.a, {
    className: classes.card
  }, external_react_default.a.createElement(CardActionArea_default.a, null, photo && external_react_default.a.createElement(CardMedia_default.a, {
    className: classes.media,
    image: photo,
    title: "Contemplative Reptile"
  }), external_react_default.a.createElement(CardContent_default.a, null, external_react_default.a.createElement(Typography_default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, listing.address), external_react_default.a.createElement(Typography_default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h4"
  }, listing.price, " $"), external_react_default.a.createElement(Typography_default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, listing.propertyType, " in ", listing.neighborhoods), external_react_default.a.createElement("div", {
    className: classes.rooms
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Bath, null), " ", listing.bathrooms, " bath"), external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Bed, null), " ", listing.bedrooms, " bed")))), external_react_default.a.createElement(CardActions_default.a, null, external_react_default.a.createElement(Button_default.a, {
    component: Router["a" /* Link */],
    to: "/listings/".concat(listing.slug),
    size: "small",
    color: "primary"
  }, "Details")));
}
// EXTERNAL MODULE: external "react-paginate"
var external_react_paginate_ = __webpack_require__(50);
var external_react_paginate_default = /*#__PURE__*/__webpack_require__.n(external_react_paginate_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(27);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(51);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(52);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: external "@material-ui/core/NoSsr"
var NoSsr_ = __webpack_require__(75);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(19);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(17);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Chip"
var Chip_ = __webpack_require__(53);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(54);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/icons/Cancel"
var Cancel_ = __webpack_require__(55);
var Cancel_default = /*#__PURE__*/__webpack_require__.n(Cancel_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(26);

// CONCATENATED MODULE: /Users/danielszenasi/Projects/sc-workshop/src/components/Select.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var suggestions = [{
  label: 'Murray Hill'
}, {
  label: 'Midtown South'
}, {
  label: 'Upper West Side'
}, {
  label: 'Flushing'
}, {
  label: 'Financial District'
}, {
  label: 'Gramercy'
}].map(function (suggestion) {
  return {
    value: suggestion.label,
    label: suggestion.label
  };
});
var Select_useStyles = Object(styles_["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      height: 250
    },
    input: {
      display: 'flex',
      padding: 0,
      height: 'auto'
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden'
    },
    chip: {
      margin: theme.spacing(0.5, 0.25)
    },
    chipFocused: {
      backgroundColor: Object(styles_["emphasize"])(theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700], 0.08)
    },
    noOptionsMessage: {
      padding: theme.spacing(1, 2)
    },
    placeholder: {
      position: 'absolute',
      left: 2,
      bottom: 6,
      fontSize: 16
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0
    },
    divider: {
      height: theme.spacing(2)
    }
  };
});

function NoOptionsMessage(props) {
  return external_react_default.a.createElement(Typography_default.a, extends_default()({
    color: "textSecondary",
    className: props.selectProps.classes.noOptionsMessage
  }, props.innerProps), props.children);
}

function inputComponent(_ref) {
  var inputRef = _ref.inputRef,
      props = objectWithoutProperties_default()(_ref, ["inputRef"]);

  return external_react_default.a.createElement("div", extends_default()({
    ref: inputRef
  }, props));
}

function Control(props) {
  var children = props.children,
      innerProps = props.innerProps,
      innerRef = props.innerRef,
      _props$selectProps = props.selectProps,
      classes = _props$selectProps.classes,
      TextFieldProps = _props$selectProps.TextFieldProps;
  return external_react_default.a.createElement(TextField_default.a, extends_default()({
    fullWidth: true,
    InputProps: {
      inputComponent: inputComponent,
      inputProps: _objectSpread({
        className: classes.input,
        ref: innerRef,
        children: children
      }, innerProps)
    }
  }, TextFieldProps));
}

function Option(props) {
  return external_react_default.a.createElement(MenuItem_default.a, extends_default()({
    ref: props.innerRef,
    selected: props.isFocused,
    component: "div",
    style: {
      fontWeight: props.isSelected ? 500 : 400
    }
  }, props.innerProps), props.children);
}

function Placeholder(props) {
  return external_react_default.a.createElement(Typography_default.a, extends_default()({
    color: "textSecondary",
    className: props.selectProps.classes.placeholder
  }, props.innerProps), props.children);
}

function ValueContainer(props) {
  return external_react_default.a.createElement("div", {
    className: props.selectProps.classes.valueContainer
  }, props.children);
}

function MultiValue(props) {
  return external_react_default.a.createElement(Chip_default.a, {
    tabIndex: -1,
    label: props.children,
    className: external_clsx_default()(props.selectProps.classes.chip, defineProperty_default()({}, props.selectProps.classes.chipFocused, props.isFocused)),
    onDelete: props.removeProps.onClick,
    deleteIcon: external_react_default.a.createElement(Cancel_default.a, props.removeProps)
  });
}

function Menu(props) {
  return external_react_default.a.createElement(Paper_default.a, extends_default()({
    square: true,
    className: props.selectProps.classes.paper
  }, props.innerProps), props.children);
}

var components = {
  Control: Control,
  Menu: Menu,
  MultiValue: MultiValue,
  NoOptionsMessage: NoOptionsMessage,
  Option: Option,
  Placeholder: Placeholder,
  ValueContainer: ValueContainer
};
function IntegrationReactSelect(props) {
  var classes = Select_useStyles();
  var theme = Object(styles_["useTheme"])();
  var onChange = props.onChange,
      value = props.value;
  var selectStyles = {
    input: function input(base) {
      return _objectSpread({}, base, {
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit'
        }
      });
    }
  };
  return external_react_default.a.createElement(external_react_select_default.a, {
    classes: classes,
    styles: selectStyles,
    inputId: "react-select-multiple",
    TextFieldProps: {
      label: 'Neighborhood',
      InputLabelProps: {
        htmlFor: 'react-select-multiple',
        shrink: true
      },
      placeholder: 'Select multiple countries'
    },
    options: suggestions,
    components: components,
    value: value,
    onChange: onChange,
    isMulti: true
  });
}
// EXTERNAL MODULE: external "@material-ui/core/Slider"
var Slider_ = __webpack_require__(29);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_);

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__(56);
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(14);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(57);

// CONCATENATED MODULE: /Users/danielszenasi/Projects/sc-workshop/src/sites/listings.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Listings; });





function listings_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function listings_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { listings_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { listings_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 //














function valuetext(value) {
  return "".concat(value, "M $");
}

var marks = Array.apply(null, {
  length: 3
}).map(function (_item, index) {
  return {
    value: (index + 1) * 3,
    label: "".concat((index + 1) * 3, "M$")
  };
});
var bedroomsMarks = Array.apply(null, {
  length: 3
}).map(function (_item, index) {
  return {
    value: index * 2,
    label: "".concat(index ? index * 2 : 'studio')
  };
});
var typeOfPropertyOptions = [{
  value: 'Condo',
  label: 'Condo'
}, {
  value: 'Coop',
  label: 'Coop'
}, {
  value: 'House',
  label: 'House'
}];
var listings_useStyles = Object(styles_["makeStyles"])(function (theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    }
  };
});
function Listings() {
  var _useRouteData = Object(external_react_static_["useRouteData"])(),
      listings = _useRouteData.listings,
      currentPage = _useRouteData.currentPage,
      totalPages = _useRouteData.totalPages;

  var classes = listings_useStyles();

  var _useState = Object(external_react_["useState"])({
    type: 'Coop',
    neighborhood: [{
      label: 'Murray Hill',
      value: 'Murray Hill'
    }],
    minprice: 0.2,
    maxprice: 2,
    minbedrooms: 0,
    maxbedrooms: 2
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = Object(external_react_["useState"])([]),
      _useState4 = slicedToArray_default()(_useState3, 2),
      listingsDynamic = _useState4[0],
      setListings = _useState4[1];

  var handleChange = function handleChange(name) {
    return external_lodash_["debounce"](
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(e, v) {
        var _range, range, newValues, value, _newValues;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(name === 'price' || name === 'bedrooms')) {
                  _context.next = 7;
                  break;
                }

                range = (_range = {}, defineProperty_default()(_range, "min".concat(name), v[0]), defineProperty_default()(_range, "max".concat(name), v[1]), _range);
                newValues = listings_objectSpread({}, values, {}, range);
                _context.next = 5;
                return getListings(newValues);

              case 5:
                _context.next = 11;
                break;

              case 7:
                value = Array.isArray(e) ? e : e.target.value;
                _newValues = listings_objectSpread({}, values, defineProperty_default()({}, name, value));
                _context.next = 11;
                return getListings(_newValues);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), 300);
  };

  var handleTypeChange =
  /*#__PURE__*/
  function () {
    var _ref2 = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2(e) {
      var newValues;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newValues = listings_objectSpread({}, values, {
                type: e.target.value
              });
              _context2.next = 3;
              return getListings(newValues);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleTypeChange(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getListings =
  /*#__PURE__*/
  function () {
    var _ref3 = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee3(newValues) {
      var params, query, newListings;
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setValues(newValues);
              params = Object.keys(newValues).reduce(function (obj, key) {
                var value = newValues[key];
                var newValue = Array.isArray(value) ? value.map(function (item) {
                  return item.value;
                }) : value;
                return listings_objectSpread({}, obj, defineProperty_default()({}, key, newValue));
              }, {});
              query = external_query_string_default.a.stringify(params);
              _context3.next = 5;
              return external_axios_default.a.get("/.netlify/functions/listings?".concat(query));

            case 5:
              newListings = _context3.sent;
              setListings(newListings.data);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getListings(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handlePageClick = function handlePageClick(data) {
    console.log(data);
    Object(Router["c" /* navigate */])("/listings/page/".concat(data.selected));
  };

  var list = listingsDynamic.length ? listingsDynamic : listings;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h1", null, "Listings"), external_react_default.a.createElement(Grid_default.a, {
    container: true,
    spacing: 3
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    md: 3
  }, external_react_default.a.createElement(IntegrationReactSelect, {
    onChange: handleChange('neighborhood'),
    value: values.neighborhood
  }), external_react_default.a.createElement(Typography_default.a, {
    id: "discrete-slider",
    gutterBottom: true
  }, "Price"), external_react_default.a.createElement(Slider_default.a, {
    defaultValue: [values.minprice, values.maxprice],
    getAriaValueText: valuetext,
    valueLabelDisplay: "auto",
    onChange: handleChange('price'),
    "aria-labelledby": "range-slider",
    marks: marks,
    step: 0.2,
    min: 0.2,
    max: 12
  }), external_react_default.a.createElement(Typography_default.a, {
    id: "bedrooms-slider",
    gutterBottom: true
  }, "Bedrooms"), external_react_default.a.createElement(Slider_default.a, {
    defaultValue: [values.minbedrooms, values.maxbedrooms],
    getAriaValueText: valuetext,
    valueLabelDisplay: "auto",
    onChange: handleChange('bedrooms'),
    "aria-labelledby": "range-slider",
    marks: bedroomsMarks,
    step: 0.5,
    min: 0,
    max: 6
  }), external_react_default.a.createElement(TextField_default.a, {
    id: "outlined-select-currency-native",
    select: true,
    label: "Type of property",
    className: classes.textField,
    value: values.type,
    onChange: function onChange(e) {
      return handleTypeChange(e);
    },
    SelectProps: {
      native: true,
      MenuProps: {
        className: classes.menu
      }
    },
    margin: "normal",
    variant: "outlined"
  }, typeOfPropertyOptions.map(function (option) {
    return external_react_default.a.createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  }))), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    md: 9
  }, external_react_default.a.createElement(Grid_default.a, {
    container: true,
    spacing: 3
  }, list.map(function (li) {
    return external_react_default.a.createElement(Grid_default.a, {
      key: li.slug,
      item: true,
      xs: 12,
      md: 4
    }, external_react_default.a.createElement(ListingCard, {
      listing: li
    }));
  })))), external_react_default.a.createElement(external_react_paginate_default.a, {
    previousLabel: 'previous',
    nextLabel: 'next',
    breakLabel: '...',
    breakClassName: 'break-me',
    pageCount: totalPages,
    initialPage: currentPage,
    marginPagesDisplayed: 2,
    pageRangeDisplayed: 5,
    onPageChange: handlePageClick,
    containerClassName: 'pagination',
    subContainerClassName: 'pages pagination',
    activeClassName: 'active'
  }));
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(5);

var _router = __webpack_require__(15);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)(staticInfo.path)
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notes");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-paginate");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cancel");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("react-image-gallery");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(62);
module.exports = __webpack_require__(68);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(30)["default"];

var _require = __webpack_require__(31),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/danielszenasi/Projects/sc-workshop/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(30)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(31),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(32),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/danielszenasi/Projects/sc-workshop/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(32),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = requireUniversalModule;

var _utils = __webpack_require__(25);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 16,
	"./": 16,
	"./index": 16,
	"./index.js": 16
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 64;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(24);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(26);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(33);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(10);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2.default)(_index2.default, mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(69);

var _interopRequireDefault = __webpack_require__(70);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(27));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(71);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(72)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("/Users/danielszenasi/Projects/sc-workshop/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);



 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(73)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("react-image-gallery/styles/css/image-gallery.css");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/NoSsr");

/***/ })
/******/ ]);
});
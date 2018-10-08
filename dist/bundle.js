/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/AddAct.js":
/*!**********************************!*\
  !*** ./src/components/AddAct.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _components_util_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/util/navbar */ "./src/components/util/navbar.js");
/* harmony import */ var _components_util_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/util/alert */ "./src/components/util/alert.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _redux_actions_actActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/actActions */ "./src/redux/actions/actActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _css_addact_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/addact.css */ "./src/css/addact.css");
/* harmony import */ var _css_addact_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_addact_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class AddAct extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props, context) {
    super(props, context);

    _defineProperty(this, "toggleModal", () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    });

    _defineProperty(this, "handleTypeChange", event => {
      this.setState({
        actType: event.target.value
      });
    });

    _defineProperty(this, "handleTextChange", event => {
      let input = event.target.value;
      this.setState({
        text: event.target.value
      });
      this.setState({
        charsleft: 100 - input.length
      });
    });

    _defineProperty(this, "handleSubmit", () => {
      const actdata = {
        description: this.state.text,
        typeofact: this.state.actType,
        userid: this.props.auth.user._id //send to database now

      };
      this.props.sendActToDB(actdata);
      this.handleHide();
      this.setState({
        text: ''
      });
      this.setState({
        actType: ''
      });
      this.setState({
        showAlert: true
      });
    });

    _defineProperty(this, "getValidationState", () => {
      const textlength = this.state.text.length;
      if (textlength >= 100) return 'error';else if (textlength >= 15) return 'success';
      return null;
    });

    _defineProperty(this, "showAlert", () => {
      if (!this.state.showAlert) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "alertdiv"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_util_alert__WEBPACK_IMPORTED_MODULE_3__["default"], null));
      }
    });

    this.state = {
      text: '',
      actType: '',
      show: false,
      charsleft: 100,
      showAlert: false
    };
    this.handleHide = this.handleHide.bind(this);
  }

  handleHide() {
    this.setState({
      show: false
    });
  }

  render() {
    if (!this.props.auth.isAuthenticated) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        to: "/login"
      });
    }

    const _this$state = this.state,
          text = _this$state.text,
          actType = _this$state.actType;
    const isEnabled = text.length > 15 && actType.length > 0;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_util_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), this.showAlert(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "message1 words"
    }, " I commited an act of... "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      className: "radioButtonGroup"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      inline: true,
      value: "Witness",
      onChange: this.handleTypeChange,
      name: "radioButtonGroup"
    }, "Witness"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      inline: true,
      value: "Kindness",
      onChange: this.handleTypeChange,
      name: "radioButtonGroup"
    }, "Kindness"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      inline: true,
      value: "Encouragement",
      onChange: this.handleTypeChange,
      name: "radioButtonGroup"
    }, "Encouragement")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "message3 words"
    }, "by"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      controlId: "formBasicText",
      validationState: this.getValidationState()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      maxLength: "100",
      className: "explainarea",
      bsSize: "large",
      componentClass: "textarea",
      placeholder: "Explain you act...",
      value: this.state.text,
      onChange: this.handleTextChange
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.state.charsleft, " /100"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-container",
      style: {
        height: 200
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      disabled: !isEnabled,
      className: "submitbutton",
      bsStyle: "primary",
      bsSize: "large",
      onClick: () => this.setState({
        show: true
      })
    }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      show: this.state.show,
      onHide: this.handleHide,
      container: this,
      "aria-labelledby": "contained-modal-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
      closeButton: true
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, "Are you sure you want to submit? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "You act will be shared with the entire church."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "button",
      onClick: this.handleSubmit
    }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handleHide
    }, "Cancel"))))));
  }

}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])({
    sendActToDB: _redux_actions_actActions__WEBPACK_IMPORTED_MODULE_5__["sendActToDB"]
  }, dispatch);
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    act: state.act
  };
}; // export default AddAct;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(AddAct));

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_util_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/util/navbar */ "./src/components/util/navbar.js");
/* harmony import */ var _util_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/chart */ "./src/components/util/chart.js");
/* harmony import */ var _util_churchlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/churchlist */ "./src/components/util/churchlist.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _redux_actions_appActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/appActions */ "./src/redux/actions/appActions.js");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/app.css */ "./src/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");









class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: this.props.auth.isAuthenticated
    };
  }

  componentDidMount() {
    this.props.getAllPoints();
    this.props.getAllActs();
  }

  render() {
    if (!this.props.auth.isAuthenticated) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
        to: "/login"
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_util_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "headersection"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "totalactsmessage"
    }, "Acts completed:", this.props.points.points), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "smallmessage"
    }, "Acts: ", this.props.points.points)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "data"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_chart__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "chartwidth",
      chartData: this.props.points
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainsection"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_churchlist__WEBPACK_IMPORTED_MODULE_3__["default"], {
      allacts: this.props.churchlist,
      isLoading: this.props.isLoading
    }))));
  }

}

function mapDispathToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])({
    getAllPoints: _redux_actions_appActions__WEBPACK_IMPORTED_MODULE_6__["getAllPoints"],
    getAllActs: _redux_actions_appActions__WEBPACK_IMPORTED_MODULE_6__["getAllActs"]
  }, dispatch);
}

const mapStateToProps = state => {
  return {
    points: state.app,
    churchlist: state.churchlist.churchlist,
    isLoading: state.churchlist.isLoading,
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispathToProps)(App));

/***/ }),

/***/ "./src/components/forgot.js":
/*!**********************************!*\
  !*** ./src/components/forgot.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_forgotActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././redux/actions/forgotActions */ "./src/redux/actions/forgotActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_register_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/register.css */ "./src/css/register.css");
/* harmony import */ var _css_register_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_register_css__WEBPACK_IMPORTED_MODULE_7__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class Forgot extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: '',
      errors: {},
      forgot: {},
      showAlert: false
    });

    _defineProperty(this, "handleEmailChange", event => {
      this.setState({
        email: event.target.value
      });
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const sendtoemail = {
        email: this.state.email
      };
      this.props.resetPassword(sendtoemail);
    });

    _defineProperty(this, "showAlert", () => {
      if (this.state.showAlert) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
          className: "invalid-feedback alert-success"
        }, this.state.forgot && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: " alert-success"
        }, this.state.forgot.email)));
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

    if (nextProps.forgot) {
      this.setState({
        forgot: nextProps.forgot
      });
      this.setState({
        showAlert: true
      });
      this.setState({
        errors: {}
      });
    }
  }

  render() {
    const _this$state = this.state,
          errors = _this$state.errors,
          forgot = _this$state.forgot;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "register-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      size: "large",
      className: "registerForm",
      onSubmit: this.handleSubmit
    }, this.showAlert(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Enter Email Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      placeholder: "user@myemail.com",
      type: "email",
      name: "email",
      autoFocus: true,
      onChange: this.handleEmailChange,
      value: this.state.email,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('form-control form-control-lg  ', {
        'is-invalid': errors.email,
        'valid': forgot.email
      })
    }), errors.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback alert-danger"
    }, errors.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "regbutton"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      bsStyle: "primary",
      type: "submit"
    }, "Send")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rglink"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: '/login'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Registered? Login Here."))))));
  }

}

Forgot.propTypes = {
  resetPassword: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  forgot: state.forgot.data
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  resetPassword: _redux_actions_forgotActions__WEBPACK_IMPORTED_MODULE_4__["resetPassword"]
})(Forgot));

/***/ }),

/***/ "./src/components/login.js":
/*!*********************************!*\
  !*** ./src/components/login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _redux_actions_loginActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/loginActions */ "./src/redux/actions/loginActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_images_Spin_1_8s_200px_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/images/Spin-1.8s-200px.gif */ "./src/css/images/Spin-1.8s-200px.gif");
/* harmony import */ var _css_images_Spin_1_8s_200px_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_images_Spin_1_8s_200px_gif__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/login.css */ "./src/css/login.css");
/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_login_css__WEBPACK_IMPORTED_MODULE_8__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: '',
      password: '',
      submitted: false,
      errors: {
        errors: {}
      }
    });

    _defineProperty(this, "handleChange", event => {
      this.setState({
        email: event.target.value
      });
    });

    _defineProperty(this, "handlePasswordChange", event => {
      this.setState({
        password: event.target.value
      });
    });

    _defineProperty(this, "handleSubmit", event => {
      event.preventDefault();
      this.setState({
        submitted: true
      });
      const user = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginUser(user);
    });
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    // setting up input validation
    const errors = this.state.errors;

    if (this.props.loggingIn === 'true') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "spinner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _css_images_Spin_1_8s_200px_gif__WEBPACK_IMPORTED_MODULE_7___default.a,
        className: "gif",
        alt: "loading gif"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Logging In..."));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "loginwrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      size: "large",
      className: "loginform",
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "ChurchApp"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      placeholder: "email",
      type: "email",
      onChange: this.handleChange,
      value: this.state.email,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('form-control form-control-lg', {
        'is-invalid': errors.email
      })
    }), errors.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback alert-danger"
    }, errors.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      placeholder: "password",
      type: "password",
      onChange: this.handlePasswordChange,
      value: this.state.password,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('form-control form-control-lg', {
        'is-invalid': errors.password
      })
    }), errors.password && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback alert-danger"
    }, errors.password)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "loginbutton"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      bsStyle: "success",
      type: "submit"
    }, "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "link"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/register"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Not signed up? Click here to Register.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/forgot"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Forgot password. Click here to reset")))));
  }

}

Login.propTypes = {
  loginUser: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  auth: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};

const mapStateToProps = state => {
  return {
    user: state,
    auth: state.auth,
    errors: state.errors.errors,
    loggingIn: state.errors.loggingIn
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  loginUser: _redux_actions_loginActions__WEBPACK_IMPORTED_MODULE_3__["loginUser"]
})(Login));

/***/ }),

/***/ "./src/components/register.js":
/*!************************************!*\
  !*** ./src/components/register.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_loginActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././redux/actions/loginActions */ "./src/redux/actions/loginActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_images_Spin_1_8s_200px_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/images/Spin-1.8s-200px.gif */ "./src/css/images/Spin-1.8s-200px.gif");
/* harmony import */ var _css_images_Spin_1_8s_200px_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_images_Spin_1_8s_200px_gif__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_register_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/register.css */ "./src/css/register.css");
/* harmony import */ var _css_register_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_register_css__WEBPACK_IMPORTED_MODULE_8__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class Register extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      fullname: '',
      email: '',
      password: '',
      password_confirm: '',
      errors: {
        errors: {}
      }
    });

    _defineProperty(this, "handleFullnameChange", event => {
      this.setState({
        fullname: event.target.value
      });
    });

    _defineProperty(this, "handleEmailChange", event => {
      this.setState({
        email: event.target.value
      });
    });

    _defineProperty(this, "handlePasswordChange", event => {
      this.setState({
        password: event.target.value
      });
    });

    _defineProperty(this, "handleConfirmChange", event => {
      this.setState({
        password_confirm: event.target.value
      });
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const user = {
        fullname: this.state.fullname,
        email: this.state.email,
        password: this.state.password,
        password_confirm: this.state.password
      };
      this.props.registerUser(user, this.props.history);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const _this$state = this.state,
          fullname = _this$state.fullname,
          email = _this$state.email,
          password = _this$state.password,
          password_confirm = _this$state.password_confirm,
          errors = _this$state.errors;
    const isEnabled = fullname.length > 3 && email.length > 0 && password === password_confirm;

    if (this.props.isFetching) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "spinner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _css_images_Spin_1_8s_200px_gif__WEBPACK_IMPORTED_MODULE_7___default.a,
        className: "gif",
        alt: "registering gif"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Getting you Registered..."));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "register-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      size: "large",
      className: "registerForm",
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Enter Full Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      placeholder: "John Doe",
      type: "fullname",
      onChange: this.handleFullnameChange,
      value: this.state.fullname,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('form-control form-control-lg', {
        'is-invalid': errors.fullname
      })
    }), errors.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback alert-danger"
    }, errors.fullname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Enter Email Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      placeholder: "user@myemail.com",
      type: "email",
      name: "email",
      onChange: this.handleEmailChange,
      value: this.state.email,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('form-control form-control-lg  ', {
        'is-invalid': errors.email
      })
    }), errors.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback alert-danger"
    }, errors.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      placeholder: "password",
      name: "password_confirm",
      value: this.state.password,
      onChange: this.handlePasswordChange,
      type: "password",
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('form-control form-control-lg', {
        'is-invalid': errors.password
      })
    }), errors.password && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback alert-danger"
    }, errors.password)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Confirm Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      placeholder: "password",
      type: "password",
      name: "password_confirm",
      onChange: this.handleConfirmChange,
      value: this.state.password_confirm,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('form-control form-control-lg', {
        'is-invalid': errors.password_confirm
      })
    }), errors.password_confirm && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback alert-danger"
    }, errors.password_confirm)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "regbutton"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      disabled: !isEnabled,
      bsStyle: "success",
      type: "submit"
    }, "Register")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rglink"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: '/login'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Registered? Login Here.")))));
  }

}

Register.propTypes = {
  registerUser: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors.errors,
  isFetching: state.errors.isFetching
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  registerUser: _redux_actions_loginActions__WEBPACK_IMPORTED_MODULE_4__["registerUser"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Register)));

/***/ }),

/***/ "./src/components/reset.js":
/*!*********************************!*\
  !*** ./src/components/reset.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _css_register_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/register.css */ "./src/css/register.css");
/* harmony import */ var _css_register_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_register_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_forgotActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions/forgotActions */ "./src/redux/actions/forgotActions.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class Reset extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      password: '',
      confirm_password: '',
      submitted: false,
      showAlert: false,
      errors: {},
      forgot: {}
    });

    _defineProperty(this, "handlePasswordChange", event => {
      this.setState({
        password: event.target.value
      });
    });

    _defineProperty(this, "handleChange", event => {
      this.setState({
        confirm_password: event.target.value
      });
    });

    _defineProperty(this, "handleSubmit", event => {
      event.preventDefault();
      this.setState({
        submitted: true
      });
      const userData = {
        newPassword: this.state.password,
        resetToken: this.props.location.pathname.slice(7, 47)
      };
      this.props.setNewPassword(userData);
    });

    _defineProperty(this, "showAlert", () => {
      if (this.state.showAlert) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
          className: "invalid-feedback alert-success"
        }, this.state.forgot && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: " alert-success"
        }, this.state.forgot.message)));
      }
    });
  }

  getValidationState() {
    const length = this.state.password.length;
    if (length > 7) return 'success';else if (length > 0) return 'error';
    return null;
  }

  confirmGetValidationState() {
    if (this.state.confirm_password.length > 0 && this.state.password === this.state.confirm_password) return 'success';else if (this.state.confirm_password.length > 0) {
      return 'error';
    }
    ;
    return null;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

    if (nextProps.forgot) {
      this.setState({
        forgot: nextProps.forgot
      });
      this.setState({
        showAlert: true
      });
      this.setState({
        errors: {}
      });
    }
  }

  render() {
    const _this$state = this.state,
          password = _this$state.password,
          confirm_password = _this$state.confirm_password,
          errors = _this$state.errors;
    const isEnabled = password === confirm_password && password.length > 0 && confirm_password.length > 0;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "loginwrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      size: "large",
      className: "registerForm",
      onSubmit: this.handleSubmit
    }, this.showAlert(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Reset Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      controlId: "formBasicText",
      validationState: this.getValidationState()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      placeholder: "password",
      type: "password",
      onChange: this.handlePasswordChange,
      value: this.state.password,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('form-control form-control-lg', {
        'is-invalid': errors.password
      })
    }), errors.password && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback alert-danger"
    }, errors.password), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"].Feedback, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["HelpBlock"], null, "Password must be at least 8 characters.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
      controlId: "formBasicText2",
      validationState: this.confirmGetValidationState()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Confirm Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      placeholder: "confirm password...",
      type: "password",
      onChange: this.handleChange,
      value: this.state.confirm_password,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('form-control form-control-lg', {
        'is-invalid': errors.password
      })
    }), errors.password && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback alert-danger"
    }, errors.password), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"].Feedback, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "loginbutton"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      disabled: !isEnabled,
      bsStyle: "primary",
      type: "submit"
    }, "Reset")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rglink"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: '/login'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Login Here.")))));
  }

}

Reset.propTypes = {
  setNewPassword: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};

const mapStateToProps = state => {
  return {
    // user: state, 
    // auth: state.auth,
    errors: state.errors,
    forgot: state.forgot.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  setNewPassword: _redux_actions_forgotActions__WEBPACK_IMPORTED_MODULE_7__["setNewPassword"]
})(Reset));

/***/ }),

/***/ "./src/components/userdash.js":
/*!************************************!*\
  !*** ./src/components/userdash.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_util_actlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/util/actlist */ "./src/components/util/actlist.js");
/* harmony import */ var _components_util_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/util/navbar */ "./src/components/util/navbar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_userdashActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/userdashActions */ "./src/redux/actions/userdashActions.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _css_userdash_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/userdash.css */ "./src/css/userdash.css");
/* harmony import */ var _css_userdash_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_userdash_css__WEBPACK_IMPORTED_MODULE_8__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class UserDash extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleTypeFilter", event => {
      let priceType = event.target.value;

      if (event.target.checked) {
        this.props.addFilterType(priceType);
      } else {
        this.props.removeFilterType(priceType);
      }
    });

    _defineProperty(this, "handleKindnessFilter", event => {
      let kindness = event.target.value;

      if (event.target.checked) {
        this.props.addFilterType(kindness);
      } else {
        this.props.removeFilterType(kindness);
      }
    });

    _defineProperty(this, "handleEncouragementFilter", event => {
      let encouragement = event.target.value;

      if (event.target.checked) {
        this.props.addFilterType(encouragement);
      } else {
        this.props.removeFilterType(encouragement);
      }
    });
  }

  componentDidMount() {
    this.props.getUserPoints(this.props.auth.user._id);
    this.props.getActList(this.props.auth.user._id);
  }

  componentWillReceiveProps(props) {
    let newarray = props.userlist;
    this.setState({
      useracts: newarray
    });
  }

  render() {
    if (!this.props.auth.isAuthenticated) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/login"
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_util_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mobilesidebar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      className: "checkboxes"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
      inline: true,
      value: "Witness",
      onClick: e => this.handleTypeFilter(e),
      className: "check",
      name: "filterButtonGroup"
    }, "Witness"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
      inline: true,
      value: "Kindness",
      onClick: e => this.handleKindnessFilter(e),
      className: "check",
      name: "filterButtonGroup"
    }, "Kindness"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
      inline: true,
      value: "Encouragement",
      onClick: e => this.handleEncouragementFilter(e),
      className: "check",
      name: "filterButtonGroup"
    }, "Encouragement"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "desktopMessage"
    }, this.props.auth.user.fullname, ", you've commited ", this.props.userpoints.userpoints, " Acts!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "mobileMessage"
    }, "Acts: ", this.props.userpoints.userpoints)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sidebar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      className: "checkboxes"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
      value: "Witness",
      onClick: e => this.handleTypeFilter(e),
      className: "check",
      name: "filterButtonGroup"
    }, "Witness"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
      value: "Kindness",
      onClick: e => this.handleKindnessFilter(e),
      className: "check",
      name: "filterButtonGroup"
    }, "Kindness"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
      value: "Encouragement",
      onClick: e => this.handleEncouragementFilter(e),
      className: "check",
      name: "filterButtonGroup"
    }, "Encouragement"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_util_actlist__WEBPACK_IMPORTED_MODULE_1__["default"], {
      showFiltertedActs: this.props.showFiltertedActs
    }))));
  }

}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    getUserPoints: _redux_actions_userdashActions__WEBPACK_IMPORTED_MODULE_5__["getUserPoints"],
    getActList: _redux_actions_userdashActions__WEBPACK_IMPORTED_MODULE_5__["getActList"],
    addFilterType: _redux_actions_userdashActions__WEBPACK_IMPORTED_MODULE_5__["addFilterType"],
    removeFilterType: _redux_actions_userdashActions__WEBPACK_IMPORTED_MODULE_5__["removeFilterType"]
  }, dispatch);
}

const mapStatetoProps = state => {
  return {
    auth: state.auth,
    userpoints: state.userdash,
    userlist: state.userlist,
    filters: state.filters
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStatetoProps, mapDispatchToProps)(UserDash));

/***/ }),

/***/ "./src/components/util/actlist.js":
/*!****************************************!*\
  !*** ./src/components/util/actlist.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");



class Actlist extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "thelist"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"], {
      className: "actlist"
    }, this.props.showFiltertedActs && this.props.showFiltertedActs.map(list => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
        href: "#",
        key: list._id
      }, list.description);
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Actlist);

/***/ }),

/***/ "./src/components/util/alert.js":
/*!**************************************!*\
  !*** ./src/components/util/alert.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");



class AlertMessage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      bsStyle: "success"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Awesome!"), " Your act has been recorded!");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AlertMessage);

/***/ }),

/***/ "./src/components/util/chart.js":
/*!**************************************!*\
  !*** ./src/components/util/chart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");



class Chart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const data = [{
      name: 'Acts',
      value: this.props.chartData.points[0]
    }];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
      width: 350,
      height: 500,
      data: data,
      margin: {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
      strokeDasharray: "3 3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
      dataKey: "name"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
      type: "number",
      domain: [0, 100]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      dataKey: "value",
      fill: "#82ca9d"
    })));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./src/components/util/churchlist.js":
/*!*******************************************!*\
  !*** ./src/components/util/churchlist.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_churchlist_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/churchlist.css */ "./src/css/churchlist.css");
/* harmony import */ var _css_churchlist_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_churchlist_css__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ChurchList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      acts: [],
      text: '',
      name: ''
    });

    _defineProperty(this, "renderSlideShow", () => {
      if (this.state.acts && this.state.acts.length == 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      } else {
        let user = this.state.acts[Math.floor(Math.random() * this.state.acts.length)];
        let wordsArray = [];
        user.useracts.map(words => {
          wordsArray.push(words.description);
          return words;
        });
        let screenword = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        this.setState({
          text: screenword
        });
        this.setState({
          name: user.fullname
        });
      }
    });
  }

  componentWillReceiveProps(props) {
    let newarray = props.allacts && props.allacts.map(randomuser => {
      return randomuser;
    }).filter(filteredlist => {
      return filteredlist.acts.length > 0;
    });
    this.setState({
      acts: newarray
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.renderSlideShow();
    }, 5000);
  }

  render() {
    if (this.props.isLoading) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading...");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "quote-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "listquote"
    }, this.state.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "person"
    }, this.state.name, " "));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ChurchList);

/***/ }),

/***/ "./src/components/util/filterList.js":
/*!*******************************************!*\
  !*** ./src/components/util/filterList.js ***!
  \*******************************************/
/*! exports provided: VisableActList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisableActList", function() { return VisableActList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _userdash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userdash */ "./src/components/userdash.js");




const getVisibleActs = (acts, filter) => {
  //show all acts
  if (filter.typeFilter.length === 0) {
    return acts.userlist;
  } //show only witness
  else if (filter.typeFilter.length !== 0) {
      let filteredArray = [];
      acts.userlist.forEach(w => {
        if (filter.typeFilter.indexOf(w.typeofact) !== -1) {
          filteredArray.push(w);
        }
      });
      return filteredArray;
    }
};

class VisableActList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let showFiltertedActs = getVisibleActs(this.props.userlist, this.props.visableFilter);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "visiable-act-list"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userdash__WEBPACK_IMPORTED_MODULE_2__["default"], {
      showFiltertedActs: showFiltertedActs
    }));
  }

}

const mapsStateToProps = state => {
  return {
    visableFilter: state.visableFilter,
    userlist: state.userlist
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapsStateToProps, null)(VisableActList));

/***/ }),

/***/ "./src/components/util/isEmpty.js":
/*!****************************************!*\
  !*** ./src/components/util/isEmpty.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isEmpty = value => {
  return value === undefined || value === null || typeof value === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0;
};

/* harmony default export */ __webpack_exports__["default"] = (isEmpty);

/***/ }),

/***/ "./src/components/util/navbar.js":
/*!***************************************!*\
  !*** ./src/components/util/navbar.js ***!
  \***************************************/
/*! exports provided: NavBarItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarItem", function() { return NavBarItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _redux_actions_loginActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/loginActions */ "./src/redux/actions/loginActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../css/navbar.css */ "./src/css/navbar.css");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_5__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class NavBarItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onLogout", event => {
      this.props.logoutUser(this.props.history);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      inverse: true,
      collapseOnSelect: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/"
    }, "ChurchApp")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
      pullRight: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/userdash",
      className: "bootstraplink"
    }, "MyActs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/addact",
      className: "bootstraplink"
    }, "AddAct")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "#",
      className: "bootstraplink",
      onClick: this.onLogout
    }, "Logout")))));
  }

}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  logoutUser: _redux_actions_loginActions__WEBPACK_IMPORTED_MODULE_3__["logoutUser"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(NavBarItem)));

/***/ }),

/***/ "./src/css/addact.css":
/*!****************************!*\
  !*** ./src/css/addact.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/churchlist.css":
/*!********************************!*\
  !*** ./src/css/churchlist.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/images/Spin-1.8s-200px.gif":
/*!********************************************!*\
  !*** ./src/css/images/Spin-1.8s-200px.gif ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "41c7e61943934487cf490d38b3901040.gif";

/***/ }),

/***/ "./src/css/login.css":
/*!***************************!*\
  !*** ./src/css/login.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/navbar.css":
/*!****************************!*\
  !*** ./src/css/navbar.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/register.css":
/*!******************************!*\
  !*** ./src/css/register.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/userdash.css":
/*!******************************!*\
  !*** ./src/css/userdash.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_object_lookup_getter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.object.lookup-getter */ "./node_modules/core-js/modules/es7.object.lookup-getter.js");
/* harmony import */ var core_js_modules_es7_object_lookup_getter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_lookup_getter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_object_lookup_setter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.object.lookup-setter */ "./node_modules/core-js/modules/es7.object.lookup-setter.js");
/* harmony import */ var core_js_modules_es7_object_lookup_setter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_lookup_setter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
/* harmony import */ var core_js_modules_es6_regexp_flags__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_flags__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
/* harmony import */ var core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/app */ "./src/components/app.js");
/* harmony import */ var _components_AddAct__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/AddAct */ "./src/components/AddAct.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login */ "./src/components/login.js");
/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/register */ "./src/components/register.js");
/* harmony import */ var _components_util_filterList__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/util/filterList */ "./src/components/util/filterList.js");
/* harmony import */ var _components_forgot__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/forgot */ "./src/components/forgot.js");
/* harmony import */ var _components_reset__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/reset */ "./src/components/reset.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _redux_reducers_rootreducer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./redux/reducers/rootreducer */ "./src/redux/reducers/rootreducer.js");
/* harmony import */ var _redux_reduxUtils_setAuthToken__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./redux/reduxUtils/setAuthToken */ "./src/redux/reduxUtils/setAuthToken.js");
/* harmony import */ var _redux_actions_loginActions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./redux/actions/loginActions */ "./src/redux/actions/loginActions.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_31__);
































const middleware = Object(redux__WEBPACK_IMPORTED_MODULE_25__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_27__["default"]);
const initialState = {};

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (false) {}

const store = Object(redux__WEBPACK_IMPORTED_MODULE_25__["createStore"])(_redux_reducers_rootreducer__WEBPACK_IMPORTED_MODULE_28__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_25__["compose"])(middleware, devTools));

if (localStorage.jwtToken) {
  Object(_redux_reduxUtils_setAuthToken__WEBPACK_IMPORTED_MODULE_29__["default"])(localStorage.jwtToken);
  const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_31___default()(localStorage.jwtToken);
  store.dispatch(Object(_redux_actions_loginActions__WEBPACK_IMPORTED_MODULE_30__["setCurrentUser"])(decoded));
}

react_dom__WEBPACK_IMPORTED_MODULE_16___default.a.render(react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_26__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["Route"], {
  exact: true,
  path: "/",
  component: _components_app__WEBPACK_IMPORTED_MODULE_17__["default"]
}), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["Route"], {
  path: "/addact",
  component: _components_AddAct__WEBPACK_IMPORTED_MODULE_18__["default"]
}), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["Route"], {
  path: "/login",
  component: _components_login__WEBPACK_IMPORTED_MODULE_19__["default"]
}), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["Route"], {
  path: "/register",
  component: _components_register__WEBPACK_IMPORTED_MODULE_20__["default"]
}), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["Route"], {
  path: "/userdash",
  component: _components_util_filterList__WEBPACK_IMPORTED_MODULE_21__["default"]
}), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["Route"], {
  path: "/forgot",
  component: _components_forgot__WEBPACK_IMPORTED_MODULE_22__["default"]
}), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["Route"], {
  path: "/reset",
  component: _components_reset__WEBPACK_IMPORTED_MODULE_23__["default"]
})))), document.getElementById('root'));

/***/ }),

/***/ "./src/redux/actions/actActions.js":
/*!*****************************************!*\
  !*** ./src/redux/actions/actActions.js ***!
  \*****************************************/
/*! exports provided: sendActToDB, sendActToDBSuccess, sendActToDBFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendActToDB", function() { return sendActToDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendActToDBSuccess", function() { return sendActToDBSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendActToDBFailure", function() { return sendActToDBFailure; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/redux/actions/constants.js");


const API_URL = process.env.API_URL || "http://localhost:4000/api";
function sendActToDB(actdata) {
  return dispatch => {
    const url = `${API_URL}/acts/create`;
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, actdata).then(res => {
      dispatch(sendActToDBSuccess(res));
    }).catch(err => {
      dispatch(sendActToDBFailure(err));
    });
  };
}
function sendActToDBSuccess(actdata) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["POST_ACT_SUCCESS"],
    payload: actdata
  };
}
function sendActToDBFailure(error) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["POST_ACT_FAILURE"],
    payload: error
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/redux/actions/appActions.js":
/*!*****************************************!*\
  !*** ./src/redux/actions/appActions.js ***!
  \*****************************************/
/*! exports provided: getAllPoints, getAllPointsSuccess, getAllPointsError, getAllActs, getAllActsSuccess, getAllActsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPoints", function() { return getAllPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPointsSuccess", function() { return getAllPointsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPointsError", function() { return getAllPointsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActs", function() { return getAllActs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActsSuccess", function() { return getAllActsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActsError", function() { return getAllActsError; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/redux/actions/constants.js");


const API_URL = process.env.API_URL || "http://localhost:4000/api";
function getAllPoints() {
  return dispatch => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/admin/totalpoints`).then(res => {
      dispatch(getAllPointsSuccess(res));
    }).catch(err => {
      dispatch(getAllPointsError(err));
    });
  };
}
function getAllPointsSuccess(points) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_POINTS_SUCCESS"],
    payload: points
  };
}
function getAllPointsError(error) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_POINTS_FAILURE"],
    payload: error
  };
}
function getAllActs() {
  return dispatch => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_ALLACTS_REQUEST"]
    });
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/acts`).then(res => {
      dispatch(getAllActsSuccess(res));
    }).catch(err => {
      dispatch(getAllActsError(err));
    });
  };
}
function getAllActsSuccess(allacts) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_ALLACTS_SUCCESS"],
    payload: allacts
  };
}
function getAllActsError(error) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_ALLACTS_FAILURE"],
    payload: error
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/redux/actions/constants.js":
/*!****************************************!*\
  !*** ./src/redux/actions/constants.js ***!
  \****************************************/
/*! exports provided: LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, GET_ERRORS, SET_CURRENT_USER, REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, SET_NEW_PASSWORD_SUCCESS, SET_NEW_PASSWORD_FAILURE, GET_ALL_POINTS_REQUEST, GET_ALL_POINTS_SUCCESS, GET_ALL_POINTS_FAILURE, POST_ACT_SUCCESS, POST_ACT_FAILURE, GET_USERPOINTS_SUCCESS, GET_USERPOINTS_FAILURE, GET_USERACTS_SUCCESS, GET_USERACTS_FAILURE, GET_ALLACTS_REQUEST, GET_ALLACTS_SUCCESS, GET_ALLACTS_FAILURE, SET_WITNESS, SET_ENCOURAGEMENT, SET_KINDNESS, ADD_TYPE_FILTER, REMOVE_TYPE_FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ERRORS", function() { return GET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_ERROR", function() { return REGISTER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_REQUEST", function() { return REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD_SUCCESS", function() { return RESET_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD_FAILURE", function() { return RESET_PASSWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_NEW_PASSWORD_SUCCESS", function() { return SET_NEW_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_NEW_PASSWORD_FAILURE", function() { return SET_NEW_PASSWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_POINTS_REQUEST", function() { return GET_ALL_POINTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_POINTS_SUCCESS", function() { return GET_ALL_POINTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_POINTS_FAILURE", function() { return GET_ALL_POINTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ACT_SUCCESS", function() { return POST_ACT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ACT_FAILURE", function() { return POST_ACT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERPOINTS_SUCCESS", function() { return GET_USERPOINTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERPOINTS_FAILURE", function() { return GET_USERPOINTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERACTS_SUCCESS", function() { return GET_USERACTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERACTS_FAILURE", function() { return GET_USERACTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALLACTS_REQUEST", function() { return GET_ALLACTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALLACTS_SUCCESS", function() { return GET_ALLACTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALLACTS_FAILURE", function() { return GET_ALLACTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_WITNESS", function() { return SET_WITNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ENCOURAGEMENT", function() { return SET_ENCOURAGEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_KINDNESS", function() { return SET_KINDNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TYPE_FILTER", function() { return ADD_TYPE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TYPE_FILTER", function() { return REMOVE_TYPE_FILTER; });
const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const GET_ERRORS = 'GET_ERRORS';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const REGISTER_ERROR = 'REGISTER_ERROR';
const REGISTER_REQUEST = 'REGISTER_REQUEST';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';
const SET_NEW_PASSWORD_SUCCESS = 'SET_NEW_PASSWORD_SUCCESS';
const SET_NEW_PASSWORD_FAILURE = 'SET_NEW_PASSWORD_FAILURE';
const GET_ALL_POINTS_REQUEST = 'GET_ALL_POINTS_REQUEST';
const GET_ALL_POINTS_SUCCESS = 'GET_ALL_POINTS_SUCCESS';
const GET_ALL_POINTS_FAILURE = 'GET_ALL_POINTS_FAILURE';
const POST_ACT_SUCCESS = 'POST_ACT_SUCCESS';
const POST_ACT_FAILURE = 'POST_ACT_FAILURE';
const GET_USERPOINTS_SUCCESS = 'GET_USERPOINTS_SUCCESS';
const GET_USERPOINTS_FAILURE = 'GET_USERPOINTS_FAILURE';
const GET_USERACTS_SUCCESS = 'GET_USERACTS_SUCCESS';
const GET_USERACTS_FAILURE = 'GET_USERACTS_FAILURE';
const GET_ALLACTS_REQUEST = 'GET_ALLACTS_REQUEST';
const GET_ALLACTS_SUCCESS = 'GET_ALLACTS_SUCCESS';
const GET_ALLACTS_FAILURE = 'GET_ALLACTS_FAILURE';
const SET_WITNESS = 'SET_WITNESS';
const SET_ENCOURAGEMENT = 'SET_ENCOURAGEMENT';
const SET_KINDNESS = 'SET_KINDNESS';
const ADD_TYPE_FILTER = 'ADD_TYPE_FILTER';
const REMOVE_TYPE_FILTER = 'REMOVE_TYPE_FILTER';

/***/ }),

/***/ "./src/redux/actions/forgotActions.js":
/*!********************************************!*\
  !*** ./src/redux/actions/forgotActions.js ***!
  \********************************************/
/*! exports provided: resetPassword, resetPasswordSuccess, resetPasswordFailure, setNewPassword, setNewPasswordSuccess, setNewPasswordFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPasswordSuccess", function() { return resetPasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPasswordFailure", function() { return resetPasswordFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNewPassword", function() { return setNewPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNewPasswordSuccess", function() { return setNewPasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNewPasswordFailure", function() { return setNewPasswordFailure; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/redux/actions/constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const API_URL = process.env.API_URL || "http://localhost:4000/api";
function resetPassword(email) {
  return dispatch => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${API_URL}/forgot`, email).then(res => {
      dispatch(resetPasswordSuccess(res));
    }).catch(err => {
      dispatch(resetPasswordFailure(err));
    });
  };
}
function resetPasswordSuccess(email) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["RESET_PASSWORD_SUCCESS"],
    payload: email
  };
}
function resetPasswordFailure(error) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["RESET_PASSWORD_FAILURE"],
    payload: error.response.data
  };
}
function setNewPassword(userData) {
  return dispatch => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${API_URL}/reset`, userData).then(res => {
      dispatch(setNewPasswordSuccess(res));
    }).catch(err => {
      dispatch(setNewPasswordFailure(err));
    });
  };
}
function setNewPasswordSuccess(userData) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_NEW_PASSWORD_SUCCESS"],
    payload: userData
  };
}
function setNewPasswordFailure(err) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_NEW_PASSWORD_FAILURE"],
    payload: err.response.data
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/redux/actions/loginActions.js":
/*!*******************************************!*\
  !*** ./src/redux/actions/loginActions.js ***!
  \*******************************************/
/*! exports provided: registerUser, loginUser, loginUserSuccess, loginUserError, setCurrentUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserSuccess", function() { return loginUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserError", function() { return loginUserError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/redux/actions/constants.js");
/* harmony import */ var _reduxUtils_setAuthToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reduxUtils/setAuthToken */ "./src/redux/reduxUtils/setAuthToken.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




const API_URL = process.env.API_URL || "http://localhost:4000/api";
const registerUser = (user, history) => dispatch => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["REGISTER_REQUEST"]
  });
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${API_URL}/signup`, user).then(res => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["REGISTER_SUCCESS"]
    });
    history.push('/login');
  }).catch(err => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_ERRORS"],
      payload: err.response.data
    });
  });
};
const loginUser = userInfo => dispatch => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUEST"]
  });
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${API_URL}/login`, userInfo).then(res => {
    dispatch(loginUserSuccess(res));
  }).catch(err => {
    dispatch(loginUserError(err));
  });
};
const loginUserSuccess = res => dispatch => {
  const token = res.data.token;
  localStorage.setItem('jwtToken', token);
  Object(_reduxUtils_setAuthToken__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
  const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
  dispatch(setCurrentUser(decoded));
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"],
    payload: res
  };
};
function loginUserError(err) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_ERRORS"],
    payload: err.response.data
  };
}
const setCurrentUser = decoded => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_USER"],
    payload: decoded
  };
};
const logoutUser = history => dispatch => {
  localStorage.removeItem('jwtToken');
  Object(_reduxUtils_setAuthToken__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
  localStorage.removeItem('user');
  dispatch(setCurrentUser({}));
  history.push('/login');
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/redux/actions/userdashActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/userdashActions.js ***!
  \**********************************************/
/*! exports provided: getUserPoints, getPointsSuccess, getPointsFailure, getActList, getActSuccess, getActFailure, addFilterType, removeFilterType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPoints", function() { return getUserPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointsSuccess", function() { return getPointsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointsFailure", function() { return getPointsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActList", function() { return getActList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActSuccess", function() { return getActSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActFailure", function() { return getActFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFilterType", function() { return addFilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFilterType", function() { return removeFilterType; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/redux/actions/constants.js");


const API_URL = process.env.API_URL || "http://localhost:4000/api";
function getUserPoints(id) {
  return dispatch => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/acts/total/` + id).then(res => {
      dispatch(getPointsSuccess(res));
    }).catch(err => {
      dispatch(getPointsFailure(err));
    });
  };
}
function getPointsSuccess(userpoints) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_USERPOINTS_SUCCESS"],
    payload: userpoints
  };
}
function getPointsFailure(err) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_USERPOINTS_FAILURE"],
    payload: err
  };
} ////

function getActList(id) {
  return dispatch => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/acts/` + id).then(res => {
      dispatch(getActSuccess(res));
    }).catch(err => {
      dispatch(getActFailure(err));
    });
  };
}
function getActSuccess(useracts) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_USERACTS_SUCCESS"],
    payload: useracts
  };
}
function getActFailure(err) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_USERACTS_FAILURE"],
    payload: err
  };
}
function addFilterType(filterType) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["ADD_TYPE_FILTER"],
    filterType
  };
}
function removeFilterType(filterType) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["REMOVE_TYPE_FILTER"],
    filterType
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/redux/reducers/actReducer.js":
/*!******************************************!*\
  !*** ./src/redux/reducers/actReducer.js ***!
  \******************************************/
/*! exports provided: actReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actReducer", function() { return actReducer; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");

const initialState = {};
function actReducer(state = initialState, action) {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["POST_ACT_SUCCESS"]:
      return action.payload;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["POST_ACT_FAILURE"]:
      return action.payload;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/appReducer.js":
/*!******************************************!*\
  !*** ./src/redux/reducers/appReducer.js ***!
  \******************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");

const initialState = {
  points: []
};
function appReducer(state = initialState, action) {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_POINTS_REQUEST"]:
      return action.payload;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_POINTS_SUCCESS"]:
      return {
        points: [action.payload.data]
      };

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_POINTS_FAILURE"]:
      return action.payload;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/authReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/authReducer.js ***!
  \*******************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");
/* harmony import */ var _components_util_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/util/isEmpty */ "./src/components/util/isEmpty.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  isAuthenticated: false,
  user: {}
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_USER"]:
      return _objectSpread({}, state, {
        isAuthenticated: !Object(_components_util_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(action.payload),
        user: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/churchlistReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/churchlistReducer.js ***!
  \*************************************************/
/*! exports provided: churchListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "churchListReducer", function() { return churchListReducer; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const inititalState = [];
function churchListReducer(state = inititalState, action) {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["GET_ALLACTS_REQUEST"]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["GET_ALLACTS_SUCCESS"]:
      return {
        churchlist: action.payload.data,
        isLoading: false
      };

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["GET_ALLACTS_FAILURE"]:
      return _objectSpread({}, state, {
        isLoading: false,
        errorMessage: action.payload.message
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/errorReducer.js":
/*!********************************************!*\
  !*** ./src/redux/reducers/errorReducer.js ***!
  \********************************************/
/*! exports provided: errorReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorReducer", function() { return errorReducer; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isFetching: false,
  loggingIn: false
};
function errorReducer(state = initialState, action) {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["GET_ERRORS"]:
      return {
        errors: action.payload,
        loggingIn: false
      };

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["REGISTER_REQUEST"]:
      return _objectSpread({}, state, {
        isFetching: true
      });

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["REGISTER_SUCCESS"]:
      return _objectSpread({}, state, {
        isFetching: false
      });

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUEST"]:
      return _objectSpread({}, state, {
        loggingIn: true
      });

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]:
      return _objectSpread({}, state, {
        loggingIn: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/forgotReducer.js":
/*!*********************************************!*\
  !*** ./src/redux/reducers/forgotReducer.js ***!
  \*********************************************/
/*! exports provided: forgotReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotReducer", function() { return forgotReducer; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");

const initialState = {};
function forgotReducer(state = initialState, action) {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["RESET_PASSWORD_SUCCESS"]:
      return action.payload;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["SET_NEW_PASSWORD_SUCCESS"]:
      return action.payload;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/loginReducer.js":
/*!********************************************!*\
  !*** ./src/redux/reducers/loginReducer.js ***!
  \********************************************/
/*! exports provided: loginReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginReducer", function() { return loginReducer; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");

const initialState = {
  isFetching: false
};
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["RESET_PASSWORD_FAILURE"]:
      return action.payload;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["SET_NEW_PASSWORD_FAILURE"]:
      return action.payload;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/rootreducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/rootreducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _loginReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginReducer */ "./src/redux/reducers/loginReducer.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ "./src/redux/reducers/authReducer.js");
/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appReducer */ "./src/redux/reducers/appReducer.js");
/* harmony import */ var _actReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actReducer */ "./src/redux/reducers/actReducer.js");
/* harmony import */ var _userdashReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userdashReducer */ "./src/redux/reducers/userdashReducer.js");
/* harmony import */ var _userlistReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userlistReducer */ "./src/redux/reducers/userlistReducer.js");
/* harmony import */ var _churchlistReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./churchlistReducer */ "./src/redux/reducers/churchlistReducer.js");
/* harmony import */ var _visibilityReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visibilityReducer */ "./src/redux/reducers/visibilityReducer.js");
/* harmony import */ var _forgotReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgotReducer */ "./src/redux/reducers/forgotReducer.js");
/* harmony import */ var _errorReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./errorReducer */ "./src/redux/reducers/errorReducer.js");











const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  errors: _errorReducer__WEBPACK_IMPORTED_MODULE_10__["errorReducer"],
  login: _loginReducer__WEBPACK_IMPORTED_MODULE_1__["loginReducer"],
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_2__["authReducer"],
  app: _appReducer__WEBPACK_IMPORTED_MODULE_3__["appReducer"],
  act: _actReducer__WEBPACK_IMPORTED_MODULE_4__["actReducer"],
  userdash: _userdashReducer__WEBPACK_IMPORTED_MODULE_5__["userdashReducer"],
  userlist: _userlistReducer__WEBPACK_IMPORTED_MODULE_6__["userListReducer"],
  churchlist: _churchlistReducer__WEBPACK_IMPORTED_MODULE_7__["churchListReducer"],
  visableFilter: _visibilityReducer__WEBPACK_IMPORTED_MODULE_8__["visibilityReducer"],
  forgot: _forgotReducer__WEBPACK_IMPORTED_MODULE_9__["forgotReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/redux/reducers/userdashReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/userdashReducer.js ***!
  \***********************************************/
/*! exports provided: userdashReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userdashReducer", function() { return userdashReducer; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");

const initialstate = {
  userpoints: []
};
function userdashReducer(state = initialstate, action) {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["GET_USERPOINTS_SUCCESS"]:
      return {
        userpoints: [action.payload.data]
      };

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["GET_USERPOINTS_FAILURE"]:
      return action.payload;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/userlistReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/userlistReducer.js ***!
  \***********************************************/
/*! exports provided: userListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userListReducer", function() { return userListReducer; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");

const initialstate = {};
function userListReducer(state = initialstate, action) {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["GET_USERACTS_SUCCESS"]:
      return {
        userlist: action.payload.data
      };

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["GET_USERACTS_FAILURE"]:
      return action.payload;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/visibilityReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/visibilityReducer.js ***!
  \*************************************************/
/*! exports provided: visibilityReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibilityReducer", function() { return visibilityReducer; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");

const initialstate = {
  typeFilter: []
};
function visibilityReducer(state = initialstate, action) {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_TYPE_FILTER"]:
      return Object.assign({}, state, {
        typeFilter: [...state.typeFilter, action.filterType]
      });

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["REMOVE_TYPE_FILTER"]:
      const newTypeFilter = state.typeFilter.filter(item => item !== action.filterType);
      return {
        typeFilter: newTypeFilter
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reduxUtils/setAuthToken.js":
/*!**********************************************!*\
  !*** ./src/redux/reduxUtils/setAuthToken.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const setAuthToken = token => {
  if (token) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
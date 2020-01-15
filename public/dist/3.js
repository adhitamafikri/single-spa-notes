(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _themes_primary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themes/primary */ "./src/themes/primary.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  body {\n    margin: 0;\n    padding: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 48px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main(_templateObject());
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject2());

function Layout(_ref) {
  var navbar = _ref.navbar,
      footer = _ref.footer,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _themes_primary__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle, null), navbar && navbar, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMain, null, children), navbar && footer);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Loading/index.js":
/*!*****************************************!*\
  !*** ./src/components/Loading/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: rgba(0,0,0,0.35);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  color: white;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledLoading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

function Loading() {
  return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLoading, null, "Loading..."), document.body);
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/Navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! single-spa */ "./node_modules/single-spa/lib/esm/single-spa.min.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 48px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledNavbar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.theme.primary;
});
var Link = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject2());

function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNavbar, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    href: "/",
    onClick: single_spa__WEBPACK_IMPORTED_MODULE_2__["navigateToUrl"]
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    href: "/notes",
    onClick: single_spa__WEBPACK_IMPORTED_MODULE_2__["navigateToUrl"]
  }, "Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    href: "/profile",
    onClick: single_spa__WEBPACK_IMPORTED_MODULE_2__["navigateToUrl"]
  }, "Profile"));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/services/Home/configs/api.js":
/*!******************************************!*\
  !*** ./src/services/Home/configs/api.js ***!
  \******************************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_URL = 'http://localhost:4009/single-spa-notes/v1';

/***/ }),

/***/ "./src/services/Home/contexts/NotesContext/actions.js":
/*!************************************************************!*\
  !*** ./src/services/Home/contexts/NotesContext/actions.js ***!
  \************************************************************/
/*! exports provided: FETCH_NOTES_BEGIN, FETCH_NOTES_SUCCESS, FETCH_NOTES_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NOTES_BEGIN", function() { return FETCH_NOTES_BEGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NOTES_SUCCESS", function() { return FETCH_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NOTES_ERROR", function() { return FETCH_NOTES_ERROR; });
var FETCH_NOTES_BEGIN = 'FETCH_NOTES';
var FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
var FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR';

/***/ }),

/***/ "./src/services/Home/contexts/NotesContext/index.js":
/*!**********************************************************!*\
  !*** ./src/services/Home/contexts/NotesContext/index.js ***!
  \**********************************************************/
/*! exports provided: NotesProvider, useNotesState, useNotesDispatch, fetchNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesProvider", function() { return NotesProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNotesState", function() { return useNotesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNotesDispatch", function() { return useNotesDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNotes", function() { return fetchNotes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/api */ "./src/services/Home/configs/api.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/services/Home/contexts/NotesContext/actions.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./src/services/Home/contexts/NotesContext/reducer.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var NotesStateContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
var NotesDispatchContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function NotesProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"], _reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NotesStateContext.Provider, {
    value: state
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NotesDispatchContext.Provider, {
    value: dispatch
  }, children));
}
function useNotesState() {
  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(NotesStateContext);

  if (context === undefined) {
    throw new Error('useNotesState must be used inside NotesProvider');
  }

  return context;
}
function useNotesDispatch() {
  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(NotesDispatchContext);

  if (context === undefined) {
    throw new Error('useNotesDispatch must be used inside NotesProvider');
  }

  return context;
}
/** 
 * @desc Fetching notes from api
 */

function fetchNotes(dispatch) {
  var URL, response, json, payload, _payload, _payload2;

  return regeneratorRuntime.async(function fetchNotes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dispatch({
            type: _actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_NOTES_BEGIN"]
          });
          _context.prev = 1;
          URL = "".concat(_configs_api__WEBPACK_IMPORTED_MODULE_1__["API_URL"], "/notes");
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch(URL));

        case 5:
          response = _context.sent;

          if (!response) {
            _context.next = 14;
            break;
          }

          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          json = _context.sent;
          payload = json.result;
          dispatch({
            type: _actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_NOTES_SUCCESS"],
            payload: payload
          });
          _context.next = 17;
          break;

        case 14:
          _payload = 'Failed to get response';
          dispatch({
            type: _actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_NOTES_ERROR"],
            payload: _payload
          });
          throw new Error('Failed to get response');

        case 17:
          _context.next = 24;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](1);
          _payload2 = 'Something went wrong';
          dispatch({
            type: _actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_NOTES_ERROR"],
            payload: _payload2
          });
          throw _context.t0;

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 19]]);
}

/***/ }),

/***/ "./src/services/Home/contexts/NotesContext/reducer.js":
/*!************************************************************!*\
  !*** ./src/services/Home/contexts/NotesContext/reducer.js ***!
  \************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/services/Home/contexts/NotesContext/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  loading: false,
  error: false,
  errorMsg: '',
  items: null
};
function reducer(state, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_NOTES_BEGIN"]:
      return _objectSpread({}, state, {}, initialState, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_NOTES_SUCCESS"]:
      return _objectSpread({}, state, {}, initialState, {
        items: action.payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_NOTES_ERROR"]:
      return _objectSpread({}, state, {}, initialState, {
        errorMsg: action.payload
      });

    default:
      throw new Error("Unhandled action type: ".concat(action.type));
  }
}

/***/ }),

/***/ "./src/services/Home/index.js":
/*!************************************!*\
  !*** ./src/services/Home/index.js ***!
  \************************************/
/*! exports provided: bootstrap, mount, unmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount", function() { return mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmount", function() { return unmount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! single-spa-react */ "./node_modules/single-spa-react/lib/single-spa-react.js");
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(single_spa_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _root_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root.component.js */ "./src/services/Home/root.component.js");






function domElementGetter() {
  return document.getElementById('Home');
}

var reactLifecycles = single_spa_react__WEBPACK_IMPORTED_MODULE_3___default()({
  React: react__WEBPACK_IMPORTED_MODULE_0___default.a,
  ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_1___default.a,
  rootComponent: _root_component_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  domElementGetter: domElementGetter
});
var bootstrap = [reactLifecycles.bootstrap];
var mount = [reactLifecycles.mount];
var unmount = [reactLifecycles.unmount];

/***/ }),

/***/ "./src/services/Home/root.component.js":
/*!*********************************************!*\
  !*** ./src/services/Home/root.component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Loading */ "./src/components/Loading/index.js");
/* harmony import */ var _home_contexts_NotesContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @home-contexts/NotesContext */ "./src/services/Home/contexts/NotesContext/index.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 140px;\n  height: 200px\n  border-radius: 6px;\n  padding: 8px;\n  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  > * {\n    margin: 16px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Paper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());

function Home() {
  var _useNotesState = Object(_home_contexts_NotesContext__WEBPACK_IMPORTED_MODULE_5__["useNotesState"])(),
      loading = _useNotesState.loading,
      error = _useNotesState.error,
      errorMsg = _useNotesState.errorMsg,
      items = _useNotesState.items;

  var notesDispatch = Object(_home_contexts_NotesContext__WEBPACK_IMPORTED_MODULE_5__["useNotesDispatch"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    Object(_home_contexts_NotesContext__WEBPACK_IMPORTED_MODULE_5__["fetchNotes"])(notesDispatch);
  }, [_home_contexts_NotesContext__WEBPACK_IMPORTED_MODULE_5__["fetchNotes"]]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navbar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, null, loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, null, !loading && items && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hey dude you have ", items.length, " notes"))));
}

function HomeWithContext() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home_contexts_NotesContext__WEBPACK_IMPORTED_MODULE_5__["NotesProvider"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Home, null));
}

/* harmony default export */ __webpack_exports__["default"] = (HomeWithContext);

/***/ }),

/***/ "./src/themes/primary.js":
/*!*******************************!*\
  !*** ./src/themes/primary.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  primary: '#ffebee',
  primaryLight: '#ffffff',
  primaryDark: '#ccb9bc'
});

/***/ })

}]);
//# sourceMappingURL=3.js.map
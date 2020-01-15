(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/services/Notes/configs/api.js":
/*!*******************************************!*\
  !*** ./src/services/Notes/configs/api.js ***!
  \*******************************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_URL = 'http://localhost:4009/single-spa-notes/v1';

/***/ }),

/***/ "./src/services/Notes/contexts/NotesContext/actions.js":
/*!*************************************************************!*\
  !*** ./src/services/Notes/contexts/NotesContext/actions.js ***!
  \*************************************************************/
/*! exports provided: FETCH_NOTES_BEGIN, FETCH_NOTES_SUCCESS, FETCH_NOTES_ERROR, POST_NOTES_BEGIN, POST_NOTES_SUCCESS, POST_NOTES_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NOTES_BEGIN", function() { return FETCH_NOTES_BEGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NOTES_SUCCESS", function() { return FETCH_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NOTES_ERROR", function() { return FETCH_NOTES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_NOTES_BEGIN", function() { return POST_NOTES_BEGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_NOTES_SUCCESS", function() { return POST_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_NOTES_ERROR", function() { return POST_NOTES_ERROR; });
var FETCH_NOTES_BEGIN = 'FETCH_NOTES_BEGIN';
var FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
var FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR';
var POST_NOTES_BEGIN = 'POST_NOTES_BEGIN';
var POST_NOTES_SUCCESS = 'POST_NOTES_SUCCESS';
var POST_NOTES_ERROR = 'POST_NOTES_ERROR';

/***/ }),

/***/ "./src/services/Notes/contexts/NotesContext/index.js":
/*!***********************************************************!*\
  !*** ./src/services/Notes/contexts/NotesContext/index.js ***!
  \***********************************************************/
/*! exports provided: NotesProvider, useNotesState, useNotesDispatch, fetchNotes, postNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesProvider", function() { return NotesProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNotesState", function() { return useNotesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNotesDispatch", function() { return useNotesDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNotes", function() { return fetchNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postNotes", function() { return postNotes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configs/api */ "./src/services/Notes/configs/api.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/services/Notes/contexts/NotesContext/actions.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ "./src/services/Notes/contexts/NotesContext/reducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var NotesStateContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
var NotesDispatchContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function NotesProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"], _reducer__WEBPACK_IMPORTED_MODULE_4__["initialState"]),
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
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_NOTES_BEGIN"]
          });
          _context.prev = 1;
          URL = "".concat(_configs_api__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "/notes");
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
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_NOTES_SUCCESS"],
            payload: payload
          });
          _context.next = 17;
          break;

        case 14:
          _payload = 'Failed to get response';
          dispatch({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_NOTES_ERROR"],
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
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_NOTES_ERROR"],
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
/** 
 * @desc Post note to api
 */

function postNotes(dispatch, data) {
  var URL, response, payload, _payload3;

  return regeneratorRuntime.async(function postNotes$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          dispatch({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["POST_NOTES_BEGIN"]
          });
          _context2.prev = 1;
          URL = "".concat(_configs_api__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "/notes");
          _context2.next = 5;
          return regeneratorRuntime.awrap(fetch(URL, {
            method: 'POST',
            body: JSON.stringify(_objectSpread({}, data)),
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 5:
          response = _context2.sent;

          if (!response) {
            _context2.next = 10;
            break;
          }

          dispatch({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["POST_NOTES_SUCCESS"],
            payload: _objectSpread({}, data)
          });
          _context2.next = 13;
          break;

        case 10:
          payload = 'Failed to post';
          dispatch({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["POST_NOTES_ERROR"],
            payload: payload
          });
          throw new Error('Failed to post');

        case 13:
          _context2.next = 20;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](1);
          _payload3 = 'Something went wrong';
          dispatch({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["POST_NOTES_ERROR"],
            payload: _payload3
          });
          throw _context2.t0;

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 15]]);
}

/***/ }),

/***/ "./src/services/Notes/contexts/NotesContext/reducer.js":
/*!*************************************************************!*\
  !*** ./src/services/Notes/contexts/NotesContext/reducer.js ***!
  \*************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/services/Notes/contexts/NotesContext/actions.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

    case _actions__WEBPACK_IMPORTED_MODULE_0__["POST_NOTES_BEGIN"]:
      return _objectSpread({}, state, {
        loading: true,
        error: false,
        errorMsg: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["POST_NOTES_SUCCESS"]:
      console.log(_objectSpread({}, state));
      var newNotes = [].concat(_toConsumableArray(state.items), [action.payload]);
      return _objectSpread({}, state, {
        loading: false,
        error: false,
        errorMsg: '',
        items: _toConsumableArray(newNotes)
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["POST_NOTES_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        error: true,
        errorMsg: action.payload
      });

    default:
      throw new Error("Unhandled action type: ".concat(action.type));
  }
}

/***/ }),

/***/ "./src/services/Notes/index.js":
/*!*************************************!*\
  !*** ./src/services/Notes/index.js ***!
  \*************************************/
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
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! single-spa-react */ "./node_modules/single-spa-react/lib/single-spa-react.js");
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(single_spa_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _root_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.component.js */ "./src/services/Notes/root.component.js");





function domElementGetter() {
  return document.getElementById('Notes');
}

var reactLifecycles = single_spa_react__WEBPACK_IMPORTED_MODULE_2___default()({
  React: react__WEBPACK_IMPORTED_MODULE_0___default.a,
  ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_1___default.a,
  rootComponent: _root_component_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  domElementGetter: domElementGetter
});
var bootstrap = [reactLifecycles.bootstrap];
var mount = [reactLifecycles.mount];
var unmount = [reactLifecycles.unmount];

/***/ }),

/***/ "./src/services/Notes/root.component.js":
/*!**********************************************!*\
  !*** ./src/services/Notes/root.component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _contexts_NotesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts/NotesContext */ "./src/services/Notes/contexts/NotesContext/index.js");


var ListPage = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./pages/List */ "./src/services/Notes/pages/List/index.js"));
});
var CreatePage = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./pages/Create */ "./src/services/Notes/pages/Create/index.js"));
});


function NotesWithContext() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_NotesContext__WEBPACK_IMPORTED_MODULE_2__["NotesProvider"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/notes",
    exact: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "sdfsd")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListPage, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/notes/create",
    exact: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "sdfsd")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreatePage, null))))));
}

/* harmony default export */ __webpack_exports__["default"] = (NotesWithContext);

/***/ })

}]);
//# sourceMappingURL=6.js.map
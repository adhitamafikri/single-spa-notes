(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./src/services/Notes/components/Pane/index.js":
/*!*****************************************************!*\
  !*** ./src/services/Notes/components/Pane/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  display: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  flex-wrap: ", ";\n  margin: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledPane = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.display;
}, function (props) {
  return props.justifyContent;
}, function (props) {
  return props.alignItems;
}, function (props) {
  return props.flexWrap;
}, function (props) {
  return props.margin;
});

function Pane(_ref) {
  var width = _ref.width,
      height = _ref.height,
      display = _ref.display,
      justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      flexWrap = _ref.flexWrap,
      margin = _ref.margin,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPane, {
    width: width,
    height: height,
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    flexWrap: flexWrap,
    margin: margin
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (Pane);

/***/ }),

/***/ "./src/services/Notes/components/Paper/index.js":
/*!******************************************************!*\
  !*** ./src/services/Notes/components/Paper/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 140px;\n  height: 200px\n  border-radius: 6px;\n  padding: 8px;\n  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);\n  margin: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledPaper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.margin;
});

function Paper(_ref) {
  var margin = _ref.margin,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPaper, {
    margin: margin
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (Paper);

/***/ }),

/***/ "./src/services/Notes/pages/Create/index.js":
/*!**************************************************!*\
  !*** ./src/services/Notes/pages/Create/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Loading */ "./src/components/Loading/index.js");
/* harmony import */ var _components_Pane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Pane */ "./src/services/Notes/components/Pane/index.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Paper */ "./src/services/Notes/components/Paper/index.js");
/* harmony import */ var _contexts_NotesContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/NotesContext */ "./src/services/Notes/contexts/NotesContext/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var StyledInputText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject());
/**
 * @desc Modify Notes Page
 */

function Create() {
  var _useNotesState = Object(_contexts_NotesContext__WEBPACK_IMPORTED_MODULE_8__["useNotesState"])(),
      loading = _useNotesState.loading,
      error = _useNotesState.error,
      errorMsg = _useNotesState.errorMsg,
      items = _useNotesState.items;

  var notesDispatch = Object(_contexts_NotesContext__WEBPACK_IMPORTED_MODULE_8__["useNotesDispatch"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    title: '',
    content: ''
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      noteData = _React$useState2[0],
      setNoteData = _React$useState2[1];

  var onTitleChange = function onTitleChange(e) {
    var nd = _objectSpread({}, noteData);

    nd.title = e.target.value;
    setNoteData(_objectSpread({}, nd));
  };

  var onContentChange = function onContentChange(e) {
    var nd = _objectSpread({}, noteData);

    nd.content = e.target.value;
    setNoteData(_objectSpread({}, nd));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navbar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Modify Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pane__WEBPACK_IMPORTED_MODULE_6__["default"], {
    width: "100%"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputText, {
    value: noteData.title,
    placeholder: "Title",
    onChange: onTitleChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputText, {
    value: noteData.content,
    placeholder: "Content",
    onChange: onContentChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return Object(_contexts_NotesContext__WEBPACK_IMPORTED_MODULE_8__["postNotes"])(notesDispatch, noteData);
    }
  }, "Save")));
}

/* harmony default export */ __webpack_exports__["default"] = (Create);

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
//# sourceMappingURL=4.js.map
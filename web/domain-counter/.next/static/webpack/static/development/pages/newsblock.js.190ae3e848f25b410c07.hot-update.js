webpackHotUpdate("static/development/pages/newsblock.js",{

/***/ "./pages/newsblock.js":
/*!****************************!*\
  !*** ./pages/newsblock.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_CoolLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/CoolLayout */ "./comps/CoolLayout.js");
var _jsxFileName = "/Users/starshows/Desktop/domain_counter/web/domain-counter/pages/newsblock.js";




const Content = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(); // get title prop from query of url.

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comps_CoolLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, router.query.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, " this is the news feed content"));
};

const Page = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comps_CoolLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=newsblock.js.190ae3e848f25b410c07.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_CoolLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/CoolLayout */ "./comps/CoolLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/starshows/Desktop/portfolio/web/Portfolio/pages/index.js";




const cardStyle = {
  backgroundColor: "#D3D3D3",
  border: "solid 1px #e0e0e0",
  borderRadius: "4px",
  padding: "5px"
};
const cardLayout = {
  display: "grid",
  gridGap: "10px 20px"
};
const cardLayoutInner = {
  cursor: "pointer"
};

const Index = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comps_CoolLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Batman TV Shows"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  style: cardLayout,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, props.shows.map(show => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  style: cardLayoutInner,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/newsblocks/[id]",
  as: "/newsblocks/".concat(show.id),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  key: show.id,
  style: cardStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/newsblocks/[id]",
  as: "/newsblocks/".concat(show.id),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: show.image.small,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/newsblocks/[id]",
  as: "/newsblocks/".concat(show.id),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, show.name)))))))); // Add a static async function to fetch data from tvmaze and return them as props.


Index.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  console.log("Show data fetched. Count: ".concat(data.length));
  return {
    shows: data.map(entry => entry.show)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.923f9c0c4654e9c230ed.hot-update.js.map
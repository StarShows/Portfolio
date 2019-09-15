webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: NewsFeed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeed", function() { return NewsFeed; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_CoolLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/CoolLayout */ "./comps/CoolLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/starshows/Desktop/portfolio/web/Portfolio-react/pages/index.js";





const cardStyle = {
  backgroundColor: "#711324",
  border: "solid 1px #e0e0e0",
  borderRadius: "4px",
  padding: "5px",
  color: '#ffffff'
};
const cardLayout = {
  display: "grid",
  gridGap: "10px 20px"
};
const cardLayoutInner = {
  cursor: "pointer"
};

const Index = props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_CoolLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "Batman TV Shows"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: cardLayout,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, props.shows.map(show => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: cardLayoutInner,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/newsblocks/[id]",
  as: "/newsblocks/".concat(show.id),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  key: show.id,
  style: cardStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/newsblocks/[id]",
  as: "/newsblocks/".concat(show.id),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: show.image.medium,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/newsblocks/[id]",
  as: "/newsblocks/".concat(show.id),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, show.name))))))));

function getPosts() {
  return [{
    id: 'avis-portfolio',
    title: 'Welcome to Avis react portfolio'
  }, {
    id: 'tech-stacks',
    title: 'Tech Stacks im good with'
  }, {
    id: 'previous-projects',
    title: 'Projects made by Avi Tannenbaum'
  }];
}

function NewsFeed() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_CoolLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4263681031",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Avi's NewsFeed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-4263681031",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, getPosts().map(news => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    key: news.id,
    className: "jsx-4263681031",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/newsblocks/[id]",
    as: "/newsblocks/".concat(news.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-4263681031",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, news.title))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4263681031",
    __self: this
  }, "h1.jsx-4263681031,a.jsx-4263681031{font-family:'Arial';}ul.jsx-4263681031{padding:0;}li.jsx-4263681031{list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFyc2hvd3MvRGVza3RvcC9wb3J0Zm9saW8vd2ViL1BvcnRmb2xpby1yZWFjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRVEsQUFHK0IsQUFJVixBQUlNLFVBSGxCLE1BSUEsSUFSQSIsImZpbGUiOiIvVXNlcnMvc3RhcnNob3dzL0Rlc2t0b3AvcG9ydGZvbGlvL3dlYi9Qb3J0Zm9saW8tcmVhY3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wcy9Db29sTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jb25zdCBjYXJkU3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogXCIjNzExMzI0XCIsXG4gIGJvcmRlcjogXCJzb2xpZCAxcHggI2UwZTBlMFwiLFxuICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gIHBhZGRpbmc6IFwiNXB4XCIsXG4gIGNvbG9yOiAnI2ZmZmZmZidcbn07XG5jb25zdCBjYXJkTGF5b3V0ID0ge1xuICBkaXNwbGF5OiBcImdyaWRcIixcbiAgZ3JpZEdhcDogXCIxMHB4IDIwcHhcIlxufTtcblxuY29uc3QgY2FyZExheW91dElubmVyID0ge1xuICBjdXJzb3I6IFwicG9pbnRlclwiXG59O1xuXG5cblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4gICAgPGRpdiBzdHlsZT17Y2FyZExheW91dH0+XG4gICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtjYXJkTGF5b3V0SW5uZXJ9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3c2Jsb2Nrcy9baWRdXCIgYXM9e2AvbmV3c2Jsb2Nrcy8ke3Nob3cuaWR9YH0+XG4gICAgICAgICAgICA8ZGl2IGtleT17c2hvdy5pZH0gc3R5bGU9e2NhcmRTdHlsZX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3c2Jsb2Nrcy9baWRdXCIgYXM9e2AvbmV3c2Jsb2Nrcy8ke3Nob3cuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Nob3cuaW1hZ2UubWVkaXVtfSAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3c2Jsb2Nrcy9baWRdXCIgYXM9e2AvbmV3c2Jsb2Nrcy8ke3Nob3cuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgcmV0dXJuIFtcbiAgICAgIHsgaWQ6ICdhdmlzLXBvcnRmb2xpbycsIHRpdGxlOiAnV2VsY29tZSB0byBBdmlzIHJlYWN0IHBvcnRmb2xpbyd9LFxuICAgICAgeyBpZDogJ3RlY2gtc3RhY2tzJywgdGl0bGU6ICdUZWNoIFN0YWNrcyBpbSBnb29kIHdpdGgnfSxcbiAgICAgIHsgaWQ6ICdwcmV2aW91cy1wcm9qZWN0cycsIHRpdGxlOiAnUHJvamVjdHMgbWFkZSBieSBBdmkgVGFubmVuYmF1bSd9XG4gIF07XG59XG5leHBvcnQgZnVuY3Rpb24gTmV3c0ZlZWQoKSB7XG4gIHJldHVybiAoXG48TGF5b3V0PlxuICA8aDE+QXZpJ3MgTmV3c0ZlZWQ8L2gxPlxuICA8dWw+XG4gICAge2dldFBvc3RzKCkubWFwKG5ld3MgPT4gKFxuICAgICAgPGxpIGtleT17bmV3cy5pZH0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3c2Jsb2Nrcy9baWRdXCIgYXM9e2AvbmV3c2Jsb2Nrcy8ke25ld3MuaWR9YH0+XG4gICAgICAgICAgPGE+e25ld3MudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICkpfVxuICA8L3VsPlxuICAgICAgey8qIFRoZSBuZXh0LmpzIHdheSBvZiBzdHlsaW5nICovfVxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICB7YCBoMSxcbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuPC9MYXlvdXQ+XG4gICk7XG59IFxuLy8gQWRkIGEgc3RhdGljIGFzeW5jIGZ1bmN0aW9uIHRvIGZldGNoIGRhdGEgZnJvbSB0dm1hemUgYW5kIHJldHVybiB0aGVtIGFzIHByb3BzLlxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW5cIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=/Users/starshows/Desktop/portfolio/web/Portfolio-react/pages/index.js */"));
} // Add a static async function to fetch data from tvmaze and return them as props.

Index.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  console.log("Show data fetched. Count: ".concat(data.length));
  return {
    shows: data.map(entry => entry.show)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.643d06311fd9d3403cf7.hot-update.js.map
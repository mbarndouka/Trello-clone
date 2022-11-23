"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./pages/constants/constant.js":
/*!*************************************!*\
  !*** ./pages/constants/constant.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"API_URL_\": () => (/* binding */ API_URL_)\n/* harmony export */ });\nconst API_URL = \"https://jsonplaceholder.typicode.com/users\";\nconst API_URL_ = \"https://jsonplaceholder.typicode.com/users/\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb25zdGFudHMvY29uc3RhbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxVQUFVLDZDQUE2QztBQUM3RCxNQUFNQyxXQUFXLDhDQUE4QyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZXItYXBwLy4vcGFnZXMvY29uc3RhbnRzL2NvbnN0YW50LmpzP2Q1ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiO1xuZXhwb3J0IGNvbnN0IEFQSV9VUkxfID0gXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvXCI7Il0sIm5hbWVzIjpbIkFQSV9VUkwiLCJBUElfVVJMXyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/constants/constant.js\n");

/***/ }),

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Details),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constant */ \"./pages/constants/constant.js\");\n\n\nasync function getStaticPaths() {\n    const res = await fetch(_constants_constant__WEBPACK_IMPORTED_MODULE_1__.API_URL);\n    const data = await res.json();\n    const paths = data.map((user)=>{\n        return {\n            params: {\n                id: user.id.toString()\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps(context) {\n    const id = context.params.id;\n    const res = await fetch(_constants_constant__WEBPACK_IMPORTED_MODULE_1__.API_URL_ + id);\n    const data = await res.json();\n    return {\n        props: {\n            user: data\n        }\n    };\n}\nfunction Details({ user  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Details\"\n            }, void 0, false, {\n                fileName: \"/home/ouragan/extra_project_text/pages/users/[id].js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: user.name\n            }, void 0, false, {\n                fileName: \"/home/ouragan/extra_project_text/pages/users/[id].js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: user.email\n            }, void 0, false, {\n                fileName: \"/home/ouragan/extra_project_text/pages/users/[id].js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: user.phone\n            }, void 0, false, {\n                fileName: \"/home/ouragan/extra_project_text/pages/users/[id].js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ouragan/extra_project_text/pages/users/[id].js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXlEO0FBRWxELGVBQWVFLGlCQUFnQjtJQUNsQyxNQUFNQyxNQUFNLE1BQU1DLE1BQU1KLHdEQUFPQTtJQUMvQixNQUFNSyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFFM0IsTUFBTUMsUUFBT0YsS0FBS0csR0FBRyxDQUFDQyxDQUFBQSxPQUFNO1FBQ3hCLE9BQU87WUFDSEMsUUFBUTtnQkFBRUMsSUFBSUYsS0FBS0UsRUFBRSxDQUFDQyxRQUFRO1lBQUc7UUFDckM7SUFDUjtJQUNJLE9BQU07UUFDRkw7UUFDQU0sVUFBVSxLQUFLO0lBQ25CO0FBQ0osQ0FBQztBQUNNLGVBQWVDLGVBQWVDLE9BQU8sRUFBQztJQUN6QyxNQUFNSixLQUFLSSxRQUFRTCxNQUFNLENBQUNDLEVBQUU7SUFDNUIsTUFBTVIsTUFBTSxNQUFNQyxNQUFNSCx5REFBUUEsR0FBR1U7SUFDbkMsTUFBTU4sT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBRTNCLE9BQU07UUFDRlUsT0FBTTtZQUFDUCxNQUFNSjtRQUFJO0lBQ3JCO0FBQ0osQ0FBQztBQUVjLFNBQVNZLFFBQVEsRUFBQ1IsS0FBSSxFQUFDLEVBQUU7SUFDdEMscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBSVosS0FBS2EsSUFBSTs7Ozs7OzBCQUNkLDhEQUFDRDswQkFBSVosS0FBS2MsS0FBSzs7Ozs7OzBCQUNmLDhEQUFDRjswQkFBSVosS0FBS2UsS0FBSzs7Ozs7Ozs7Ozs7O0FBR3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2VyLWFwcC8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfVVJMICwgQVBJX1VSTF99IGZyb20gXCIuLi9jb25zdGFudHMvY29uc3RhbnRcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChBUElfVVJMKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnN0IHBhdGhzPSBkYXRhLm1hcCh1c2VyPT57XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IHVzZXIuaWQudG9TdHJpbmcoKSB9XG4gICAgICAgIH1cbn0pXG4gICAgcmV0dXJue1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpe1xuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQVBJX1VSTF8gKyBpZCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm57XG4gICAgICAgIHByb3BzOnt1c2VyOiBkYXRhfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlscyh7dXNlcn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+RGV0YWlsczwvaDE+XG4gICAgICAgIDxoMz57dXNlci5uYW1lfTwvaDM+XG4gICAgICAgIDxoMz57dXNlci5lbWFpbH08L2gzPlxuICAgICAgICA8aDM+e3VzZXIucGhvbmV9PC9oMz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJBUElfVVJMXyIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInBhdGhzIiwibWFwIiwidXNlciIsInBhcmFtcyIsImlkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIiwiRGV0YWlscyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDMiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[id].js"));
module.exports = __webpack_exports__;

})();
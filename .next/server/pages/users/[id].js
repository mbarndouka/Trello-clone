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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Details),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constant */ \"./pages/constants/constant.js\");\n\n\nasync function getStaticPaths() {\n    const res = await fetch(_constants_constant__WEBPACK_IMPORTED_MODULE_1__.API_URL);\n    const data = await res.json();\n    const paths = data.map((user)=>{\n        return {\n            params: {\n                id: user.id.toString()\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps(context) {\n    const id = context.params.id;\n    const res = await fetch(_constants_constant__WEBPACK_IMPORTED_MODULE_1__.API_URL_ + id);\n    const data = await res.json();\n    return {\n        props: {\n            user: data\n        }\n    };\n}\nfunction Details({ user  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-sm rounded shadow-lg content-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Details\"\n            }, void 0, false, {\n                fileName: \"/home/ouragan/extra_project_text/pages/users/[id].js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-bold text-xl mb-2\",\n                children: [\n                    \"Name: \",\n                    user.name\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ouragan/extra_project_text/pages/users/[id].js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-gray-700 text-base\",\n                children: [\n                    \"Email: \",\n                    user.email\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ouragan/extra_project_text/pages/users/[id].js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-gray-700 text-base\",\n                children: [\n                    \"Phone Number: \",\n                    user.phone\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ouragan/extra_project_text/pages/users/[id].js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ouragan/extra_project_text/pages/users/[id].js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXlEO0FBRWxELGVBQWVFLGlCQUFnQjtJQUNsQyxNQUFNQyxNQUFNLE1BQU1DLE1BQU1KLHdEQUFPQTtJQUMvQixNQUFNSyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFFM0IsTUFBTUMsUUFBT0YsS0FBS0csR0FBRyxDQUFDQyxDQUFBQSxPQUFNO1FBQ3hCLE9BQU87WUFDSEMsUUFBUTtnQkFBRUMsSUFBSUYsS0FBS0UsRUFBRSxDQUFDQyxRQUFRO1lBQUc7UUFDckM7SUFDUjtJQUNJLE9BQU07UUFDRkw7UUFDQU0sVUFBVSxLQUFLO0lBQ25CO0FBQ0osQ0FBQztBQUNNLGVBQWVDLGVBQWVDLE9BQU8sRUFBQztJQUN6QyxNQUFNSixLQUFLSSxRQUFRTCxNQUFNLENBQUNDLEVBQUU7SUFDNUIsTUFBTVIsTUFBTSxNQUFNQyxNQUFNSCx5REFBUUEsR0FBR1U7SUFDbkMsTUFBTU4sT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBRTNCLE9BQU07UUFDRlUsT0FBTTtZQUFDUCxNQUFNSjtRQUFJO0lBQ3JCO0FBQ0osQ0FBQztBQUVjLFNBQVNZLFFBQVEsRUFBQ1IsS0FBSSxFQUFDLEVBQUU7SUFDdEMscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBR0YsV0FBVTs7b0JBQXlCO29CQUFPVixLQUFLYSxJQUFJOzs7Ozs7OzBCQUN2RCw4REFBQ0Q7Z0JBQUdGLFdBQVU7O29CQUEwQjtvQkFBUVYsS0FBS2MsS0FBSzs7Ozs7OzswQkFDMUQsOERBQUNGO2dCQUFHRixXQUFVOztvQkFBMEI7b0JBQWVWLEtBQUtlLEtBQUs7Ozs7Ozs7Ozs7Ozs7QUFHekUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZXItYXBwLy4vcGFnZXMvdXNlcnMvW2lkXS5qcz8xNzg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9VUkwgLCBBUElfVVJMX30gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25zdGFudFwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSV9VUkwpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc3QgcGF0aHM9IGRhdGEubWFwKHVzZXI9PntcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtczogeyBpZDogdXNlci5pZC50b1N0cmluZygpIH1cbiAgICAgICAgfVxufSlcbiAgICByZXR1cm57XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2VcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCl7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChBUElfVVJMXyArIGlkKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6e3VzZXI6IGRhdGF9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxzKHt1c2VyfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc20gcm91bmRlZCBzaGFkb3ctbGcgY29udGVudC1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGgxPkRldGFpbHM8L2gxPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbWItMlwiPk5hbWU6IHt1c2VyLm5hbWV9PC9oMz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlXCI+RW1haWw6IHt1c2VyLmVtYWlsfTwvaDM+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIHRleHQtYmFzZVwiPlBob25lIE51bWJlcjoge3VzZXIucGhvbmV9PC9oMz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJBUElfVVJMXyIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInBhdGhzIiwibWFwIiwidXNlciIsInBhcmFtcyIsImlkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIiwiRGV0YWlscyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDMiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

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
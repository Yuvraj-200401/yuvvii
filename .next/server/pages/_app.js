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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./global-context.js":
/*!***************************!*\
  !*** ./global-context.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalProvider\": () => (/* binding */ GlobalProvider),\n/* harmony export */   \"useGlobalContext\": () => (/* binding */ useGlobalContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst GlobalProvider = ({ initialLocales , children  })=>{\n    const localeValue = (0,next_intl__WEBPACK_IMPORTED_MODULE_2__.useLocale)();\n    const { 0: locales , 1: setLocales  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialLocales ?? [\n        {\n            \"name\": \"English\",\n            \"short\": \"en\"\n        }\n    ]);\n    const { 0: locale , 1: setLocale  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        \"name\": \"English\",\n        \"short\": \"en\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!locales) {\n            return;\n        }\n        const currentLangValue = locales.find((el)=>el.short === localeValue);\n        setLocale(currentLangValue);\n    }, [\n        locales\n    ]);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return {\n            locales,\n            locale,\n            setLocales,\n            setLocale\n        };\n    }, [\n        locales,\n        locale\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\KANAN\\\\global-context.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\nconst useGlobalContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n    if (!context) {\n        throw new Error(\"useGlobalContext must be used within a GlobalProvider\");\n    }\n    return {\n        ...context\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nbG9iYWwtY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBQStFO0FBQ3pDO0FBRXRDLE1BQU1NLGFBQWEsaUJBQUdOLG9EQUFhLENBQUMsSUFBSSxDQUFDO0FBRWxDLE1BQU1PLGNBQWMsR0FBRyxDQUFDLEVBQUVDLGNBQWMsR0FBRUMsUUFBUSxHQUFFLEdBQUs7SUFDOUQsTUFBTUMsV0FBVyxHQUFHTCxvREFBUyxFQUFFO0lBQy9CLE1BQU0sS0FBQ00sT0FBTyxNQUFFQyxVQUFVLE1BQUlULCtDQUFRLENBQUNLLGNBQWMsSUFBSTtRQUFDO1lBQUMsTUFBTSxFQUFDLFNBQVM7WUFBQyxPQUFPLEVBQUMsSUFBSTtTQUFDO0tBQUMsQ0FBQztJQUMzRixNQUFNLEtBQUNLLE1BQU0sTUFBRUMsU0FBUyxNQUFJWCwrQ0FBUSxDQUFDO1FBQUMsTUFBTSxFQUFDLFNBQVM7UUFBQyxPQUFPLEVBQUMsSUFBSTtLQUFDLENBQUM7SUFFckVDLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ08sT0FBTyxFQUFFO1lBQ1osT0FBTTtRQUNSLENBQUM7UUFFRCxNQUFNSSxnQkFBZ0IsR0FBR0osT0FBTyxDQUFDSyxJQUFJLENBQUMsQ0FBQ0MsRUFBRSxHQUFLQSxFQUFFLENBQUNDLEtBQUssS0FBS1IsV0FBVyxDQUFDO1FBQ3ZFSSxTQUFTLENBQUNDLGdCQUFnQixDQUFDO0lBQzdCLENBQUMsRUFBRTtRQUFDSixPQUFPO0tBQUMsQ0FBQztJQUViLE1BQU1RLEtBQUssR0FBR2xCLDhDQUFPLENBQUMsSUFBTTtRQUMxQixPQUFPO1lBQ0xVLE9BQU87WUFDUEUsTUFBTTtZQUNORCxVQUFVO1lBQ1ZFLFNBQVM7U0FDVjtJQUNILENBQUMsRUFBRTtRQUFDSCxPQUFPO1FBQUVFLE1BQU07S0FBQyxDQUFDO0lBRXJCLHFCQUNFLDhEQUFDUCxhQUFhLENBQUNjLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUNqQ1YsUUFBUTs7Ozs7aUJBQ2MsQ0FDMUI7QUFDSCxDQUFDO0FBRU0sTUFBTVksZ0JBQWdCLEdBQUcsSUFBTTtJQUNwQyxNQUFNQyxPQUFPLEdBQUdwQixpREFBVSxDQUFDSSxhQUFhLENBQUM7SUFDekMsSUFBSSxDQUFDZ0IsT0FBTyxFQUFFO1FBQ1osTUFBTSxJQUFJQyxLQUFLLENBQUMsdURBQXVELENBQUM7SUFDMUUsQ0FBQztJQUVELE9BQU87UUFDTCxHQUFHRCxPQUFPO0tBQ1g7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW50aXRsZWQvLi9nbG9iYWwtY29udGV4dC5qcz8zZDM2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlTWVtbywgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSBcIm5leHQtaW50bFwiO1xuXG5jb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxuXG5leHBvcnQgY29uc3QgR2xvYmFsUHJvdmlkZXIgPSAoeyBpbml0aWFsTG9jYWxlcywgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBsb2NhbGVWYWx1ZSA9IHVzZUxvY2FsZSgpXG4gIGNvbnN0IFtsb2NhbGVzLCBzZXRMb2NhbGVzXSA9IHVzZVN0YXRlKGluaXRpYWxMb2NhbGVzID8/IFt7XCJuYW1lXCI6XCJFbmdsaXNoXCIsXCJzaG9ydFwiOlwiZW5cIn1dKVxuICBjb25zdCBbbG9jYWxlLCBzZXRMb2NhbGVdID0gdXNlU3RhdGUoe1wibmFtZVwiOlwiRW5nbGlzaFwiLFwic2hvcnRcIjpcImVuXCJ9KVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxvY2FsZXMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRMYW5nVmFsdWUgPSBsb2NhbGVzLmZpbmQoKGVsKSA9PiBlbC5zaG9ydCA9PT0gbG9jYWxlVmFsdWUpXG4gICAgc2V0TG9jYWxlKGN1cnJlbnRMYW5nVmFsdWUpXG4gIH0sIFtsb2NhbGVzXSlcblxuICBjb25zdCB2YWx1ZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBsb2NhbGVzLFxuICAgICAgbG9jYWxlLFxuICAgICAgc2V0TG9jYWxlcyxcbiAgICAgIHNldExvY2FsZVxuICAgIH1cbiAgfSwgW2xvY2FsZXMsIGxvY2FsZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlR2xvYmFsQ29udGV4dCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dClcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VHbG9iYWxDb250ZXh0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBHbG9iYWxQcm92aWRlcicpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLmNvbnRleHRcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTG9jYWxlIiwiR2xvYmFsQ29udGV4dCIsIkdsb2JhbFByb3ZpZGVyIiwiaW5pdGlhbExvY2FsZXMiLCJjaGlsZHJlbiIsImxvY2FsZVZhbHVlIiwibG9jYWxlcyIsInNldExvY2FsZXMiLCJsb2NhbGUiLCJzZXRMb2NhbGUiLCJjdXJyZW50TGFuZ1ZhbHVlIiwiZmluZCIsImVsIiwic2hvcnQiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlR2xvYmFsQ29udGV4dCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./global-context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./pages/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _global_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-context */ \"./global-context.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_intl__WEBPACK_IMPORTED_MODULE_3__.NextIntlProvider, {\n        messages: pageProps?.messages,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_context__WEBPACK_IMPORTED_MODULE_2__.GlobalProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\KANAN\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\KANAN\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\KANAN\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBb0I7QUFFOEI7QUFDTjtBQUM3QixTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN0RCxxQkFDRSw4REFBQ0gsdURBQWdCO1FBQUNJLFFBQVEsRUFBRUQsU0FBUyxFQUFFQyxRQUFRO2tCQUM3Qyw0RUFBQ0wsMkRBQWM7c0JBQ2IsNEVBQUNHLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNiOzs7OztZQUNBLENBQ3BCO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VudGl0bGVkLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmltcG9ydCB7IEdsb2JhbFByb3ZpZGVyIH0gZnJvbSAnLi4vZ2xvYmFsLWNvbnRleHQnXG5pbXBvcnQgeyBOZXh0SW50bFByb3ZpZGVyIH0gZnJvbSAnbmV4dC1pbnRsJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPE5leHRJbnRsUHJvdmlkZXIgbWVzc2FnZXM9e3BhZ2VQcm9wcz8ubWVzc2FnZXN9PlxuICAgICAgPEdsb2JhbFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0dsb2JhbFByb3ZpZGVyPlxuICAgIDwvTmV4dEludGxQcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkdsb2JhbFByb3ZpZGVyIiwiTmV4dEludGxQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWVzc2FnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/style.css":
/*!*************************!*\
  !*** ./pages/style.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "next-intl":
/*!****************************!*\
  !*** external "next-intl" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
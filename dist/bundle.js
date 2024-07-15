/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/config.js":
/*!****************************!*\
  !*** ./src/data/config.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HEIGHT_INCH: () => (/* binding */ HEIGHT_INCH),\n/* harmony export */   MARGIN: () => (/* binding */ MARGIN),\n/* harmony export */   MAX_DIV: () => (/* binding */ MAX_DIV),\n/* harmony export */   MAX_SIZE_INCH: () => (/* binding */ MAX_SIZE_INCH),\n/* harmony export */   MIN_DIV: () => (/* binding */ MIN_DIV),\n/* harmony export */   MIN_INCREMENT_INCH: () => (/* binding */ MIN_INCREMENT_INCH),\n/* harmony export */   MIN_SIZE_INCH: () => (/* binding */ MIN_SIZE_INCH),\n/* harmony export */   SCREEN_MARGIN: () => (/* binding */ SCREEN_MARGIN),\n/* harmony export */   WIDTH_INCH: () => (/* binding */ WIDTH_INCH)\n/* harmony export */ });\nconst WIDTH_INCH = 8.5\nconst HEIGHT_INCH = 11\nconst MIN_DIV = 20\nconst MAX_DIV = 35\nconst MIN_SIZE_INCH = 0.125 // TODO\nconst MAX_SIZE_INCH = 5\nconst MIN_INCREMENT_INCH = 0.125\nconst MARGIN = 0.25\n\n\nconst SCREEN_MARGIN = 50\n\n//# sourceURL=webpack://p5_template/./src/data/config.js?");

/***/ }),

/***/ "./src/data/constants.js":
/*!*******************************!*\
  !*** ./src/data/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ASPECT_RATIO: () => (/* binding */ ASPECT_RATIO),\n/* harmony export */   INNER_ASPECT_RATIO: () => (/* binding */ INNER_ASPECT_RATIO),\n/* harmony export */   MARGINS: () => (/* binding */ MARGINS)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/data/config.js\");\n\n\nconst MARGINS = _config__WEBPACK_IMPORTED_MODULE_0__.MARGIN * 2\nconst ASPECT_RATIO = _config__WEBPACK_IMPORTED_MODULE_0__.WIDTH_INCH / _config__WEBPACK_IMPORTED_MODULE_0__.HEIGHT_INCH\nconst INNER_ASPECT_RATIO = (_config__WEBPACK_IMPORTED_MODULE_0__.HEIGHT_INCH - MARGINS) / (_config__WEBPACK_IMPORTED_MODULE_0__.WIDTH_INCH - MARGINS) \n\n//# sourceURL=webpack://p5_template/./src/data/constants.js?");

/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/config */ \"./src/data/config.js\");\n/* harmony import */ var _utils_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/rect */ \"./src/utils/rect.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.js\");\n\n\n\n\nclass Grid extends _utils_rect__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(config = {}) {\n    const baseColCount = Math.floor(_data_config__WEBPACK_IMPORTED_MODULE_0__.WIDTH_INCH / _data_config__WEBPACK_IMPORTED_MODULE_0__.MIN_INCREMENT_INCH) - 1\n    const baseRowCount = Math.floor(_data_config__WEBPACK_IMPORTED_MODULE_0__.HEIGHT_INCH / _data_config__WEBPACK_IMPORTED_MODULE_0__.MIN_INCREMENT_INCH) - 1\n\n    super({\n      w: baseColCount + 1,\n      h: baseRowCount + 1\n    })\n    this.cols = []\n    this.rows = []\n    this.baseColCount = baseColCount\n    this.baseRowCount = baseRowCount\n\n    this.create(config)\n  }\n\n  create(config) {\n    this.cols = this.getDivs(this.baseColCount)\n    this.rows = this.getDivs(this.baseRowCount)\n    return this.transform(config)\n  }\n\n  transform({\n    x = this.x,\n    y = this.y,\n    w = this.w,\n    h = this.h\n  }) {\n    const oldX1 = this.x1\n    const oldX2 = this.x2\n    const oldY1 = this.y1\n    const oldY2 = this.y2\n\n    this.x = x\n    this.y = y\n    this.w = w\n    this.h = h\n\n    const cols = this.cols =\n      this.cols.map(col => (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.map)(col, oldX1, oldX2, this.x1, this.x2))\n    const rows = this.rows =\n      this.rows.map(row => (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.map)(row, oldY1, oldY2, this.y1, this.y2))\n    return { cols, rows }\n  }\n\n  getDivs(baseGridCount) {\n    const baseGrid = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.quickArray)(baseGridCount)\n    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.quickArray)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.randInt)(_data_config__WEBPACK_IMPORTED_MODULE_0__.MIN_DIV - 1, _data_config__WEBPACK_IMPORTED_MODULE_0__.MAX_DIV), () => {\n      const index = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.randInt)(baseGrid.length)\n      const colIndex = baseGrid[index]\n      baseGrid.splice(index, 1)\n      return colIndex + 1\n    }).sort((a, b) => a - b)\n  }\n\n  inchToPx(inch) {\n    return inch * this.w / _data_config__WEBPACK_IMPORTED_MODULE_0__.WIDTH_INCH\n  }\n\n  get colW() {\n    return this.w / this.cols.length\n  }\n\n  get rowH() {\n    return this.h / this.rows.length\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);\n\n//# sourceURL=webpack://p5_template/./src/grid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/config */ \"./src/data/config.js\");\n/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/constants */ \"./src/data/constants.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ \"./src/grid.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.js\");\n\n\n\n\n\nwindow.setup = () => {\n\tcreateCanvas((0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.vw)(), (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.vh)())\n\tbackground(255)\n\tconst { w, h } = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cover)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.vw)() - _data_config__WEBPACK_IMPORTED_MODULE_0__.SCREEN_MARGIN * 2, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.vh)() - _data_config__WEBPACK_IMPORTED_MODULE_0__.SCREEN_MARGIN * 2, _data_constants__WEBPACK_IMPORTED_MODULE_1__.INNER_ASPECT_RATIO)\n\n\tconst grid = new _grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({ x: ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.vw)() - w) / 2, y: ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.vh)() - h) / 2, w, h })\n\n\twindow.stroke(0, 0, 0)\n\tgrid.rows.forEach(row => window.line(grid.x1, row, grid.x2, row))\n\tgrid.cols.forEach(col => window.line(col, grid.y1, col, grid.y2))\n\n\twindow.stroke(255, 0, 0)\n\twindow.noFill()\n\twindow.rect(...grid.topLeft, ...grid.size)\n}\n\nwindow.draw = () => {\n\n}\n\n//# sourceURL=webpack://p5_template/./src/index.js?");

/***/ }),

/***/ "./src/utils/rect.js":
/*!***************************!*\
  !*** ./src/utils/rect.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nclass Rect {\n  constructor({ x = 0, y = 0, w = 0, h = 0 }) {\n    this._x = x\n    this._y = y\n    this._w = w\n    this._h = h\n  }\n\n  get x() {\n    return this._x\n  }\n\n  set x(newX) {\n    this._x = newX\n  }\n\n  get y() {\n    return this._y\n  }\n\n  set y(newY) {\n    this._y = newY\n  }\n\n  get w() {\n    return this._w\n  }\n\n  set w(newW) {\n    this._w = newW\n  }\n\n  get h() {\n    return this._h\n  }\n\n  set h(newH) {\n    this._h = newH\n  }\n\n  get x1() {\n    return this.x\n  }\n\n  set x1(newX1) {\n    this.x = newX1\n  }\n\n  get y1() {\n    return this.y\n  }\n\n  set y1(newY1) {\n    this.y = newY1\n  }\n\n  get x2() {\n    return this.x1 + this.w\n  }\n\n  set x2(newX2) {\n    this.x = newX2 - this.w\n  }\n\n  get y2() {\n    return this.y1 + this.h\n  }\n\n  set y2(newY2) {\n    this.y = newY2 - this.h\n  }\n\n  get cx() {\n    return (this.x1 + this.x2) / 2\n  }\n\n  set cx(newCx) {\n    this.x = newCx - this.w / 2\n  }\n\n  get cy() {\n    return (this.y1 + this.y2) / 2\n  }\n\n  set cy(newCy) {\n    this.y = newCy - this.h / 2\n  }\n\n  get topLeft() {\n    return [this.x1, this.y1]\n  }\n\n  set topLeft([newX1, newY1]) {\n    this.x1 = newX1\n    this.y1 = newY1\n  }\n\n  get topRight() {\n    return [this.x2, this.y1]\n  }\n\n  set topRight([newX2, newY1]) {\n    this.x2 = newX2\n    this.y1 = newY1\n  }\n\n  get botLeft() {\n    return [this.x1, this.y2]\n  }\n\n  set botLeft([newX1, newY2]) {\n    this.x1 = newX1\n    this.y2 = newY2\n  }\n\n  get botRight() {\n    return [this.x2, this.y2]\n  }\n\n  set botRight([newX2, newY2]) {\n    this.x2 = newX2\n    this.y2 = newY2\n  }\n\n  get sides() {\n    return [\n      this.x1,\n      this.y1,\n      this.x2,\n      this.y2,\n    ]\n  }\n\n  set sides([newX1, newY1, newX2, newY2]) {\n    this.x1 = newX1\n    this.y1 = newY1\n    this.w = newX2 - newX1\n    this.h = newY2 - newY1\n  }\n\n  get size() {\n    return [this.w, this.h]\n  }\n\n  set size([newW, newH]) {\n    this.w = newW\n    this.h = newH\n  }\n\n  get center() {\n    return [this.cx, this.cy]\n  }\n\n  set center([newCx, newCy]) {\n    this.cx = newCx\n    this.cy = newCy\n  }\n\n  get corners() {\n    return [\n      this.topLeft,\n      this.topRight,\n      this.botRight,\n      this.botLeft\n    ]\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rect);\n\n//# sourceURL=webpack://p5_template/./src/utils/rect.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrayify: () => (/* binding */ arrayify),\n/* harmony export */   cover: () => (/* binding */ cover),\n/* harmony export */   map: () => (/* binding */ map),\n/* harmony export */   quickArray: () => (/* binding */ quickArray),\n/* harmony export */   randInt: () => (/* binding */ randInt),\n/* harmony export */   vh: () => (/* binding */ vh),\n/* harmony export */   vw: () => (/* binding */ vw)\n/* harmony export */ });\nconst randInt = (min, max) => {\n  if (max === undefined) {\n    max = min\n    min = 0\n  }\n  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))\n}\n\nconst quickArray = (length, callback = i => i) => Array(length).fill(0).map((_, i) => callback(i))\nconst arrayify = possibleArray => Array.isArray(possibleArray) ? possibleArray : [possibleArray]\n\nconst map = (value, inMin, inMax, outMin = 0, outMax = 1) =>\n  (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin\n\nconst cover = (w, h, wToH) => w / h >= wToH ?\n  {\n    w: h * wToH,\n    h,\n  } : {\n    w,\n    h: w / wToH\n  }\n\nconst vw = (percentage = 100) => percentage * window.innerWidth / 100\nconst vh = (percentage = 100) => percentage * window.innerHeight / 100\n\n//# sourceURL=webpack://p5_template/./src/utils/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
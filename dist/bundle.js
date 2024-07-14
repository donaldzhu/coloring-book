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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/config */ \"./src/data/config.js\");\n/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/constants */ \"./src/data/constants.js\");\n/* harmony import */ var _utils_rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/rect */ \"./src/utils/rect.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.js\");\n\n\n\n\n\nclass Grid extends _utils_rect__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor() {\n    const { w, h } = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cover)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.vw)(), (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.vh)(), _data_constants__WEBPACK_IMPORTED_MODULE_1__.INNER_ASPECT_RATIO)\n    super({\n      w,\n      h,\n    })\n    this.cols = []\n    this.rows = []\n  }\n\n  create() {\n    const cols = this.cols = this.getRandDiv(this.baseColCount)\n    const rows = this.rows = this.getRandDiv(this.baseRowCount)\n    return { cols, rows }\n  }\n\n  transform({\n    x = this.x,\n    y = this.y,\n    w = this.w,\n    h = this.h\n  }) {\n    const dx = x - this.x\n    const dy = y - this.y\n    const wFactor = w / this.w\n    const hFactor = h / this.h\n    // need setters\n    this.x = x\n    this.y = y\n    this.w = w\n    this.h = h\n    const cols = this.cols = this.cols.map(col => col) // get transform matrix order\n  }\n\n  getRandDiv(baseGridCount) {\n    const baseGrid = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.quickArray)(baseGridCount)\n    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.quickArray)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.randInt)(_data_config__WEBPACK_IMPORTED_MODULE_0__.MIN_DIV, _data_config__WEBPACK_IMPORTED_MODULE_0__.MAX_DIV + 1), () => {\n      const index = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.randInt)(baseGrid.length)\n      const colIndex = baseGrid[index]\n      baseGrid.splice(index, 1)\n      return colIndex\n    })\n      .sort((a, b) => a - b)\n      .map(coor => coor * this.inchToPx(_data_config__WEBPACK_IMPORTED_MODULE_0__.MIN_INCREMENT_INCH))\n  }\n\n  inchToPx(inch) {\n    return inch * this.w / _data_config__WEBPACK_IMPORTED_MODULE_0__.WIDTH_INCH\n  }\n\n\n  get baseColCount() {\n    return Math.floor(this.w / this.inchToPx(_data_config__WEBPACK_IMPORTED_MODULE_0__.MIN_INCREMENT_INCH))\n  }\n\n  get baseRowCount() {\n    return Math.floor(this.h / this.inchToPx(_data_config__WEBPACK_IMPORTED_MODULE_0__.MIN_INCREMENT_INCH))\n  }\n\n  get colW() {\n    return this.w / this.cols.length\n  }\n\n  get rowH() {\n    return this.h / this.rows.length\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);\n\n//# sourceURL=webpack://p5_template/./src/grid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/config */ \"./src/data/config.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ \"./src/grid.js\");\n\n\n\nwindow.setup = () => {\n  createCanvas(window.innerWidth, window.innerHeight)\n  background(255)\n  const grid = new _grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n  grid.create()\n  console.log(grid)\n\n  // const yBounds = [grid.y1, grid.y2]\n  // const xBounds = [grid.x1, grid.x2]\n\n  // window.stroke(0, 0, 0)\n  // grid.rows.forEach(row => {\n  //   const y = row * grid.h / grid.baseRowCount + SCREEN_MARGIN\n  //   window.line(xBounds[0], y, xBounds[1], y)\n  // })\n\n\n  // grid.cols.forEach(col => {\n  //   const x = col * grid.w / grid.baseColCount + SCREEN_MARGIN\n  //   window.line(x, yBounds[0], x, yBounds[1])\n  // })\n\n\n  // window.stroke(255, 0, 0)\n  // window.line(xBounds[0], yBounds[0], xBounds[1], yBounds[0])\n  // window.line(xBounds[0], yBounds[1], xBounds[1], yBounds[1])\n  // window.line(xBounds[0], yBounds[0], xBounds[0], yBounds[1])\n  // window.line(xBounds[1], yBounds[0], xBounds[1], yBounds[1])\n}\n\nwindow.draw = () => {\n\n}\n\n//# sourceURL=webpack://p5_template/./src/index.js?");

/***/ }),

/***/ "./src/utils/rect.js":
/*!***************************!*\
  !*** ./src/utils/rect.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils/utils.js\");\n\n\n\nclass Rect {\n  constructor({ x = 0, y = 0, w = 0, h = 0, padding = [0, 0] }) {\n    const paddingArray = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.arrayify)(padding)\n    this._x = x\n    this._y = y\n    this._w = w\n    this._h = h\n    this.padding = {\n      x: paddingArray[0],\n      y: paddingArray[1] ?? paddingArray[0]\n    }\n  }\n\n  get x() {\n    return this._x - this.padding.x\n  }\n\n  get y() {\n    return this._y - this.padding.y\n  }\n\n  get w() {\n    return this._w + this.padding.x * 2\n  }\n\n  get h() {\n    return this._h + this.padding.y * 2\n  }\n\n  get x1() {\n    return this.x\n  }\n\n  get y1() {\n    return this.y\n  }\n\n  get x2() {\n    return this.x1 + this.w\n  }\n\n  get y2() {\n    return this.y1 + this.h\n  }\n\n  get cx() {\n    return (this.x1 + this.x2) / 2\n  }\n\n  get cy() {\n    return (this.y1 + this.y2) / 2\n  }\n\n  get topLeft() {\n    return [this.x1, this.y1]\n  }\n\n  get topRight() {\n    return [this.x2, this.y1]\n  }\n\n  get botLeft() {\n    return [this.x1, this.y2]\n  }\n\n  get botRight() {\n    return [this.x2, this.y2]\n  }\n\n  get sides() {\n    return [\n      this.x1,\n      this.y1,\n      this.x2,\n      this.y2,\n    ]\n  }\n\n  get size() {\n    return [this.w, this.h]\n  }\n\n  get center() {\n    return [this.cx, this.cy]\n  }\n\n  get corners() {\n    return [\n      this.topLeft,\n      this.topRight,\n      this.botRight,\n      this.botLeft\n    ]\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rect);\n\n//# sourceURL=webpack://p5_template/./src/utils/rect.js?");

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
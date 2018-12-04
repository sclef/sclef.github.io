(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ResponseError"],{

/***/ "./src/js/core/ResponseError.js":
/*!**************************************!*\
  !*** ./src/js/core/ResponseError.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ResponseError extends Error{
    static getInstance(message) {
        if (!ResponseError.instance) {
            ResponseError.instance = new ResponseError(message);
        }
        ResponseError.instance.message="This is my Error: ".concat(ResponseError.instance.message);
        return ResponseError.instance;
    }

}

//ResponseError.prototype = Object.create(Error.prototype);

/* harmony default export */ __webpack_exports__["default"] = (ResponseError);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9SZXNwb25zZUVycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRWUsNEVBQWEsRSIsImZpbGUiOiJSZXNwb25zZUVycm9yLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFJlc3BvbnNlRXJyb3IgZXh0ZW5kcyBFcnJvcntcclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKCFSZXNwb25zZUVycm9yLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFJlc3BvbnNlRXJyb3IuaW5zdGFuY2UgPSBuZXcgUmVzcG9uc2VFcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUmVzcG9uc2VFcnJvci5pbnN0YW5jZS5tZXNzYWdlPVwiVGhpcyBpcyBteSBFcnJvcjogXCIuY29uY2F0KFJlc3BvbnNlRXJyb3IuaW5zdGFuY2UubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlRXJyb3IuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL1Jlc3BvbnNlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2VFcnJvcjsiXSwic291cmNlUm9vdCI6IiJ9
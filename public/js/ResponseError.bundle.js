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

/* harmony default export */ __webpack_exports__["default"] = (ResponseError);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9SZXNwb25zZUVycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSw0RUFBYSxFIiwiZmlsZSI6IlJlc3BvbnNlRXJyb3IuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUmVzcG9uc2VFcnJvciBleHRlbmRzIEVycm9ye1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoIVJlc3BvbnNlRXJyb3IuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUmVzcG9uc2VFcnJvci5pbnN0YW5jZSA9IG5ldyBSZXNwb25zZUVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBSZXNwb25zZUVycm9yLmluc3RhbmNlLm1lc3NhZ2U9XCJUaGlzIGlzIG15IEVycm9yOiBcIi5jb25jYXQoUmVzcG9uc2VFcnJvci5pbnN0YW5jZS5tZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gUmVzcG9uc2VFcnJvci5pbnN0YW5jZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2VFcnJvcjsiXSwic291cmNlUm9vdCI6IiJ9
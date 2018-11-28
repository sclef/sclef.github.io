"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("whatwg-fetch");

require("es6-promise-promise");

require("@babel/polyfill");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: "sendRequestForJson",
    value: function () {
      var _sendRequestForJson = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(urls, callbackFunction) {
        var promises;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = urls;
                _context.next = 3;
                return this.asyncFetch;

              case 3:
                _context.t1 = _context.sent;
                _context.next = 6;
                return _context.t0.map.call(_context.t0, _context.t1);

              case 6:
                promises = _context.sent;
                Promise.all(promises).then(callbackFunction).catch(function (error) {
                  return console.error(error);
                }).finally(function () {
                  return console.log("request was sent");
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function sendRequestForJson(_x, _x2) {
        return _sendRequestForJson.apply(this, arguments);
      };
    }()
  }, {
    key: "asyncFetch",
    value: function () {
      var _asyncFetch = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(url) {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(url);

              case 2:
                response = _context2.sent;
                return _context2.abrupt("return", response.json());

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function asyncFetch(_x3) {
        return _asyncFetch.apply(this, arguments);
      };
    }()
  }]);

  return Utils;
}();

var _default = Utils;
exports.default = _default;
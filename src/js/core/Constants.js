"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Constants = function Constants() {
  _classCallCheck(this, Constants);
};

_defineProperty(Constants, "ApiKey", "e03d718829c24339b5ea62712a181aae");

_defineProperty(Constants, "ArticlesUrl", "https://newsapi.org/v1/articles");

_defineProperty(Constants, "SourcesUrl", "https://newsapi.org/v1/sources");

_defineProperty(Constants, "NumberOfNews", 10);

var _default = Constants;
exports.default = _default;
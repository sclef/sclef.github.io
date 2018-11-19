"use strict";

var _NewsRetriever = _interopRequireDefault(require("./NewsRetriever.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newsRet = new _NewsRetriever.default();
newsRet.getAllSouces();
document.getElementById('apply-filters').addEventListener("click", function () {
  newsRet.applyFilters();
  console.log('asd');
});
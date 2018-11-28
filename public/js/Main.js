"use strict";

var _ArticlesService = _interopRequireDefault(require("./services/ArticlesService.js"));

var _SourcesService = _interopRequireDefault(require("./services/SourcesService.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sources = new _SourcesService.default();
sources.getAllSouces();
document.getElementById('apply-filters').addEventListener("click", function () {
  var aticles = new _ArticlesService.default();
  aticles.applyFilters();
});
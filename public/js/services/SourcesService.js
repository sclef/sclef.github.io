"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utils = _interopRequireDefault(require("../core/Utils.js"));

var _Constants = _interopRequireDefault(require("../core/Constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SourcesService =
/*#__PURE__*/
function () {
  function SourcesService() {
    _classCallCheck(this, SourcesService);
  }

  _createClass(SourcesService, [{
    key: "getAllSouces",
    value: function getAllSouces() {
      var utils = new _Utils.default();
      utils.sendRequestForJson([_Constants.default.SourcesUrl], this.fillMenu);
    }
  }, {
    key: "fillMenu",
    value: function fillMenu(resp) {
      var uniqueCategories = function uniqueCategories(item, index, self) {
        return self.indexOf(item) === index;
      };

      var categories = resp[0].sources.map(function (a) {
        return a.category;
      }).filter(uniqueCategories);

      var _loop = function _loop(i) {
        var cat = categories[i];
        var catResources = resp[0].sources.filter(function (r) {
          return r.category === cat;
        });
        var categoryOptions = '';

        for (var j = 0; j < catResources.length; j++) {
          categoryOptions = categoryOptions.concat("<div><input class='source-checkbox' type='checkbox' id='".concat(catResources[j].id, "'/><label for='").concat(catResources[j].id, "'>").concat(catResources[j].name, "</label></div>"));
        }

        var categoryTemplate = document.createElement("div");
        categoryTemplate.id = "".concat(cat, "-select");
        categoryTemplate.className = 'category-selection';
        categoryTemplate.innerHTML = categoryOptions; //TODO: rewrite to UL
        //document.getElementById("table-headers").appendChild(document.createElement("td")).append(cat.toUpperCase());

        document.getElementById("table-options").appendChild(document.createElement("td")).appendChild(categoryTemplate);
      };

      for (var i = 0; i < categories.length; i++) {
        _loop(i);
      }
    }
  }]);

  return SourcesService;
}();

var _default = SourcesService;
exports.default = _default;
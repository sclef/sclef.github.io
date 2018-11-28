"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("url-polyfill");

var _Utils = _interopRequireDefault(require("../core/Utils.js"));

var _Constants = _interopRequireDefault(require("../core/Constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ArticlesService =
/*#__PURE__*/
function () {
  function ArticlesService() {
    _classCallCheck(this, ArticlesService);
  }

  _createClass(ArticlesService, [{
    key: "getNews",
    value: function getNews(source) {
      var urls = source.map(function (s) {
        var SourceUrl = new URL(_Constants.default.ArticlesUrl);
        var params = {
          source: s,
          apiKey: _Constants.default.ApiKey
        };
        Object.keys(params).forEach(function (key) {
          return SourceUrl.searchParams.append(key, params[key]);
        });
        return SourceUrl;
      });
      var utils = new _Utils.default();
      utils.sendRequestForJson(urls, this.showNews);
    }
  }, {
    key: "showNews",
    value: function showNews(data) {
      var newsContainer = document.getElementById("news-container");
      newsContainer.innerHTML = '';
      var articles = [];

      for (var i = 0; i < data.length; i++) {
        var _articles;

        (_articles = articles).push.apply(_articles, _toConsumableArray(data[i].articles));
      }

      articles = articles.sort(function (x, y) {
        return Date.parse(y.publishedAt) - Date.parse(x.publishedAt);
      });

      for (var _i = 0; _i < _Constants.default.NumberOfNews; _i++) {
        if (!articles[_i]) {
          return;
        }

        var art = articles[_i];
        var articleTemplate = document.createElement("div");
        var published = art.publishedAt ? "Published: ".concat(art.publishedAt.substr(0, 10), ". ") : "";
        var artDesc = art.description ? art.description : "";
        var artImg = '';
        var pat = /(?<=http)s?:\/\//i;

        if (pat.test(art.urlToImage)) {
          artImg = "<img src='".concat(art.urlToImage, "'/></a>");
        } else {
          artImg = art.urlToImage ? "<img src='".concat(art.url.toString().concat(art.urlToImage), "'/></a>") : 'See more...';
        }

        articleTemplate.innerHTML = "<div class='article'>\n                <div class='article-header'><h2>".concat(art.title, "</h2></div>\n                <div class='article-body'> <a href='").concat(art.url, "' target='_blank'>").concat(artImg, "</a> ").concat(artDesc, "</div>\n                <div class='article-footer'> \n                    ").concat(published, "\n                    <a href='https://newsapi.org' target='_blank'>Powered by NewsAPI.org</a>\n                </div>\n            </div>");
        newsContainer.appendChild(articleTemplate);
      }
    }
  }, {
    key: "applyFilters",
    value: function applyFilters() {
      var sourcesIds = Array.prototype.slice.call(document.getElementsByClassName("source-checkbox"), 0) //convert to array
      .filter(function (c) {
        return c.checked;
      }).map(function (c) {
        return c.id;
      });
      this.getNews(sourcesIds);
    }
  }]);

  return ArticlesService;
}();

var _default = ArticlesService;
exports.default = _default;
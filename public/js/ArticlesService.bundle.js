(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ArticlesService"],{

/***/ "./src/js/services/ArticlesService.js":
/*!********************************************!*\
  !*** ./src/js/services/ArticlesService.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-polyfill */ "./node_modules/url-polyfill/url-polyfill.js");
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Utils.js */ "./src/js/core/Utils.js");
/* harmony import */ var _core_Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Constants.js */ "./src/js/core/Constants.js");
/* harmony import */ var _core_UrlFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/UrlFactory.js */ "./src/js/core/UrlFactory.js");





class ArticlesService {
    constructor() {
    }

    getNews(source) {
        let urls = source.map(s => {
            let params = { source: s, apiKey: _core_Constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].ApiKey, type:"Get" };
            return Object(_core_UrlFactory_js__WEBPACK_IMPORTED_MODULE_3__["CreateRequest"])(_core_Constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].ArticlesUrl, params);

        });
        let utils = new _core_Utils_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        utils.sendRequestForJson(urls, this.showNews);

    }

    showNews(data) {
        let newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = '';
        let articles = [];

        for (let i = 0; i < data.length; i++) {
            articles.push(...(data[i].articles));
        }

        articles = articles.sort((x, y) => Date.parse(y.publishedAt) - Date.parse(x.publishedAt));

        for (let i = 0; i < _core_Constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].NumberOfNews; i++) {
            if (!articles[i]) {
                return;
            }

            let art = articles[i];
            let articleTemplate = document.createElement("div");
            let published = art.publishedAt ? `Published: ${art.publishedAt.substr(0, 10)}. ` : "";
            let artDesc = art.description ? art.description : "";

            let artImg = '';
            let pat = /(?<=http)s?:\/\//i;
            if (pat.test(art.urlToImage)) {
                artImg = `<img src='${art.urlToImage}'/></a>`;
            }
            else {
                artImg = art.urlToImage ? `<img src='${art.url.toString().concat(art.urlToImage)}'/></a>` : 'See more...';
            }

            articleTemplate.innerHTML = `<div class='article'>
                <div class='article-header'><h2>${art.title}</h2></div>
                <div class='article-body'> <a href='${art.url}' target='_blank'>${artImg}</a> ${artDesc}</div>
                <div class='article-footer'> 
                    ${published}
                    <a href='https://newsapi.org' target='_blank'>Powered by NewsAPI.org</a>
                </div>
            </div>`;

            newsContainer.appendChild(articleTemplate);
        }
    }

    applyFilters() {
        let sourcesIds = Array.prototype.slice.call(document.getElementsByClassName("source-checkbox"), 0) //convert to array
            .filter(c => c.checked)
            .map(c => c.id);
        this.getNews(sourcesIds);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (ArticlesService);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvQXJ0aWNsZXNTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0I7QUFDZTtBQUNRO0FBQ087O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG9CQUFvQiwwREFBUztBQUN2RCxtQkFBbUIseUVBQWEsQ0FBQywwREFBUzs7QUFFMUMsU0FBUztBQUNULHdCQUF3QixzREFBSztBQUM3Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLEtBQUssMERBQVMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RCw4QkFBOEI7QUFDMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQ7QUFDQTtBQUNBLHVEQUF1RCwwQ0FBMEM7QUFDakc7O0FBRUE7QUFDQSxrREFBa0QsVUFBVTtBQUM1RCxzREFBc0QsUUFBUSxvQkFBb0IsT0FBTyxPQUFPLFFBQVE7QUFDeEc7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSw4RUFBZSxFIiwiZmlsZSI6IkFydGljbGVzU2VydmljZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VybC1wb2x5ZmlsbCc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi9jb3JlL1V0aWxzLmpzJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb3JlL0NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7Q3JlYXRlUmVxdWVzdH0gZnJvbSAnLi4vY29yZS9VcmxGYWN0b3J5LmpzJztcclxuXHJcbmNsYXNzIEFydGljbGVzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdzKHNvdXJjZSkge1xyXG4gICAgICAgIGxldCB1cmxzID0gc291cmNlLm1hcChzID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHsgc291cmNlOiBzLCBhcGlLZXk6IENvbnN0YW50cy5BcGlLZXksIHR5cGU6XCJHZXRcIiB9O1xyXG4gICAgICAgICAgICByZXR1cm4gQ3JlYXRlUmVxdWVzdChDb25zdGFudHMuQXJ0aWNsZXNVcmwsIHBhcmFtcyk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB1dGlscyA9IG5ldyBVdGlscygpO1xyXG4gICAgICAgIHV0aWxzLnNlbmRSZXF1ZXN0Rm9ySnNvbih1cmxzLCB0aGlzLnNob3dOZXdzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd05ld3MoZGF0YSkge1xyXG4gICAgICAgIGxldCBuZXdzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdzLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBuZXdzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGxldCBhcnRpY2xlcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYXJ0aWNsZXMucHVzaCguLi4oZGF0YVtpXS5hcnRpY2xlcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJ0aWNsZXMgPSBhcnRpY2xlcy5zb3J0KCh4LCB5KSA9PiBEYXRlLnBhcnNlKHkucHVibGlzaGVkQXQpIC0gRGF0ZS5wYXJzZSh4LnB1Ymxpc2hlZEF0KSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uc3RhbnRzLk51bWJlck9mTmV3czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghYXJ0aWNsZXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGFydCA9IGFydGljbGVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgYXJ0aWNsZVRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgbGV0IHB1Ymxpc2hlZCA9IGFydC5wdWJsaXNoZWRBdCA/IGBQdWJsaXNoZWQ6ICR7YXJ0LnB1Ymxpc2hlZEF0LnN1YnN0cigwLCAxMCl9LiBgIDogXCJcIjtcclxuICAgICAgICAgICAgbGV0IGFydERlc2MgPSBhcnQuZGVzY3JpcHRpb24gPyBhcnQuZGVzY3JpcHRpb24gOiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFydEltZyA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgcGF0ID0gLyg/PD1odHRwKXM/OlxcL1xcLy9pO1xyXG4gICAgICAgICAgICBpZiAocGF0LnRlc3QoYXJ0LnVybFRvSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBhcnRJbWcgPSBgPGltZyBzcmM9JyR7YXJ0LnVybFRvSW1hZ2V9Jy8+PC9hPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhcnRJbWcgPSBhcnQudXJsVG9JbWFnZSA/IGA8aW1nIHNyYz0nJHthcnQudXJsLnRvU3RyaW5nKCkuY29uY2F0KGFydC51cmxUb0ltYWdlKX0nLz48L2E+YCA6ICdTZWUgbW9yZS4uLic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFydGljbGVUZW1wbGF0ZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nYXJ0aWNsZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhcnRpY2xlLWhlYWRlcic+PGgyPiR7YXJ0LnRpdGxlfTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhcnRpY2xlLWJvZHknPiA8YSBocmVmPScke2FydC51cmx9JyB0YXJnZXQ9J19ibGFuayc+JHthcnRJbWd9PC9hPiAke2FydERlc2N9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhcnRpY2xlLWZvb3Rlcic+IFxyXG4gICAgICAgICAgICAgICAgICAgICR7cHVibGlzaGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vbmV3c2FwaS5vcmcnIHRhcmdldD0nX2JsYW5rJz5Qb3dlcmVkIGJ5IE5ld3NBUEkub3JnPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFydGljbGVUZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5RmlsdGVycygpIHtcclxuICAgICAgICBsZXQgc291cmNlc0lkcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzb3VyY2UtY2hlY2tib3hcIiksIDApIC8vY29udmVydCB0byBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYy5jaGVja2VkKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy5pZCk7XHJcbiAgICAgICAgdGhpcy5nZXROZXdzKHNvdXJjZXNJZHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc1NlcnZpY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==
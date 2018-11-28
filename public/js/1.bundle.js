(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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




class ArticlesService {
    constructor() {
    }

    getNews(source) {
        let urls = source.map(s => {
            let SourceUrl = new URL(_core_Constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].ArticlesUrl);
            let params = { source: s, apiKey: _core_Constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].ApiKey };

            Object.keys(params).forEach(key => SourceUrl.searchParams.append(key, params[key]))
            return SourceUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvQXJ0aWNsZXNTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNCO0FBQ2U7QUFDUTs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsMERBQVM7QUFDN0MsMEJBQTBCLG9CQUFvQiwwREFBUzs7QUFFdkQ7QUFDQTtBQUNBLFNBQVM7QUFDVCx3QkFBd0Isc0RBQUs7QUFDN0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBOztBQUVBOztBQUVBLHVCQUF1QixLQUFLLDBEQUFTLGNBQWM7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQsOEJBQThCO0FBQzFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JEO0FBQ0E7QUFDQSx1REFBdUQsMENBQTBDO0FBQ2pHOztBQUVBO0FBQ0Esa0RBQWtELFVBQVU7QUFDNUQsc0RBQXNELFFBQVEsb0JBQW9CLE9BQU8sT0FBTyxRQUFRO0FBQ3hHO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsOEVBQWUsRSIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndXJsLXBvbHlmaWxsJztcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2NvcmUvVXRpbHMuanMnO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvcmUvQ29uc3RhbnRzLmpzJztcclxuXHJcbmNsYXNzIEFydGljbGVzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdzKHNvdXJjZSkge1xyXG4gICAgICAgIGxldCB1cmxzID0gc291cmNlLm1hcChzID0+IHtcclxuICAgICAgICAgICAgbGV0IFNvdXJjZVVybCA9IG5ldyBVUkwoQ29uc3RhbnRzLkFydGljbGVzVXJsKTtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHsgc291cmNlOiBzLCBhcGlLZXk6IENvbnN0YW50cy5BcGlLZXkgfTtcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4gU291cmNlVXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBwYXJhbXNba2V5XSkpXHJcbiAgICAgICAgICAgIHJldHVybiBTb3VyY2VVcmw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHV0aWxzID0gbmV3IFV0aWxzKCk7XHJcbiAgICAgICAgdXRpbHMuc2VuZFJlcXVlc3RGb3JKc29uKHVybHMsIHRoaXMuc2hvd05ld3MpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93TmV3cyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IG5ld3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld3MtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIG5ld3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgbGV0IGFydGljbGVzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcnRpY2xlcy5wdXNoKC4uLihkYXRhW2ldLmFydGljbGVzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnRpY2xlcyA9IGFydGljbGVzLnNvcnQoKHgsIHkpID0+IERhdGUucGFyc2UoeS5wdWJsaXNoZWRBdCkgLSBEYXRlLnBhcnNlKHgucHVibGlzaGVkQXQpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25zdGFudHMuTnVtYmVyT2ZOZXdzOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFhcnRpY2xlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgYXJ0ID0gYXJ0aWNsZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBhcnRpY2xlVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBsZXQgcHVibGlzaGVkID0gYXJ0LnB1Ymxpc2hlZEF0ID8gYFB1Ymxpc2hlZDogJHthcnQucHVibGlzaGVkQXQuc3Vic3RyKDAsIDEwKX0uIGAgOiBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgYXJ0RGVzYyA9IGFydC5kZXNjcmlwdGlvbiA/IGFydC5kZXNjcmlwdGlvbiA6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXJ0SW1nID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBwYXQgPSAvKD88PWh0dHApcz86XFwvXFwvL2k7XHJcbiAgICAgICAgICAgIGlmIChwYXQudGVzdChhcnQudXJsVG9JbWFnZSkpIHtcclxuICAgICAgICAgICAgICAgIGFydEltZyA9IGA8aW1nIHNyYz0nJHthcnQudXJsVG9JbWFnZX0nLz48L2E+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFydEltZyA9IGFydC51cmxUb0ltYWdlID8gYDxpbWcgc3JjPScke2FydC51cmwudG9TdHJpbmcoKS5jb25jYXQoYXJ0LnVybFRvSW1hZ2UpfScvPjwvYT5gIDogJ1NlZSBtb3JlLi4uJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXJ0aWNsZVRlbXBsYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSdhcnRpY2xlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2FydGljbGUtaGVhZGVyJz48aDI+JHthcnQudGl0bGV9PC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2FydGljbGUtYm9keSc+IDxhIGhyZWY9JyR7YXJ0LnVybH0nIHRhcmdldD0nX2JsYW5rJz4ke2FydEltZ308L2E+ICR7YXJ0RGVzY308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2FydGljbGUtZm9vdGVyJz4gXHJcbiAgICAgICAgICAgICAgICAgICAgJHtwdWJsaXNoZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9uZXdzYXBpLm9yZycgdGFyZ2V0PSdfYmxhbmsnPlBvd2VyZWQgYnkgTmV3c0FQSS5vcmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0aWNsZVRlbXBsYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlGaWx0ZXJzKCkge1xyXG4gICAgICAgIGxldCBzb3VyY2VzSWRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNvdXJjZS1jaGVja2JveFwiKSwgMCkgLy9jb252ZXJ0IHRvIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjLmNoZWNrZWQpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLmlkKTtcclxuICAgICAgICB0aGlzLmdldE5ld3Moc291cmNlc0lkcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzU2VydmljZTsiXSwic291cmNlUm9vdCI6IiJ9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvQXJ0aWNsZXNTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNCO0FBQ2U7QUFDUTs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsMERBQVM7QUFDN0MsMEJBQTBCLG9CQUFvQiwwREFBUzs7QUFFdkQ7QUFDQTtBQUNBLFNBQVM7QUFDVCx3QkFBd0Isc0RBQUs7QUFDN0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBOztBQUVBOztBQUVBLHVCQUF1QixLQUFLLDBEQUFTLGNBQWM7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQsOEJBQThCO0FBQzFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JEO0FBQ0E7QUFDQSx1REFBdUQsMENBQTBDO0FBQ2pHOztBQUVBO0FBQ0Esa0RBQWtELFVBQVU7QUFDNUQsc0RBQXNELFFBQVEsb0JBQW9CLE9BQU8sT0FBTyxRQUFRO0FBQ3hHO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsOEVBQWUsRSIsImZpbGUiOiJBcnRpY2xlc1NlcnZpY2UuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1cmwtcG9seWZpbGwnO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vY29yZS9VdGlscy5qcyc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29yZS9Db25zdGFudHMuanMnO1xyXG5cclxuY2xhc3MgQXJ0aWNsZXNTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld3Moc291cmNlKSB7XHJcbiAgICAgICAgbGV0IHVybHMgPSBzb3VyY2UubWFwKHMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgU291cmNlVXJsID0gbmV3IFVSTChDb25zdGFudHMuQXJ0aWNsZXNVcmwpO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0geyBzb3VyY2U6IHMsIGFwaUtleTogQ29uc3RhbnRzLkFwaUtleSB9O1xyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiBTb3VyY2VVcmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHBhcmFtc1trZXldKSlcclxuICAgICAgICAgICAgcmV0dXJuIFNvdXJjZVVybDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgdXRpbHMgPSBuZXcgVXRpbHMoKTtcclxuICAgICAgICB1dGlscy5zZW5kUmVxdWVzdEZvckpzb24odXJscywgdGhpcy5zaG93TmV3cyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dOZXdzKGRhdGEpIHtcclxuICAgICAgICBsZXQgbmV3c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3cy1jb250YWluZXJcIik7XHJcbiAgICAgICAgbmV3c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBsZXQgYXJ0aWNsZXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFydGljbGVzLnB1c2goLi4uKGRhdGFbaV0uYXJ0aWNsZXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFydGljbGVzID0gYXJ0aWNsZXMuc29ydCgoeCwgeSkgPT4gRGF0ZS5wYXJzZSh5LnB1Ymxpc2hlZEF0KSAtIERhdGUucGFyc2UoeC5wdWJsaXNoZWRBdCkpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbnN0YW50cy5OdW1iZXJPZk5ld3M7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIWFydGljbGVzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBhcnQgPSBhcnRpY2xlc1tpXTtcclxuICAgICAgICAgICAgbGV0IGFydGljbGVUZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGxldCBwdWJsaXNoZWQgPSBhcnQucHVibGlzaGVkQXQgPyBgUHVibGlzaGVkOiAke2FydC5wdWJsaXNoZWRBdC5zdWJzdHIoMCwgMTApfS4gYCA6IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBhcnREZXNjID0gYXJ0LmRlc2NyaXB0aW9uID8gYXJ0LmRlc2NyaXB0aW9uIDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBhcnRJbWcgPSAnJztcclxuICAgICAgICAgICAgbGV0IHBhdCA9IC8oPzw9aHR0cClzPzpcXC9cXC8vaTtcclxuICAgICAgICAgICAgaWYgKHBhdC50ZXN0KGFydC51cmxUb0ltYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgYXJ0SW1nID0gYDxpbWcgc3JjPScke2FydC51cmxUb0ltYWdlfScvPjwvYT5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXJ0SW1nID0gYXJ0LnVybFRvSW1hZ2UgPyBgPGltZyBzcmM9JyR7YXJ0LnVybC50b1N0cmluZygpLmNvbmNhdChhcnQudXJsVG9JbWFnZSl9Jy8+PC9hPmAgOiAnU2VlIG1vcmUuLi4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhcnRpY2xlVGVtcGxhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2FydGljbGUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYXJ0aWNsZS1oZWFkZXInPjxoMj4ke2FydC50aXRsZX08L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYXJ0aWNsZS1ib2R5Jz4gPGEgaHJlZj0nJHthcnQudXJsfScgdGFyZ2V0PSdfYmxhbmsnPiR7YXJ0SW1nfTwvYT4gJHthcnREZXNjfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYXJ0aWNsZS1mb290ZXInPiBcclxuICAgICAgICAgICAgICAgICAgICAke3B1Ymxpc2hlZH1cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL25ld3NhcGkub3JnJyB0YXJnZXQ9J19ibGFuayc+UG93ZXJlZCBieSBOZXdzQVBJLm9yZzwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnRpY2xlVGVtcGxhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHBseUZpbHRlcnMoKSB7XHJcbiAgICAgICAgbGV0IHNvdXJjZXNJZHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic291cmNlLWNoZWNrYm94XCIpLCAwKSAvL2NvbnZlcnQgdG8gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMuY2hlY2tlZClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMuaWQpO1xyXG4gICAgICAgIHRoaXMuZ2V0TmV3cyhzb3VyY2VzSWRzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXNTZXJ2aWNlOyJdLCJzb3VyY2VSb290IjoiIn0=
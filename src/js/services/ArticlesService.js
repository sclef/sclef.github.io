import 'url-polyfill';
import Utils from '../core/Utils.js';
import Constants from '../core/Constants.js';

class ArticlesService {
    constructor() {
    }

    getNews(source) {
        let urls = source.map(s => {
            let SourceUrl = new URL(Constants.ArticlesUrl);
            let params = { source: s, apiKey: Constants.ApiKey };

            Object.keys(params).forEach(key => SourceUrl.searchParams.append(key, params[key]))
            return SourceUrl;
        });
        let utils = new Utils();
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

        for (let i = 0; i < Constants.NumberOfNews; i++) {
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

export default ArticlesService;
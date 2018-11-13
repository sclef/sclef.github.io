import Utils from './Utils.js';

class NewsRetriever {
    constructor() {
        this.ApiKey = 'e03d718829c24339b5ea62712a181aae';
    }

    getNews(source) {
        let urls = source.map(s => {
            let SourceUrl = new URL('https://newsapi.org/v1/articles');
            let params = { source: s, apiKey: this.ApiKey };

            Object.keys(params).forEach(key => SourceUrl.searchParams.append(key, params[key]))
            return SourceUrl;
        });

        Utils.sendRequestForJson(urls, this.showNews);

    }

    getAllSouces() {
        const allSourcesUrl = 'https://newsapi.org/v1/sources';
        Utils.sendRequestForJson([allSourcesUrl], this.fillMenu);
    }

    fillMenu(resp) {
        let uniqueCategories = function (item, index, self) {
            return self.indexOf(item) === index;
        };

        let categories = resp[0].sources.map(a => a.category).filter(uniqueCategories);

        for (let i = 0; i < categories.length; i++) {
            let cat = categories[i];
            let catResources = resp[0].sources.filter(r => r.category === cat);
            let categoryOptions = '';

            for (let j = 0; j < catResources.length; j++) {
                categoryOptions = categoryOptions.concat(`<div><input class='source-checkbox' type='checkbox' id='${catResources[j].id}'/><label for='${catResources[j].id}'>${catResources[j].name}</label></div>`)
            }

            let categoryTemplate = document.createElement("div");
            categoryTemplate.id = `${cat}-select`;
            categoryTemplate.className = 'category-selection';
            categoryTemplate.innerHTML = categoryOptions;

            document.getElementById("table-headers").appendChild(document.createElement("td")).append(cat);
            document.getElementById("table-options").appendChild(document.createElement("td")).appendChild(categoryTemplate);
        }

    }

    showNews(data) {
        let newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = '';
        let articles = [];

        for (let i = 0; i < data.length; i++) {
            articles.push(...(data[i].articles));
        }

        articles = articles.sort((x, y) => Date.parse(y.publishedAt) - Date.parse(x.publishedAt));

        for (let i = 0; i < 10; i++) {
            if (!articles[i]) {
                return;
            }

            let art = articles[i];
            let articleTemplate = document.createElement("div");
            let published = art.publishedAt ? `Published: ${art.publishedAt.substr(0, 10)}. ` : "";
            let artDesc = art.description ? art.description : "";

            let artImg = '';
            let pat = /^https?:\/\//i;
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

export default NewsRetriever;
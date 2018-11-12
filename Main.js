//import $ from 'jquery';

class newsRetriver {
    constructor() {
        this.ApiKey = 'e03d718829c24339b5ea62712a181aae';
        this.filterredArticles = [];
    }

    getNews(source) {
        console.log(source);
        let urls = source.map(s => {
            let SourceUrl = new URL('https://newsapi.org/v1/articles');
            let params = { source: s, apiKey: this.ApiKey };

            Object.keys(params).forEach(key => SourceUrl.searchParams.append(key, params[key]))
            return SourceUrl;
        });

        this.sendRequestForJson(urls, this.showNews);

    }
    getAllSouces() {
        const allSourcesUrl = 'https://newsapi.org/v1/sources';

        this.sendRequestForJson([allSourcesUrl], this.fillMenu);
    }

    fillMenu(resp) {
        let uniqueCategories = function (item, index, self) {
            return self.indexOf(item) === index;
        };

        console.log(resp);
        let categories = resp[0].sources.map(a => a.category).filter(uniqueCategories);
        console.log(categories);
        for (let i = 0; i < categories.length; i++) {
            let cat = categories[i];
            let catResources = resp[0].sources.filter(r => r.category === cat);
            let categoryOptions = '';
            for (let j = 0; j < catResources.length; j++) {
                categoryOptions = categoryOptions.concat(`<div><input class='source-checkbox' type='checkbox' id='${catResources[j].id}-id'/><label for='${catResources[j].id}'>${catResources[j].name}</label></div>`)
            }
            let categoryTemplate = document.createElement("div");
            categoryTemplate.id = `${cat}-select`;
            categoryTemplate.className = 'category-selection';
            categoryTemplate.innerHTML = categoryOptions;
            document.getElementById("table-headers").appendChild(document.createElement("td")).append(cat);
            document.getElementById("table-options").appendChild(document.createElement("td")).appendChild(categoryTemplate);
        }
        document.getElementsByClassName("category-selection");
    }

    showNews(data) {
        console.log(data);
        let newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = '';
        let articles = [];
        for (let i = 0; i < data.length; i++) {
            articles.push(...data[i].articles);
        }
        articles = articles.sort((x, y) => Date.parse(y.publishedAt) - Date.parse(x.publishedAt));

        for (let i = 0; i < 10; i++) {
            if (!articles[i]) {
                return;
            }

            let art = articles[i];
            let articleTemplate = document.createElement("div");
            articleTemplate.innerHTML = `<div id='//to insert an iterator here' class='article'>
                <div class='article-header'>${art.title}</div>
                <div class='article-body'> <a href='${art.url}' target='_blank'><img src='${art.urlToImage}'/></a> ${art.description}</div>
                <div class='article-footer'> 
                    Published: ${art.publishedAt.substr(0, 10)}. 
                    <a href='https://newsapi.org' target='_blank'>Powered by NewsAPI.org</a>
                </div>
            </div>`;

            newsContainer.appendChild(articleTemplate);
        }
    }



    sendRequestForJson(urls, callbackFunction) {
        let promises = urls.map(url => fetch(url).then(y => y.json()));
        Promise.all(promises).then(callbackFunction);

    }


}

const newsRet = new newsRetriver();
newsRet.getAllSouces();
newsRet.getNews(["ars-technica"]);

function applyFilters() {
    let checkbxChecked = Array.prototype.slice.call(document.getElementsByClassName("source-checkbox"), 0)
        .filter(c => c.checked);


}

//let sortedArticles=resp.articles.sort((x,y)=>Date.parse(y.publishedAt) - Date.parse(x.publishedAt)); //.map(x=>new Date(Date.parse(x.publishedAt)))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
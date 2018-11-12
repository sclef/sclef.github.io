//import $ from 'jquery';

class newsRetriver {
    constructor() {
        this.ApiKey = 'e03d718829c24339b5ea62712a181aae';
        this.filterredArticles=[];
    }

    getNews(source) {
        console.log(source);
        const SourceUrl = new URL('https://newsapi.org/v1/articles');
        let params = { source: source, apiKey: this.ApiKey };

        Object.keys(params).forEach(key => SourceUrl.searchParams.append(key, params[key]))

        this.sendRequestForJson(SourceUrl, this.showNews);

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
        let categories = resp.sources.map(a => a.category).filter(uniqueCategories);
        console.log(categories);
        for (let i = 0; i < categories.length; i++) {
            let cat = categories[i];
            let catResources = resp.sources.filter(r => r.category === cat);
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

    showNews(resp) {
        console.log(resp);
        let newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = '';

        for (let i = 0; i < 10; i++) {
            if (!resp.articles[i]) {
                return;
            }

            let art = resp.articles[i];
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
        let returnData = function(url) { return fetch(url)
            .then(function (response) {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    //this.filterredArticles.push(response.json());
                    return response.json();
                }
                throw new TypeError("Oops, we haven't got JSON!");
            });};

        const promises = [];
        for (let i = 0; i < urls.length; i++) {
            promises.push(new Promise(resolve => returnData(urls[i])));
        }

        Promise.all(promises)
            // .then(data => {
            //     const contentType = data.headers.get("content-type");
            //     if (contentType && contentType.includes("application/json")) {
            //         return data.json();
            //     }
            //     throw new TypeError("Oops, we haven't got JSON!");
            // })
            .then(callbackFunction)
            .catch(function (error) {
                console.log(error);
            });
       

            // .then(callbackFunction)
            // .catch(function (error) {
            //     console.log(error);
            // });
    }


}

const newsRet = new newsRetriver();
newsRet.getAllSouces();
//newsRet.getNews(["ars-technica"]);

function applyFilters() {
    let checkbxChecked = Array.prototype.slice.call(document.getElementsByClassName("source-checkbox"), 0)
        .filter(c => c.checked);


}

// let sortedArticles=resp.articles.sort((x,y)=>Date.parse(y.publishedAt) - Date.parse(x.publishedAt)); //.map(x=>new Date(Date.parse(x.publishedAt)))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
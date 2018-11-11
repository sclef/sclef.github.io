//import $ from 'jquery';

class newsRetriver {
    constructor() {
        this.ApiKey = 'e03d718829c24339b5ea62712a181aae';
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

        this.sendRequestForJson(allSourcesUrl, this.fillMenu);
    }

    fillMenu(resp) {
        console.log(resp);
    }

    showNews(resp) {
        console.log(resp);
        let articleTemplate = '';
        for (let i = 0; i < 10; i++) {
            let art = rep.articles[i];
            let articleTemplate = `<div id='//to insert an iterator here' class='article'>
                <div class='article-header'>${art.title}</div>
                <div class='article-body'> <a href='${art.url}'><img src='${art.urlToImage}'/></a> ${art.description}</div>
                <div class='article-footer'> Published: ${art.publishedAt}</div>
            </div>`;
            $('#news-container').append(articleTemplate);
        }
    }

    sendRequestForJson(url, callbackFunction) {
        fetch(url)
            .then(function (response) {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    return response.json();
                }
                throw new TypeError("Oops, we haven't got JSON!");
            })
            .then(callbackFunction)
            .catch(function (error) {
                console.log(error);
            });
    }
}

const n = new newsRetriver();
n.getAllSouces();

n.getNews("ars-technica");

// let sortedArticles=resp.articles.sort((x,y)=>Date.parse(y.publishedAt) - Date.parse(x.publishedAt)); //.map(x=>new Date(Date.parse(x.publishedAt)))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
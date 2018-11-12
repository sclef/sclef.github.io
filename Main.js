
import NewsRetriever from 'NewsRetriever.js';

const newsRet = new NewsRetriever();
newsRet.getAllSouces();

function applyFilters() {
    let sourcesIds = Array.prototype.slice.call(document.getElementsByClassName("source-checkbox"), 0) //convert to array
        .filter(c => c.checked)
        .map(c => c.id);
    newsRet.getNews(sourcesIds);
}
import NewsRetriever from './NewsRetriever.js';

const newsRet = new NewsRetriever();
newsRet.getAllSouces();

document.getElementById('apply-filters').addEventListener("click", () => {
    newsRet.applyFilters();
  });
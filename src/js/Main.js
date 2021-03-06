//import Articles from './services/ArticlesService.js';
import Sources from './services/SourcesService.js';
import '../css/main.less';
__webpack_public_path__ = "public/js/";

const sources = new Sources();
sources.getAllSouces();

document.getElementById('apply-filters').addEventListener("click", () => {
  import(/* webpackChunkName: "ArticlesService" */'./services/ArticlesService.js').then(module => {
    console.log('articles loaded');
    let articles = new module.default();
    articles.applyFilters();
  })
});

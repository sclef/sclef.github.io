import Articles from './services/ArticlesService.js';
import Sources from './services/SourcesService.js';

const sources = new Sources();
sources.getAllSouces();

document.getElementById('apply-filters').addEventListener("click", () => {
  let aticles = new Articles();
  aticles.applyFilters();
});
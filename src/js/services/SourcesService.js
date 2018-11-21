import Utils from '../core/Utils.js';
import Constants from '../core/Constants.js';

class SourcesService {
    constructor() {
    }

    getAllSouces() {
        let utils = new Utils();
        utils.sendRequestForJson([Constants.SourcesUrl], this.fillMenu);
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

            //TODO: rewrite to UL
            //document.getElementById("table-headers").appendChild(document.createElement("td")).append(cat.toUpperCase());
            document.getElementById("table-options").appendChild(document.createElement("td")).appendChild(categoryTemplate);
        }

    }
}

export default SourcesService;
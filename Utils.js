class Utils {
    static applyFilters() {
        let sourcesIds = Array.prototype.slice.call(document.getElementsByClassName("source-checkbox"), 0) //convert to array
            .filter(c => c.checked)
            .map(c => c.id);
        newsRet.getNews(sourcesIds);
    }

    static sendRequestForJson(urls, callbackFunction) {
        let promises = urls.map(url => fetch(url).then(y => y.json()));
        Promise.all(promises).then(callbackFunction);
    }

}
export default Utils;
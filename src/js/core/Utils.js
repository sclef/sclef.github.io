import 'whatwg-fetch';
import 'es6-promise-promise';
import "@babel/polyfill";

class Utils {
    static sendRequestForJson(urls, callbackFunction) {
        let promises = urls.map(url => this.asyncFetch(url));
        Promise.all(promises).then(callbackFunction);
    }

    static async asyncFetch(url) {
        let response = await fetch(url);
        return response.json();
    }
}
export default Utils;
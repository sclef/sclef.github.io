import 'whatwg-fetch';
import 'es6-promise-promise';
import "@babel/polyfill";

class Utils {
    async sendRequestForJson(urls, callbackFunction) {
        let promises = await urls.map(await this.asyncFetch);
        Promise.all(promises)
            .then(callbackFunction)
            .catch(error => console.error(error))
            .finally(() => console.log("request was sent"));
    }

    async asyncFetch(url) {
        let response = await fetch(url);
        return response.json();
    }
}
export default Utils;
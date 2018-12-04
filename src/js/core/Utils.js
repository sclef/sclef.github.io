import 'whatwg-fetch';
import 'es6-promise-promise';
import "@babel/polyfill";
import UrlFactory from '../core/UrlFactory.js';

class Utils {
    async sendRequestForJson(urls, callbackFunction) {
        await urls.map(async (url) => { await this.proxyFetch(url, callbackFunction); });
    }

    async proxyFetch(url, callbackFunction) {
        let urlFactory = new UrlFactory();
        let UrlType = await urlFactory.runRequest(url, callbackFunction);
        console.log(UrlType);
        if (typeof url === "object") {
            //Object.entries willl not get prototipe properties
            for (var prop in url) {
                console.log("obj." + prop + " = " + url[prop]);
            }
        } else {
            console.log(url);
        }
    }
}

export default Utils;
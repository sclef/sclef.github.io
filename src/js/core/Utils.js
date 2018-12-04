import 'whatwg-fetch';
import 'es6-promise-promise';
import "@babel/polyfill";
import UrlFactory from '../core/UrlFactory.js';

class Utils {
    async sendRequestForJson(urls, callbackFunction) {
        let promises = await urls.map(async (url) => { await this.proxyFetch(url, callbackFunction); });
        //TODO move to request file
        // Promise.all(promises)
        //     .then((resp) => { this.tryCatchWrapper(callbackFunction, resp) })
        //     .catch(error => this.catchError(error))
        //     .finally(() => console.log("request was sent"));
    }

    async proxyFetch(url, callbackFunction) {
        let urlFactory = new UrlFactory();
        let UrlType = await urlFactory.runRequest(url, callbackFunction);
        console.log(UrlType);
        if (typeof url === "object") {
            Object.keys(url).forEach(key => console.log(`${key}: ${url[key]};`));
        }else{
            console.log(url);
        }
        

    }

    catchError(e) {
        console.error("This is my Error " + e.name + ': ' + e.message);
        console.log(e.stack);
    }

    tryCatchWrapper(callbackFunction, resp) {
        try {
            callbackFunction(resp);
            //resp[0].status = "bad Request";
            if (resp.length == 0 || resp[0].status != "ok") {
                import(/* webpackChunkName: "ResponseError" */'./ResponseError.js').then(module => {
                    let responseError = module.default.getInstance();
                    responseError.message += " Response status: " + resp[0].status;
                    throw responseError;
                });
            }
        }
        catch (e) {
            import(/* webpackChunkName: "ResponseError" */'./ResponseError.js').then(module => {
                let responseError = module.default.getInstance(e.message);
                throw responseError;
            });
        }
    }
}
export default Utils;
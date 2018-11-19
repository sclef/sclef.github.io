import 'whatwg-fetch';
import 'es6-promise-promise';

class Utils {
    static sendRequestForJson(urls, callbackFunction) {
        let promises = urls.map(url => fetch(url).then(y => y.json()));
        Promise.all(promises).then(callbackFunction);
    }
}
export default Utils;
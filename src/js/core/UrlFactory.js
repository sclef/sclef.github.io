import $ from "jquery";

export function CreateRequest(url, params) {
    let urlObj = new URL(url);
    if (params.type) {
        urlObj.type = params.type;
    }
    Object.keys(params).forEach(key => urlObj.searchParams.append(key, params[key]))
    return urlObj;
}

class UrlFactory {
    async runRequest(url, callback) {
        let urlType = url.type != undefined ? url.type.toLowerCase() : "";
        switch (urlType) {
            case "get":
                $.get(url, (data, status) => { this.tryCatchWrapper(callback, [data]) });
                break;
            case "post":
                $.post(url, (data, status) => { this.tryCatchWrapper(callback, [data]) });
                break;
            case "put":
                $.put(url, (data, status) => { this.tryCatchWrapper(callback, [data]) });
                break;
            default:
                $.get(url, (data, status) => { this.tryCatchWrapper(callback, [data]) });
                break;
        }
        return urlType;
    }

    tryCatchWrapper(callbackFunction, resp) {
        try {
            callbackFunction(resp);
            //resp[0].status = "bad Request";
            if (resp.length == 0 || resp[0].status != "ok") {
                throw new Error(resp[0].status);
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

export default UrlFactory;

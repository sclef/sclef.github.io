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
        let urlType=url.type!=undefined?url.type.toLowerCase():"";
        switch (urlType) {
            case "get":
                $.get(url, function (data, status) { callback([data]) });
                break;
            case "post":
                $.post(url, function (data, status) { callback([data]) });
                break;
            case "put":
                $.put(url, function (data, status) { callback([data]) });
                break;
            default:
                $.get(url, function (data, status) { callback([data]) });
                break;
            //return response.promise();
        }
        return urlType;
    }
}

export default UrlFactory;

class ResponseError extends Error{
    static getInstance(message) {
        if (!ResponseError.instance) {
            ResponseError.instance = new ResponseError(message);
        }
        ResponseError.instance.message="This is my Error: ".concat(ResponseError.instance.message);
        return ResponseError.instance;
    }
}

export default ResponseError;
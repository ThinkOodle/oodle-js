export function convertSingleObjectToArray(obj) {
    if (Array.isArray(obj)) {
        return obj;
    }
    else {
        return [obj];
    }
}

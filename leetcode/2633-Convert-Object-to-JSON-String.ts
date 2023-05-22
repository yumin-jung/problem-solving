function jsonStringify(object: any): string {
    if (object === null) {
        return 'null'
    }
    if (typeof object === 'string') {
        return '"' + object + '"'
    }
    if (typeof object === 'number' || typeof object === 'boolean') {
        return "" + object
    }
    if (Array.isArray(object)) {
        return '[' + object.map(e => jsonStringify(e)).join(',') + ']'
    }
    if (typeof object === 'object') {
        const keys = Object.keys(object)
        const items = keys.map(key => '"' + key + '":' + jsonStringify(object[key]))
        return '{' + items.join(',') + '}'
    }
};
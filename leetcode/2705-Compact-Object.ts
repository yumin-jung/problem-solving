type Obj = Record<any, any>;

function compactObject(obj: Obj): Obj {
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (obj === null || typeof obj !== 'object') return obj;

    const res = {};

    for (const key in obj) {
        const val = compactObject(obj[key]);
        if (Boolean(val)) res[key] = val;
    }

    return res;
};
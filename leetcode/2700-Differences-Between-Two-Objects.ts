function objDiff(obj1: any, obj2: any): any {
    if (obj1 === undefined || obj2 === undefined || obj1 === obj2) return {}
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return [obj1, obj2]
    if (!Object.keys(obj1).length && !Object.keys(obj2).length) return {}
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1, obj2]

    const diff: { [key: string]: any } = {}

    for (let key in obj1) {
        const result = objDiff(obj1[key], obj2[key])
        if (Object.keys(result).length) diff[key] = result
    }

    return diff
};
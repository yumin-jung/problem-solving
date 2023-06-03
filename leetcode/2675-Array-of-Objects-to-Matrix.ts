function jsonToMatrix(arr: any[]): (string | number | boolean | null)[] {
    const flatten = (a, prefix = []) => Object.entries(a)
        .reduce((r, [k, v]) => (typeof v !== 'object' || v === null)
            ? { ...r, [[...prefix, k].join('.')]: v }
            : { ...r, ...flatten(v, [...prefix, k]) }, {})

    const flattenArr = arr.map(i => flatten(i))
    const keys = Object.keys(flattenArr.reduce((r, i) => ({ ...r, ...i }), {})).sort()
    return flattenArr.reduce((r, i) => [...r, keys.map(key => (key in i) ? i[key] : '')], [keys])
};
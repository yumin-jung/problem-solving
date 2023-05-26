type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n === 0) return arr;

    let res = [];

    arr.map(e => {
        if (n > 0 && Array.isArray(e)) {
            res.push(...flat(e, n - 1));
        } else {
            res.push(e);
        }
    });

    return res;
};
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const arr = [0, 1, 1];

    if (n === 0) return arr[0];
    else if (n === 1) return arr[1];
    else if (n === 2) return arr[2];

    while (arr.length <= n) {
        const n0 = arr[arr.length - 3];
        const n1 = arr[arr.length - 2];
        const n2 = arr[arr.length - 1];
        arr.push(n0 + n1 + n2);
    }

    return arr[arr.length - 1];
};
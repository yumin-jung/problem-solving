/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const freq = new Map();
    for (const i of arr) {
        freq.set(i, (freq.get(i) || 0) + 1);
    }

    const freqSet = new Set(freq.values());
    return freq.size === freqSet.size;
};
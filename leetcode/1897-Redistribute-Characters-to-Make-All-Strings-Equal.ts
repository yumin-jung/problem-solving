/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    const cnt = new Map();
    const len = words.length;

    for (const word of words) {
        for (const char of word) {
            cnt.set(char, (cnt.get(char) || 0) + 1);
        }
    }

    for (let val of cnt.values()) {
        if (val % len !== 0) {
            return false;
        }
    }

    return true;
};
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let res = -1;

    for (let l = 0; l < s.length; l++) {
        for (let r = l + 1; r < s.length; r++) {
            if (s[l] === s[r]) res = Math.max(res, r - l - 1);
        }
    }

    return res;
};
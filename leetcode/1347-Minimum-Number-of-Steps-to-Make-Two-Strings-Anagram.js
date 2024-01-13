/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let cnt = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        cnt[s[i].charCodeAt(0) - 97]++;
        cnt[t[i].charCodeAt(0) - 97]--;
    }

    return cnt.reduce((acc, curr) => {
        if (curr > 0) return acc + curr;
        else return acc;
    }, 0);
};
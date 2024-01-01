/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let idx = 0;
    let cnt = 0;

    while (idx < s.length && cnt < g.length) {
        if (s[idx] >= g[cnt]) {
            cnt++;
        }
        idx++;
    }

    return cnt;
};
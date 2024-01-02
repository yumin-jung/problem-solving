/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    const m = new Map();
    const res = [];

    for (const num of nums) {
        const s = (m.get(num) || 0) + 1;
        m.set(num, s);

        if (res[s - 1]) {
            res[s - 1].push(num);
        } else {
            res[s - 1] = [num];
        }
    }

    return res;
};
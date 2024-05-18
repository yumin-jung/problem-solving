/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max = 0;
    for (let n of nums) {
        if (set.has(n + 1)) {
            continue;
        }
        let cnt = 1;
        while (set.has(--n)) {
            cnt++;
        }
        max = Math.max(cnt, max);
    }
    return max;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let cnt = {};
    let max = 0;

    for (let num of nums) {
        cnt[num] = (cnt[num] || 0) + 1;
        max = Math.max(max, cnt[num]);
    }

    let answer = 0;
    for (let num in cnt) {
        if (cnt[num] === max) {
            answer += cnt[num];
        }
    }

    return answer;
};
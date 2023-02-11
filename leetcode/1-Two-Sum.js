/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numMap = new Map();

    for (let idx = 0; idx < nums.length; idx++) {
        const find = target - nums[idx];

        if (numMap.has(find)) return [numMap.get(find), idx];

        numMap.set(nums[idx], idx);
    }
};
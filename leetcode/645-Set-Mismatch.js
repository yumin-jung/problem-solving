/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const storage = new Set();
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (storage.has(num)) res.push(num);
        storage.add(num);
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!storage.has(i)) res.push(i);
    }

    return res;
};
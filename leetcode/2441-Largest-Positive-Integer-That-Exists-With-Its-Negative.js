/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a, b) => a - b);

    let neg = 0, pos = nums.length - 1;

    while (neg < pos && nums[pos] * nums[neg] < 0) {
        if (Math.abs(nums[pos]) === Math.abs(nums[neg])) {
            return nums[pos];
        } else if (Math.abs(nums[pos]) < Math.abs(nums[neg])) {
            neg++;
        } else {
            pos--;
        }
    }

    return -1;
};
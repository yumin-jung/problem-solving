/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if (nums.length <= 2) return true;
    
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            increasing = false;
        } else if (nums[i] > nums[i - 1]) {
            decreasing = false;
        }

        if (increasing === false && decreasing === false) {
            return false;
        }
    }

    return true;
};
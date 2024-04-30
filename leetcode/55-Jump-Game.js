/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let remain = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= remain) {
            remain = i;
        }
    }

    return remain === 0;
};
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let max = 0;

    while (left < right) {
        max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
        height[left] < height[right] ? left++ : right--;
    }

    return max;
};
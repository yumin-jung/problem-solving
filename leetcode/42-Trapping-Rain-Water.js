/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1;
    let leftMax = height[left], rightMax = height[right];
    let res = 0;
    while (left < right) {
        if (leftMax < rightMax) {
            leftMax = Math.max(leftMax, height[++left]);
            res += leftMax - height[left];
        } else {
            rightMax = Math.max(rightMax, height[--right]);
            res += rightMax - height[right];
        }
    }
    return res;
};
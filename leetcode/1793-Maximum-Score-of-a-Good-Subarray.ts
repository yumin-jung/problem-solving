function maximumScore(nums: number[], k: number): number {
    const len = nums.length;
    let res = nums[k];
    let min = nums[k];
    let left = k;
    let right = k;

    while (left > 0 || right < len - 1) {
        if (left === 0) {
            right++;
            min = Math.min(min, nums[right]);
        } else if (right === len - 1) {
            left--;
            min = Math.min(min, nums[left]);
        } else if (nums[left - 1] > nums[right + 1]) {
            left--;
            min = Math.min(min, nums[left]);
        } else {
            right++;
            min = Math.min(min, nums[right]);
        }
        res = Math.max(res, min * (right - left + 1));
    }

    return res;
};
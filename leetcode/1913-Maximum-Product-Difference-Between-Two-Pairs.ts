function maxProductDifference(nums: number[]): number {
    const len = nums.length;
    nums.sort((a, b) => a - b);
    return nums[len - 1] * nums[len - 2] - nums[0] * nums[1];
};
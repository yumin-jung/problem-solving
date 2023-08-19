function findMaxAverage(nums: number[], k: number): number {
    let sum = _.sum(nums.slice(0, k));
    let max = sum;

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        max = Math.max(max, sum);
    }

    return max / k;
};
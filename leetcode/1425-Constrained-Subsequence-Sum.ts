function constrainedSubsetSum(nums: number[], k: number): number {
    const len = nums.length;
    const queue = [0];

    for (let i = 1; i < len; i++) {
        while (queue[queue.length - 1] < i - k) queue.pop();

        nums[i] = Math.max(nums[i], nums[queue[queue.length - 1]] + nums[i]);

        while (queue.length > 0 && nums[queue[0]] <= nums[i]) queue.shift();

        queue.unshift(i);
    }

    return Math.max(...nums);
};
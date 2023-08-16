function maxSlidingWindow(nums: number[], k: number): number[] {
    let max = [], deque = [];

    for (let i = 0; i < nums.length; i++) {
        while (deque.length && deque[0] < i - k + 1) {
            deque.shift();
        }

        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            max.push(nums[deque[0]]);
        }
    }

    return max;
};
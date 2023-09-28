function sortArrayByParity(nums: number[]): number[] {
    const odd = [], even = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }

    return [...even, ...odd];
};
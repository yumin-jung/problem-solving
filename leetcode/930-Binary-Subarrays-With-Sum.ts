function numSubarraysWithSum(nums: number[], goal: number): number {
    const len = nums.length;
    let res = 0;

    for (let i = 0; i < len; i++) {
        let sum = 0;
        for (let j = i; j < len; j++) {
            sum += nums[j];
            if (sum === goal) res += 1;
            if (sum > goal) break;
        }
    }

    return res;
};
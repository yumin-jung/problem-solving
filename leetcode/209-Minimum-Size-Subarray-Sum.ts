function minSubArrayLen(target: number, nums: number[]): number {
    let min = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let cnt = 1;
        let temp = nums[i];

        if (temp >= target) return 1;

        for (let j = i + 1; j < nums.length; j++) {
            temp += nums[j];
            cnt++;
            if (temp >= target) min = Math.min(min, cnt);
        }
    }

    return min === Infinity ? 0 : min;
};
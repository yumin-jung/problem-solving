const countSubarrays = (nums: number[], minK: number, maxK: number): number => {
    let res = 0;
    let min = -1;
    let max = -1;
    let over = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === minK) min = i;
        if (nums[i] === maxK) max = i;
        if (nums[i] < minK || nums[i] > maxK) over = i;

        let cnt = Math.min(min, max) - over;
        res += Math.max(cnt, 0);
    }

    return res;
};
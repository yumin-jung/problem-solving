function summaryRanges(nums: number[]): string[] {
    const res = [];
    let str = '';
    let temp = nums[0];

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) continue;

        str = (temp === nums[i - 1])
            ? `${temp}`
            : `${temp}->${nums[i - 1]}`

        res.push(str)
        temp = nums[i]
    }

    return res;
};
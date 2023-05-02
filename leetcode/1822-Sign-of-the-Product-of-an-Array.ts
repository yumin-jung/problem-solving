function arraySign(nums: number[]): number {
    const res = nums.reduce((acc, cur) => { return acc * cur }, 1);
    if (res > 0) return 1;
    else if (res < 0) return -1;
    return 0;
};
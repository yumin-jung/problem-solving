function zeroFilledSubarray(nums: number[]): number {
    let cnt = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === 0) {
            i++;
            cnt++;
            res += cnt;
        }
        cnt = 0;
    }
    return res;
};
function numSubseq(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let cnt = 0;
    let powers = [1];
    let res = 1;
    const mod = (10 ** 9 + 7);

    for (let i = 0; i < nums.length; i++) {
        res = (res * 2) % (10 ** 9 + 7);
        powers.push(res);
    }

    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            cnt = (cnt + powers[right - left]) % mod;
            left++;
        } else {
            right--;
        }
    }

    return cnt % mod;
};
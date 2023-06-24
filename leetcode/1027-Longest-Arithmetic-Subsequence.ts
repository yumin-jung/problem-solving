function longestArithSeqLength(nums: number[]): number {
    let n = nums.length;
    let dp = new Array(n + 1).fill(2).map(() => Array(n + 1).fill(2));
    let res = 2;

    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = i - 1; k >= 0; k--) {
                if (nums[i] - nums[k] === nums[j] - nums[i]) {
                    dp[i][j] = Math.max(dp[i][j], dp[k][i] + 1);
                }
            }
            res = Math.max(dp[i][j], res);
        }
    }

    return res;
};
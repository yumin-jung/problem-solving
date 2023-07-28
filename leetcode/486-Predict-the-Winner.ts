function PredictTheWinner(nums: number[]): boolean {
    const len = nums.length;
    const dp = Array.from(Array(nums.length), () => Array(nums.length).fill(0));

    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (i === j) dp[i][j] = nums[i];
            else dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }

    return dp[0][len - 1] >= 0;
};
function numMusicPlaylists(n: number, goal: number, k: number): number {
    const dp = Array(n + 1).fill(0).map(() => Array(goal + 1).fill(0));

    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= goal; j++) {
            dp[i][j] = (dp[i - 1][j - 1] * (n - i + 1) + dp[i][j - 1] * Math.max(i - k, 0)) % (10 ** 9 + 7);
        }
    }

    return dp[n][goal];
};
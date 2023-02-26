const minDistance = (word1: string, word2: string): number => {

    const m = word1.length, n = word2.length;
    const dp = new Array(n + 1).fill(0).map(_ => new Array(m + 1).fill(0));

    dp.map((e, i) => e[0] = i);
    dp[0].map((_, i) => dp[0][i] = i);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (word1[j] === word2[i]) {
                dp[i + 1][j + 1] = dp[i][j]
            } else {
                dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i + 1][j], dp[i][j + 1]) + 1;
            }
        }
    }

    return dp[n][m];
};
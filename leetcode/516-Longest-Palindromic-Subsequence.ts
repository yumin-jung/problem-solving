function longestPalindromeSubseq(s: string): number {
    const dp = [];

    for (let d = 0; d < s.length; d++) {
        dp[d] = Array(s.length).fill(0);
    }

    for (let d = 0; d < s.length; d++) {
        for (let i = 0; i + d < s.length; i++) {
            const j = i + d;
            if (i === j) dp[i][j] = 1;
            else if (s[i] === s[j]) dp[i][j] = j > 0 ? (dp[i + 1][j - 1] + 2) : 0;
            else dp[i][j] = Math.max(dp[i + 1][j], (j > 0 ? dp[i][j - 1] : 0));
        }
    }

    return dp[0][s.length - 1];
};
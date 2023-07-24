function wordBreak(s: string, wordDict: string[]): boolean {
    const dp = [];

    for (let i = 0; i < s.length; i++) {
        dp.push(false);
    }

    dp.push(true);

    for (let j = s.length - 1; j >= 0; j--) {
        for (const word of wordDict) {
            if (s.slice(j, j + word.length) === word && (word.length + j <= s.length)) {
                dp[j] = dp[j + word.length];
            }

            if (dp[j]) break;
        }
    }

    return dp[0];
};
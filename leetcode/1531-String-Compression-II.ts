function getLengthOfOptimalCompression(s: string, k: number): number {
    const len = s.length;
    const dp = new Array(len + 1).fill(0).map(() => new Array(k + 1).fill(0));

    const getLength = (cnt: number) => {
        if (cnt === 1) return 1;
        if (cnt < 10) return 2;
        if (cnt < 100) return 3;
        return 4;
    }

    for (let i = len - 1; i >= 0; i--) {
        for (let j = 0; j <= k; j++) {
            if (i === len) {
                dp[len][j] = 0;
                continue;
            }

            dp[i][j] = (j > 0) ? dp[i + 1][j - 1] : Number.MAX_SAFE_INTEGER;

            let del = j
            let cnt = 0;

            for (let l = i; l < len && del >= 0; l++) {
                if (s[l] === s[i]) {
                    cnt++;
                    dp[i][j] = Math.min(dp[i][j], getLength(cnt) + dp[l + 1][del]);
                } else {
                    del--;
                }
            }
        }
    }

    return dp[0][k];
};
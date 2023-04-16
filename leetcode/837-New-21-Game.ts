function new21Game(n: number, k: number, maxPts: number): number {
    if (k === 0 || n >= k + maxPts) return 1;

    let sum = 1;
    let res = 0;
    const dp = [];

    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        dp[i] = sum / maxPts;

        (i < k) ? sum = sum + dp[i] : res = res + dp[i];

        if (i - maxPts >= 0) sum = sum - dp[i - maxPts];
    }

    return res;
};
function tallestBillboard(rods: number[]): number {
    const dp = { 0: 0 };

    for (const r of rods) {
        for (const [d, h] of Object.entries({ ...dp })) {
            const num = parseInt(d);
            dp[num + r] = Math.max(dp[num + r] || 0, h || 0);
            dp[Math.abs(num - r)] = Math.max(
                dp[Math.abs(num - r)] || 0,
                (h || 0) + Math.min(num, r)
            );
        }
    }

    return dp[0];
};
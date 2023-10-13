function minCostClimbingStairs(cost: number[]): number {
    let res = [...cost];
    res.push(0);

    for (let i = cost.length - 2; i >= 0; i--) {
        res[i] += Math.min(res[i + 1], res[i + 2]);
    }

    return Math.min(res[0], res[1]);
};
function mincostTickets(days: number[], costs: number[]): number {
    const daySet = new Set(days);
    const max = Math.max(...days);
    const res = new Array(max + 1).fill(0);

    for (let i = 1; i <= max; i++) {
        res[i] = res[i - 1];
        if (daySet.has(i)) {
            res[i] = Math.min(res[i - 1] + costs[0],
                res[i - 7 > 0 ? i - 7 : 0] + costs[1],
                res[i - 30 > 0 ? i - 30 : 0] + costs[2]);
        }
    }

    return res[max];
}
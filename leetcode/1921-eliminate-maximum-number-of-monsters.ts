function eliminateMaximum(dist: number[], speed: number[]): number {
    const ratio = dist.map((e, idx) => e / speed[idx]).sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i < ratio.length; i++) {
        if (ratio[i] <= i) return res;
        res++;
    }
    return res;
};
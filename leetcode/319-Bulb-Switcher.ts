function bulbSwitch(n: number): number {
    if (n === 0 || n === 1) return n;

    let res = 0;

    for (let i = 1; i <= Math.sqrt(n); i++) {
        res++;
    }

    return res;
};
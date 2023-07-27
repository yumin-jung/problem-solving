function hammingWeight(n: number): number {
    let res = 0;

    for (let i = 0; i < 32; i++) {
        if ((n & 1) === 1) res += 1;
        n >>= 1;
    }

    return res;
};
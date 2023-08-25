function kthFactor(n: number, k: number): number {
    let num = 0;

    for (let i = 1; i <= n / 2; i += 1) {
        if (n % i === 0 && ++num === k) return i;
    }

    return k - num > 1 ? -1 : n;
};
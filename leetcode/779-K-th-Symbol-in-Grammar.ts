function kthGrammar(n: number, k: number): number {
    if (n === 1) return 0;
    else if (k % 2 === 0) return kthGrammar(n - 1, k / 2) === 0 ? 1 : 0;
    else return kthGrammar(n - 1, (k + 1) / 2) !== 0 ? 1 : 0;
};
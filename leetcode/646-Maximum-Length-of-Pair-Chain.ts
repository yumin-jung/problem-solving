function findLongestChain(pairs: number[][]): number {
    let res = 1;
    let ptr = 0;

    pairs.sort((a, b) => a[1] - b[1]);

    for (let i = 1; i < pairs.length; i++) {
        if (pairs[ptr][1] < pairs[i][0]) {
            res++;
            ptr = i;
        }
    }

    return res;
};
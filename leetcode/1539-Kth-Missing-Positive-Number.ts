function findKthPositive(arr: number[], k: number): number {
    let set = new Set(arr);
    let res = 1;

    while (k !== 0) {
        if (!set.has(res)) k--;
        res++;
    }

    return res - 1;
};
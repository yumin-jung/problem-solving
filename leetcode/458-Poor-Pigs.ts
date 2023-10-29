function poorPigs(buckets: number, minutesToDie: number, minutesToTest: number): number {
    const max = minutesToTest / minutesToDie + 1;
    let res = 0;
    while (max ** res < buckets) ++res;
    return res;
};
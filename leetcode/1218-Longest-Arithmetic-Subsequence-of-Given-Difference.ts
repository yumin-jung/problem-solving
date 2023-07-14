function longestSubsequence(arr: number[], difference: number): number {
    const map = new Map<number, number>();
    let res = 1;

    for (const num of arr) {
        const prev = num - difference;
        if (map.has(prev)) {
            const len = map.get(prev) + 1;
            map.set(num, len);
            res = Math.max(len, res);
        } else {
            map.set(num, 1);
        }
    }

    return res;
};
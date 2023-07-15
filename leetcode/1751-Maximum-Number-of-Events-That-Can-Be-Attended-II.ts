function maxValue(events: number[][], k: number): number {
    let n = events.length;
    let obj = {};

    events.sort((a, b) => a[0] - b[0]);

    const maxVal = (i: number, k: number, prev: number): number => {
        if (k === 0 || i === n) return 0;

        let str = `${i}-${k}-${prev}`;
        if (obj[str]) return obj[str];

        if (prev >= events[i][0]) return obj[str] = maxVal(i + 1, k, prev);

        return obj[str] = Math.max(events[i][2] + maxVal(i + 1, k - 1, events[i][1]), maxVal(i + 1, k, prev));
    }

    return maxVal(0, k, 0);
};
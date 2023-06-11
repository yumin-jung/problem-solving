function minFlips(a: number, b: number, c: number): number {
    const a2 = a.toString(2);
    const b2 = b.toString(2);
    const c2 = c.toString(2);

    let res = 0;
    const n = Math.max(a2.length, b2.length, c2.length);

    for (let i = 1; i <= n; i++) {
        if ((c2.at(-i) ?? '0') === '0') {
            if ((a2.at(-i) ?? '0') === '1') res++;
            if ((b2.at(-i) ?? '0') === '1') res++;
        }
        else {
            if ((a2.at(-i) ?? '0') === '1') continue;
            if ((b2.at(-i) ?? '0') === '1') continue;
            res++;
        }
    }
    return res;
};
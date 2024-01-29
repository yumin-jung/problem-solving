function solution(s) {
    s = s.slice(2, s.length - 2);

    const arr = s.split("},{");
    arr.sort((a, b) => a.length - b.length);

    const set = new Set();
    const res = [];

    for (const e of arr) {
        const nums = e.split(",").map((e) => Number(e));
        for (const n of nums) {
            if (!set.has(n)) {
                set.add(n);
                res.push(n);
            }
        }
    }

    return res;
}
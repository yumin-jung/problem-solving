function buildArray(target: number[], n: number): string[] {
    const res = [];
    let cnt = 0;

    for (let i = 1; i <= n; i++) {
        if (cnt === target.length) break;

        if (target[cnt] === i) {
            res.push("Push");
            cnt++;
        } else {
            res.push("Push");
            res.push("Pop");
        }
    }

    return res;
};
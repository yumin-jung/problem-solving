function maxScore(s: string): number {
    let max = 0;

    for (let i = 1; i < s.length; i++) {
        const left = s.slice(0, i).split("").filter((e) => e === "0").length;
        const right = s.slice(i, s.length + 1).split("").filter((e) => e === "1").length;
        if (left + right > max) max = left + right;
    }

    return max;
};
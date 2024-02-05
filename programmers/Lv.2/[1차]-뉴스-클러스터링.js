function solution(str1, str2) {
    const J = (str) => {
        return str.split("").map((e, i) => {
            return (str[i + 1]) ? (e + str[i + 1]).toLowerCase().replace(/[^a-z]/g, "") : "";
        }).filter(e => e.length === 2);
    }

    const A = J(str1), B = J(str2);

    if (A.length === 0 && B.length === 0) return 65536;

    const set = new Set([...A, ...B]);
    let union = 0, inter = 0;

    for (const s of set) {
        const a = A.filter(e => e === s).length;
        const b = B.filter(e => e === s).length;
        union += Math.max(a, b);
        inter += Math.min(a, b);
    }

    return union === 0 ? 65536 : Math.floor((inter / union) * 65536);
}
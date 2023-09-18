function kWeakestRows(mat: number[][], k: number): number[] {
    const cnt = mat.map((e, i) => ({idx: i, cnt: e.reduce((acc, cur) => acc + cur, 0)}));
    return cnt.sort((a, b)=> a.cnt - b.cnt).slice(0, k).map(e => e.idx);
};
function solution(clothes) {
    const obj = {};
    let res = 1;

    for (const c of clothes) {
        obj[c[1]] = (obj[c[1]] || 0) + 1;
    }

    for (const n in obj) {
        res *= obj[n] + 1;
    }

    return --res;
}
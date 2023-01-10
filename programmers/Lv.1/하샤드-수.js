function solution(x) {
    return x % String(x).split("").reduce((acc, cur) => { return acc + Number(cur) }, 0) === 0;
}
function solution(n) {
    return String(n).split("").map(elem => Number(elem)).reverse();
}
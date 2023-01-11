function solution(a, b) {
    return a < b ? (b - a + 1) * (a + b) / 2 : (a === b ? a : (a - b + 1) * (a + b) / 2);
}
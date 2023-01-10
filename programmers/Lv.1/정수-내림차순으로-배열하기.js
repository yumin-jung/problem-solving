function solution(n) {
    return String(n).split("").sort((a, b) => b / 1 - a / 1).join("") / 1;
}
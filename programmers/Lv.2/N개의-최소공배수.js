function solution(arr) {
    const GCD = (a, b) => b > 0 ? GCD(b, a % b) : a
    return arr.reduce((acc, cur) => acc * cur / GCD(acc, cur), 1)
}
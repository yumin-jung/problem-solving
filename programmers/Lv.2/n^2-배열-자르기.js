function solution(n, left, right) {
    return Array(right - left + 1)
        .fill(0)
        .map((_, i) => Math.max(Math.floor((left + i) / n), (left + i) % n) + 1);
}
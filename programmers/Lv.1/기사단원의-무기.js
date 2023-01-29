function solution(number, limit, power) {
    const answer = [];
    for (let n = 1; n <= number; n++) {
        let d = 1;
        for (let i = 1; i <= n / 2; i++) {
            if (n % i === 0) d += 1;
        }
        answer.push(d);
    }
    return answer.map((n) => n > limit ? power : n).reduce((acc, cur) => acc + cur, 0);
}
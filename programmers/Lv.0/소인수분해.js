function solution(n) {
    let answer = [];
    let num = 2;
    while (n !== 1) {
        if (n % num === 0) {
            answer.push(num);
            n = n / num;
            num = 2;
        } else {
            num += 1;
        }
    }
    return Array.from(new Set(answer));
}
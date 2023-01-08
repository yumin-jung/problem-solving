function solution(num, total) {
    let answer = [];
    let sum = 0;
    for (let i = 0; i < num; i++) {
        answer.push(i);
        sum += i;
    }
    return answer.map((elem) => elem + (total - sum) / num);
}
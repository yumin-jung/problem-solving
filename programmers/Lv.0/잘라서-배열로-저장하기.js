function solution(my_str, n) {
    let answer = [];
    const strArr = my_str.split("");
    let lastIdx = 0;

    for (let i = 0; i < ~~(my_str.length / n); i++) {
        answer.push(my_str.substring(i * n, i * n + n));
        lastIdx = i;
    }
    if (lastIdx * n + n !== my_str.length) {
        answer.push(my_str.substring(lastIdx * n + n, my_str.length));
    }
    return answer;
}
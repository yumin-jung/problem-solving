function solution(a, b, n) {
    let answer = 0;
    let remain = n;
    while (remain >= a) {
        const service = ~~(remain / a) * b;
        answer += service;
        remain = remain % a + service;
    }
    return answer;
}

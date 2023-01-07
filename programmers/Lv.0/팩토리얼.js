function solution(n) {
    let answer = 1;
    let cnt = 1;
    while (answer <= n) {
        cnt += 1;
        answer = answer * cnt;
    }
    return cnt - 1;
}
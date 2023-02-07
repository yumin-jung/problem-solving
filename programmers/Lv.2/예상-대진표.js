function solution(n, a, b) {
    let answer = 0;

    while (a !== b) {
        a = ~~((a + 1) / 2);
        b = ~~((b + 1) / 2);
        answer++;
    }

    return answer;
}
function solution(s) {
    let x = s[0];
    let cnt = 0;
    let answer = 1;
    s.split("").map((e, i) => {
        e === x ? cnt += 1 : cnt -= 1;
        if (cnt === 0 && i + 1 < s.length) {
            x = s[i + 1];
            answer += 1;
        }
    })
    return answer;
}
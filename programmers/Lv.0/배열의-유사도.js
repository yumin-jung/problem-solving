function solution(s1, s2) {
    let answer = 0;
    const set1 = new Set(s1);
    for (let i = 0; i < s2.length; i++) {
        if (set1.has(s2[i])) answer += 1;
    }
    return answer;
}
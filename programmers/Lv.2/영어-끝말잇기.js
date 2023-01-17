function solution(n, words) {
    const wordSet = new Set();
    let answer = [];
    let prevLastChar = words[0][0];
    words.map((e, i) => {
        if (wordSet.has(e) || prevLastChar !== e[0]) {
            answer.push([i % n + 1, ~~(i / n) + 1]);
        } else {
            wordSet.add(e);
            prevLastChar = e[e.length - 1];
        }
    })
    return answer.length === 0 ? [0, 0] : answer[0];
}
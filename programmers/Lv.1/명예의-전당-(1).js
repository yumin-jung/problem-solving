function solution(k, score) {
    let hof = [];
    let answer = [];
    score.map((e, i) => {
        if (i < k) hof.push(e);
        else if (hof[0] < e) {
            hof[0] = e;
        }
        hof.sort((a, b) => a - b);
        answer.push(hof[0]);
    })
    return answer;
}
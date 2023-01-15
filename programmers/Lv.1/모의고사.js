function solution(answers) {
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let score = [0, 0, 0];
    answers.map((e, i) => {
        if (e === supo1[i % supo1.length]) score[0] += 1;
        if (e === supo2[i % supo2.length]) score[1] += 1;
        if (e === supo3[i % supo3.length]) score[2] += 1;
    })
    const max = JSON.parse(JSON.stringify(score)).sort((a, b) => b - a)[0];
    let answer = [];
    if (score[0] === max) answer.push(1);
    if (score[1] === max) answer.push(2);
    if (score[2] === max) answer.push(3);
    return answer;
}
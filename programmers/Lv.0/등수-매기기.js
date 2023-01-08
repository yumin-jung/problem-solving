// 첫 풀이
function solution(score) {
    const sum = score.map((elem) => {
        return elem[0] + elem[1];
    })

    let sumWithIdx = [];
    for (let s in sum) {
        sumWithIdx.push([s, sum[s]]);
    }
    sumWithIdx.sort((a, b) => b[1] - a[1]);

    let rank = 1;
    let max = sumWithIdx[0][1];
    let cnt = 1;
    sumWithIdx[0][1] = rank;
    for (let i = 1; i < sumWithIdx.length; i++) {
        if (sumWithIdx[i][1] === max) {
            sumWithIdx[i][1] = rank;
            cnt += 1;
        } else {
            max = sumWithIdx[i][1];
            rank += cnt;
            sumWithIdx[i][1] = rank;
            cnt = 1;
        }
    }
    return sumWithIdx.sort((a, b) => a[0] - b[0]).map(e => e[1]);
}

// 두 번째 풀이
function solution(score) {
    return score.map((e) => {
        return score.map((x) => x[0] + x[1]).sort((a, b) => b - a).indexOf(e[0] + e[1]) + 1;
    });
}
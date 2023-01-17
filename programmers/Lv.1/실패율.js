function solution(N, stages) {
    let failRate = [];
    let highStageUser = stages.length
    for (let i = 1; i <= N; i++) {
        let curStageUser = stages.filter(e => e === i).length
        failRate.push([i, curStageUser / highStageUser])
        highStageUser -= curStageUser
    }
    failRate.sort((a, b) => b[1] - a[1])
    return failRate.map(e => e[0]);
}
function solution(lines) {
    let answer = 0;
    let lineDict = {};
    for (let line of lines) {
        for (let i = line[0]; i < line[1]; i++) {
            if (lineDict[i] === undefined) {
                lineDict[i] = 1;
            } else {
                lineDict[i] += 1;
            }
        }
    }

    for (let elem in lineDict) {
        if (lineDict[elem] > 1) answer += 1;
    }
    return answer;
}
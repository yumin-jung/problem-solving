function solution(dartResult) {
    let answer = [];
    let num = 0;

    for (let i = 0; i < dartResult.length; i++) {
        if (isNaN(dartResult[i])) {
            if (dartResult[i] === 'S') answer.push(Math.pow(num, 1));
            else if (dartResult[i] === 'D') answer.push(Math.pow(num, 2));
            else if (dartResult[i] === 'T') answer.push(Math.pow(num, 3));
            else if (dartResult[i] === '*') {
                answer[answer.length - 1] *= 2;
                answer[answer.length - 2] *= 2;
            }
            else if (dartResult[i] === '#') answer[answer.length - 1] *= -1;
        } else {
            if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
                num = 10;
                i += 1;
            }
            else num = dartResult[i];
        }
    }

    return answer.reduce((acc, cur) => { return acc + cur }, 0);
}
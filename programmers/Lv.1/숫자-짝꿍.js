function solution(X, Y) {
    let answer = '';
    X = X.split("");
    Y = Y.split("");
    for (let i = 9; i >= 0; i--) {
        const numX = X.filter(a => a / 1 === i).length;
        const numY = Y.filter(a => a / 1 === i).length;
        answer += String(i).repeat(Math.min(numX, numY));
    }
    if (answer === '') return "-1";
    if (answer / 1 === 0) return "0";
    return answer;
}
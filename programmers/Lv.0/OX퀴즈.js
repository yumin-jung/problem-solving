function solution(quiz) {
    let answer = [];
    for (let q of quiz) {
        q = q.split(" ");
        if (q[1] === "+") {
            Number(q[0]) + Number(q[2]) === Number(q[4]) ? answer.push("O") : answer.push("X");
        } else {
            Number(q[0]) - Number(q[2]) === Number(q[4]) ? answer.push("O") : answer.push("X");
        }
    }
    return answer;
}
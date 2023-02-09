function solution(operations) {
    let answer = [];
    operations.map((e) => {
        if (e === "D 1") answer.pop();
        else if (e === "D -1") answer.shift();
        else {
            const operation = e.split(" ");
            if (operation[0] === "I") answer.push(Number(operation[1]));
            answer.sort((a, b) => a - b);
        }
    })
    return answer.length === 0 ? [0, 0] : [answer[answer.length - 1], answer[0]];
}
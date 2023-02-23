const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function (line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function () {
    solution(input);
    process.exit();
});

const solution = input => {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    const C = parseInt(input[2]);
    console.log(A + B + C);
};
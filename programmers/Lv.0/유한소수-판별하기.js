function solution(a, b) {
    function getGCD(n1, n2) {
        return n2 > 0 ? getGCD(n2, n1 % n2) : n1;
    }

    let denominator = b / getGCD(a, b)
    if (denominator === 1) return 1;

    while (denominator % 2 === 0) denominator = denominator / 2;
    while (denominator % 5 === 0) denominator = denominator / 5;

    if (denominator !== 1) return 2;
    else return 1;
}
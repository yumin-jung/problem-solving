function solution(denum1, num1, denum2, num2) {
    function getGCD(a, b) {
        return b === 0 ? a : getGCD(b, a % b);
    }
    const denum = denum1 * num2 + denum2 * num1;
    const num = num1 * num2;
    const gcd = getGCD(denum, num)

    return [denum / gcd, num / gcd];
}
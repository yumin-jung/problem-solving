function isHappy(n: number): boolean {
    let sum = 0;

    while (n) {
        let r = n % 10;
        sum += r ** 2;
        n = ~~(n / 10);
    }

    return sum > 6 ? isHappy(sum) : sum === 1;
};
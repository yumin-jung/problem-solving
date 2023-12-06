function totalMoney(n: number): number {
    let week = 1;
    let money = 1;
    let res = 0;

    for (let i = 1; i <= n; i++) {
        res += money++;
        if (i % 7 === 0) {
            money = ++week;
        }
    }

    return res;
};
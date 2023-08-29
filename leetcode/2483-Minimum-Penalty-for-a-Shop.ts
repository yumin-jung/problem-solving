function bestClosingTime(customers: string): number {
    let res = 0;
    let profit = 0;
    let max = 0;

    for (let t = 0; t < customers.length; t++) {
        profit += customers[t] === 'Y' ? 1 : -1;
        if (profit > max) {
            max = profit;
            res = t + 1;
        }
    }

    return res;
};
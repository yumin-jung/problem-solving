function buyChoco(prices: number[], money: number): number {
    let first = Math.min(...prices);
    prices.splice(prices.indexOf(first), 1);
    let second = Math.min(...prices);

    return first + second > money ? money : money - (first + second);
};
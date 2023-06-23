function maxProfit(prices: number[], fee: number): number {
    let profit = 0;
    let temp = -Infinity;

    for (let i = 0; i < prices.length; i++) {
        profit = Math.max(profit, temp + prices[i] - fee);
        temp = Math.max(temp, profit - prices[i]);
    }

    return profit;
};
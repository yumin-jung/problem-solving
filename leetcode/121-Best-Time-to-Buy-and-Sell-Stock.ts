const maxProfit = (prices: number[]): number => {

    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {

        const profit = prices[i] - minPrice;

        maxProfit = Math.max(maxProfit, profit);

        if (prices[i] < minPrice) minPrice = prices[i];
    }

    return maxProfit;
};
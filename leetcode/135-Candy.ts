function candy(ratings: number[]): number {
    const len = ratings.length;
    let candies = new Array(len).fill(1);

    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (let i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1;
        }
    }

    return candies.reduce((acc, cur) => acc + cur, 0);
};
function ways(pizza: string[], k: number): number {
    const apple = new Array(pizza.length + 1).fill(0).map(_ => Array(pizza[0].length + 1).fill(0));
    const memo = apple.map(r => r.map(_ => Array(k + 1).fill(-1)));
    const dp = (i: number, j: number, k: number, res = 0) => {
        if (k === 1) return apple[i][j] > 0 ? 1 : 0;
        if (apple[i][j] === 0) return 0;
        if (memo[i][j][k] >= 0) return memo[i][j][k];

        for (let r = i; r < pizza.length - 1; r++) {
            if (apple[r + 1][j] != apple[i][j]) res = (res + dp(r + 1, j, k - 1)) % (1e9 + 7);
        }

        for (let c = j; c < pizza[0].length - 1; c++) {
            if (apple[i][c + 1] != apple[i][j]) res = (res + dp(i, c + 1, k - 1)) % (1e9 + 7);
        }

        return memo[i][j][k] = res;
    };

    for (let i = pizza.length - 1; i >= 0; i--) {
        for (let j = pizza[0].length - 1; j >= 0; j--) {
            apple[i][j] = apple[i][j + 1] + apple[i + 1][j] - apple[i + 1][j + 1];
            apple[i][j] += Number(pizza[i][j] === 'A');
        }
    }

    return dp(0, 0, k);
};
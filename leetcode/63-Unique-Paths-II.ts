function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const x = obstacleGrid.length;
    const y = obstacleGrid[0].length;
    const dp = new Array(x).fill(0).map(() => new Array(y).fill(0));

    if (obstacleGrid[0][0] === 0) dp[0][0] = 1;

    for (let i = 1; i < x; i++) {
        dp[i][0] = obstacleGrid[i][0] === 0 ? dp[i - 1][0] : 0;
    }

    for (let j = 1; j < y; j++) {
        dp[0][j] = obstacleGrid[0][j] === 0 ? dp[0][j - 1] : 0;
    }

    for (let i = 1; i < x; i++) {
        for (let j = 1; j < y; j++) {
            if (obstacleGrid[i][j] === 0) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            else dp[i][j] = 0;
        }
    }

    return dp[x - 1][y - 1];
};
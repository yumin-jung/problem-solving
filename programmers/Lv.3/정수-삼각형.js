function solution(triangle) {
    const dp = triangle.slice();

    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }

    return dp[0][0];
}
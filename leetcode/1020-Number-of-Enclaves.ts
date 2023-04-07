function numEnclaves(grid: number[][]): number {
    const n = grid.length
    const m = grid[0].length;
    let res = 0;

    const dfs = (i: number, j: number) => {
        if (i < 0 || i >= n || j < 0 || j >= m || !grid[i][j]) return;
        grid[i][j] = 0;

        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };

    for (let i = 0; i < n; i++) {
        if (grid[i][0]) dfs(i, 0)
        if (grid[i][m - 1]) dfs(i, m - 1)
    }

    for (let j = 0; j < m; j++) {
        if (grid[0][j]) dfs(0, j);
        if (grid[n - 1][j]) dfs(n - 1, j);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            grid[i][j] && res++;
        }
    }

    return res;
};
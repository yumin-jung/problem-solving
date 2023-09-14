function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]];
    if (numRows === 1) return [[1], [1, 1]];

    const res = [[1], [1, 1]];

    for (let r = 2; r < numRows; r++) {
        const row = [1];

        for (let n = 1; n < r; n++) {
            row.push(res[r - 1][n - 1] + res[r - 1][n]);
        }

        row.push(1);
        res.push(row);
    }

    return res;
};
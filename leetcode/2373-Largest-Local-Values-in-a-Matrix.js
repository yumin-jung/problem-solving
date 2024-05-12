/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let res = [];

    for (let i = 1; i < grid.length - 1; i++) {
        let row = [];
        for (let j = 1; j < grid.length - 1; j++) {
            let max = 1;
            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    max = Math.max(max, grid[k][l]);
                }
            }
            row.push(max);
        }
        res.push(row);
    }

    return res;
};
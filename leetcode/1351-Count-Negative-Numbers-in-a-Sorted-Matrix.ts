function countNegatives(grid: number[][]): number {
    return grid.reduce((acc, cur) => {
        return acc + cur.filter((e2) => {
            return e2 < 0
        }).length
    }, 0);
};
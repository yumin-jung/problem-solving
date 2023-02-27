/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

const construct = (grid: number[][]): Node | null => {
    const dfs = (grid: number[][], x: number, y: number, N: number): Node | null => {
        let isLeaf = true;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (grid[x][y] !== grid[x + i][y + j]) isLeaf = false;
            }
        }
        if (isLeaf) return new Node(grid[x][y] === 1, true, null, null, null, null);
        return new Node(true, false,
            dfs(grid, x, y, N / 2),
            dfs(grid, x, y + N / 2, N / 2),
            dfs(grid, x + N / 2, y, N / 2),
            dfs(grid, x + N / 2, y + N / 2, N / 2));
    }
    return dfs(grid, 0, 0, grid.length);
};
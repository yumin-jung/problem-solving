/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let r = new Set(), c = new Set(), cell = new Set();
        let rIdx = 3 * Math.floor(i / 3), cIdx = 3 * (i % 3);
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.' && r.has(board[i][j])) {
                return false;
            }
            r.add(board[i][j]);
            if (board[j][i] !== '.' && c.has(board[j][i])) {
                return false;
            }
            c.add(board[j][i]);
            if (board[rIdx + Math.floor(j / 3)][cIdx + Math.floor(j % 3)] !== '.'
            && cell.has(board[rIdx + Math.floor(j / 3)][cIdx + (j % 3)])) {
                    return false;
            }
            cell.add(board[rIdx + Math.floor(j / 3)][cIdx + (j % 3)]);
        }
    }
    return true;
};
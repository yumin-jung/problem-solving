function solution(board) {
    const newBoard = JSON.parse(JSON.stringify(board));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === 1) {
                if (i - 1 >= 0) {
                    if (j - 1 >= 0) newBoard[i - 1][j - 1] = 1;
                    if (j + 1 < board.length) newBoard[i - 1][j + 1] = 1;
                    newBoard[i - 1][j] = 1;
                }
                if (j - 1 >= 0) newBoard[i][j - 1] = 1;
                if (j + 1 < board.length) newBoard[i][j + 1] = 1;
                if (i + 1 < board.length) {
                    if (j - 1 >= 0) newBoard[i + 1][j - 1] = 1;
                    if (j + 1 < board.length) newBoard[i + 1][j + 1] = 1;
                    newBoard[i + 1][j] = 1;
                }
            }
        }
    }
    return board.length ** 2 -
        newBoard.reduce((a1, c1) => { return a1 + c1.reduce((a2, c2) => { return a2 + c2 }, 0) }, 0);
}
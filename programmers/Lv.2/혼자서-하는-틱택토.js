const solution = (board) => {
    const checkWin = (line, sign) => {
        winCases = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 5, 9],
            [2, 5, 8],
            [3, 5, 7],
            [1, 4, 7],
            [3, 6, 9]
        ]

        for (const [a, b, c] of winCases) {
            if (line[a - 1] === sign && line[b - 1] === sign && line[c - 1] === sign) return true;
        }

        return false;
    }

    board = board.join("");

    let O = 0, X = 0;

    for (let i = 0; i < board.length; i++) {
        if (board[i] === "O") O++;
        else if (board[i] === "X") X++;
    }

    if (O < X || O - 1 > X) return 0;

    const OOO = checkWin(board, "O");
    const XXX = checkWin(board, "X");

    if (OOO && XXX) return 0;
    else if (OOO && O - 1 !== X) return 0;
    else if (XXX && O !== X) return 0;

    return 1;
}
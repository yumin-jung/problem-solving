function diagonalSum(mat: number[][]): number {
    if (mat.length == 1) return mat[0][0];

    let res = 0;

    for (let i = 0, j = mat.length - 1; i < mat.length; i++, j--) {
        if (i !== j) {
            res += mat[i][j];
        }
        res += mat[i][i];
    }

    return res;
};
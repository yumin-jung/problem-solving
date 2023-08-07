function searchMatrix(matrix: number[][], target: number): boolean {
    let idx = matrix.length - 1;

    for (let i = 0; i < matrix.length - 1; i++) {
        if (target >= matrix[i][0] && target < matrix[i + 1][0]) {
            idx = i;
            break;
        }
    }

    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[idx][j] === target) {
            return true;
        }
    }

    return false;
};
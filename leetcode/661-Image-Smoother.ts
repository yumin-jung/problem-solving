function imageSmoother(img: number[][]): number[][] {
    const m = img.length;
    const n = img[0].length;
    const res = [];

    for (let i = 0; i < m; i++) {
        res[i] = [];
        for (let j = 0; j < n; j++) {
            const neighbors = [
                img[i - 1]?.[j - 1], img[i - 1]?.[j], img[i - 1]?.[j + 1],
                img[i]?.[j - 1], img[i]?.[j], img[i]?.[j + 1],
                img[i + 1]?.[j - 1], img[i + 1]?.[j], img[i + 1]?.[j + 1],
            ].filter(e => e !== undefined);
            const avg = Math.floor(neighbors.reduce((a, c) => a + c, 0) / neighbors.length);
            res[i][j] = avg;
        }
    }

    return res;
};
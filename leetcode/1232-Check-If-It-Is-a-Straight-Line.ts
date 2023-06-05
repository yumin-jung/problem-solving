function checkStraightLine(coordinates: number[][]): boolean {
    if (coordinates.length <= 2) return true;

    for (let i = 0; i < coordinates.length - 2; i++) {
        const [x1, y1] = coordinates[i];
        const [x2, y2] = coordinates[i + 1];
        const [x3, y3] = coordinates[i + 2];

        if ((x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1)) return false;
    }

    return true;
}
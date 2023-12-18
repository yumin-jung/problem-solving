function destCity(paths: string[][]): string {
    const map = {};
    for (const [from, to] of paths) map[from] = to;
    for (const [_, to] of paths) if (!map[to]) return to;
};
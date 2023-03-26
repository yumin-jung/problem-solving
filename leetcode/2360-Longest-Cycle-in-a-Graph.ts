function longestCycle(edges: number[]): number {
    let max = -1;
    const visited = new Set();

    for (let i = 0; i < edges.length; i++) {
        if (visited.has(i)) continue;

        let temp = i, dist = 0;
        const paths = new Map();

        while (temp !== -1) {
            if (paths.has(temp)) {
                max = Math.max(max, dist - paths.get(temp));
                break;
            }
            if (visited.has(temp)) break;
            visited.add(temp);
            paths.set(temp, dist);
            dist++;
            temp = edges[temp];
        }
    }

    return max;
};
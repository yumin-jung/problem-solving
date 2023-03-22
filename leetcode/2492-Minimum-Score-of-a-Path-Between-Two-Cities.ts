function minScore(n: number, roads: number[][]): number {
    const map = new Map();

    for (const [a, b, d] of roads) {
        if (!map.has(a)) map.set(a, []);
        if (!map.has(b)) map.set(b, []);
        map.get(a).push([b, d]);
        map.get(b).push([a, d]);
    }

    const visited = { 1: true };
    const queue = [1];
    let min = Number.MAX_SAFE_INTEGER;

    while (queue.length) {
        const cur = queue.shift();

        if (map.has(cur)) {
            for (const [next, d] of map.get(cur)) {
                min = Math.min(d, min);
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }
    }

    return min === Number.MAX_SAFE_INTEGER ? -1 : min;
};
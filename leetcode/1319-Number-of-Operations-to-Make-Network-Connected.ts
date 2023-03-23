function makeConnected(n: number, connections: number[][]): number {
    if (connections.length < n - 1) return -1;

    const network = new Array(n).fill(0).map((_, i) => i);

    const find = (a: number) => {
        if (a === network[a]) return a;
        network[a] = find(network[a]);
        return network[a];
    }

    const union = (a: number, b: number) => {
        const ua = find(a), ub = find(b);
        if (ua !== ub) network[ua] = ub;
    }

    for (let c of connections) {
        const [from, to] = c;
        union(from, to);
    }

    for (let i = 0; i < n; i++) {
        find(i);
    }

    const netCount = new Set(network);

    return netCount.size - 1;
};
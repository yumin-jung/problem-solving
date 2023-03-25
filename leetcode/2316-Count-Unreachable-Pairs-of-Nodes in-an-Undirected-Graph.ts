function countPairs(n: number, edges: number[][]): number {
    const graph = new Array(n).fill(0).map((_) => []);

    for (const [from, to] of edges) {
        graph[from].push(to);
        graph[to].push(from);
    }

    const counts = [];
    const visited = new Set([]);

    const dfs = (n: number, graph: number[][], visited: Set<number>) => {
        let cnt = 1;

        for (const node of graph[n]) {
            if (visited.has(node)) continue;
            visited.add(node);
            cnt += dfs(node, graph, visited);
        }

        return cnt;
    }

    for (let i = 0; i < n; i++) {
        if (visited.has(i)) continue;
        visited.add(i);
        const cnt = dfs(i, graph, visited);
        counts.push(cnt);
    }

    let res = 0;
    let sum = counts[0];

    for (let i = 1; i < counts.length; i++) {
        res += sum * counts[i];
        sum += counts[i];
    }

    return res;
};
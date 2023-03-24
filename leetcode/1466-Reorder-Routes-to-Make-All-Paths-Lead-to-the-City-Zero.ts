function minReorder(n: number, connections: number[][]): number {
    let graph = new Map<number, number[]>();

    for (const [from, to] of connections) {
        if (!graph[from]) graph[from] = [];
        if (!graph[to]) graph[to] = [];

        graph[from].push([to, 1]);
        graph[to].push([from, 0]);
    }

    let visited = new Set<number>();
    let res = 0;

    const dfs = (i: number) => {
        if (visited[i]) return;
        visited[i] = true;
        for (const c of graph[i]) {
            if (!visited[c[0]]) res += c[1];
            dfs(c[0]);
        }
    }

    dfs(0);

    return res;
};
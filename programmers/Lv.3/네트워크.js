function solution(n, computers) {
    const dfs = (node, visited, computers) => {
        visited[node] = true;
        for (let i = 0; i < computers.length; i++) {
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i, visited, computers);
            }
        }
    }

    const visited = [];
    let res = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i, visited, computers);
            res++;
        }
    }

    return res;
}
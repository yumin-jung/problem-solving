function solution(numbers, target) {
    let res = 0;

    const dfs = (cnt, sum) => {
        if (cnt === numbers.length) {
            if (target === sum) res++;
            return;
        }
        dfs(cnt + 1, sum + numbers[cnt]);
        dfs(cnt + 1, sum - numbers[cnt]);
    }

    dfs(0, 0);

    return res;
}
function combine(n: number, k: number): number[][] {
    let res = [];

    const backtracking = (start: number, arr: number[]) => {
        if (arr.length === k) {
            res.push([...arr]);
            return;
        }

        if (start > n) return;

        arr.push(start);
        backtracking(start + 1, arr);
        arr.pop();
        backtracking(start + 1, arr);
    }

    backtracking(1, []);

    return res;
};
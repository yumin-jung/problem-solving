function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];

    const map = new Map<string, string>([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz']
    ])

    const res = [];

    const backtracking = (cur: string, num: number) => {
        if (num === digits.length) {
            res.push(cur);
            return;
        }

        const letters = map.get(digits[num])!;

        for (const l of letters) {
            backtracking(cur + l, num + 1);
        }
    }

    backtracking('', 0);

    return res;
};
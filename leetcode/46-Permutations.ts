function permute(nums: number[]): number[][] {
    let res = [];

    const rec = (num: number, arr: number[]) => {
        arr.push(num);

        if (arr.length === nums.length) {
            res.push(arr);
            return;
        }

        for (let val of nums) {
            if (arr.includes(val)) continue;
            rec(val, arr.slice(0));
        }
    }

    for (const n of nums) {
        rec(n, []);
    }

    return res;
};
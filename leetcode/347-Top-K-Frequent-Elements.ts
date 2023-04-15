function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) === undefined) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }

    const arr = [...map];
    arr.sort((a, b) => b[1] - a[1]);

    const res = [];

    for (let i = 0; i < k; i++) {
        res.push(arr[i][0]);
    }

    return res;
};
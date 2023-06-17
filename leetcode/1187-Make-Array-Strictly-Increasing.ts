function makeArrayIncreasing(arr1: number[], arr2: number[]): number {
    arr1.unshift(-1);
    arr1.push(Infinity);
    arr2 = Array.from(new Set(arr2)).sort((a, b) => a - b);

    const len = arr1.length;
    let dp = new Array(len).fill(Infinity);

    dp[0] = 0;

    function search(v: number) {
        let ans = 0;
        let max = arr2.length - 1;

        while (ans <= max) {
            let m = ans + ((max - ans) >> 1)
            arr2[m] < v ? (ans = m + 1) : (max = m - 1)
        }

        return ans
    }

    for (let i = 1; i < len; i++) {
        let j = search(arr1[i]);

        for (let k = 1; k <= Math.min(i - 1, j); k++) {
            if (arr1[i - k - 1] < arr2[j - k]) {
                dp[i] = Math.min(dp[i], dp[i - k - 1] + k);
            }
        }

        if (arr1[i - 1] < arr1[i]) {
            dp[i] = Math.min(dp[i], dp[i - 1])
        }
    }

    return isFinite(dp[len - 1]) ? dp[len - 1] : -1;
};
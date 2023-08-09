function minimizeMax(nums: number[], p: number): number {

    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums[nums.length - 1] - nums[0];

    const isPair = (nums: number[], mid: number, p: number) => {

        let cnt = 0;

        for (let i = 0; i < nums.length - 1 && cnt < p; i++) {
            if (nums[i + 1] - nums[i] <= mid) {
                cnt += 1;
                i++;
            }
        }

        return cnt >= p;
    }

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        isPair(nums, mid, p) ? right = mid : left = mid + 1;
    }

    return left;
};
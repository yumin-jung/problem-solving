const searchInsert = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const mid = ~~((left + right) / 2);
        nums[mid] < target ? left = mid + 1 : right = mid;
    }

    return left;
};
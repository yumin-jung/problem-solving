const singleNonDuplicate = (nums: number[]): number => {
    let left = 0, right = nums.length;
    let mid: number;

    while (left < right) {
        mid = ~~((left + right) / 2);
        if (mid % 2) mid--;
        nums[mid] === nums[mid + 1] ? left = mid + 2 : right = mid;
    }

    return nums[left];
};
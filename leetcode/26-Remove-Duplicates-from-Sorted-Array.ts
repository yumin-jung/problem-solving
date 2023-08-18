function removeDuplicates(nums: number[]): number {
    const uniqueArray = Array.from(new Set(nums));

    const len = uniqueArray.length;

    for (let i = 0; i < len; i++) {
        nums[i] = uniqueArray[i];
    }

    return len;
};
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let len = nums.length;
    while (len > 0) {
        if (nums[len - 1] === 0) {
            const copy = nums.splice(len - 1, 1);
            nums.push(...copy);
        }
        len -= 1;
    }
};
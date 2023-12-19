function maxProduct(nums: number[]): number {
    let first = Math.max(...nums);
    nums.splice(nums.indexOf(first), 1);
    let second = Math.max(...nums);
    return (first - 1) * (second - 1);
};
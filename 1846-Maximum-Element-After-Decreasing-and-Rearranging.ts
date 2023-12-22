function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    return arr.sort((a, b) => a - b).reduce((acc, cur) => Math.min(acc + 1, cur), 0);
};
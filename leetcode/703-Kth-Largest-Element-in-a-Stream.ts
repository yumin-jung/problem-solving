class KthLargest {
    arr: number[];
    k: number;

    constructor(k: number, nums: number[]) {
        this.arr = nums;
        this.k = k;
    }

    add(val: number): number {
        this.arr.push(val);
        this.arr.sort((a, b) => b - a);
        return this.arr[this.k - 1];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
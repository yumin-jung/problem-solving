class SmallestInfiniteSet {
    mySet: Set<number>;

    constructor() {
        this.mySet = new Set();
        for (let i = 1; i <= 1000; i++) this.mySet.add(i);
    }

    popSmallest(): number {
        const min = Math.min(...Array.from(this.mySet));
        this.mySet.delete(min);
        return min;
    }

    addBack(num: number): void {
        this.mySet.add(num);
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
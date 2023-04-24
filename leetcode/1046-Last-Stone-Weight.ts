function lastStoneWeight(stones: number[]): number {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        const res = stones.pop() - stones.pop();
        if (res !== 0) stones.push(res);
    }
    return stones.length > 0 ? stones[0] : 0;
};
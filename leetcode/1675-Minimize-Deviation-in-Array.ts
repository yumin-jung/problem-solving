const minimumDeviation = (nums: number[]): number => {

    const maxPQ = new MaxPriorityQueue();

    nums.map((e) => {
        e % 2 === 0 ? maxPQ.enqueue(e, e) : maxPQ.enqueue(2 * e, 2 * e);
    });

    let deviation = maxPQ.front().element - maxPQ.back().element;

    while (maxPQ.front().element % 2 === 0) {

        const { element } = maxPQ.dequeue();

        maxPQ.enqueue(element / 2, element / 2);

        deviation = Math.min(deviation, maxPQ.front().element - maxPQ.back().element);
    }

    return deviation;
};
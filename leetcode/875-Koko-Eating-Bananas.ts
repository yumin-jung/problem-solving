const getTime = (piles: number[], k: number): number => {
    let t = 0;

    for (let i = 0; i < piles.length; i++) {
        t += Math.floor((piles[i] - 1) / k) + 1;
    }

    return t;
}

const minEatingSpeed = (piles: number[], h: number): number => {
    let start = 0;
    let end = getTime(piles, 1);

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (getTime(piles, mid) > h) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return start;
};
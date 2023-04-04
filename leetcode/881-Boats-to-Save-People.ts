function numRescueBoats(people: number[], limit: number): number {
    const sorted = people.sort((a, b) => a - b);
    let len = sorted.length - 1;

    for (let i = 0; i <= len; len--) {
        if (sorted[i] + sorted[len] <= limit) i++;
    }

    return sorted.length - len - 1;
};
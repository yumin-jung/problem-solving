function maxSatisfaction(satisfaction: number[]): number {
    const sorted = satisfaction.sort((a, b) => b - a);

    let sum = 0, res = 0;
    for (let i = 0; i < sorted.length; i++) {
        sum += sorted[i];
        if (sum < 0) break;
        res += sum;
    }

    return res;
};
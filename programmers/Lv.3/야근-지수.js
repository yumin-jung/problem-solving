function solution(n, works) {
    if (works.reduce((acc, cur) => acc + cur) <= n) return 0;

    const sortedWorks = works.sort((a, b) => a - b);

    while (n) {
        const maxWork = sortedWorks[sortedWorks.length - 1];

        for (let i = sortedWorks.length - 1; i >= 0; i--) {
            if (sortedWorks[i] >= maxWork) {
                sortedWorks[i]--;
                n--;
            }
            if (n === 0) break;
        }
    }

    return sortedWorks.reduce((acc, cur) => acc + cur ** 2, 0);
}
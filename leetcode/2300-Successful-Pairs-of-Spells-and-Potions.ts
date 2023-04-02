function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const binarySearch = (spell: number) => {
        let start = 0;
        let end = potions.length - 1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (spell * potions[mid] < success) start = mid + 1;
            else end = mid - 1;
        }
        return end;
    }

    const res = new Array(spells.length);

    potions.sort((a, b) => a - b);

    for (let i = 0; i < spells.length; i++) {
        res[i] = potions.length - 1 - binarySearch(spells[i]);
    }

    return res;
};
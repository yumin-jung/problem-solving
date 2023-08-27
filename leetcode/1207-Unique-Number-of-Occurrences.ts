function uniqueOccurrences(arr: number[]): boolean {
    let map = new Map<number, number>();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], 1 + (map.get(arr[i]) || 0));
    }

    let vals = [];

    for (let [_, val] of map) {
        if (vals.includes(val)) return false;
        vals.push(val);
    }

    return true;
};
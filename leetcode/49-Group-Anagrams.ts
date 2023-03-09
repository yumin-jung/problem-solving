const groupAnagrams = (strs: string[]): string[][] => {

    if (strs.length === 1) return [strs];

    let map = new Map();

    strs.map((e) => {
        const sorted = e.split("").sort().join("");
        if (map.has(sorted)) {
            map.set(sorted, [...map.get(sorted), e]);
        } else {
            map.set(sorted, [e]);
        }
    })

    let res = [];

    for (const e of map) {
        res.push(e[1]);
    }

    return res;
};
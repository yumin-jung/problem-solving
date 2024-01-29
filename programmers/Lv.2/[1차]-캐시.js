function solution(cacheSize, cities) {
    const cache = new Array(cacheSize).fill(0);
    let LRU = new Array(cacheSize).fill(0).map((_, i) => cacheSize - i);
    let res = 0;

    for (const city of cities) {
        const c = city.toLowerCase();
        if (cache.includes(c)) {
            res += 1;
            const idx = cache.indexOf(c);
            LRU = LRU.map((e) => e < LRU[idx] ? e + 1 : e);
            LRU[cache.indexOf(c)] = 1;
        } else {
            res += 5;
            const idx = LRU.indexOf(cacheSize);
            cache[idx] = c;
            LRU = LRU.map((e) => e < LRU[idx] ? e + 1 : e);
            LRU[cache.indexOf(c)] = 1;
        }
    }

    return res;
}
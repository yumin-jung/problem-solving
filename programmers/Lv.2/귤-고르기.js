function solution(k, tangerine) {
    const map = new Map();
    const len = tangerine.length;

    for (i = 0; i < len; i++) {
        map.set(tangerine[i], (map.get(tangerine[i]) || 0) + 1);
    }

    const freqArr = [...map.values()].sort((a, b) => a - b);
    let res = 0;

    while (k > 0) {
        k -= freqArr.pop();
        res++;
    }

    return res;
}
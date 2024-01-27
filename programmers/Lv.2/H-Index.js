function solution(citations) {
    const len = citations.length;
    const max = Math.max(...citations);
    const arr = new Array(max + 1).fill(0);
    let cnt = 0;

    for (let i = 0; i < len; i++) {
        arr[citations[i]]++;
    }

    for (let i = max; i >= 0; i--) {
        cnt += arr[i];
        if (cnt >= i) return i;
    }

    return 0;
}
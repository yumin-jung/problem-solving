function solution(absolutes, signs) {
    return signs.reduce((acc, cur, idx) => {
        return cur ? acc + absolutes[idx] : acc - absolutes[idx]
    }, 0);
}
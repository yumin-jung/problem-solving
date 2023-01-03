function solution(i, j, k) {
    let arr = "";
    for (let n = i; n <= j; n++) {
        arr += String(n);
    }
    return arr.split("").filter((elem) => {
        return Number(elem) === k
    }).length;
}
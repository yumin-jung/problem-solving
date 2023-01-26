function solution(n) {
    const num = n.toString(2).split("").filter((e) => e === "1").length;
    n += 1;
    while (n.toString(2).split("").filter((e) => e === "1").length !== num) {
        n += 1;
    }
    return n;
}
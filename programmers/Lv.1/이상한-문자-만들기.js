function solution(s) {
    return s.split(" ").map((e) => {
        return e.split("").map((e, i) => {
            return i % 2 === 0 ? e.toUpperCase() : e.toLowerCase();
        }).join("");
    }).join(" ");
}
function solution(my_string, n) {
    return my_string.split("").map((elem) => {
        return elem.repeat(n);
    }).join("");
}
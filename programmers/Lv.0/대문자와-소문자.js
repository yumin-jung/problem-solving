function solution(my_string) {
    return my_string.split("").map((elem) => {
        if (elem.toLowerCase() === elem) return elem.toUpperCase();
        else return elem.toLowerCase();
    }).join("");
}
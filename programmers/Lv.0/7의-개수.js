function solution(array) {
    return array.join("").split("").filter(elem => elem === "7").length;
}
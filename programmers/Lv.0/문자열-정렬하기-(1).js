function solution(my_string) {
    return my_string.split("").filter((elem) => {
        return !isNaN(elem);
    }).map(elem => Number(elem)).sort((a, b) => a - b);
}
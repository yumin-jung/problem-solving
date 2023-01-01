function solution(array, n) {
    return array.filter((elem) => {
        return elem === n
    }).length;
}
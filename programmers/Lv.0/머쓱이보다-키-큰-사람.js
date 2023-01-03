function solution(array, height) {
    return array.filter((elem) => {
        return elem > height
    }).length;
}
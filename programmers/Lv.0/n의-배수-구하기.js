function solution(n, numlist) {
    return numlist.filter((elem) => {
        return elem % n === 0;
    })
}
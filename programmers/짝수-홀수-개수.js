function solution(num_list) {
    const even = num_list.filter((elem) => {
        return elem % 2 === 0;
    }).length;
    const odd = num_list.filter((elem) => {
        return elem % 2 === 1;
    }).length;
    return [even, odd];
}
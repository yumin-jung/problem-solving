function solution(my_string) {
    return my_string.split("").reduce((acc, cur) => {
        if (Number(cur) > 0 || Number(cur) <= 10) return acc + Number(cur)
        else return acc + 0;
    }, 0);
}
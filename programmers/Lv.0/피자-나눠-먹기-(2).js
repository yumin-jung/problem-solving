function solution(n) {
    let i = 1;

    while ((i * 6) % n !== 0) {
        i++;
    }

    return i;
}
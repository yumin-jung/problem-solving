function solution(numbers) {
    numbers.sort((n1, n2) => {
        return Number(n1) - Number(n2)
    });
    return numbers[numbers.length - 1] * numbers[numbers.length - 2];
}
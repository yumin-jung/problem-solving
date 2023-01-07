function solution(numbers) {
    numbers.sort((a, b) => a - b);

    const leftMax = numbers[0] * numbers[1]
    const rightMax = numbers[numbers.length - 1] * numbers[numbers.length - 2]

    return leftMax > rightMax ? leftMax : rightMax;
}
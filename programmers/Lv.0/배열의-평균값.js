function solution(numbers) {
    const answer = numbers.reduce((sum, curVal) => {
        return sum + curVal
    }, 0);
    return answer / numbers.length
}
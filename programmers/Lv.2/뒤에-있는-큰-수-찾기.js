function solution(numbers) {
    let answer = []
    let stack = []
    
    // numbers가 없을 때까지
    while(numbers.length) {
        // case1. stack이 비어있는 경우
        if (!stack.length) {
            answer.push(-1)
            // 현재 값이 stack에 들어감
            stack.push(numbers.pop())
        } else { // case2. stack에 값이 있는 경우
            // stack에 담긴 값이 더 큰 경우
            if (stack[stack.length - 1] > numbers[numbers.length - 1]) {
                answer.push(stack[stack.length - 1])
                stack.push(numbers.pop())
            } else { // 현재 값이 더 큰 경우
                stack.pop()
            }
        }
    }

    return answer.reverse()
}
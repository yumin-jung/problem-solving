function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack = [];
    let i = 0, j = 0;
    while (i < pushed.length) {
        stack.push(pushed[i]);
        while (stack.length > 0 && (stack[stack.length - 1] === popped[j])) {
            stack.pop();
            j++;
        }
        i++;
    }
    return stack.length === 0;
};
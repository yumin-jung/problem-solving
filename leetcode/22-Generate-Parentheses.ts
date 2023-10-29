function generateParenthesis(n: number): string[] {
    const res = [];
    const stack = [];

    const generate = (left: number, right: number) => {
        if (left === n && right === n) {
            res.push(stack.join(""));
            return;
        }

        if (left < n) {
            stack.push('(');
            generate(left + 1, right);
            stack.pop();
        }

        if (right < left) {
            stack.push(')');
            generate(left, right + 1);
            stack.pop();
        }
    }

    generate(0, 0);

    return res;
};
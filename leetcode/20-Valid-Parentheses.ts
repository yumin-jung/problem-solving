function isValid(s: string): boolean {
    if (s.length % 2 === 1) return false;

    const left = ['(', '[', '{'];
    const right = [')', ']', '}'];
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (left.indexOf(s[i]) !== -1) stack.push(s[i]);
        else {
            if (left.indexOf(stack.pop()) !== right.indexOf(s[i])) return false;
        }
    }

    return stack.length === 0;
};
function removeStars(s: string): string {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        s[i] === '*' ? stack.pop() : stack.push(s[i]);
    }
    return stack.join('');
};
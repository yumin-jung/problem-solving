function backspaceCompare(s: string, t: string): boolean {
    let left = [];
    let right = [];

    for (let i = 0; i < s.length; i++) {
        s[i] !== '#' ? left.push(s[i]) : left.pop();
    }

    for (let i = 0; i < t.length; i++) {
        t[i] !== '#' ? right.push(t[i]) : right.pop();
    }

    return left.join("") === right.join("");
};
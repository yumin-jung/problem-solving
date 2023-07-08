function buddyStrings(s: string, goal: string): boolean {
    if (s.length !== goal.length) return false;

    let diff = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) diff.push(i);
    }

    const set = new Set(s);
    const [x, y] = diff;

    if (diff.length === 0 && set.size < s.length) return true;
    else if (diff.length == 2 && s[x] === goal[y] && s[y] === goal[x]) return true;

    return false;
};
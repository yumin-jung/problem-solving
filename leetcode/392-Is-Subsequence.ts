function isSubsequence(s: string, t: string): boolean {
    return t.split('').reduce((acc, cur) => s[acc] === cur ? acc += 1 : acc, 0) === s.length;
};
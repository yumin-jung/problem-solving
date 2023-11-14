function countPalindromicSubsequence(s: string): number {
    let res = 0;

    for (let i = 0; i < 26; ++i) {
        const cur = String.fromCharCode(i + 97);
        let left = s.indexOf(cur);
        let right = s.lastIndexOf(cur);
        if (left !== -1 && right !== -1 && left < right) {
            res += new Set(s.substring(left + 1, right)).size;
        }
    }

    return res;
};
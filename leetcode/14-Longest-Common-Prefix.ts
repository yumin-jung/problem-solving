function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return "";

    let res = "";
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] !== strs[j + 1][i]) return res;
        }
        res += strs[0][i];
    }
    return res;
};
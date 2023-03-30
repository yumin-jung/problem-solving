function isScramble(s1: string, s2: string): boolean {
    const isScramble = (s1: string, s2: string, dp: Object) => {
        if (dp[s1 + s2] !== undefined || dp[s2 + s1] !== undefined) return dp[s1 + s2];
        else if (s1 === s2) return true;
        else if (s1.length !== s2.length) return false;
        else if (s1.length <= 1) return s1 === s2;

        for (let i = 1; i < s1.length; i++) {
            if ((isScramble(s1.slice(0, i), s2.slice(0, i), dp) && isScramble(s1.slice(i), s2.slice(i), dp)) ||
                (isScramble(s1.slice(0, i), s2.slice(s1.length - i), dp) && isScramble(s1.slice(i), s2.slice(0, s1.length - i), dp))) {
                return dp[s1 + s2] = true;
            }
        }

        return dp[s1 + s2] = false;
    };
    return isScramble(s1, s2, {});
};
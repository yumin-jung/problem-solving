function countHomogenous(s: string): number {
    let cur = s[0];
    let cnt = 1;
    let res = 0;

    for (let i = 1; i <= s.length; i++) {
        if (s[i] !== cur) {
            res += cnt * (cnt + 1) / 2 % (10 ** 9 + 7);
            cnt = 1;
            cur = s[i];
        } else {
            cnt++;
        }
    }

    return res;
};
function minDeletions(s: string): number {
    const map = {};

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }

    let res = 0;
    const cntMap = {};

    for (const key in map) {
        let cnt = map[key];

        while (cnt > 0 && cntMap[cnt]) {
            cnt--;
            res++;
        }

        cntMap[cnt] = true;
    }

    return res;
};
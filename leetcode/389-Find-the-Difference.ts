function findTheDifference(s: string, t: string): string {
    const map = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) ? map.get(s[i]) + 1 : 1);
    }

    for (let i = 0; i < t.length; i++) {
        if (map.get(t[i]) === undefined) {
            return t[i];
        } else {
            map.set(t[i], map.get(t[i]) - 1);
        }

        if (map.get(t[i]) < 0) {
            return t[i];
        }
    }
};
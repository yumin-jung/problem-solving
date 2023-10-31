function findArray(pref: number[]): number[] {
    const res = [pref[0]];
    for (let i = 1; i < pref.length; i++) {
        res.push(pref[i - 1] ^ pref[i]);
    }
    return res;
};
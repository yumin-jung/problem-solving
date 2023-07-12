function minimumDeletions(s: string): number {
    let a = 0;
    let b = 0;

    for (let c of s) {
        if (c === 'a') {
            if (b === 0) continue;
            else a++;
        }
        else b++;
        if (a > b) a = b;
    }

    return a;
};
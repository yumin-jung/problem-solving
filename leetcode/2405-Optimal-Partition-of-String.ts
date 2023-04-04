function partitionString(s: string): number {
    let set = new Set();
    let res = 1;

    s.split("").map((e: string) => {
        if (!set.has(e)) {
            set.add(e);
        } else {
            set = new Set([e]);
            res++;
        }
    })

    return res;
};
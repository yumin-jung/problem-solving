function minOperations(s: string): number {
    let operations = 0;
    const chars = [...s];

    chars.reduce((prev, curr) => {
        if (prev === curr) {
            curr = curr === "0" ? "1" : "0";
            operations++;
        }
        return curr;
    });

    return Math.min(operations, s.length - operations);
};
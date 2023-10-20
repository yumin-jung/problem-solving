function getRow(rowIndex: number): number[] {
    const fact = (n: number) => {
        let res = 1;

        for (let i = 1; i <= n; i++) {
            res *= i;
        }

        return res;
    }

    let res = [];

    for (let i = 0; i <= rowIndex; i++) {
        res.push(fact(rowIndex) / fact(rowIndex - i) / fact(i));
    }

    return res;
};
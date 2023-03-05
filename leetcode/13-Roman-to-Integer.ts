const ROMAN = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const romanToInt = (s: string): number => {

    const arr = s.split("");
    let skip = false;

    return arr.reduce((acc, cur, idx) => {

        if (skip) {
            skip = false;
            return acc;
        }

        const curVal = ROMAN[cur];
        const nextVal = ROMAN[arr[idx + 1]];

        if (curVal < nextVal) {
            skip = true;
            return acc + nextVal - curVal;
        } else {
            return acc + curVal;
        }
    }, 0);
};
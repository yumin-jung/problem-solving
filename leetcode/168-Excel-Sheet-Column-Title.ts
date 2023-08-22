function convertToTitle(columnNumber: number): string {
    let res = '';
    let num: number;

    while (columnNumber > 0) {
        num = (columnNumber - 1) % 26;
        res = String.fromCharCode(num + 65) + res;
        columnNumber = Math.floor((columnNumber - num) / 26);
    }

    return res;
};
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    let res = 0;
    let temp = x;

    while (temp !== 0) {
        res = res * 10 + temp % 10;
        temp = ~~(temp / 10);
    }

    return x === res;
};
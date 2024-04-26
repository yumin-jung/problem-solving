/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const num = BigInt(digits.join(''));
    return String(num + BigInt(1)).split('');
};
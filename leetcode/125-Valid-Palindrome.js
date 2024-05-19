/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[^A-Za-z0-9]+/g, "").toLowerCase();
    const reversed = str.split("").reverse().join("");
    return str === reversed;
};
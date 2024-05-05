/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let res = '';

    for (let c of s) {
        let ascii = c.charCodeAt();
        if (ascii > 64 && ascii < 91) {
            res += String.fromCharCode(ascii + 32);
        } else {
            res += c;
        }
    }

    return res;
};
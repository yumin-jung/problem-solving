/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = s.split("");
    const stack = [arr[0]];
    const p = {};

    p['('] = ')';
    p['{'] = '}';
    p['['] = ']';

    for (let i = 1; i < arr.length; i++) {
        if (p[stack[stack.length - 1]] === arr[i]) {
            stack.pop();
        } else {
            stack.push(arr[i]);
        }
    }

    return stack.length === 0 ? true : false;
};
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    const dict = {};

    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        if (dict[pattern[i]] && dict[pattern[i]] !== words[i]) {
            return false;
        }
        dict[pattern[i]] = words[i];
    }

    const set = new Set(Object.values(dict));

    return set.size === Object.values(dict).length;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? ++map[s[i]] : 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]] && map[t[i]] > 0) {
            map[t[i]]--;
        } else {
            return false;
        }
    }
    for (const l in map) {
        if (map[l] !== 0) return false;
    }
    return true;
};
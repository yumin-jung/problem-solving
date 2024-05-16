/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    for (const s of strs) {
        const sorted = s.split("").sort().join();
        if (!map[sorted]) {
            map[sorted] = [s];
        } else {
            map[sorted] = [...map[sorted], s];
        }
    }
    const res = [];
    for (const a in map) {
        res.push(map[a]);
    }
    return res;
};
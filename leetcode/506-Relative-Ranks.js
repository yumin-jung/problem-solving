/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let copy = score.slice(0);
    copy.sort((a, b) => b - a);
    const map = new Map();
    const len = copy.length;

    for (let i = 0; i < len; i ++) {
        if (i === 0) {
            map.set(copy[0], "Gold Medal");
        } else if (i === 1) {
            map.set(copy[1], "Silver Medal");
        } else if (i === 2) {
            map.set(copy[2], "Bronze Medal");
        } else {
            map.set(copy[i], '' + (i+1));
        }
    }

    for (let i = 0; i < len; i++) {
        score[i] = map.get(score[i]);
    }

    return score;
};
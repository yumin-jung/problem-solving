/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let i = 0;
    citations.sort((a, b) => b - a);
    
    while (citations[i] > i) {
        i++;
    }

    return i;
};
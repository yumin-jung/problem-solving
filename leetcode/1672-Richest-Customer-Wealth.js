/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const wealth = accounts.map(e => e.reduce((a, c) => a + c, 0));
    wealth.sort((a, b) => b - a);
    return wealth[0];
};
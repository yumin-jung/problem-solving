/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    const devices = bank.map(e => (e.match(/1/g) || []).length).filter(a => a !== 0);

    if (!devices.length || devices.length === 1) return 0;

    let res = 0;

    for (let i = 1; i < devices.length; i++) {
        res += devices[i] * devices[i - 1];
    }

    return res;
};
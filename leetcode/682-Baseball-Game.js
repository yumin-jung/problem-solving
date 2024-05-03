/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = [];
    
    for (let i = 0; i < operations.length; i++) {
        const len = arr.length;
        switch (operations[i]) {
            case '+':
                arr.push(arr[len - 1] + arr[len - 2]);
                break;
            case 'D':
                arr.push(arr[len - 1] * 2);
                break;
            case 'C':
                arr.pop();
                break;
            default:
                arr.push(parseInt(operations[i]));
        }
    }

    return arr.reduce((a, c) => a + c , 0);
};
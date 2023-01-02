function solution(array) {
    if (array.length === 1) return array[0];

    const arrSet = new Set(array);
    if (arrSet.size === 1) return array[0];

    const arr = [];
    const dict = {};

    array.forEach((elem) => {
        dict[elem] = (dict[elem] || 0) + 1;
    })

    for (let elem in dict) {
        arr.push([elem, dict[elem]]);
    }

    arr.sort((a, b) => {
        return b[1] - a[1];
    });

    if (arr[0][1] === arr[1][1]) return -1;

    return Number(arr[0][0]);
}
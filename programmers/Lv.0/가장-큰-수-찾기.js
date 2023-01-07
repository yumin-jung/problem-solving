function solution(array) {
    let arr = [];

    for (let i = 0; i < array.length; i++) {
        arr.push([i, array[i]]);
    }

    arr.sort((a, b) => b[1] - a[1]);

    return [arr[0][1], arr[0][0]];
}
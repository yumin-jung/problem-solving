function solution(array, n) {
    array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= n) {
            if (array[i] - n < n - array[i - 1]) return array[i];
            return array[i - 1];
        }
    }
    return array[array.length - 1];
}
function solution(arr) {
    let cur = arr[0];

    return arr.filter((e, i) => {
        if (i === 0) return true;
        if (e === cur) return false;
        else cur = arr[i];
        return true;
    })
}
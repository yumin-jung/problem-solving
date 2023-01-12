function solution(n, arr1, arr2) {
    const allMap = arr1.reduce((acc, cur, idx) => {
        acc.push(cur | arr2[idx])
        return acc;
    }, []);
    return allMap.reduce((acc, cur, idx) => {
        let str = cur.toString(2);
        if (str.length !== n) str = "0".repeat(n - str.length) + str;
        acc.push(str.replace(/[1]/g, "#").replace(/[0]/g, " "))
        return acc;
    }, [])
}
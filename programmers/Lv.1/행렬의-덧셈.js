function solution(arr1, arr2) {
    return arr1.reduce((acc1, cur1, idx1) => {
        acc1.push(cur1.reduce((acc2, cur2, idx2) => {
            acc2.push(cur2 + arr2[idx1][idx2]);
            return acc2;
        }, []));
        return acc1;
    }, [])
}
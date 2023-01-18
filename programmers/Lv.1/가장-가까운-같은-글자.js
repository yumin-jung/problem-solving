function solution(s) {
    const reversed = s.split("").reverse();

    return reversed.map((elem, idx) => {
        let res = -1;
        for (let i = idx + 1; i < reversed.length; i++) {
            if (reversed[i] === elem) {
                res = i - idx;
                break;
            }
        }
        return res;
    }).reverse();
}
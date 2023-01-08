function solution(numlist, n) {
    return numlist.sort((n1, n2) => {
        const len1 = Math.abs(n1 - n);
        const len2 = Math.abs(n2 - n);

        if (len1 === len2) return n2 - n1;
        return len1 - len2;
    })
}
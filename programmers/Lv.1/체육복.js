function solution(n, lost, reserve) {
    const lostSet = new Set(lost);
    reserve.sort((a, b) => a - b)
    reserve = reserve.filter((e) => {
        if (lostSet.has(e)) {
            lostSet.delete(e);
            return false;
        }
        return true;
    })
    reserve.map((e) => {
        if (lostSet.has(e - 1)) lostSet.delete(e - 1);
        else if (lostSet.has(e + 1)) lostSet.delete(e + 1);
    })
    return n - lostSet.size;
}
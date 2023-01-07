function solution(s) {
    const strSet = new Set(s);
    const srtArr = s.split("");
    const newSet = new Set();

    for (let i = 0; i < srtArr.length; i++) {
        if (newSet.has(srtArr[i])) strSet.delete(srtArr[i]);
        if (strSet.has(srtArr[i])) newSet.add(srtArr[i]);
    }

    return Array.from(strSet).sort().join("");
}
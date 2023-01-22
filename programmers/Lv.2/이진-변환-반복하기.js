function solution(s) {
    let answer = [0, 0];
    while (s !== "1") {
        const prevLen = s.length;
        s = s.replace(/0/g, "");
        const curLen = s.length;
        s = curLen.toString(2);
        answer[1] += prevLen - curLen;
        answer[0] += 1;
    }
    return answer;
}
function solution(n) {
    function is3x(n) {
        const nSet = new Set(String(n).split(""));
        if (n % 3 === 0) return true;
        if (nSet.has("3")) return true;
        return false;
    }
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer += 1;
        while (is3x(answer)) {
            answer += 1;
        }
    }
    return answer;
}
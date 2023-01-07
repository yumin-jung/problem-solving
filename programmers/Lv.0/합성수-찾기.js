function solution(n) {
    function isPrime(n) {
        let cnt = 0;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) cnt += 1;
        }
        if (cnt >= 1) return false;
        return true;
    }

    let answer = 0;
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) answer += 1;
    }
    return answer;
}
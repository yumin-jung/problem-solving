function solution(n) {
    function is_prime(n) {
        if (n === 1) return false;
        else {
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return false;
            }
            return true;
        }
    }

    let answer = 0;

    for (let i = 2; i <= n; i++) {
        if (is_prime(i)) answer++;
    }

    return answer;
}
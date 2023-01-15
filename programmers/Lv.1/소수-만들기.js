function solution(nums) {
    function isPrime(n) {
        let cnt = 0;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    return nums.reduce((acc, cur, idx) => {
        for (let i = idx + 1; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (isPrime(cur + nums[i] + nums[j])) {
                    acc += 1;
                }
            }
        }
        return acc;
    }, 0)
}
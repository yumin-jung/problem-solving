function solution(n, m, section) {
    let idx = 0;
    let ans = 0;

    for (const s of section) {
        if (s > idx) {
            idx = s + m - 1;
            ans++;
        }
    }

    return ans;
}
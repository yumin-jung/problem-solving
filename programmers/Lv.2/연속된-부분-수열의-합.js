function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    let res = [0, sequence.length];

    while (left < sequence.length) {
        if (sum < k && right < sequence.length) {
            sum += sequence[++right];
        } else if (sum === k && right - left < res[1] - res[0]) {
            res = [left, right];
            sum += sequence[++right];
        } else {
            sum -= sequence[left++];
        }
    }

    return res;
}
function maxConsecutiveAnswers(answerKey: string, k: number): number {
    let res = 0;
    let cnt = { T: 0, F: 0 };

    for (let i = 0; i < answerKey.length; i++) {
        cnt[answerKey[i]]++;
        Math.min(cnt.T, cnt.F) <= k ? res++ : cnt[answerKey[i - res]]--;
    }

    return res;
};
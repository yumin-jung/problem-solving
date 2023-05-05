function maxVowels(s: string, k: number): number {
    let left = 0;
    let cur = 0;
    let res = 0;
    const vowel = 'aeiou';

    for (let right = 0; right < s.length; right++) {
        if (vowel.includes(s[right])) cur++;
        while (left < right && right - left + 1 > k) {
            if (vowel.includes(s[left])) cur--;
            left++;
        }
        res = Math.max(res, cur);
        if (res === k) return k;
    }

    return res;
};
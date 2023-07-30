function mergeAlternately(word1: string, word2: string): string {
    let res = '';

    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (word1[i]) res += word1[i];
        if (word2[i]) res += word2[i];
    }

    return res;
};
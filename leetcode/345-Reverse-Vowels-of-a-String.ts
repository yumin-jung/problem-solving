function reverseVowels(s: string): string {
    let vowel = [];
    let nonVowel = [];
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            vowel.push(s[i]);
            nonVowel.push('*');
        } else {
            nonVowel.push(s[i]);
        }
    }

    for (let i = 0; i < nonVowel.length; i++) {
        if (nonVowel[i] === '*') nonVowel[i] = vowel.pop();
    }

    return nonVowel.join('');
};
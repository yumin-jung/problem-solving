function canConstruct(ransomNote: string, magazine: string): boolean {
    const cnt = {};

    for (let i = 0; i < magazine.length; i++) {
        cnt[magazine[i]] = (cnt[magazine[i]] || 0) + 1;
    }

    for (let j = 0; j < ransomNote.length; j++) {
        if (!cnt[ransomNote[j]]) return false;
        else cnt[ransomNote[j]]--;
    }

    return true;
};
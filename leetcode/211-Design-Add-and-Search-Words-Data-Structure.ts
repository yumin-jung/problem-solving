class WordDictionary {
    map: Map<number, string[]>;

    constructor() {
        this.map = new Map();
    }

    addWord(word: string): void {
        const len = word.length;
        this.map.has(len) ? this.map.get(len).push(word) : this.map.set(len, [word]);
    }

    search(word: string): boolean {
        let len = word.length;

        if (!this.map.has(len)) return false;

        let words = this.map.get(len);

        for (let i = 0; i < words.length; i++) {
            let res = true;
            for (let j = 0; j < len; j++) {
                if (word[j] !== "." && word[j] !== words[i][j]) {
                    res = false;
                    break;
                }
            }
            if (res) return true;
        }

        return false;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
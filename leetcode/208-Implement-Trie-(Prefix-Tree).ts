class Trie {
    arr: string[];

    constructor() {
        this.arr = [];
    }

    insert(word: string): void {
        this.arr.push(word);
    }

    search(word: string): boolean {
        return this.arr.indexOf(word) !== -1;
    }

    startsWith(prefix: string): boolean {
        return this.arr.filter((e) => { return e.slice(0, prefix.length) === prefix }).length > 0;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
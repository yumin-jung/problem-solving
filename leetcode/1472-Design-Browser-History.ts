class BrowserHistory {
    arr: string[];
    cur: number;

    constructor(homepage: string) {
        this.arr = [homepage];
        this.cur = 0;
    }

    visit(url: string): void {
        this.arr[++this.cur] = url;
        this.arr.length = this.cur + 1;
    }

    back(steps: number): string {
        this.cur = this.cur - steps > 0 ? this.cur - steps : 0;
        return this.arr[this.cur];
    }

    forward(steps: number): string {
        this.cur = this.cur + steps >= this.arr.length ? this.arr.length - 1 : this.cur + steps;
        return this.arr[this.cur];
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const len = this.stack.length;
    return this.stack[len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let dummyStack = [];
    const len = this.stack.length;
    let min = this.stack[len - 1];
    for (let i = 0; i < len; i++) {
        const n = this.stack.pop();
        if (n < min) {
            min = n;
        }
        dummyStack.push(n);
    }
    for (let i = 0; i < len; i++) {
        this.stack.push(dummyStack.pop());
    }
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
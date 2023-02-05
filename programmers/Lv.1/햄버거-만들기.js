function solution(ingredient) {
    const stack = [];
    ingredient.map((e) => {
        stack.push(e);
        if (stack.length >= 4 && stack.slice(-4).join("") === "1231") {
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
        }
    })
    return (ingredient.length - stack.length) / 4;
}
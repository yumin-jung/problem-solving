function solution(priorities, location) {
    let res = 0;
    let max = Math.max(...priorities);

    while (true) {
        const curr = priorities.shift();

        if (curr === max) {
            res++;
            if (location === 0) return res;
            max = Math.max(...priorities);
        } else {
            priorities.push(curr);
        }

        location = location === 0 ? priorities.length - 1 : location - 1;
    }
}
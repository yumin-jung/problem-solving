function solution(s) {
    const isCorrectBracket = (s) => {
        const obj = {
            '}': '{',
            ']': '[',
            ')': '(',
        }
        const stack = [];

        for (const c of s) {
            if ('{[('.includes(c)) stack.push(c)
            else if (obj[c] !== stack.pop()) return false
        }
        return stack.length ? false : true;
    }

    const rotate = (s) => s.substring(1) + s[0];

    let len = s.length;
    let res = 0;

    while (--len >= 0) {
        s = rotate(s);
        if (isCorrectBracket(s)) res++;
    }

    return res;
}
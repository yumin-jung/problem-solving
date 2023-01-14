function solution(s, n) {
    return s.split("").map((e) => {
        if (e === " ") return e;
        const ascii = e.charCodeAt(0) + n;
        if (e.charCodeAt(0) <= "Z".charCodeAt(0)) {
            return String.fromCharCode(ascii > "Z".charCodeAt(0) ? ascii - 26 : ascii);
        } else {
            return String.fromCharCode(ascii > "z".charCodeAt(0) ? ascii - 26 : ascii);
        }
    }).join("");
}
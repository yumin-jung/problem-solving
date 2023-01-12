function solution(s) {
    const lower = s.split("").filter(e => e.toUpperCase() !== e).sort().reverse().join("");
    const upper = s.split("").filter(e => e.toLowerCase() !== e).sort().reverse().join("");
    return lower + upper;
}
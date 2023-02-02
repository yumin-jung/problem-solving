function solution(s, skip, index) {
    const alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz');
    skip.split("").map((e) => alphabetSet.delete(e));
    const alphabetExceptSkipTwice = Array.from(alphabetSet).join("").repeat(3);
    return s.split("")
        .map((e) => alphabetExceptSkipTwice[alphabetExceptSkipTwice.indexOf(e) + index])
        .join("");
}
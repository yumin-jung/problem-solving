function solution(babbling) {
    const answer = babbling.map(elem => elem.replace(/aya|ye|woo|ma/g, ""));
    return answer.filter(elem => elem === "").length;
}
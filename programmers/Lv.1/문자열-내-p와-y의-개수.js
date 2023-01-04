function solution(s) {
    const lowerCaseStrArr = s.toLowerCase().split("");
    const numOfp = lowerCaseStrArr.filter(elem => elem === "p").length;
    const numOfy = lowerCaseStrArr.filter(elem => elem === "y").length;
    return numOfp === numOfy;
}
function solution(d, budget) {
    return d.sort((a, b) => a - b).filter((e) => {
        budget -= e;
        return budget >= 0 ? true : false;
    }).length;
}
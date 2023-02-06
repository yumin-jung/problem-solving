function solution(people, limit) {
    const sortedPeople = people.sort((a, b) => b - a);
    let answer = 0;
    sortedPeople.map((e, i) => {
        if (e + sortedPeople[sortedPeople.length - 1] > limit) answer++;
        else {
            sortedPeople.pop();
            answer++;
        }
    })
    return answer;
}
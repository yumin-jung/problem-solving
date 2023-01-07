function solution(num_list, n) {
    const answer = [];
    for (let i = 0; i < num_list.length; i += n) {
        const small_list = [];
        for (let j = i; j < i + n; j++) {
            small_list.push(num_list[j]);
        }
        answer.push(small_list);
    }
    return answer;
}
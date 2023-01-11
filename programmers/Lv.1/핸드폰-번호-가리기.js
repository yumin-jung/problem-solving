function solution(phone_number) {
    let answer = phone_number.split("").reverse()
    let cnt = 0;
    return answer.map((elem) => {
        if (cnt <= 3) {
            cnt += 1;
            return elem;
        }
        return "*";
    }).reverse().join("");
}
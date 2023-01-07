function solution(s) {
    let answer = 0;
    const arr = s.split(" ");
    let prevNum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "Z") {
            answer += Number(arr[i]);
        } else {
            answer -= Number(prevNum);
        }
        prevNum = arr[i];
    }
    return answer;
}
function solution(my_string, num1, num2) {
    const strArr = my_string.split("");
    const num1str = strArr[num1];
    strArr[num1] = strArr[num2];
    strArr[num2] = num1str;

    return strArr.join("");
}
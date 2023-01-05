function solution(cipher, code) {
    let answer = "";
    const cipherArr = cipher.split("");
    for (let i = code - 1; i < cipherArr.length; i += code) {
        answer += cipherArr[i];
    }
    return answer;
}
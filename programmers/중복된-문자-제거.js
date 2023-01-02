function solution(my_string) {
    let isDupStrDict = {};
    let strList = my_string.split("");
    let answer = ""

    for (const strElem of strList) {
        if (isDupStrDict[strElem] === undefined) answer += strElem;
        isDupStrDict[strElem] = true;
    }

    return answer;
}
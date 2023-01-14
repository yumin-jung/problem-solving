function solution(survey, choices) {
    let res = [0, 0, 0, 0];
    survey.map((e, i) => {
        if (e === "RT") res[0] -= choices[i] - 4;
        else if (e === "TR") res[0] += choices[i] - 4;
        else if (e === "FC") res[1] -= choices[i] - 4;
        else if (e === "CF") res[1] += choices[i] - 4;
        else if (e === "MJ") res[2] -= choices[i] - 4;
        else if (e === "JM") res[2] += choices[i] - 4;
        else if (e === "AN") res[3] -= choices[i] - 4;
        else if (e === "NA") res[3] += choices[i] - 4;
    })

    let answer = "";
    res[0] >= 0 ? answer += "R" : answer += "T";
    res[1] > 0 ? answer += "F" : answer += "C";
    res[2] > 0 ? answer += "M" : answer += "J";
    res[3] >= 0 ? answer += "A" : answer += "N";
    return answer;
}
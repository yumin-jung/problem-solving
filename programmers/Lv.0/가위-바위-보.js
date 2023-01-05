function solution(rsp) {
    return rsp.split("").map((elem) => {
        if (elem === "2") return "0";
        else if (elem === "0") return "5";
        else return "2";
    }).join("");
}
function solution(my_string) {
    return my_string.split("").filter((elem) => {
        if (elem === "a") return false;
        else if (elem === "e") return false;
        else if (elem === "i") return false;
        else if (elem === "o") return false;
        else if (elem === "u") return false;
        return true;
    }).join("");
}
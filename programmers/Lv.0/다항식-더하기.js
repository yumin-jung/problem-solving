function solution(polynomial) {
    let constant = 0;
    let linear = 0;
    polynomial.split(" ").map((elem) => {
        if (elem === "x") linear += 1;
        else if (isNaN(Number(elem))) {
            if (elem.match(/[0-9]+x/)) {
                linear += Number(elem.replace("x", ""));
            }
        } else {
            constant += Number(elem);
        }
    })

    if (constant === 0 && linear === 0) return "0";
    if (constant === 0 && linear === 1) return "x";
    if (constant === 0 && linear > 1) return "" + linear + "x";
    if (constant !== 0 && linear === 0) return "" + constant;
    if (constant !== 0 && linear === 1) return "x + " + constant;
    return "" + linear + "x + " + constant;
}
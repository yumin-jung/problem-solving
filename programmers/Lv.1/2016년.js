function solution(a, b) {
    let day = b;
    if (a === 2) day += 31;
    else if (a === 3) day += 31 + 29;
    else if (a === 4) day += 31 + 29 + 31;
    else if (a === 5) day += 31 + 29 + 31 + 30;
    else if (a === 6) day += 31 + 29 + 31 + 30 + 31;
    else if (a === 7) day += 31 + 29 + 31 + 30 + 31 + 30;
    else if (a === 8) day += 31 + 29 + 31 + 30 + 31 + 30 + 31;
    else if (a === 9) day += 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31;
    else if (a === 10) day += 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
    else if (a === 11) day += 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
    else if (a === 12) day += 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;

    if (day % 7 === 1) return "FRI";
    if (day % 7 === 2) return "SAT";
    if (day % 7 === 3) return "SUN";
    if (day % 7 === 4) return "MON";
    if (day % 7 === 5) return "TUE";
    if (day % 7 === 6) return "WED";
    if (day % 7 === 0) return "THU";
}
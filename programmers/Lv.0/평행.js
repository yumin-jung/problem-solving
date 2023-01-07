function solution(dots) {
    let slope = [];
    for (let i = 0; i < dots.length - 1; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            slope.push((dots[i][0] - dots[j][0]) / (dots[i][1] - dots[j][1]));
        }
    }
    return slope.length === Array.from(new Set(slope)).length ? 0 : 1;
}
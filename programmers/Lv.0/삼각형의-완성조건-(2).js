function solution(sides) {
    let answer = 0;
    sides.sort((a, b) => a - b);
    for (let i = 1; i <= sides[1]; i++) {
        if (i + sides[0] > sides[1]) answer += 1;
    }
    for (let i = sides[1] + 1; i < sides[1] + sides[0]; i++) {
        if (i < sides[1] + sides[0]) answer += 1;
    }
    return answer;
}
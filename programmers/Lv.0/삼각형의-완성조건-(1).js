function solution(sides) {
    const sortedSides = sides.sort();
    return sortedSides[0] + sortedSides[1] > sortedSides[2] ? 1 : 2;
}
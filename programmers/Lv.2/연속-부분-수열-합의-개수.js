function solution(elements) {
    const newArr = [...elements, ...elements];
    const set = new Set();

    for (let i = 1; i <= elements.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            set.add(newArr.slice(j, j + i).reduce((a, c) => a + c, 0));
        }
    }

    return set.size;
}
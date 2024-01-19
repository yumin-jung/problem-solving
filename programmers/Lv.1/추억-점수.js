function solution(name, yearning, photo) {
    return photo.map(p => p.reduce((acc, curr) => {
        const idx = name.indexOf(curr);
        return idx === -1 ? acc : acc + yearning[idx];
    }, 0));
}
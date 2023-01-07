function solution(spell, dic) {
    return dic.filter(elem => elem.split("").sort().join("") === spell.sort().join(""))
        .length === 0 ? 2 : 1;
}
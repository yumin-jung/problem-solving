function solution(babbling) {
    return babbling.filter((e) => {
        if (e.match(/ayaaya/g)) return false;
        else if (e.match(/yeye/g)) return false;
        else if (e.match(/woowoo/g)) return false;
        else if (e.match(/mama/g)) return false;
        return e.replace(/aya|ye|woo|ma/g, "") === "" ? true : false;
    }).length;
}
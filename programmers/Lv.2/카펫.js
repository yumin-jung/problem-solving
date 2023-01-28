function solution(brown, red) {
    for (let v = 3; v <= (brown + red) / v; v++) {
        let h = ~~((brown + red) / v);
        if ((h - 2) * (v - 2) === red) return [h, v];
    }
}
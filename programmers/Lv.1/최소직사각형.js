function solution(sizes) {
    let w = 0, h = 0;
    sizes.map((e) => {
        e.sort((a, b) => a - b);
        if (e[0] > w) w = e[0];
        if (e[1] > h) h = e[1];
    })
    return w * h;
}
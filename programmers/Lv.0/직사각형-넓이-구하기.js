function solution(dots) {
    dots.sort((a, b) => a[0] - b[0]);
    const x_len = dots[2][0] - dots[0][0];
    const y_len = dots[2][1] - dots[3][1];
    return Math.abs(x_len * y_len);
}
function solution(price) {
    if (price >= 50 * 10000) {
        return ~~(price * 80 / 100);
    } else if (price >= 30 * 10000) {
        return ~~(price * 90 / 100);
    } else if (price >= 10 * 10000) {
        return ~~(price * 95 / 100);
    }
    return price;
}
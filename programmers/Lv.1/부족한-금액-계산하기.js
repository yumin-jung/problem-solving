function solution(price, money, count) {
    let allPrice = 0;
    for (let i = 1; i <= count; i++) {
        allPrice += i * price;
    }
    return allPrice - money > 0 ? allPrice - money : 0;
}
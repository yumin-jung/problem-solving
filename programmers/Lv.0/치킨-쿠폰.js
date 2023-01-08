function solution(chicken) {
    let answer = 0;
    let coupon = chicken;
    while (coupon >= 10) {
        const service = ~~(coupon / 10);
        answer += service;
        coupon = coupon - service * 10 + service;
    }
    return answer;
}
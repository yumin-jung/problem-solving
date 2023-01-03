function solution(order) {
    let orderList = String(order).split("");
    return orderList.filter((elem) => {
        return (Number(elem) % 3 === 0 && Number(elem) !== 0);
    }).length;
}
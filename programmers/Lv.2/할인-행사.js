function solution(want, number, discount) {
    let left = 0, right = 9;
    let res = 0;

    for (let i = 0; i < 10; i++) {
        number[want.indexOf(discount[i])]--;
    }

    if (number.filter((e) => e !== 0).length === 0) res++;

    for (let i = 0; i < discount.length - 9; i++) {
        number[want.indexOf(discount[left++])]++;
        number[want.indexOf(discount[++right])]--;
        if (number.filter((e) => e !== 0).length === 0) res++;
    }

    return res;
}
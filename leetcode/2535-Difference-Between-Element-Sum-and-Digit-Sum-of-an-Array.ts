function differenceOfSum(nums: number[]): number {
    let elementSum = 0;
    let digitSum = 0;

    nums.map((e1) => {
        elementSum += e1;
        e1.toString().split("").map((e2) => {
            digitSum += Number(e2);
        });
    })

    return Math.abs(elementSum - digitSum);
};
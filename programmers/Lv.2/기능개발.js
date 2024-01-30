function solution(progresses, speeds) {
    const dayOfFinish = progresses.map((e, i) => Math.ceil((100 - e) / speeds[i]));
    const res = [0];
    let d = dayOfFinish[0];
    let idx = 0;

    for (let i = 0; i < dayOfFinish.length; i++) {
        if (dayOfFinish[i] <= d) {
            res[idx]++;
        } else {
            d = dayOfFinish[i];
            res[++idx] = 1;
        }
    }

    return res;
}
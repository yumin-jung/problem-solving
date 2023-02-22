const shipWithinDays = (weights: number[], days: number): number => {
    let left = 0, right = 0;

    for (let i = 0; i < weights.length; i++) {
        if (weights[i] > left) left = weights[i];
        right += weights[i];
    }

    while (left < right) {
        let mid = ~~((left + right) / 2);
        let cur = 0, cnt = 1;

        for (let i = 0; i < weights.length; i++) {
            cur += weights[i];
            if (cur > mid) {
                cnt++;
                cur = weights[i];
            }
        }

        cnt > days ? left = mid + 1 : right = mid;

    }

    return left;
};
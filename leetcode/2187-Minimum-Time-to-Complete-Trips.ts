const findTime = (time: number[], mid: number): number => {
    let trip = 0;

    for (let i = 0; i < time.length; i++) {
        trip += Math.floor(mid / time[i]);
    }

    return trip;
}

const findMinTime = (time: number[]) => {
    let min = time[0];

    for (let i = 1; i < time.length; i++) {
        min = Math.min(min, time[i])
    }

    return min;
}

const minimumTime = (time: number[], totalTrips: number): number => {
    let start = 0;
    let end = totalTrips * findMinTime(time);

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (findTime(time, mid) < totalTrips) start = mid + 1;
        else end = mid - 1;
    }

    return start;
};
function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {
    if (sx === fx && sy === fy && t === 1) return false;
    return Math.max(Math.abs(fx - sx), Math.abs(fy - sy)) <= t;
};
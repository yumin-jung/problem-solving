function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) return true;

    const sorted1 = s1.split('').sort().join();
    const sorted2 = s2.split('').sort().join();

    if (sorted1 !== sorted2) return false;

    let cnt = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) cnt++;
        if (cnt > 2) return false;
    }

    return true;
};
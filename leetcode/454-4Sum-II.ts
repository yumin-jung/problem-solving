function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let map = new Map();
    let res = 0;

    nums1.map((e1) => {
        nums2.map((e2) => {
            map.set(e1 + e2, (map.get(e1 + e2) | 0) + 1);
        });
    });

    nums3.map((e3) => {
        nums4.map((e4) => {
            if (map.has(-e3 - e4)) res += map.get(-e3 - e4);
        });
    });

    return res;
};
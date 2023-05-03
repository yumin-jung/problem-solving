function findDifference(nums1: number[], nums2: number[]): number[][] {
    return [
        [...new Set(nums1)].filter((e) => !nums2.includes(e)),
        [...new Set(nums2)].filter((e) => !nums1.includes(e)),
    ];
};
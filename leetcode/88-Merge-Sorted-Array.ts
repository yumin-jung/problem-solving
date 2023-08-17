/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1;
    let p2 = n - 1;
    let k = nums1.length - 1;

    while (p2 >= 0) {
        nums1[p1] > nums2[p2] ? nums1[k] = nums1[p1--] : nums1[k] = nums2[p2--];
        k--;
    }
};
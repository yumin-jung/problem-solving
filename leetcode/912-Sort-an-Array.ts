const sortArray = (nums: number[]): number[] => {

    const MergeSort = (nums1: number[], nums2: number[]) => {
        let arr = [];
        let cnt1 = 0;
        let cnt2 = 0;

        while (cnt1 !== nums1.length || cnt2 !== nums2.length) {
            if (nums1[cnt1] >= nums2[cnt2] || nums1[cnt1] === undefined) {
                arr.push(nums2[cnt2]);
                cnt2++
            } else {
                arr.push(nums1[cnt1]);
                cnt1++
            }
        }

        return arr;
    }

    const sort = (nums: number[]) => {
        if (nums.length <= 1) return nums;
        let nums1 = sort(nums.slice(0, nums.length / 2));
        let nums2 = sort(nums.slice(nums.length / 2));
        return MergeSort(nums1, nums2);
    }

    return sort(nums);
};
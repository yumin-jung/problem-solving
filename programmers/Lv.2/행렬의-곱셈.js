function solution(arr1, arr2) {
    return arr1.map((e) =>
        Array(arr2[0].length).fill(0).map((_, i1) =>
            e.reduce((a, c, i2) => a + c * arr2[i2][i1], 0)
        )
    )
}
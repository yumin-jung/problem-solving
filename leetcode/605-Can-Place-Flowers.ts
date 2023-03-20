function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let res = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            res++;
            i++;
        }
    }
    return res >= n;
};
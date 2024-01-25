function solution(friends, gifts) {
    const len = friends.length;
    const giftRecord = Array(len).fill(0).map(() => Array(len).fill(0));
    const numOfGiftNextMonth = Array(len).fill(0);

    for (let i = 0; i < gifts.length; i++) {
        const [from, to] = gifts[i].split(" ");
        giftRecord[friends.indexOf(from)][friends.indexOf(to)]++;
    }

    const giftIndex = friends.map((_, idx) => {
        const give = giftRecord[idx].reduce((a, c) => a + c, 0);
        const receive = giftRecord.map((e) => e[idx]).reduce((a, c) => a + c, 0);
        return give - receive;
    })

    for (let i = 0; i < friends.length; i++) {
        for (let j = 0; j < friends.length; j++) {
            if (i === j) continue;

            if (giftRecord[i][j] > giftRecord[j][i]) {
                numOfGiftNextMonth[i]++;
            } else if (
                (giftRecord[i][j] === 0 && giftRecord[j][i] === 0)
                || giftRecord[i][j] === giftRecord[j][i]
            ) {
                if (giftIndex[i] > giftIndex[j]) numOfGiftNextMonth[i]++;
            }
        }
    }

    return Math.max(...numOfGiftNextMonth);
}
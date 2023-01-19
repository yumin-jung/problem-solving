function solution(lottos, win_nums) {
    const winSet = new Set(win_nums);
    const lottosNumInWin = lottos.filter(e => winSet.has(e)).length;
    const lottosNumZero = lottos.filter(e => e === 0).length;
    return [Math.min(7 - (lottosNumInWin + lottosNumZero), 6), Math.min(7 - lottosNumInWin, 6)];
}
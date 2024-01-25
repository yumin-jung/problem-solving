function solution(cards1, cards2, goal) {
    for (let i = 0; i < goal.length; i++) {
        const w = goal[i];
        if (w === cards1[0]) cards1.shift();
        else if (w === cards2[0]) cards2.shift();
        else return "No";
    }

    return "Yes";
}
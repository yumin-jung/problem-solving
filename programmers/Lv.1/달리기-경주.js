function solution(players, callings) {
    const map = new Map();

    for (let i = 0; i < players.length; i++) {
        map.set(players[i], i);
    }

    for (let i = 0; i < callings.length; i++) {
        const idx = map.get(callings[i]);

        [players[idx], players[idx - 1]] = [players[idx - 1], players[idx]];

        map.set(callings[i], map.get(callings[i]) - 1);
        map.set(players[idx], map.get(callings[i]) + 1);
    }

    return players;
}
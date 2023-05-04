function predictPartyVictory(senate: string): string {
    const radiant = [], dire = [];

    senate.split("").map((e: string, i: number) => {
        e === 'R' ? radiant.push(i) : dire.push(i);
    })

    while (radiant.length > 0 && dire.length > 0) {
        if (radiant[0] < dire[0]) {
            radiant.push(dire[0] + senate.length);
        } else {
            dire.push(radiant[0] + senate.length);
        }

        radiant.shift();
        dire.shift();
    }

    return (radiant.length > 0) ? 'Radiant' : 'Dire';
};
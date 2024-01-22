function solution(bandage, health, attacks) {
    const attackTimeSet = new Set(attacks.map(e => e[0]));
    const iter = attacks[attacks.length - 1][0];
    let bandageTime = 0;
    let currHealth = health;

    for (let i = 1; i <= iter; i++) {
        if (attackTimeSet.has(i)) {
            currHealth -= attacks.shift()[1];
            if (currHealth <= 0) return -1;
            bandageTime = 0;
            continue;
        }

        if (++bandageTime === bandage[0]) {
            currHealth += bandage[2] + bandage[1];
            bandageTime = 0;
        } else {
            currHealth += bandage[1];
        }

        if (currHealth > health) currHealth = health;
    }

    return currHealth;
}
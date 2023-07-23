function asteroidCollision(asteroids: number[]): number[] {
    let res = [];
    for (let ast of asteroids) {
        if (ast < 0) {
            while (res.length > 0 && res[res.length - 1] > 0 && res[res.length - 1] < Math.abs(ast)) res.pop();
            if (res[res.length - 1] === Math.abs(ast)) res.pop();
            else if (res.length === 0 || res[res.length - 1] < 0) res.push(ast);
        }
        else res.push(ast);
    }
    return res;
};
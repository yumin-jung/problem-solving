async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
    return await promise1.then() + await promise2.then();
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
    const resolved = [];
    let cnt = 0;

    return new Promise((resolve, reject) => {
        for (let i = 0; i < functions.length; i++) {
            functions[i]().then((res) => {
                resolved[i] = res;
                cnt++;
                if (cnt === functions.length) resolve(resolved);
            }).catch((err) => {
                reject(err);
            })
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
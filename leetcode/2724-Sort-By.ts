function sortBy(arr: any[], fn: Function): any[] {
    const sortedArr = [...arr];

    return sortedArr.sort((a, b) => {
        return fn(a) < fn(b) ? -1 : 1;
    });
};
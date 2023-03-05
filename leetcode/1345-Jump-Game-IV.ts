const minJumps = (arr: number[]): number => {

    let map = new Map<number, number[]>();

    for (let i = 0; i < arr.length; i++) {

        let sameNumIdxList = [];

        if (map.has(arr[i])) sameNumIdxList = map.get(arr[i]);

        sameNumIdxList.push(i);
        map.set(arr[i], sameNumIdxList);
    }

    let visited = new Set<number>();
    let queue = [[0, 0]];

    visited.add(0);

    while (queue.length) {

        let [curIdx, step] = queue.shift();

        if (curIdx === arr.length - 1) return step;

        if (curIdx + 1 < arr.length && !visited.has(curIdx + 1)) {
            queue.push([curIdx + 1, step + 1]);
            visited.add(curIdx + 1);
        }

        if (curIdx > 0 && !visited.has(curIdx - 1)) {
            queue.push([curIdx - 1, step + 1]);
            visited.add(curIdx - 1);
        }

        if (!map.has(arr[curIdx])) continue;

        for (const sameNumIdx of map.get(arr[curIdx])) {
            if (!visited.has(sameNumIdx) && sameNumIdx != curIdx) {
                queue.push([sameNumIdx, step + 1]);
                visited.add(sameNumIdx);
            }
        }

        map.delete(arr[curIdx]);
    }
};
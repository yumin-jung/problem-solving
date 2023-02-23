const findMaximizedCapital = (k: number, w: number, profits: number[], capital: number[]): number => {
    const projects = profits.map((e, i) => [e, capital[i]]);

    projects.sort((a, b) => a[1] - b[1]);

    let maxPQ = new MaxPriorityQueue();
    let projectPriority = 0;

    while (k-- > 0) {
        while (projectPriority < projects.length && projects[projectPriority][1] <= w) {
            maxPQ.enqueue(projectPriority, projects[projectPriority][0]);
            projectPriority++;
        }

        if (maxPQ.size() === 0) return w;

        const max = maxPQ.dequeue();
        w += max.priority;
    }

    return w;
};
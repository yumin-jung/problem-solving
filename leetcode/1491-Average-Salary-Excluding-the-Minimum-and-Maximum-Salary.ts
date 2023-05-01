function average(salary: number[]): number {
    const min = Math.min(...salary);
    const max = Math.max(...salary);
    return (salary.reduce((acc, cur) => { return acc + cur }, 0) - min - max) / (salary.length - 2);
};
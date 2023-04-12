function simplifyPath(path: string): string {
    return path.split('/').filter(e => e).reduce((acc, cur) => {
        if (cur === '.') return acc;
        else if (cur === '..') return acc.lastIndexOf('/') > 0 ? acc.slice(0, acc.lastIndexOf('/')) : '/';
        return acc === '/' ? '/' + cur : acc + '/' + cur;
    }, '/');
};
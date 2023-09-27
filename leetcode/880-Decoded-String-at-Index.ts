function decodeAtIndex(s: string, k: number): string {
    let size = 0;

    for (const c of s) {
        size = isNaN(+c) ? size + 1 : +c * size;
    }

    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i];
        k %= size;

        if (k === 0 && isNaN(+c)) {
            return c;
        } else if (!isNaN(+c)) {
            size /= +c;
        } else {
            size--;
        }
    }

    return s[1];
};
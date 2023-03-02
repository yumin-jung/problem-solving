const compress = (chars: string[]): number => {

    let idx = 0;
    let i = 0;

    while (i < chars.length) {

        let j = i;

        while (chars[j] === chars[i] && j < chars.length) {
            j++;
        }

        chars[idx++] = chars[i];

        if (j - i > 1) {
            const cnt = j - i + "";
            for (let c of cnt) {
                chars[idx++] = c;
            }
        }

        i = j;
    }

    return idx++;
};
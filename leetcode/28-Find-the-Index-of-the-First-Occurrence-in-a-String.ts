function strStr(haystack: string, needle: string): number {
    if (haystack.match(needle) === null) return -1;
    return haystack.indexOf(needle);
};
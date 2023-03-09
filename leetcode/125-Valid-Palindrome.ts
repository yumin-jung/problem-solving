const isPalindrome = (s: string): boolean => {
    const arr1 = s.replace(/[^A-Za-z0-9]+/g, "").toLowerCase();
    const arr2 = arr1.split("").reverse().join("");
    return arr1 === arr2;
};
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const toBe = (x: any): boolean => {
        if (val === x) return true
        throw Error("Not Equal")
    }

    const notToBe = (x: any): boolean => {
        if (val !== x) return true
        throw Error("Equal");
    }

    return { toBe, notToBe }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
function nextGreatestLetter(letters: string[], target: string): string {
    const filterdLetters = letters.filter((e) => {
        return e.charCodeAt(0) > target.charCodeAt(0)
    })
    filterdLetters.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    return filterdLetters[0] ?? letters[0]
};
function solution(phone_book) {
    phone_book.sort();

    return !phone_book.some((e, i) => {
        if (i < phone_book.length - 1) {
            return e === phone_book[i + 1].substring(0, e.length);
        }
        return false;
    })
}
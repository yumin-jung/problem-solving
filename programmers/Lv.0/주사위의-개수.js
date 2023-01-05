function solution(box, n) {
    const maxNumBox = (egdeLen, n) => (~~(egdeLen / n));
    return maxNumBox(box[0], n) * maxNumBox(box[1], n) * maxNumBox(box[2], n)
}
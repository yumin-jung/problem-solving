function solution(emergency) {
    let sortedEmergency = emergency.slice().sort((a, b) => b - a);
    return emergency.map(elem => sortedEmergency.indexOf(elem) + 1);
}
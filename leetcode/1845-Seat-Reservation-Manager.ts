class SeatManager {
    seats = [];
    constructor(n: number) {
        for (let i = n; i >= 1; i--) {
            this.seats.push(i);
        }
    }

    reserve(): number {
        return this.seats.pop();
    }

    unreserve(seatNumber: number): void {
        for (let i = this.seats.length - 1; i >= 0; i--) {
            if (seatNumber < this.seats[i]) {
                this.seats.splice(i + 1, 0, seatNumber);
                return;
            }
        }
        this.seats.push(seatNumber);
    }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
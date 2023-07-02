class Calculator {
    private current: number
    constructor(value: number) {
        this.current = value
    }

    add(value: number): Calculator {
        this.current += value
        return this
    }

    subtract(value: number): Calculator {
        this.current -= value
        return this
    }

    multiply(value: number): Calculator {
        this.current *= value
        return this
    }

    divide(value: number): Calculator {
        if (value === 0) {
            throw new Error("Division by zero is not allowed")
        }

        this.current /= value
        return this
    }

    power(value: number): Calculator {
        this.current = Math.pow(this.current, value)
        return this
    }

    getResult(): number {
        return this.current
    }
}
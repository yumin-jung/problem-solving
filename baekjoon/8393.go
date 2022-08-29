package main

import "fmt"

func main() {
	var num, res int

	fmt.Scanf("%d", &num)

	for i := 0; i <= num; i++ {
		res += i
	}

	fmt.Printf("%d\n", res)
}

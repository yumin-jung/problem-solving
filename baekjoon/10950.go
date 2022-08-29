package main

import "fmt"

func main() {
	var a, b, t int

	fmt.Scanf("%d", &t)

	for i := 0; i < t; i++ {
		fmt.Scanf("%d %d", &a, &b)
		fmt.Printf("%d\n", a+b)
	}
}

package main

import "fmt"

func main() {
	var a, b int
	fmt.Scanf("%d %d", &a, &b)

	var diff = a - b

	if diff > 0 {
		fmt.Printf(">")
	} else if diff == 0 {
		fmt.Printf("==")
	} else {
		fmt.Printf("<")
	}
}

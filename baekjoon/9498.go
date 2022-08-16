package main

import "fmt"

func main() {
	var score int
	fmt.Scanf("%d", &score)

	if score >= 90 {
		fmt.Printf("A")
	} else if score >= 80 {
		fmt.Printf("B")
	} else if score >= 70 {
		fmt.Printf("C")
	} else if score >= 60 {
		fmt.Printf("D")
	} else {
		fmt.Printf("F")
	}
}

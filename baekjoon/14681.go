package main

import "fmt"

func main() {
	var x, y int
	fmt.Scanf("%d", &x)
	fmt.Scanf("%d", &y)

	if x < 0 && y < 0 {
		fmt.Printf("3")
	} else if x > 0 && y < 0 {
		fmt.Printf("4")
	} else if x < 0 && y > 0 {
		fmt.Printf("2")
	} else if x > 0 && y > 0 {
		fmt.Printf("1")
	}
}

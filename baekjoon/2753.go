package main

import "fmt"

func main() {
	var year int
	fmt.Scanf("%d", &year)

	if year%4 == 0 && year%100 != 0 || year%400 == 0 {
		fmt.Printf("1")
	} else {
		fmt.Printf("0")
	}
}

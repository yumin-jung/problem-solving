package main

import "fmt"

func main() {
	var h, m int
	fmt.Scanf("%d %d", &h, &m)

	if m >= 45 {
		fmt.Printf("%d %d", h, m-45)
	} else if m < 45 && h > 0 {
		fmt.Printf("%d %d", h-1, m-45+60)
	} else if m < 45 && h == 0 {
		fmt.Printf("%d %d", h-1+24, m-45+60)
	}
}

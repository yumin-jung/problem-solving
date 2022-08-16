package main

import "fmt"

func main() {
	var h, m, c int
	fmt.Scanf("%d %d", &h, &m)
	fmt.Scanf("%d", &c)

	var allMinute = m + c

	h = h + allMinute/60
	m = allMinute % 60

	if h >= 24 {
		fmt.Printf("%d %d", h-24, m)
	} else {
		fmt.Printf("%d %d", h, m)
	}
}

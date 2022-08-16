package main

import "fmt"

func main() {
	var a, b, c int
	fmt.Scanf("%d %d %d", &a, &b, &c)

	if a == b && a == c {
		fmt.Printf("%d", 10000+a*1000)
	} else if a == b {
		fmt.Printf("%d", 1000+a*100)
	} else if b == c {
		fmt.Printf("%d", 1000+b*100)
	} else if c == a {
		fmt.Printf("%d", 1000+c*100)
	} else {
		if a < b {
			if b < c {
				fmt.Printf("%d", c*100)
			} else {
				fmt.Printf("%d", b*100)
			}
		} else {
			if a < c {
				fmt.Printf("%d", c*100)
			} else {
				fmt.Printf("%d", a*100)
			}
		}
	}
}

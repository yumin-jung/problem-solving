package main

import "fmt"

func main() {
	var x, n, a, b, sum int
	var res string

	fmt.Scanf("%d", &x)
	fmt.Scanf("%d", &n)

	for i := 0; i < n; i++ {
		fmt.Scanf("%d %d", &a, &b)
		sum += a * b
	}

	if sum == x {
		res = "Yes"
	} else {
		res = "No"
	}

	fmt.Printf("%s\n", res)
}

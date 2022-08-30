package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	var x, a, b int

	reader := bufio.NewReader(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	fmt.Scanf("%d", &x)

	for i := 0; i < x; i++ {
		fmt.Fscan(reader, &a, &b)
		fmt.Fprintln(writer, a+b)
	}
}

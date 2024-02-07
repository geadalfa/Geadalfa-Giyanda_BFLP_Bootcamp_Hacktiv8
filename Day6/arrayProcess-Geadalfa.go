package main

import (
	"fmt"
)

func main() {
	processedArray := arrayProcess(12, 10, 3, 4, 5)
	fmt.Println("Proses Array", processedArray())
}

func arrayProcess(x ...int) func() []int {
	return func() []int {
		var temp = []int{}
		for _, v := range x {
			if v%10 != 0 {
				temp = append(temp, v%10)
			}
		}

		return temp
	}
}

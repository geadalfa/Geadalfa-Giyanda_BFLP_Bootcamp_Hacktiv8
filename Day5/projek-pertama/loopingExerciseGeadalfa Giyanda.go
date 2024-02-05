package main

import (
	"fmt"
)

// Fungsi main
func main() {
	var arr [4][5]string = [4][5]string{
		{"alvin", "arif", "reza", "rinaldi", "nina"},      //0
		{"noel", "dilla", "rosa", "juan michel", "teguh"}, //1
		{"septyan", "farras", "giyanda", "afin", "azwar"}, //2
		{"dionysius", "rifki", "raffi", "zain"},           //3
	}
	for i, v := range arr {
		for j, v2 := range v {
			if v2 == "giyanda" {
				fmt.Println(i, v, j, v2)
			}
		}
	}
}

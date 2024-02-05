package main

import (
	"fmt"
	"strings"
)

var smile = "senyum"
var cemberut = "cemberut"

/* Ini Komentar
 */

// Fungsi main
func main() {
	var name = "Alfa"
	var age int = 24
	hobby := "Main"
	var numbers1 = 99
	numbers1 = 102
	const phi = 3.14

	var condition = true

	fmt.Println("Nama saya:", name, "\nUmur saya:", age)
	fmt.Println("Hobi saya:", hobby)
	fmt.Printf("%T", hobby, numbers1, phi) // dapet type data dari variabel
	fmt.Printf("\nTipe datanya adalah %T \n", hobby)
	fmt.Printf("Valuenya %.2f\n", phi)
	fmt.Println("Kondisinya", condition)

	conditionNow("senyum", "Senyum")
	conditionNow(smile, smile)
	conditionNow(cemberut, cemberut)
	conditionNow(cemberut, smile)

	if kesambetAyam(true, 3) {
		fmt.Println("Kesambet")
	} else {
		fmt.Println("Aman")

	}

}

func conditionNow(kera1, kera2 string) {
	kera1 = strings.ToLower(kera1)
	kera2 = strings.ToLower(kera2)
	if kera1 == kera2 {
		fmt.Println("Saya dalam masalah")
	} else {
		fmt.Println("Saya tidak dalam masalah")
	}

}

func kesambetAyam(isBerkokok bool, time int) bool {
	time %= 24
	return isBerkokok && time <= 3
}

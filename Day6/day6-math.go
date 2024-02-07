package main

import (
	"fmt"
	"math"
)

type Employee struct {
	Nik        int
	Nama       string
	Umur       int
	Divisi     string
	Organisasi Organisasi
}

type Organisasi struct {
	Nama   string
	Alamat string
}

func main() {
	fmt.Println("Yang terdekat dari angka 10 adalah", closestToTen(11, 8))
	fmt.Println("Variadic yang terdeketat dari angka 10 adalah", closestToTenVariadic(3, 4, 3, 3, 15, 1, 5))
	fmt.Println("Urut bilangan", urutThreeTimes(3, 3, 4, 4, 5, 6, 6, 6))
	fmt.Println("Urutan bilangan closure", urutan(3, 5, 4, 2, 1, 1, 1, 2, 3, 4, 4, 4, 5))

	processedArray := arrayProcess(12, 10, 3, 4, 5)
	fmt.Println("Proses Array", processedArray())

	employees := []Employee{
		{
			Nik:    541,
			Nama:   "arif",
			Umur:   56,
			Divisi: "APP",
			Organisasi: Organisasi{
				Nama:   "HTI",
				Alamat: "Jakarta",
			},
		},
		{
			Nik:    134,
			Nama:   "farras",
			Umur:   18,
			Divisi: "DDB",
			Organisasi: Organisasi{
				Nama:   "FPI",
				Alamat: "Bogor",
			},
		},
		{
			Nik:    969,
			Nama:   "alfa",
			Umur:   24,
			Divisi: "APP",
			Organisasi: Organisasi{
				Nama:   "LABTI",
				Alamat: "Depok",
			},
		},
	}

	var oldestEmployee Employee
	maxAge := 0

	for _, employee := range employees {
		if employee.Umur > maxAge {
			maxAge = employee.Umur
			oldestEmployee = employee
		}
	}

	// Print all information of the employee with the highest age
	fmt.Printf("Employee with the highest age:\n%+v\n", oldestEmployee)
}

func closestToTen(a, b int) int {
	if a == b {
		return 0
	}
	if math.Abs(float64(10-a)) < math.Abs(float64(10-b)) {
		return a
	}
	return b
}

func closestToTenVariadic(numbers ...int) int {
	if len(numbers) == 0 {
		return 0
	}

	closest := numbers[0]
	equalDist := false

	for _, num := range numbers[1:] {
		diffNum := math.Abs(float64(10 - num))
		diffClosest := math.Abs(float64(10 - closest))

		if diffNum < diffClosest {
			closest = num
			equalDist = false
		} else if diffNum == diffClosest {
			equalDist = true
		}
	}

	if equalDist {
		return 0
	}

	return closest
}

func urutThreeTimes(numbers ...int) bool {
	for i := 0; i < len(numbers)-2; i++ {
		if (numbers[i] == numbers[i+1]) && (numbers[i+1] == numbers[i+2]) {
			return true
		}
	}
	return false
}

var urutan = func(numbers ...int) bool {
	for i := 0; i < len(numbers)-2; i++ {
		if (numbers[i] == numbers[i+1]) && (numbers[i+1] == numbers[i+2]) {
			return true
		}
	}
	return false
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

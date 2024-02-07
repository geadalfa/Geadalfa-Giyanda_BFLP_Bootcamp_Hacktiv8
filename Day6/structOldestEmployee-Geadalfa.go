package main

import (
	"fmt"
)

type Organisasi struct {
	Nama   string
	Alamat string
}

type Employee struct {
	Nik        int
	Nama       string
	Umur       int
	Divisi     string
	Organisasi Organisasi
}

func main() {
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

	fmt.Printf("Employee with the highest age:\n%+v\n", oldestEmployee)
}

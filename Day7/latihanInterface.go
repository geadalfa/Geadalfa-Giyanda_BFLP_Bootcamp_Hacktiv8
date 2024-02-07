package main

import (
	"fmt"
)

func main() {
	var unitK kanca = unit{nama: "Alfa", alamat: "Tapos", cs: "2"}
	var kcpK kanca = kcp{nama: "Giyanda", alamat: "Cimanggis", cs: "3"}

	fmt.Println(unitK.(unit).kupedes())
	fmt.Println(kcpK.kur())

}

type kanca interface {
	kur() string
	tabungan() string
}

type unit struct {
	nama   string
	alamat string
	cs     string
}

type kcp struct {
	nama   string
	alamat string
	cs     string
}

func (k unit) kur() string {
	return "Kur Unit"
}

func (k unit) tabungan() string {
	return "Kur Tabungan"
}

func (k kcp) kur() string {
	return "Kur Tabungan"
}

func (k kcp) tabungan() string {
	return "Kur KCP"
}

func (k unit) kupedes() string {
	return k.nama + " Kupedes Unit"
}

func (k unit) simpedes() string {
	return "Simpedes Unit"
}

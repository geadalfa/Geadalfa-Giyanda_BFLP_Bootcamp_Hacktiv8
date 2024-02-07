package main

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "greenh0rnet"
	dbname   = "db-go-sql"
)

var (
	db  *sql.DB
	err error
)

func main() {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s database=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err = sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Println("Sucessfully connected to database")

	// createEmployee()
	getEmployee()
}

type Employee struct {
	ID        int
	Full_name string
	Email     string
	Age       int
	Division  string
}

func createEmployee() {
	var employee = Employee{}

	sqlStatement := `
	INSERT INTO employees (full_name, email, age, division)
	VALUES ($1, $2, $3, $4)
	Returning *
	`

	err = db.QueryRow(sqlStatement, "Anjoy Ginanjoy", "anjoy ginanjoya@mail.com", 42, "IT Cabang").
		Scan(&employee.ID, &employee.Full_name, &employee.Email, &employee.Age, &employee.Division)

	if err != nil {
		panic(err)
	}

	fmt.Printf("New Employee Data : %+v\n", employee)
}

func getEmployee() {
	var results = []Employee{}

	sqlStatement := `SELECT * FROM employees`

	rows, err := db.Query(sqlStatement)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	for rows.Next() {
		var employee = Employee{}

		err = rows.Scan(&employee.ID, &employee.Full_name, &employee.Email, &employee.Age, &employee.Division)
		if err != nil {
			panic(err)
		}

		results = append(results, employee)
	}

	fmt.Println("Employee datas: ", results)
}

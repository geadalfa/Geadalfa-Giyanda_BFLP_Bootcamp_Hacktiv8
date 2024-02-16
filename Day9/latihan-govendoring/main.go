package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"

	h8HelperRand "github.com/novalagung/gubrak/v2"
)

func main() {
	fmt.Println(h8HelperRand.RandomInt(10, 20))
	getMain()
	postMain()
}

func postMain() {
	data := map[string]interface{}{
		"title":  "Anjoy",
		"body":   "Ginanjoy",
		"userId": 1,
	}

	requestJson, err := json.Marshal(data)
	client := &http.Client{}
	if err != nil {
		log.Fatalln(err)
	}

	req, err := http.NewRequest("POST", "https://jsonplaceholder.typicode.com/posts", bytes.NewBuffer(requestJson))
	req.Header.Set("Content-Type", "application/json")
	if err != nil {
		log.Fatalln(err)
	}

	res, err := client.Do(req)
	if err != nil {
		log.Fatalln(err)
	}
	defer res.Body.Close()

	body, err := io.ReadAll(res.Body)
	if err != nil {
		log.Fatalln(err)
	}

	log.Println(string(body))
}

func getMain() {
	ID := h8HelperRand.RandomInt(1, 10)
	url := fmt.Sprintf("http://jsonplaceholder.typicode.com/posts/%v", ID)

	res, err := http.Get(url)
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println(res.Body)
	body, err := io.ReadAll(res.Body)
	if err != nil {
		log.Fatalln(err)
	}

	defer res.Body.Close()

	sb := string(body)
	log.Println(sb)
}

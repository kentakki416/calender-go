package router

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/kentakki416/calender-go/backend/repository"
)

type Response struct {
	schedules []repository.Schedule `json:"schedules"`
}

func Run() {
	// controller

	http.HandleFunc("/create-test-data", createTestData)
	http.HandleFunc("/", getSchedule)
	http.HandleFunc("/schedules/post", postSchedule)
	http.HandleFunc("/schedules/delete/", deleteSchedule)

	// port
	http.ListenAndServe(":8000", nil)
}

func createTestData(w http.ResponseWriter, r *http.Request) {
	repository.Connect()
}

func getSchedule(w http.ResponseWriter, r *http.Request) {
	// repository.Connect()

	month := r.URL.Query().Get("month")
	year := r.URL.Query().Get("year")

	m, _ := strconv.Atoi(month)
	y, _ := strconv.Atoi(year)

	isValid := y > 0 && m > 0 && m <= 12

	if !isValid {
		w.WriteHeader(400)
		return
	}
	response := Response{}
	response.schedules = repository.FindAll(m, y)
	output, _ := json.Marshal(response.schedules)

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write(output)
}

func postSchedule(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	// プリフライト用。Content-Type（application/json含む）のヘッダーのリクエストを許可する。
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	w.Header().Set("Access-Control-Allow-Methods", "POST")

	var req repository.Schedule
	err := json.NewDecoder(r.Body).Decode(&req)

	if err != nil {
		log.Println(err)
		log.Println("EOFってなんやねん")
		return
	}

	post := repository.Store(&req)
	output, _ := json.Marshal(post)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Write(output)

}

func deleteSchedule(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Methods", "DELETE")

	ids := r.URL.Path[len("/schedules/delete/"):]
	id, _ := strconv.Atoi(ids)
	repository.Delete(id)

	w.WriteHeader(http.StatusNoContent)

}

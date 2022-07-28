package repository

import (
	"database/sql"
	"log"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

var Db *sql.DB

type Schedule struct {
	Id          int       `json:"id, omitempty"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Location    string    `json:"location"`
	Date        time.Time `json:"date"`
}

type Schedules struct {
	Schedules []Schedule `json:"schedules"`
}

func Connect() {
	Db, err := sql.Open("mysql", "react-go-app:password@tcp(mysql_container)/react-go-app")

	if err != nil {
		log.Fatal(err)
		panic(err)
	}

	defer Db.Close()

}

/**
 * 初期値をデータベースに投入
 */
func Create() {
	_, err := Db.Exec("CREATE TABLE IF NOT EXISTS  schedules (id integer, title varchar(32), description varchar(255), location varchar(255), date Date)")
	if err != nil {
		log.Fatal(err)
	}
	// insert
	ins, err := Db.Prepare("INSERT INTO schedules (title, description, location, date) VALUES (?, ?, ?, ?)")
	if err != nil {
		log.Fatal(err)
	}
	ret, _ := ins.Exec("会議", "経営戦略会議", "会議室A", "2019-11-23T11:42:05.000")
	defer ins.Close()

	log.Print(ret)
}

/**
 * `year`年`month`月の予定を取得
 * @param month 月の指定
 * @param year 年の指定
 */
func FindAll(month int, year int) []Schedule {

	Db, err := sql.Open("mysql", "react-go-app:password@tcp(mysql_container)/react-go-app?parseTime=true")

	if err != nil {
		log.Fatal(err)
		panic(err)
	}

	defer Db.Close()
	// 検索するdateの条件を作成
	startDay := time.Date(year, time.Month(month), 1, 0, 0, 0, 0, time.UTC)
	tStartDay := startDay.Format("2006-01-02")
	lastDay := time.Date(year, time.Month(month+1), 1, 0, 0, 0, 0, time.Local)
	lastDay = lastDay.AddDate(0, 0, -1)
	tLastDay := lastDay.Format("2006-01-02")

	rows, err := Db.Query("SELECT * FROM schedules WHERE date BETWEEN ? AND ?", tStartDay, tLastDay)
	if err != nil {
		log.Fatalf("getRows db.Query error err: %v", err)
	}

	schedules := []Schedule{}
	for rows.Next() {
		s := Schedule{}
		err := rows.Scan(&s.Id, &s.Title, &s.Description, &s.Location, &s.Date)
		if err != nil {
			log.Fatalf("getRows rows.Scan error err:%v", err)
		}
		schedules = append(schedules, s)
	}
	return schedules
}

/**
 * schedule
 */
func Store(Sche *Schedule) *Schedule {
	Db, err := sql.Open("mysql", "react-go-app:password@tcp(mysql_container)/react-go-app?parseTime=true")

	if err != nil {
		log.Fatal(err)
		panic(err)
	}

	defer Db.Close()

	res, err := Db.Exec("INSERT INTO schedules (title, description, location, date) VALUES (?, ?, ?,?)",
		Sche.Title, Sche.Description, Sche.Location, Sche.Date.Format("2006-01-02"))

	if err != nil {
		log.Println(err)
	}

	id, _ := res.LastInsertId()

	s := &Schedule{}
	err = Db.QueryRow("SELECT * FROM schedules WHERE id = ?", id).Scan(&s.Id, &s.Title, &s.Description, &s.Location, &s.Date)

	if err != nil {
		log.Println(err)
	}

	return s

}

/**
 * データを一件削除する関数
 * @param id int
 */
func Delete(id int) {
	Db, err := sql.Open("mysql", "react-go-app:password@tcp(mysql_container)/react-go-app?parseTime=true")

	if err != nil {
		log.Fatal(err)
		panic(err)
	}

	defer Db.Close()

	_, err = Db.Exec("DELETE FROM schedules WHERE id = ? ", id)

	if err != nil {
		log.Println(err)
	}

}

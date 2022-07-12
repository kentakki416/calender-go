import styles  from "./style.module.css";
import React from "react";

export  const SmallCalendar= () => {
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    const calendar = [
        "29",
        "30",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "1",
        "2"
      ];
    return (
        <div className={styles.smallCalentar}>
            <header className={styles.header}>
                <p className={styles.title}>
                    {/* TODO: 動的に表示*/}
                    2022年7月
                </p>
                <button className={styles.button}>
                    <div className={styles.arrowLeft}></div>
                </button>
                <button className={styles.button}>
                    <div className={styles.arrowRight}></div>
                </button>
            </header>
            <div className={styles.grid}>
                {days.map((day, i) => (
                    <span key={i} className={styles.smallWeek}>
                        {day}
                    </span>
                ))}
                {calendar.map((c, index) => (
                    <button key={index} className={styles.smallCal}>
                        {/* daysオブジェクトから文字列にフォーマット */}
                        <span className={styles.sp}>{c}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
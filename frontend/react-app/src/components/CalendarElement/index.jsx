import React from "react";

import styles from "./style.module.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSameDay, getMonth } from "../../services/calendar";
import Schedule from "../Schedule";

const CalendarElement = ({ day, month, schedules, ...props }) => {

    const today = dayjs();
    // 月の最初だけ月情報をつける
    const format = isFirstDay(day) ? "M月D月": "D";

    // 当日かどうか判断
    const isToday = isSameDay(day, today);

    // 該当の月以外をグレーダウン
    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day, currentMonth);
    const textColor = isCurrentMonth ? "textPrimary": "textSecondary";

    return (
        <div className={styles.element}>
            <Typography 
                className={styles.date}
                color={textColor}
                align="center"
                variant="caption"
                component="div"
            >
                <span className={isToday ? styles.today : ""}>
                    {day.format(format)}
                </span>
            </Typography>
            <div className={styles.schedules}>
                {schedules.map(e => (
                    <Schedule key={e.id} schedule={e} {...props}/>
                ))}
            </div>
        </div>
    );
};

export default CalendarElement;
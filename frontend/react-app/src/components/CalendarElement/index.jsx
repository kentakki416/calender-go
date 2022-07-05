import React from "react";

import styles from "./style.module.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSameDay, getMonth } from "../../services/calendar"

const CalendarElement = ({ day, month }) => {

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
        </div>
    );
};

export default CalendarElement;
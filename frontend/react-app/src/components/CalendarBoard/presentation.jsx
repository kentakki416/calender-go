import React from "react";
import { ImageList, Typography } from "@material-ui/core";

import styles from "./style.module.css";
import CalendarElement from "../CalendarElement";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ calendar, month }) => {
  console.log(calendar);
    return (
        <div className={styles.container}>
          <ImageList className={styles.grid} cols={7} gap={0} rowHeight="auto">
            {days.map(d => (
              <li key ={d}>
                <Typography
                  className={styles.days}
                  color="textSecondary"
                  align="center"
                  variant="caption"
                  component="div"
                >
                  {d}
                </Typography>
              </li>
            ))}
            {calendar.map((c, index) => (
              <li key={index}>
                  {/* daysオブジェクトから文字列にフォーマット */}
                  <CalendarElement day={c} month={month}/>
              </li>
            ))}
          </ImageList>
        </div>
      );
};

export default CalendarBoard;
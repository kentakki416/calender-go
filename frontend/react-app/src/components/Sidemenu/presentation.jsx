import React from "react";
import { SmallCalendar } from "../SmallCalendar/presentaion";
import styles from "./style.module.css";


const Sidemenu = ({sidemenu: {active}}) => {
    console.log(active);
    return (
        <div className={active?styles["sidemenu-active"]:styles["sidemenu"]}>
                <button className={styles.createEventButton}>
                    <img src="/images/plus.png" className={styles.img} alt="plus" />
                    <span className={styles.span}>Create</span>
                </button>
                <SmallCalendar/>
        </div>
    )
}
export default Sidemenu;
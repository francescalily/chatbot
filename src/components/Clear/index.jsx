//UI element that will reset/clear the conversation. Allowing users with a quick way to start a new interaction without navigating away from the current interface
import React from "react";
import styles from "./Clear.module.css";


export default function Clear({ onClick }) {
    return (
        <button className={styles.wrapper} onClick={onClick}>
            Clear
        </button>
    )
}

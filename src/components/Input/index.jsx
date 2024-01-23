import React from "react";
import styles from "./style.module.css"

export default function Input({ value, onChange, onClick }) {
    return (
        <div className={styles.wrapper}>
            <input
            className={styles.text}
            placeholder="Ask a question here"
            value={value}
            onChange={onChange}
            />
            <button className={styles.btn} onClick={onClick}>
                Ask
            </button>
        </div>
    )
}
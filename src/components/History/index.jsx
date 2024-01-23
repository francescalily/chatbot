import React from "react";
 import styles from "./style.module.css"

export default function History({ question, onClick }) {
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <p>{question.substring(0,15)}...</p>
        </div>
    )
}

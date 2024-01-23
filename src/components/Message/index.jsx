//this component is to display user prompt and API responses
import React from "react";
import ai from '../../assets/icons/ai.png'
import user from '../../assets/icons/user.svg'
import styles from './style.module.css'

export default function Message({ role, content }) {
    return (
        <div className={styles.wrapper}>
            <div>
                <img
                src={role === 'assistant' ? bot : user} 
                className={styles.avatar} 
                alt="profile avatar" 
                />
            </div>
            <div>
                <p>{content}</p>
            </div>
        </div>
    )
}

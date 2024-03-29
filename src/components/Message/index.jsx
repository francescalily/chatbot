//this component is to display user prompt and API responses
import React from "react";
import ai from '../../assets/icons/ai.png'
import user from '../../assets/icons/user.svg'
import styles from './style.module.css'

export default function Message({ role, content }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.roleText}>
                <p style={{ color: 'black', fontWeight: 'bold' }}>{role === 'assistant' ? "AI" : "You"}</p>
            </div>
            <div>
                <p style={{ color: 'grey' }}>{content}</p>
            </div>
        </div>
    )
}

{/* <img
src={role === 'assistant' ? ai : user} 
className={styles.avatar} 
alt="profile avatar" 
/> */}

import styles from './todoItem.module.css'
import icn from "../../../public/assets/cross.png"
import Image from "next/image";
import { useState } from 'react';

export default function TodoItem({content, onContentClick, onDelete}){

    const handleSubmit= ()=> {
        onDelete(content.id)  

    }
    return(
        
        <div className={styles.item}>
            <section className={`${styles.section} ${styles["section--checkbox"]}`}  >
                <div className={styles.checkbox} onClick={handleSubmit}>

                </div>
            </section>
            <section className={`${styles.section} ${styles["section--text"]}`}>
                <div className={styles["container-text"]} onClick={onContentClick}>
                    <p className={styles.text}>
                        {content.todo}
                    </p>
                </div>
            </section>
            <section className={`${styles.section} ${styles["section--button"]}`}>
                <div className={styles.button } onClick={handleSubmit}>
                    <Image src={icn} alt="X" className={styles["icon-btn"]}/>
                </div>
            </section>
        </div>
    )
}
'use client'
import styles from './button.module.css'
import TodoItem from '../todoItem/todoItem'

export default function Button({text, onBtnClick}){
    return(
        <>
            <button className={styles.button} onClick={onBtnClick}>{text}</button>
        </>
    )
}
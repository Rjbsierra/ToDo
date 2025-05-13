import styles from "./todoForm.module.css";
import Image from "next/image";
import icn from "../../../public/assets/cross.svg";
import { useState } from "react";
export default function TodoForm({ onClose, onFormSubmit, type, value}) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    

    if (type === "add") {
          onFormSubmit(inputValue);

    } else {
          onFormSubmit({id: value.id ,todo: inputValue});

    }
    setInputValue("");
    onClose();
  };

  return (
    <form className={styles.body} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <section className={`${styles.section} ${styles["section--head"]}`}>
          <div className={styles["exit-btn"]} onClick={onClose}>
            <Image src={icn} alt="X" className={styles["input-icon"]} />
          </div>
        </section>
        <section className={`${styles.section} ${styles["section--body"]}`}>
          <p className={styles.text}>
            {type === "add" ? "What's you To-Do?" : "Rename your to-do?"}
          </p>
          <div className={styles["container-input"]}>
            <div className={styles["container-icon"]}></div>
            {type === "add"?
               <input
              className={styles.input}
              type="text"
              name=""
              id=""
              placeholder={"Enter your todo"}
              onChange={(e) => setInputValue(e.target.value)}
            />
            :
               <input
              className={styles.input}
              type="text"
              name=""
              id=""
              placeholder={value.todo}
              onChange={(e) => setInputValue(e.target.value)}
            />
            }
         
          </div>
        </section>
        <section className={`${styles.section} ${styles["section--bottom"]}`}>
          <input
            type="submit"
            className={styles["enter-btn"]}
            value="Confirm"
            disabled={!inputValue.trim() || /[+\-*/=();{}]/.test(inputValue)}
          />
        </section>
      </div>
    </form>
  );
}

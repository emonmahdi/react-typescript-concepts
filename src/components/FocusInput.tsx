import { useRef } from "react";
import styles from "../styles/FocusInput.module.css";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  //   console.log(inputRef.current);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Focus Input</h2>

      <div className={styles.formRow}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter your text.."
          className={styles.input}
        />
        <button onClick={handleClick} type="button" className={styles.button}>
          🔍 Focus Input
        </button>
      </div>
    </div>
  );
};

export default FocusInput;

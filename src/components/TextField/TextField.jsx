import { forwardRef, useState } from "react";
import styles from "./TextField.module.scss";

const TextField = forwardRef((props, ref) => {
  const [isFocus, setIsFocus] = useState(false);
  const { value, labelText, onChangeHandler } = props;
  return (
    <article
      className={`${styles["textfield-cont"]} ${isFocus && styles.focused}`}
      onFocus={() => {
        setIsFocus(true);
      }}
      onBlur={() => {
        if (value.length) {
          setIsFocus(true);
        } else if (value.length === 0) {
          setIsFocus(false);
        }
      }}
    >
      <span
        className={`${styles["textfield-label"]} ${isFocus && styles.focused}`}
      >
        {labelText}
      </span>
      <textarea
        ref={ref}
        className={styles["textfield-input"]}
        onChange={onChangeHandler}
      >
        {value}
      </textarea>
    </article>
  );
});

TextField.displayName = "TextField";
export default TextField;

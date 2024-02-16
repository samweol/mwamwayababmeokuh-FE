import { forwardRef, useState } from "react";
import styles from "./TextField.module.scss";

const TextField = forwardRef((props, ref) => {
  const [isFocus, setIsFocus] = useState(false);
  const { value, defaultValue, labelText, onChangeHandler } = props;
  return (
    <article
      className={`${styles["textfield-cont"]} ${
        (isFocus || defaultValue) && styles.focused
      }`}
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
        className={`${styles["textfield-label"]} ${
          (isFocus || defaultValue) && styles.focused
        }`}
      >
        {labelText}
      </span>
      <textarea
        defaultValue={defaultValue}
        value={value}
        ref={ref}
        className={styles["textfield-input"]}
        onChange={onChangeHandler}
      ></textarea>
    </article>
  );
});

TextField.displayName = "TextField";
export default TextField;

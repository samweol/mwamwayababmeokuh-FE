import { forwardRef, useState } from "react";
import styles from "./Input.module.scss";

const Input = forwardRef((props, ref) => {
  const [isFocus, setIsFocus] = useState(false);
  const { value, labelText, defaultValue, onChangeHandler, type, alert, flex } =
    props;

  return (
    <article className={` ${styles["input-article"]} ${flex && styles.flex}`}>
      <div
        className={` ${styles["input-cont"]} ${
          (isFocus || defaultValue) && styles.focused
        } ${flex && styles.flex}`}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          if (value?.length) {
            setIsFocus(true);
          } else if (value?.length === 0) {
            setIsFocus(false);
          }
        }}
      >
        <label htmlFor="input" className={styles["input-label"]}>
          {labelText}
        </label>
        <input
          ref={ref}
          defaultValue={defaultValue}
          id="input"
          type={type ? type : "text"}
          onChange={onChangeHandler}
        />
      </div>
      {alert && <strong className={styles.alert}>{alert}</strong>}
    </article>
  );
});

Input.displayName = "Input";

export default Input;

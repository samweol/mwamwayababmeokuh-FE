import { forwardRef, useState } from "react";
import styles from "./InputBox.module.scss";
const InputBox = forwardRef((props, ref) => {
  const { onChangeHandler } = props;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div>
      <label htmlFor="input-box"></label>
      <input
        onChange={onChangeHandler}
        maxLength={1}
        ref={ref}
        id="input-box"
        className={`${styles["input-box"]} ${isFocused && styles.focused}`}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
    </div>
  );
});

InputBox.displayName = "InputBox";

export default InputBox;

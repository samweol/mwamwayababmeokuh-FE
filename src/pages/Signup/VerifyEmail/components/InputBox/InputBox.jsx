import { forwardRef, useState } from "react";
import "./InputBox.scss";
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
        className={`input-box ${isFocused && "focused"}`}
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

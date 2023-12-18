import { forwardRef, useState } from "react";
import "./Input.scss";

const Input = forwardRef((props, ref) => {
  const [isFocus, setIsFocus] = useState();
  const { value, labelText, onChangeHandler, type } = props;

  return (
    <div
      className={`input-cont ${isFocus && "focused"}`}
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
      <label htmlFor="input" className="input-label">
        {labelText}
      </label>
      <input
        ref={ref}
        id="input"
        type={type ? type : "text"}
        onChange={onChangeHandler}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;

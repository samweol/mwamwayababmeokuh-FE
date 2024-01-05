import { forwardRef, useState } from "react";
import "./Input.scss";

const Input = forwardRef((props, ref) => {
  const [isFocus, setIsFocus] = useState(false);
  const { value, labelText, onChangeHandler, type, alert, flex } = props;

  return (
    <article className={`input-article ${flex && "flex"}`}>
      <div
        className={`input-cont ${isFocus && "focused"} ${flex && "flex"}`}
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
      {alert && <strong className="alert">{alert}</strong>}
    </article>
  );
});

Input.displayName = "Input";

export default Input;

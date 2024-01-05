import { forwardRef, useState } from "react";
import "./TextField.scss";

const TextField = forwardRef((props, ref) => {
  const [isFocus, setIsFocus] = useState(false);
  const { value, labelText, onChangeHandler } = props;
  return (
    <article
      className={`textfield-cont ${isFocus && "focused"}`}
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
      <span className={`textfield-label ${isFocus && "focused"}`}>
        {labelText}
      </span>
      <textarea
        ref={ref}
        className="textfield-input"
        onChange={onChangeHandler}
      >
        {value}
      </textarea>
    </article>
  );
});

TextField.displayName = "TextField";
export default TextField;

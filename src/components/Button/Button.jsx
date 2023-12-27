import "./Button.scss";

export default function Button(props) {
  const { children, inversed, disabled, bottomFixed, size, onClickHandler } =
    props;
  return (
    <button
      disabled={disabled}
      className={`btn ${inversed && "inversed"} ${
        bottomFixed && "btn-bottom-fixed"
      } ${disabled && "disabled"} ${size ? size : "m"}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

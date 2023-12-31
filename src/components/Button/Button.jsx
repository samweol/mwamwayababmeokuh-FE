import "./Button.scss";

export default function Button(props) {
  const {
    children,
    inversed,
    disabled,
    bottomFixed,
    size,
    flex,
    onClickHandler,
  } = props;
  return (
    <button
      disabled={disabled}
      className={`btn ${inversed && "inversed"} ${
        bottomFixed && "btn-bottom-fixed"
      } ${disabled && "disabled"} ${size ? size : "m"} ${flex && "flex"}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

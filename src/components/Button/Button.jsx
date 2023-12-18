import "./Button.scss";

export default function Button(props) {
  const { children, inversed, disabled, bottomFixed, onClickHandler } = props;
  return (
    <button
      disabled={disabled}
      className={`btn ${inversed && "inversed"} ${
        bottomFixed && "btn-bottom-fixed"
      }`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

import "./Button.scss";

export default function Button(props) {
  const { children, inversed, onClickHandler } = props;
  return (
    <button
      className={`btn ${inversed && "inversed"}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

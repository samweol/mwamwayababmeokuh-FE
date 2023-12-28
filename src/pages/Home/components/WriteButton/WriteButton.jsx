import "./WriteButton.scss";

export default function WriteButton(props) {
  const { onClickHandler } = props;
  return (
    <button className="write-button" onClick={onClickHandler}>
      글쓰기
    </button>
  );
}

import "./WriteButton.scss";
import useNavigatePage from "../../../../hooks/useNavigatePage";

export default function WriteButton() {
  const { navigatePage } = useNavigatePage();
  return (
    <button
      className="write-button"
      onClick={() => {
        navigatePage("/post/write");
      }}
    >
      글쓰기
    </button>
  );
}

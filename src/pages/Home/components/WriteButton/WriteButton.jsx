import styles from "./WriteButton.module.scss";
import useNavigatePage from "../../../../hooks/useNavigatePage";
import WriteIcon from "../../../../assets/images/write.png";

export default function WriteButton() {
  const { navigatePage } = useNavigatePage();
  return (
    <button
      className={styles["write-button"]}
      onClick={() => {
        navigatePage("/post/write");
      }}
    >
      <img src={WriteIcon} alt="글쓰기 아이콘" />
    </button>
  );
}

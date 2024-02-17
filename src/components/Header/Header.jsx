import styles from "./Header.module.scss";
import Button from "../../components/Button/Button";
import useNavigatePage from "../../hooks/useNavigatePage";
import BackArrow from "../../assets/images/icon-arrow-left.png";
import MoreIcon from "../../assets/images/more-vertical.png";
export default function Header(props) {
  const { title, buttonText, moreBtn, onClickHandler } = props;
  const { navigatePage } = useNavigatePage();
  return (
    <header className={styles["basic-header"]}>
      <button
        className={styles["header-back-btn"]}
        onClick={() => {
          navigatePage(-1);
        }}
      >
        <img src={BackArrow} alt="뒤로가기 버튼" />
      </button>
      <h1 className={styles["header-title"]}>{title}</h1>
      {buttonText ? (
        <Button size="s" onClickHandler={onClickHandler}>
          {buttonText}
        </Button>
      ) : moreBtn ? (
        <button onClick={onClickHandler}>
          <img src={MoreIcon} />
        </button>
      ) : null}
    </header>
  );
}

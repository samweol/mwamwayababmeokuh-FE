import "./Header.scss";
import Button from "../../components/Button/Button";
import useNavigatePage from "../../hooks/useNavigatePage";
import BackArrow from "../../assets/images/icon-arrow-left.png";
export default function Header(props) {
  const { title, buttonText, onClickHandler } = props;
  const { navigatePage } = useNavigatePage();
  return (
    <header className="basic-header">
      <button
        className="header-back-btn"
        onClick={() => {
          navigatePage(-1);
        }}
      >
        <img src={BackArrow} alt="뒤로가기 버튼" />
      </button>
      <h1 className="header-title">{title}</h1>
      {buttonText && (
        <Button size="s" onClickHandler={onClickHandler}>
          {buttonText}
        </Button>
      )}
    </header>
  );
}

import "./Header.scss";
import Button from "../../components/Button/Button";
export default function Header(props) {
  const { title, buttonText, onClickHandler } = props;
  return (
    <header className="basic-header">
      <button className="header-back-btn">👈</button>
      <h1 className="header-title">{title}</h1>
      <Button size="s" onClickHandler={onClickHandler}>
        {buttonText}
      </Button>
    </header>
  );
}

import "./SearchHeader.scss";
import BackArrow from "../../assets/images/icon-arrow-left.png";
export default function SearchHeader() {
  return (
    <header className="searchheader-cont">
      <button className="header-back-btn">
        <img src={BackArrow} alt="뒤로가기 아이콘" />
      </button>
      <div className="searchbar-cont">
        <label htmlFor="" className="sr-only"></label>
        <input type="text" />
      </div>
    </header>
  );
}

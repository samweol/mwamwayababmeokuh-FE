import styles from "./SearchHeader.module.scss";
import BackArrow from "../../assets/images/icon-arrow-left.png";
import SearchIcon from "../../assets/images/search.png";
export default function SearchHeader(props) {
  const { keyword, onChangeHandler, onBackBtnHandler } = props;
  return (
    <header className={styles["searchheader-cont"]}>
      <button className={styles["header-back-btn"]} onClick={onBackBtnHandler}>
        <img src={BackArrow} alt="뒤로가기 아이콘" />
      </button>
      <div className={styles["searchbar-cont"]}>
        <img
          className={styles.searchIcon}
          src={SearchIcon}
          alt="검색하기 아이콘"
        />
        <label htmlFor="search-input" className="sr-only">
          검색
        </label>
        <input
          onChange={onChangeHandler}
          value={keyword}
          placeholder="Search"
          className={styles["search-input"]}
          id="search-input"
          type="text"
        />
      </div>
    </header>
  );
}

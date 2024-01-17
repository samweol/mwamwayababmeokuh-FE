import styles from "./SearchBar.module.scss";
export default function SearchBar(props) {
  const { keyword, onChangeHandler } = props;
  return (
    <div className={styles["searchbar-cont"]}>
      <input
        className={styles["searchbar-input"]}
        type="text"
        onChange={onChangeHandler}
      />
      <button
        className={styles["searchbar-btn"]}
        onClick={() => {
          console.log(keyword);
        }}
      >
        🔍
      </button>
    </div>
  );
}

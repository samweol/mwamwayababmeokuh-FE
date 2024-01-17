import styles from "./HashTagInput.module.scss";

export default function HashTagInput(props) {
  const { value, searchResultList, onAddHashTag, onChangeHandler } = props;
  return (
    <div className={styles["hashtag-cont"]}>
      <label className={styles["hashtag-label"]} htmlFor="hashtag">
        HashTag
      </label>
      <div className={styles["hashtag-input-cont"]}>
        <input
          value={value}
          className={styles["hashtag-input"]}
          type="text"
          id="hashtag"
          onChange={onChangeHandler}
        />
        <button onClick={onAddHashTag}>+</button>
      </div>

      <ul className={styles["search-list"]}>
        <li className={styles["search-item"]}>#뫄뫄야_밥먹자</li>
      </ul>
    </div>
  );
}

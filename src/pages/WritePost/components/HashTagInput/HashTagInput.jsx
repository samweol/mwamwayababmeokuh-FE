import styles from "./HashTagInput.module.scss";

export default function HashTagInput(props) {
  const { value, searchResultList, onAddHashTag, onChangeHandler } = props;

  console.log(searchResultList);

  const searchList = searchResultList?.map((item) => (
    <li className={styles["search-item"]}>{item}</li>
  ));
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

      <ul className={styles["search-list"]}>{searchList}</ul>
    </div>
  );
}

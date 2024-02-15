import styles from "./HashTagInput.module.scss";

export default function HashTagInput(props) {
  const {
    value,
    searchResultList,
    onAddHashTag,
    onChangeHandler,
    onHashTagListClickHandler,
  } = props;

  const searchList = searchResultList?.map((item) => (
    <li key={item.hid} className={styles["search-item"]}>
      <button
        onClick={() => {
          onHashTagListClickHandler(item.hashtag);
        }}
      >
        {item.hashtag}
      </button>
    </li>
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

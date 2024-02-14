import styles from "./SelectItem.module.scss";
export default function SelectItem(props) {
  const { artist, onSelectHandler } = props;
  return (
    <li className={styles["select-item"]}>
      <button
        className={styles["select-item-btn"]}
        onClick={() => {
          onSelectHandler();
        }}
      >
        {artist}
      </button>
    </li>
  );
}

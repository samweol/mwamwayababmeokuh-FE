import { useState } from "react";
import styles from "./SelectBox.module.scss";
import SelectItem from "./SelectItem";

export default function SelectBox(props) {
  const [isActiveSelectBox, setIsActiveSelectBox] = useState(false);
  const { selectList, selected, onSelectHandler } = props;

  // 더미데이터
  const artist = ["레드벨벳", "루시", "르세라핌", "뉴진스", "데이식스"];

  const selectItemList = selectList?.map((item) => (
    <SelectItem
      key={item}
      artist={item}
      onSelectHandler={() => {
        onSelectHandler(item);
        setIsActiveSelectBox(false);
      }}
    />
  ));

  const onClickSelectButton = () => {
    setIsActiveSelectBox(!isActiveSelectBox);
  };
  return (
    <div className={styles["select-cont"]}>
      <button
        className={`${styles["select-btn"]} ${
          selected.length && styles.selected
        }`}
        onClick={onClickSelectButton}
      >
        {selected === "" ? "아티스트" : selected}
      </button>
      <ul
        className={` ${styles["select-list"]} ${
          isActiveSelectBox && styles.active
        }`}
      >
        {selectItemList}
      </ul>
    </div>
  );
}

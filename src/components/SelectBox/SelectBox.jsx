import { useState } from "react";
import styles from "./SelectBox.module.scss";
import SelectItem from "./SelectItem";

export default function SelectBox(props) {
  const [isActiveSelectBox, setIsActiveSelectBox] = useState(false);
  const { selectList, selected, onSelectHandler } = props;

  const selectItemList = selectList?.map((item) => (
    <SelectItem
      key={item.aid}
      artist={item.name}
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
          selected.name.length && styles.selected
        }`}
        onClick={onClickSelectButton}
      >
        {selected.name === "" ? "아티스트" : selected.name}
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

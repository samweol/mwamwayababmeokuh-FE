import { useState } from "react";
import "./SelectBox.scss";
import SelectItem from "./SelectItem";

export default function SelectBox(props) {
  const [isActiveSelectBox, setIsActiveSelectBox] = useState(false);
  const { selected, onSelectHandler } = props;

  // 더미데이터
  const artist = ["레드벨벳", "루시", "르세라핌", "뉴진스", "데이식스"];

  const selectItemList = artist.map((item) => (
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
    <div className="select-cont">
      <button
        className={`select-btn ${selected.length && "selected"}`}
        onClick={onClickSelectButton}
      >
        {selected === "" ? "아티스트" : selected}
      </button>
      <ul className={`select-list ${isActiveSelectBox && "active"}`}>
        {selectItemList}
      </ul>
    </div>
  );
}

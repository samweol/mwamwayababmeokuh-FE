import React from "react";
import styles from "./ArtistList.module.scss";

export default function ArtisList(props) {
  const { artistList, selected, onClickHandler } = props;

  const artistListComponent = artistList?.map((item) => (
    <li
      key={item.aid}
      className={`${styles.artistItem} ${
        selected?.includes(item) && styles.selected
      }`}
    >
      <button
        onClick={() => {
          onClickHandler(item);
        }}
      >
        {item.name}
      </button>
    </li>
  ));
  return <ul className={styles.artistList}>{artistListComponent}</ul>;
}

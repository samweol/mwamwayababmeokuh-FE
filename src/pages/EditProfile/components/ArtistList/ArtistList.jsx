import React from "react";
import styles from "./ArtistList.module.scss";
import Close from "../../../../assets/images/close.png";

export default function ArtistList(props) {
  const { artist, onDeleteHandler } = props;
  return (
    <ul className={styles.artistList}>
      {artist.map((item) => (
        <li className={styles.artistItem} key={item.aid}>
          {item.name}
          <button
            onClick={() => {
              onDeleteHandler(item.aid);
            }}
          >
            <img src={Close} alt="삭제 아이콘" />
          </button>
        </li>
      ))}
    </ul>
  );
}

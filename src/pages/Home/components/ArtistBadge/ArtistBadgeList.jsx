import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../recoil/atom";
import ArtistBadge from "./ArtistBadge";
import styles from "./ArtistBadge.module.scss";

export default function ArtistBadgeList() {
  const user = useRecoilValue(userState);
  const artistBadgeList = user.artistDTOList.map((item) => (
    <ArtistBadge key={item.aid} artist={item.name} />
  ));
  return <ul className={styles.artistBadgeList}>{artistBadgeList}</ul>;
}

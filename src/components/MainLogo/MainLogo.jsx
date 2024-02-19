import React from "react";
import Main from "../../assets/logo/main.png";
import styles from "./MainLogo.module.scss";
export default function MainLogo() {
  return (
    <a href="/">
      <img className={styles.main} src={Main} alt="메인 로고 이미지" />
    </a>
  );
}

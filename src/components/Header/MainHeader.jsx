import styles from "./MainHeader.module.scss";
import Main from "../../assets/logo/main.png";
export default function MainHeader() {
  return (
    <header className={styles["mainheader-cont"]}>
      <h1 className={styles["mainheader-logo"]}>
        <img
          className={styles.mainheaderLogo}
          src={Main}
          alt="메인로고 아이콘"
        />
      </h1>
    </header>
  );
}

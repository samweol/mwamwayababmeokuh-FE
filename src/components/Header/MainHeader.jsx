import styles from "./MainHeader.module.scss";
export default function MainHeader() {
  return (
    <header className={styles["mainheader-cont"]}>
      <h1 className={styles["mainheader-logo"]}>메인로고</h1>
    </header>
  );
}

import MainLogo from "../MainLogo/MainLogo";
import styles from "./PageMainHeader.module.scss";

export default function PageMainHeader(props) {
  const { children } = props;
  return (
    <h1 className={styles["signin-header"]}>
      <div>
        <MainLogo />
        {children}
      </div>
    </h1>
  );
}

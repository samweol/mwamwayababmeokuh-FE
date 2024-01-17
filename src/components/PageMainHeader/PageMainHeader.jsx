import styles from "./PageMainHeader.module.scss";

export default function PageMainHeader(props) {
  const { children } = props;
  return <h1 className={styles["signin-header"]}>{children}</h1>;
}

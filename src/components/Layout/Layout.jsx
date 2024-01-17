import styles from "./Layout.module.scss";

export default function Layout(props) {
  const { children } = props;
  return <section className={styles.layout}>{children}</section>;
}

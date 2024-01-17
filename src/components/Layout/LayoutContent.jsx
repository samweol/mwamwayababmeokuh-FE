import styles from "./LayoutContent.module.scss";
export default function LayoutContent(props) {
  const { children, padding } = props;
  return (
    <section
      className={` ${styles["layout-content"]} ${padding && styles.padding}`}
    >
      {children}
    </section>
  );
}

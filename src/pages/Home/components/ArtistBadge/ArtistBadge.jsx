import styles from "./ArtistBadge.module.scss";
export default function ArtistBadge(props) {
  const { artist } = props;
  return (
    <section className={styles["badge-cont"]}>
      <button className={styles.badge}>{artist}</button>
    </section>
  );
}

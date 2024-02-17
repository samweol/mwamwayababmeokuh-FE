import styles from "./ArtistBadge.module.scss";
export default function ArtistBadge(props) {
  const { artist, selected, onClickHandler } = props;
  return (
    <section className={styles["badge-cont"]}>
      <button
        className={`${styles.badge} ${selected && styles.selected}`}
        onClick={() => {
          onClickHandler(artist);
        }}
      >
        {artist.name}
      </button>
    </section>
  );
}
